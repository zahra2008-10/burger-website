// =========================================================
// HERO BURGER IMAGE
// =========================================================

const burgerImages = document.querySelectorAll(".burger img");
const toggleImages = document.querySelectorAll(".burger-toggle img");

let currentIndex = 0;

// Show first burger
if (toggleImages.length > 0) {
  toggleImages[0].classList.add("active");
}

// When thumbnail is clicked
burgerImages.forEach((image, index) => {
  image.addEventListener("click", () => {
    if (toggleImages.length === 0) {
      return;
    }

    toggleImages.forEach((image) => {
      image.classList.remove("active");
    });

    toggleImages[0].src = image.src;

    toggleImages[0].classList.add("active");

    currentIndex = index;
  });
});

// =========================================================
// CREATE STARS
// =========================================================

function createStars() {
  const starsContainer = document.getElementById("stars");

  if (!starsContainer) {
    return;
  }

  const windowWidth = window.innerWidth;

  const windowHeight = window.innerHeight;

  for (let i = 0; i < 100; i++) {
    const star = document.createElement("div");

    star.classList.add("star");

    star.style.position = "absolute";

    star.style.width = "2px";

    star.style.height = "2px";

    star.style.background = "white";

    star.style.borderRadius = "50%";

    star.style.left = `${Math.random() * windowWidth}px`;

    star.style.top = `${Math.random() * windowHeight}px`;

    starsContainer.appendChild(star);
  }
}

window.addEventListener("load", createStars);

// =========================================================
// MENU FILTER
// =========================================================

const filterButtons = document.querySelectorAll(".menu-filter");

const foodCards = document.querySelectorAll(".food-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active from all buttons
    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    // Add active to clicked button
    button.classList.add("active");

    // Get selected category
    const category = button.dataset.category;

    // Show / hide cards
    foodCards.forEach((card) => {
      const cardCategory = card.dataset.category;

      if (category === "all" || category === cardCategory) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// =========================================================
// SHOPPING CART
// =========================================================

let cartCount = 0;

const cartNumber = document.getElementById("cart-count");

const cartButtons = document.querySelectorAll(".add-cart");

cartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    cartCount++;

    cartNumber.textContent = cartCount;

    // Small button animation
    button.style.transform = "scale(1.2)";

    setTimeout(() => {
      button.style.transform = "";
    }, 200);
  });
});
