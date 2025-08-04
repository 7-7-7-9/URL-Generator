document.getElementById('generate-button').addEventListener('click', function() {
    const url = document.getElementById('url-input').value;
    if (url) {

        const BLANK_ICON = "data:image/x-icon;base64,AAABAAEAEBAAAAAAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAGAAAAAAAQAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAH/4AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAH/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA===";

const newWindow = window.open('about:blank', '_blank');
if (newWindow) {
    // Make sure <head> exists
    if (!newWindow.document.head) {
        const head = newWindow.document.createElement('head');
        newWindow.document.documentElement.insertBefore(head, newWindow.document.body);
    }

    // Create link for favicon with data URI
    const link = newWindow.document.createElement('link');
    link.rel = 'icon';
    link.href = BLANK_ICON;
    newWindow.document.head.appendChild(link);

    // Set a blank title
    newWindow.document.title = "\u200B";

    // Add your iframe or other content here
    // ...

    newWindow.document.close();
} else {
    alert("Please allow popups.");
}


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
