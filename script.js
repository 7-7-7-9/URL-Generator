document.getElementById('generate-button').addEventListener('click', function() {
    const url = document.getElementById('url-input').value;
    if (url) {
   const newWindow = window.open('about:blank', '_blank');
if (newWindow) {
    // Ensure the head exists!
    if (!newWindow.document.head) {
        const head = newWindow.document.createElement('head');
        newWindow.document.documentElement.appendChild(head);
    }
    
    // Set a blank favicon
    const link = newWindow.document.createElement('link');
    link.rel = 'icon';
    link.href = 'https://raw.githubusercontent.com/chompypotato/carb0n/refs/heads/main/go/blank.ico';
    newWindow.document.head.appendChild(link);

    // Set a blank/hidden title
    newWindow.document.title = "\u200B"; // zero-width space

    // Add a very simple style to 'force' reflow
    newWindow.document.body.style.margin = '0';

    // Add iframe
    const iframe = newWindow.document.createElement('iframe');
    iframe.src = url; // the url you want to cloak
    iframe.style.width = "100vw";
    iframe.style.height = "100vh";
    iframe.style.border = "none";
    newWindow.document.body.appendChild(iframe);

    // Sometimes helps:
    newWindow.document.close();
} else {
    alert("Please allow popups.");
}


});
