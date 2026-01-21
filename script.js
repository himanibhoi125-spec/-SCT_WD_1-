window.addEventListener("scroll", () => {
    const header = document.getElementById("header");

    if (window.scrollY > 80) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
});