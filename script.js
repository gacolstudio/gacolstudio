// View Switcher Logic
function showView(viewId) {
    // Hide all views
    const views = document.querySelectorAll('.view');
    views.forEach(view => {
        view.style.display = 'none';
    });

    // Show the selected view
    document.getElementById('view-' + viewId).style.display = 'block';

    // Close mobile menu after clicking
    document.getElementById('nav-links').classList.remove('active');

    // Scroll to top
    window.scrollTo(0, 0);
}

// Hamburger Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Modal Logic
function openModal(image, title, desc, price) {
    const modal = document.getElementById("artModal");
    const modalImg = document.getElementById("modalImg");
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalDesc").innerText = desc;
    document.getElementById("modalPrice").innerText = price;
    modalImg.src = "images/" + image;
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeModal() {
    document.getElementById("artModal").style.display = "none";
    document.body.style.overflow = "auto";
}

function openDigitalModal(title) {
    document.getElementById("digitalModal").style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeDigitalModal() {
    document.getElementById("digitalModal").style.display = "none";
    document.body.style.overflow = "auto";
}

// Global click to close modals
window.onclick = function(event) {
    const artM = document.getElementById("artModal");
    const digiM = document.getElementById("digitalModal");
    if (event.target == artM) closeModal();
    if (event.target == digiM) closeDigitalModal();
}
