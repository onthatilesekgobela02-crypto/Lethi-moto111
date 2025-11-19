accordions.js
// accordion.js

document.addEventListener("DOMContentLoaded", () => {
  // Select all accordion headers
  const accordions = document.querySelectorAll(".accordion-header");

  accordions.forEach(header => {
    header.addEventListener("click", () => {
      // Toggle active class on header
      header.classList.toggle("active");

      // Toggle the content panel
      const panel = header.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }

      // Close other open accordions
      accordions.forEach(otherHeader => {
        if (otherHeader !== header) {
          otherHeader.classList.remove("active");
          const otherPanel = otherHeader.nextElementSibling;
          if (otherPanel) otherPanel.style.maxHeight = null;
        }
      });
    });
  });
});

