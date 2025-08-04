document.getElementById('generate-button').addEventListener('click', function() {
    const url = document.getElementById('url-input').value;
    if (url) {
      const newWindow = window.open('about:blank', '_blank');
if (newWindow) {
    newWindow.document.title = '\u200B';
    var link = newWindow.document.createElement('link');
    link.rel = 'icon';
    link.href = 'https://raw.githubusercontent.com/chompypotato/carb0n/refs/heads/main/go/blank.ico';
    newWindow.document.head.appendChild(link);

    var iframe = newWindow.document.createElement('iframe');
    iframe.src = url;
    iframe.style.width = "100vw";
    iframe.style.height = "100vh";
    iframe.style.border = "none";
    newWindow.document.body.style.margin = "0";
    newWindow.document.body.appendChild(iframe);
} else {
    alert("Please allow popups.");
}

});
