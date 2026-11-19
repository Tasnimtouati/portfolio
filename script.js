document.addEventListener("mousemove", function (event) {

    document.documentElement.style.setProperty(
        "--mouse-x",
        event.clientX + "px"
    );

    document.documentElement.style.setProperty(
        "--mouse-y",
        event.clientY + "px"
    );

});



const sections = document.querySelectorAll(
    ".content section"
);

const navLinks = document.querySelectorAll(
    ".nav-link"
);


window.addEventListener("scroll", function () {

    let current = "";


    sections.forEach(function (section) {

        const sectionTop = section.offsetTop;

        if (
            window.scrollY >=
            sectionTop - 300
        ) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});