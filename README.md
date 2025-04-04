# Kringloopwinkel Oud & Nieuw - Website Revamp

## Overview
This is a plain HTML, CSS, and JavaScript implementation of the Kringloopwinkel Oud & Nieuw website. The original site was built using Next.js, but this version has been reimplemented using standard web technologies without any frameworks.

## Structure
The website consists of three main pages:
- `index.html` - Homepage with information about the store and opening hours
- `about.html` - About Us page with employee information
- `vintage-corner.html` - Page about the vintage section of the store

## Files and Directories
- `/css/` - Contains all stylesheets
  - `reset.css` - Normalizes browser styles
  - `styles.css` - Main styles for the website
  - `about.css` - Styles specific to the About page
  - `vintage.css` - Styles specific to the Vintage Corner page
- `/js/` - Contains all JavaScript files
  - `main.js` - Main JavaScript for shared functionality
  - `about.js` - JavaScript specific to the About page
- `/` - Root contains HTML files and this README

## Features
- Responsive design that works on mobile, tablet, and desktop
- Dynamic content generation for business hours and employee information
- Navigation with active page highlighting
- Back to top button that appears after scrolling
- Shared header and footer across all pages

## How to Run
Simply open any of the HTML files in a web browser. No build process is required as this is pure HTML, CSS, and JavaScript.

## Dependencies
- None! This project uses only vanilla HTML, CSS, and JavaScript without any external libraries or frameworks.
- The only external resource is Google Fonts for the Roboto font family.

## Notes
- The site uses CSS variables for consistent theming
- The JavaScript is organized to be modular and maintainable
- All content is in Dutch, as per the original website 