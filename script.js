// Hamburger Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Original Art Modal
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

// Digital Modal
function openDigitalModal(title) {
    document.getElementById("digiTitle").innerText = "Digital Scan: " + title;
    document.getElementById("digitalModal").style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeDigitalModal() {
    document.getElementById("digitalModal").style.display = "none";
    document.body.style.overflow = "auto";
}

// Global Click Close
window.onclick = function(event) {
    const artM = document.getElementById("artModal");
    const digiM = document.getElementById("digitalModal");
    if (event.target == artM) closeModal();
    if (event.target == digiM) closeDigitalModal();
}
