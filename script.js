document.getElementById('generate-button').addEventListener('click', function() {
    const url = document.getElementById('url-input').value;
    if (!url) {
        alert("Please enter a valid URL.");
        return;
    }

    const BLANK_ICON = "data:image/x-icon;base64,AAABAAEAEBAAAAAAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAGAAAAAAAQAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAH/4AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAH/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA===";

    const newWindow = window.open('about:blank', '_blank');
    if (!newWindow) {
        alert("Please allow popups.");
        return;
    }

    // Ensure <head> exists
    if (!newWindow.document.head) {
        const head = newWindow.document.createElement('head');
        newWindow.document.documentElement.insertBefore(head, newWindow.document.body);
    }

    // Set favicon using data URI
    const link = newWindow.document.createElement('link');
    link.rel = 'icon';
    link.href = BLANK_ICON;
    newWindow.document.head.appendChild(link);

    // Set blank title
    newWindow.document.title = "\u200B";

    // Set body margin before appending iframe
    newWindow.document.body.style.margin = '0';

    // Create iframe with requested URL
    const iframe = newWindow.document.createElement('iframe');
    iframe.src = url;
    iframe.style.width = "100vw";
    iframe.style.height = "100vh";
    iframe.style.border = "none";
    newWindow.document.body.appendChild(iframe);

    // Close the document stream (finalize DOM changes)
    newWindow.document.close();
});
