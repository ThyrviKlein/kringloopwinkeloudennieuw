// Business hours data
const BUSINESS_HOURS = {
  Maandag: "Gesloten",
  Dinsdag: "10:00 - 17:00",
  Woensdag: "10:00 - 17:00",
  Donderdag: "10:00 - 17:00",
  Vrijdag: "10:00 - 17:00",
  Zaterdag: "10:00 - 17:00",
  Zondag: "Gesloten",
};

// Promotional messages for rotating banner
const PROMOTIONAL_MESSAGES = [
  "Openingsaanbieding: 10% korting op alles bij besteding vanaf €25!",
  "Deze week in de aanbieding: Alle boeken 3 halen, 2 betalen!",
  "Nieuw binnen: Vintage collectie uit de jaren 70!",
  "Inleveren van goederen? Wij halen het gratis bij u op! Bel 0172-123456",
  "Elke woensdag: Speciale korting voor senioren!",
  "Volg ons op social media voor de laatste aanbiedingen en nieuwe items",
];

// DOM elements
const hoursListContainer = document.querySelector(".hours-list");
const backToTopButton = document.getElementById("back-to-top");
const promotionalBanner = document.querySelector(".promotional-banner");

// Function to populate business hours
function populateBusinessHours() {
  if (!hoursListContainer) return;

  Object.entries(BUSINESS_HOURS).forEach(([day, hours]) => {
    const hourItem = document.createElement("div");
    hourItem.className = "hour-item";

    const daySpan = document.createElement("span");
    daySpan.className = "day";
    daySpan.textContent = day;

    const timeSpan = document.createElement("span");
    timeSpan.className = "time";
    timeSpan.textContent = hours;

    hourItem.appendChild(daySpan);
    hourItem.appendChild(timeSpan);
    hoursListContainer.appendChild(hourItem);
  });
}

// Function to handle back to top button visibility
function handleBackToTopVisibility() {
  if (!backToTopButton) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add("visible");
    } else {
      backToTopButton.classList.remove("visible");
    }
  });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// Function to set and rotate promotional banner messages
function setPromotionalBanner() {
  if (!promotionalBanner) return;

  // Set a single fixed message
  promotionalBanner.textContent =
    "Kijk op onze instagram pagina voor de laatste aanbiedingen en nieuwe items";
}

// Function to update header content
function setHeaderContent() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  // Get current page filename
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  // Create logo and navigation
  const headerContent = `
    <div class="header-container">
      <a href="index.html" class="logo">Kringloopwinkel Oud & Nieuw</a>
      <nav class="main-nav">
        <ul>
          <li><a href="index.html" class="${
            currentPage === "index.html" ? "active" : ""
          }">Home</a></li>
          <li><a href="about.html" class="${
            currentPage === "about.html" ? "active" : ""
          }">Over Ons</a></li>
          <li><a href="vintage-corner.html" class="${
            currentPage === "vintage-corner.html" ? "active" : ""
          }">Vintage Corner</a></li>
        </ul>
      </nav>
    </div>
  `;

  header.innerHTML = headerContent;
}

// Function to update footer content
function setFooterContent() {
  const footer = document.querySelector(".site-footer");
  if (!footer) return;

  // Facebook and Instagram SVG icons
  const facebookIcon = `<svg class="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
  </svg>`;

  const instagramIcon = `<svg class="social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
  </svg>`;

  // Create footer content with contact info and address
  const footerContent = `
    <div class="footer-container">
      <div class="footer-section">
        <h3>Contact</h3>
        <p>Email: info@kringloopoudennieuw.nl</p>
        <p>Telefoon: 0172-123456</p>
      </div>
      <div class="footer-section">
        <h3>Adres</h3>
        <p>Prins Bernhardstraat 8</p>
        <p>2411 ZC Bodegraven</p>
      </div>
      <div class="footer-section">
        <h3>Volg ons</h3>
        <div class="social-links">
          <a href="https://www.facebook.com/groups/2261838324021673/" target="_blank" aria-label="Facebook">${facebookIcon}</a>
          <a href="https://www.instagram.com/oud_en_nieuw_bodegraven/" target="_blank" aria-label="Instagram">${instagramIcon}</a>
        </div>
      </div>
    </div>
    <div class="copyright">
      &copy; ${new Date().getFullYear()} Kringloopwinkel Oud & Nieuw. Alle rechten voorbehouden.
    </div>
  `;

  footer.innerHTML = footerContent;
}

// Initialize all components
function init() {
  populateBusinessHours();
  handleBackToTopVisibility();
  setPromotionalBanner();
  setHeaderContent();
  setFooterContent();
}

// Run initialization when DOM is loaded
document.addEventListener("DOMContentLoaded", init);
