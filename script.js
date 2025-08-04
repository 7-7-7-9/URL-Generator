// external-script.js

// Base64 1x1 transparent favicon data URI
const BLANK_ICON = 
  "data:image/x-icon;base64,AAABAAEAEBAAAAAAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAGAAAAAAAQAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAH/4AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAH/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA===";

/**
 * Opens a new popup window with a cloaked tab:
 * - blank (zero-width) title
 * - transparent favicon (so it's invisible)
 * - loads the given URL inside an iframe that fills the page
 * 
 * @param {string} url The URL to embed inside the popup iframe.
 */
function openCloakedWindow(url) {
  const pop = window.open('about:blank', '_blank');
  if (!pop) {
    alert("Please allow popups for this site.");
    return;
  }

  // Compose the full HTML with title and favicon link in the head
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

// Attach event listener to button with id 'generate-button'
document.getElementById('generate-button').addEventListener('click', function() {
  let inputUrl = document.getElementById('url-input').value.trim();
  if (!inputUrl) {
    alert("Please enter a valid URL.");
    return;
  }

  // Ensure URL starts with http:// or https:// to avoid iframe src errors
  if (!/^https?:\/\//i.test(inputUrl)) {
    inputUrl = 'https://' + inputUrl;
  }

  openCloakedWindow(inputUrl);
});
