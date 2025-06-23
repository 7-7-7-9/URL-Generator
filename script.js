document.getElementById('generate-button').addEventListener('click', function() {
    const url = document.getElementById('url-input').value;
    if (url) {
        const newWindow = window.open('about:blank', '_blank');
        newWindow.document.write(`
            <html>
                <body style="margin:0">
                    <iframe src="${url}" style="width:100vw; height:100vh; border:none;"></iframe>
                </body>
            </html>
        `);
    } else {
        alert("Please enter a valid URL.");
    }
});
