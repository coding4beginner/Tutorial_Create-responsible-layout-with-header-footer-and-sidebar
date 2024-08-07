document.addEventListener("DOMContentLoaded", function () {
    fetch("lib/navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-placeholder").innerHTML = data;
            setActiveNavItem();
        })
        .catch(error => console.error('Error loading the navbar:', error));
});

function setActiveNavItem() {
    const navItems = {
        "index.html": "nav-home",
        "about.html": "nav-about",
        "news.html": "nav-news",
        "contact.html": "nav-contact"
    };

    const currentPage = window.location.pathname.split("/").pop();

    if (currentPage == null || currentPage == "") {
        currentPage = "index.html"
    }

    const activeNavItem = navItems[currentPage];
    
    if (activeNavItem) {
        document.getElementById(activeNavItem).classList.add("selected");
    }
}