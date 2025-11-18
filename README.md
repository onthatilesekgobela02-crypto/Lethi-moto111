# Lethi-Moto
ST10472193 

This is a simple static website built using HTML and CSS and Javascript.
It demonstrates basic web structure, styling, and interactivity for assignment and practice reasons.

Features

    Responsive layout for desktop and mobile

    Navigation menu with linked pages

    "Home","About Us", "Enquiry", "Gallery", "Services" and "Contact" sections

    Font Awesome icons integration

    Basic CSS styling


File & Folder Structure

    Lethi-Moto
    │__ Pages  
    |    ├── about.html          # About page  
    |    ├── contact.html        # Contact page
         |   gallery.html        # Gallery page
         |   services.html       # Services page
    │    |   enquiry.html        # Enquiry page
    ├── css/
    │   └── styles.css           # Main stylesheet   
    │
    └── assets/
    |     ├── images             # Images used in the site  
    |     |__ Icons
    |
    |__ index.html               #Home page (entry point)

Installation / How to Run

    Download or clone this repository.

    Open the index.html file in any modern browser.

    No server setup is required (static website).

Dependencies

    Font Awesome
    – for icons

    Google Fonts
    – for typography

Usage Instructions

    Edit the index.html file to update homepage content.

    Modify css/styles.css to change colors, fonts, or layout.

    Add new pages and link them through the navigation bar.

Author

ST10472193 Onthatile Meladi Sekgobela

Changelog
v1.0.0 – Initial Release (2025-08-27)

    Added homepage (index.html)

    Created "About Us","Contact" "Gallery", "Services" pages

    Added navigation bar and footer

SEE WEBSITE RESPONSIVE DESIGN SCREENSHOTS:
./Assets/Laptop -1024px.png
./Assets/Mobile L -425px.png
./Assets/Mobile M -375px.png
./Assets/Mobile S -320px.png
./Assets/Tablet -768px.png

  

v1.1.0 – Latest Update (2025-09-26)
    Added css for decoration, layout, and typography

    Improved mobile responsiveness

    Integrated Font Awesome icons

    Added responsive CSS styling


    REFERENCES
    W3Schools. (2025, September 12). W3Schools. Retrieved from W3Schools: https://www.w3schools.com/cssref/pr_class_cursor.php

    IBM. (2025, September 19). IBM Web CSS. Retrieved from IBM: https://www.ibm.com/support/pages/ibm-web-css

    Geek For Geeks. (2025,September 23). CSS Tutorial. Retrieved from Geek for Geeks: https://www.geeksforgeeks.org/css/css-tutorial/ 

    # Lethi'Moto Carwash Website

## Overview
Lethi'Moto Carwash is a responsive, SEO-friendly website designed to showcase the services, gallery, contact information, and enquiry capabilities of Lethi'Moto Carwash, a professional car cleaning and detailing service based in Limpopo, South Africa. The website is interactive and includes modern JavaScript features for enhanced user experience.

---

## Features
- **Responsive Design:** Optimized for desktop, tablet, and mobile devices using CSS Grid and Flexbox.
- **Navigation:** Centralized `nav.html` included across all pages, ensuring consistent navigation and active page highlighting.
- **SEO Optimized:** 
  - Meta descriptions, keywords, and author tags
  - Open Graph tags for social media sharing
  - Alt attributes on images
  - Semantic HTML structure
- **Interactive Forms:**
  - Enquiry form with validation
  - Service booking form with interactive feedback
- **JavaScript Features:**
  - Form validation with real-time feedback
  - Lightbox/Slideshow for gallery images
  - Smooth scrolling and back-to-top button
  - Session-based welcome messages
- **Pages Included:**
  - Home (`index.html`)
  - About (`about.html`)
  - Services (`services.html`)
  - Gallery (`gallery.html`)
  - Contact (`contact.html`)
  - Enquiry (`enquiry.html`)
  - Validation Demo (`validation.html`)

---

## Folder Structure
LethiMoto/
│
├── Assets/ # Images, logos, and other assets
│ ├── images/
│ └── icons/
│
├── CSS/
│ └── style.css # Main stylesheet
│
├── Includes/
│ └── nav.html # Centralized navigation bar
│
├── Pages/
│ ├── index.html
│ ├── about.html
│ ├── services.html
│ ├── gallery.html
│ ├── contact.html
│ ├── enquiry.html
│ └── validation.html
│
└── README.md # Project documentation


---

## How to Use
1. **Clone the Repository**  
   Download or clone the repository to your local machine.

