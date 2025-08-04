// external-script.js

// Base64 1x1 transparent favicon data URI
const BLANK_ICON = "data:image/x-icon;base64,AAABAAEAEBAAAAAAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAGAAAAAAAQAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAH/4AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAH/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA===";

function openCloakedWindow(url) {
  const pop = window.open('about:blank', '_blank');
  if (!pop) {
    alert("Please allow popups for this site.");
    return;
  }

  pop.document.write(`
    <html>
      <head>
        <title>\u200B</title>
        <link rel="icon" href="${BLANK_ICON}">
      </head>
      <body style="margin:0; background:#0f2027; display:flex; align-items:center; justify-content:center; height:100vh;">
        <iframe src="${url.replace(/"/g, '&quot;')}" style="border:none; width:100vw; height:100vh;"></iframe>
      </body>
    </html>
  `);
  pop.document.close();
}

// Event listener for your button, replace IDs if needed
document.getElementById('generate-button').addEventListener('click', function() {
  let inputUrl = document.getElementById('url-input').value.trim();
  if (!inputUrl) {
    alert("Please enter a valid URL.");
    return;
  }

  // Optional: ensure URL starts with http or https
  if (!/^https?:\/\//i.test(inputUrl)) {
    inputUrl = 'https://' + inputUrl;
  }

  openCloakedWindow(inputUrl);
});
