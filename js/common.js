// Get the root tag
var root = document.getElementsByTagName( 'html' )[0];
// Show navigation menu
function showNav() {
    root.classList.toggle('_show-nav');
}

window.addEventListener('load',function(){
    setTimeout(addClassLoaded, 1000);

    function addClassLoaded() {
        document.querySelector('body').classList.add("loaded");
    }
});

// Find matches
var mql = window.matchMedia("(orientation: portrait)");

// If there are matches, we're in portrait
if(mql.matches) {
    // Portrait orientation
} else {
    // Landscape orientation
}

// Add a media query change listener
mql.addListener(function(m) {
    if(m.matches) {
        location.reload();
    }
    else {
        // Changed to landscape
    }
});