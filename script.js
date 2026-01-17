// Hamburger Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Art Modal Logic
function openModal(image, title, desc, price) {
    const modal = document.getElementById("artModal");
    const modalImg = document.getElementById("modalImg");
    const modalTitle = document.getElementById("modalTitle");
    const modalDesc = document.getElementById("modalDesc");
    const modalPrice = document.getElementById("modalPrice");

    modal.style.display = "block";
    modalImg.src = "images/" + image;
    modalTitle.innerText = title;
    modalDesc.innerText = desc;
    modalPrice.innerText = price;
    
    document.body.style.overflow = "hidden"; // Stop scroll
}

function closeModal() {
    document.getElementById("artModal").style.display = "none";
    document.body.style.overflow = "auto"; // Enable scroll
}

window.onclick = function(event) {
    const modal = document.getElementById("artModal");
    if (event.target == modal) { closeModal(); }
}