document.getElementById('generate-button').addEventListener('click', function() {
    // Get the URL from the input field
    const url = document.getElementById('url-input').value;

    // Check if the URL is valid
    if (url) {
        // Open the specified URL in a new blank page
        window.open(url, '_blank');

        // Show a message to the user
        document.getElementById('message').style.display = 'block';
    } else {
        alert("Please enter a valid URL.");
    }
});
