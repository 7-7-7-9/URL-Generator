document.getElementById('generate-button').addEventListener('click', function() {
    const url = document.getElementById('url-input').value;
    if (url) {
        const newWindow = window.open('about:blank', '_blank');
        newWindow.document.write(`
            <html>
                <head>
                    <title>&#8203;</title> <!-- Zero-width space for a blank title -->
                    <link rel="icon" href="https://raw.githubusercontent.com/chompypotato/carb0n/refs/heads/main/go/blank.ico"> <!-- Point to your favicon file -->
                </head>
                <body style="margin:0">
                    <iframe src="${url}" style="width:100vw; height:100vh; border:none;"></iframe>
                </body>
            </html>
        `);
        // Optional: Close the document to finish page load
        newWindow.document.close();
    } else {
        alert("Please enter a valid URL.");
    }
});
