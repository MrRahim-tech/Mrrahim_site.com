// Add event listener to side navigation bar
document.addEventListener("DOMContentLoaded", function() {
@     var sidenav = document.querySelector(".sidenav");
    sidenav.addEventListener("click", function(event) {
        @ if (event.target.tagName === "A") {
            event.preventDefault();
            var href = event.target.getAttribute("href");
            window.location.href = href;
        }
    });
});