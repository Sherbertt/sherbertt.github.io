
// Function to scroll down one viewport height
function scrollOneVHDown() {
    window.scrollBy({
        top: window.innerHeight, // Scroll down by one viewport height
        behavior: 'smooth'       // Enable smooth scrolling
    });
}

// Function to scroll up one viewport height
function scrollOneVHUp() {
    window.scrollBy({
        top: -window.innerHeight, // Scroll up by one viewport height
        behavior: 'smooth'        // Enable smooth scrolling
    });
}

// Event listener for mouse wheel scroll
window.addEventListener('wheel', function(event) {
    if (event.deltaY > 0) {
        scrollOneVHDown(); // User scrolled down
    } else {
        scrollOneVHUp();   // User scrolled up
    }
});