2. **Open the Website**  
   Open any of the HTML pages in a browser (e.g., `index.html`) to view the website.

3. **Navigation**  
   The navigation bar is centralized in `Includes/nav.html`. All pages load it dynamically using JavaScript.

4. **Forms**  
   - Enquiry form validates input and provides interactive feedback.
   - Validation page demonstrates JavaScript form validation features.

5. **Gallery**  
   Click on any image in the gallery to view a responsive lightbox. Navigate images and enjoy interactive feedback.

---

## Technologies Used
- HTML5
- CSS3 (Flexbox & Grid)
- JavaScript (ES6)
- SEO best practices
- Responsive design techniques

---

## Notes
- Ensure all paths to `Assets` and `Includes/nav.html` are correct relative to each HTML file.
- For full functionality, open pages in a modern browser with JavaScript enabled.
- Forms currently provide front-end validation and interactive feedback. Server-side integration can be added for sending emails or storing enquiries.

---

## Author
**Lethi'Moto Carwash Team**  
- Phineus Masela  
- Lethabo Mapela  
- Beko Dlamini

- ## Creator
- ST10472193 (Onthatile M Sekgobela)

---

## License
This project is for educational and personal/business use. Do not redistribute without permission.

# Lethi'Moto Carwash Website

Welcome to the Lethi'Moto Carwash website project. This site provides a professional online presence for Lethi'Moto Carwash, showcasing services, team, gallery, contact, and enquiry forms.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Contact](#contact)

## Project Overview
The website is designed to provide information about Lethi'Moto Carwash services in Limpopo, South Africa. It includes:
- Home, About, Services, Gallery, Contact, and Enquiry pages.
- Online booking and enquiry forms with client-side validation.
- Interactive gallery with lightbox.
- Accordion feature for service details.

## Features
- Fully responsive layout for desktop and mobile.
- JavaScript form validation for Contact and Enquiry forms.
- Accordion functionality for organized service display.
- Back-to-top button for easy navigation.
- SEO-friendly meta tags and Open Graph integration.
- Gallery with lightbox for enlarged image view.

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6)
- Google Maps iframe integration
- Open Graph for social sharing

## Folder Structure

/Project Root
├── Assets/ # Images, logos, gallery pictures
├── CSS/
│ └── style.css # Main stylesheet
├── JS/
│ ├── validation.js # Contact & Enquiry form validation
│ ├── accordion.js # Accordion feature
│ └── gallery.js # Lightbox gallery (if separate)
├── Pages/
│ ├── about.html
│ ├── services.html
│ ├── gallery.html
│ ├── contact.html
│ └── enquiry.html
└── README.md


## Setup Instructions
1. Clone or download the repository.
2. Ensure the folder structure remains the same for asset linking.
3. Open `index.html` in a browser to view the homepage.
4. Link JS files in HTML as needed, e.g.:
```html
<script src="../validate.js"></script>
<script src="../accordion.js"></script>



Changelog

---

### **CHANGELOG.md**
```markdown
# Lethi'Moto Carwash Website Changelog

## [1.0.0] - 2025-11-18
### Added
- Initial website setup with Home, About, Services, Gallery, Contact, and Enquiry pages.
- Responsive layout and navigation bar.
- Hero section with logo on all pages.
- About page with company background, vision, mission, and team section.
- Services page with detailed services, booking form, and filter buttons.
- Gallery page with clickable images and lightbox functionality.
- Contact page with Google Maps, contact info, and client-side form validation.
- Enquiry page with client-side form validation and feedback messages.
- Accordion JavaScript functionality for service or FAQ sections.
- Back-to-top button on all pages.
- SEO meta tags and Open Graph integration for social sharing.
- Female Team member

### Changed
- JS for form validation separated into `validation.js`.
- Accordion functionality separated into `accordion.js`.
- Live feedback
- Gallery slideshow picture sizes

### Fixed
- Navigation highlighting for active pages.
- Form feedback messages display and hide after 5 seconds.
- Gallery images open in lightbox on click.
- Logo pictures and size
- Navigation Links

### References
- [MDN Web Docs – HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)  
- [MDN Web Docs – CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)  
- [MDN Web Docs – JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)  
- [Google Maps Embed API](https://developers.google.com/maps/documentation/embed)  
- [W3Schools – Form Validation](https://www.w3schools.com/js/js_validation.asp)  
- [W3Schools – Accordion Example](https://www.w3schools.com/howto/howto_js_accordion.asp)  
- [W3Schools – Lightbox Image Gallery](https://www.w3schools.com/howto/howto_js_lightbox.asp)

