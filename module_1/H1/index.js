document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("mainMenu");
    const headers = document.querySelectorAll(".content h1, .content h2");

    headers.forEach(header => {
        const item = document.createElement("div");
        item.textContent = header.textContent;
        item.className = header.tagName === "H1" ? "menu-item" : "submenu-item";
        item.onclick = () => header.scrollIntoView({ behavior: "smooth" });

        if (header.tagName === "H1") {
            const submenu = document.createElement("div");
            submenu.className = "submenu hidden";
            item.onclick = () => submenu.classList.toggle("hidden");
            menu.appendChild(item);
            menu.appendChild(submenu);
            item.dataset.submenu = submenu;
        } else {
            const lastMenuItem = menu.querySelector(".menu-item:last-of-type");
            lastMenuItem?.dataset.submenu.appendChild(item);
        }
    });

    window.addEventListener("scroll", () => {
        let fromTop = window.scrollY + 10;
        headers.forEach(header => {
            const activeItem = [...menu.querySelectorAll(".menu-item, .submenu-item")]
                .find(item => item.textContent === header.textContent);
            activeItem?.classList.toggle("active", header.offsetTop <= fromTop);
        });
    });
});
