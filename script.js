document.getElementById('generate-button').addEventListener('click', function() {
    const url = document.getElementById('url-input').value;
    if (url) {
        const newWindow = window.open('about:blank', '_blank');
        newWindow.document.write(`
            <html>
                <head>
                    <title>&#8203;</title>
                    <link rel="icon" href="https://raw.githubusercontent.com/chompypotato/carb0n/refs/heads/main/go/blank.ico" type="image/x-icon">
                </head>
                <body style="margin:0; background:#000;">
                    <iframe src="${url}" style="width:100vw; height:100vh; border:none;"></iframe>
                </body>
            </html>
        `);
        newWindow.document.close();
    } else {
        alert("Please enter a valid URL.");
    }
});
