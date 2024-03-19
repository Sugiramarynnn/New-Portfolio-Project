let nav_links = document.getElementsByClassName("nav_link");
// get the dominant section in the viewport with the "page_section" class
// Create an observer instance
const observer = new IntersectionObserver((entries) => {
    // Find the first visible "page_section" element
    const visibleSection = entries.find((entry) => entry.isIntersecting);

    if (visibleSection) {
        // Do something with the currently visible section
        console.log("Dominant section:", visibleSection.target.id);
        toogleActiveNavLink(visibleSection.target.id);
    }
});

// Observe all elements with the "page_section" class
const pageSections = document.getElementsByClassName("page_section");
for (const section of pageSections) {
    observer.observe(section);
}

function toogleActiveNavLink(sectionId) {
    for (let i = 0; i < nav_links.length; i++) {
        nav_links[i].classList.remove("active_link");
        if (nav_links[i].id == `${sectionId}_link`) {
            nav_links[i].classList.add("active_link");
        }
    }
}

