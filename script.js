document.getElementById('generate-button').addEventListener('click', function() {
    // Get the URL from the input field
    const url = document.getElementById('url-input').value;
    // Check if the URL is valid
    if (url) {
        // Open a new blank page
        const newWindow = window.open('about:blank', '_blank');
        // Do NOT navigate to the specified URL!
        // newWindow.location.href = url; // <-- Remove or comment out this line
        // Show a message to the user
        document.getElementById('message').style.display = 'block';
    } else {
        alert("Please enter a valid URL.");
    }
});
