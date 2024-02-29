// Adding an event listener to the mobile menu toggle button
document
.getElementById("mobile-menu-toggle")
.addEventListener("click", function() {
    // Toggling the "hidden" class of the mobile menu element to show/hide it
    document.getElementById("mobile-menu").classList.toggle("hidden");
})