# Project Blueprint and Change Log

This document tracks all significant changes, progress, and decisions made during the development of the Pixelways Solution website.

## Initial Content Revamp (August 9, 2025)

**Objective:** Replace generic placeholder text content and visuals across the website with branded, enhanced, and improved write-ups, drawing context from the `README.md` and existing contact details.

**Summary of Changes:**

- **`app/page.js` (Homepage):**
  - Updated Hero section (sub-title, headline, paragraph, button text).
  - Updated Features Area (sub-title, headline, paragraph, and individual feature descriptions for IT Solutions, Cyber Security, Cloud Services).
  - Updated Why Choose Us Area (sub-title, headline, paragraph, button text, and feature descriptions for Dedicated Team, Clients Satisfaction).
  - Updated Services Area (sub-title, headline, and individual service descriptions for Managed IT Services, Cybersecurity Services, Cloud Solutions, Data Backup & Recovery).
  - Updated Achievement Area (sub-title, headline, paragraph, button text).
  - Updated Team Area (sub-title, headline).
  - Updated Features Area Two (paragraphs for Assessment and Strategy Development, Enhanced Cybersecurity Protocols, Cloud Migration and Optimization).
  - Updated Blog Area (sub-title, headline, and individual blog item descriptions).

- **`components/Hero.js`:**
  - Updated placeholder text within the slider items (sub-title, h2, h1, button text) for consistency.

- **`app/about/page.js` (About Us Page):**
  - Updated About Page About Area (sub-title, headline, and two main paragraphs).
  - Updated About Page Experience (headline and main paragraph).
  - Updated Why Choose Us Area (sub-title, headline, and feature descriptions for Customizable Solutions, Scalability & Flexibility, Security & Compliance, User-Friendly Interface).
  - Updated Counter Area (titles for Project Complete, Global Clients, Awards Winning, IT & Tech Services).

- **`app/services/page.js` (Services Page):**
  - Updated Why Choose Us Area (sub-title, headline, paragraph, button text, and feature descriptions for Customizable Solutions, Scalability & Flexibility, Security & Compliance, User-Friendly Interface).

- **`components/Service.js`:**
  - Updated main headline.
  - Removed redundant "View More Services" button.
  - (Note: Individual service accordion content was already correct based on README and did not require modification).

- **`app/pricing/page.js` (Pricing Page):
  - Updated FAQs section (sub-title, headline, button text).

- **`components/Pricing.js`:**
  - Updated main Pricing section (sub-title, headline).
  - Updated `Pricing2` component (sub-title, headline, and detailed descriptions for Regular, Standard, Premium, and Diamond tiers for both monthly and yearly tabs).

- **`components/WebsiteCostCalculator.js`:**
  - Updated main title and description.

- **`components/AppCostCalculator.js`:**
  - Updated main title and description.

- **`components/DesktopCostCalculator.js`:**
  - Updated main title and description.

- **`app/faqs/page.js` (FAQs Page):**
  - Updated main FAQs section (sub-title, headline, button text).

- **`components/FAQs.js`:**
  - Updated the `faqs` array within the `FAQs2` component with relevant questions and detailed answers based on Pixelways Solution's services.

- **`components/Consultation.2js`:**
  - Updated main title and sub-title.
  - Updated contact form title and button text.
  - Updated subject dropdown options with more specific service categories.

- **`app/contact/page.js` (Contact Page):**
  - Updated main contact info section (sub-title, headline, paragraph).
  - Updated contact form title and paragraph.

- **`app/blog/page.js` (Blog Standard Page):**
  - Updated Page Banner `pageName`.
  - Updated titles in the "Recent Post" widget in the sidebar.
  - Updated CTA widget in the sidebar (headline, button text).
  - Updated image sources for recent posts to use the image API.

- **`app/blog-details/page.js` (Blog Details Page):**
  - Updated Page Banner `pageName`.
  - Replaced the entire main blog content with a new, detailed article.
  - Updated titles in the "Recent Post" widget in the sidebar.
  - Updated CTA widget in the sidebar (headline, button text).
  - Updated image sources for recent posts to use the image API.

- **`app/team/page.js` (Team Page):**
  - Updated Page Banner `pageName`.
  - Updated Team Page Left Content (headline, paragraph).
  - Updated Progress Bar Titles (Software Development, IT Consulting & Management).
  - Updated main Team Section (sub-title, headline).
  - Updated individual team member descriptions.

- **`app/team-details/page.js` (Team Details Page):**
  - Updated Page Banner `pageName`.
  - Updated Team Details Left Part (name, designation, contact title, email, phone).
  - Updated Team Details Right Part (headline, paragraph).
  - Updated Professional Qualification section (headline, paragraph, and individual qualification items).
  - Updated Progress Bar Titles (Software Development, UI/UX Design, Cybersecurity).
  - Updated Awards Winning section (headline, paragraph).

**Build Fix:**
- Added `"use client";` to `app/blog-details/[slug]/page.js` to resolve a build error related to `styled-jsx` being used in a Server Component.

## Bug Fix (August 9, 2025)

**Issue:** The "Contact Us for Support" button on the FAQs page (`app/faqs/page.js`) was not navigating to the contact page.

**Resolution:** Changed the `href` attribute of the `Link` component from `"faqs"` to `"/contact"` in `app/faqs/page.js` to correctly direct users to the contact page.

## Image API Integration (August 9, 2025)

**Objective:** Replace placeholder images in the "Recent Post" sidebar widgets with images generated by the `api.a0.dev/assets/image` API.

**Summary of Changes:**
- **`app/blog/page.js`:** Updated `src` attributes for all images in the "Recent Post" widget to use the image API.
- **`app/blog-details/page.js`:** Updated `src` attributes for all images in the "Recent Post" widget to use the image API.
- **`layout/Sidebar.js`:** Updated `src` attributes and titles for all images in the "Recent Post" widget to use the image API and correct titles.

## Hero Section Image Update (August 9, 2025)

**Objective:** Update the hero section background image to use the image API for a more dynamic and relevant visual.

**Summary of Changes:**
- **`components/Hero.js`:** Modified the `backgroundImage` style to fetch an image from `https://api.a0.dev/assets/image?text=Pixelways+Solution+IT+Consultancy+Digital+Solutions&aspect=16:9&seed=42`.

## Homepage Hero Section Background Update (August 9, 2025)

**Objective:** Update the homepage hero section background image to use the image API with specific text, aspect, and seed parameters for a more relevant visual.

**Summary of Changes:**
- **`app/page.js`:** Modified the `backgroundImage` style within the `<section className="hero-area ...">` to fetch an image from `https://api.a0.dev/assets/image?text=Pixelways+Solution+IT+Consultancy+Digital+Solutions&aspect=16:9&seed=42`.

## Homepage Achievement Area Background Update (August 9, 2025)

**Objective:** Update the homepage "Achievement Area" background image to use the image API with specific text, aspect, and seed parameters for a more relevant visual.

**Summary of Changes:**
- **`app/page.js`:** Modified the `backgroundImage` style within the `<section className="achievement-area ...">` to fetch an image from `https://api.a0.dev/assets/image?text=Pixelways+Solution+Achievements+Innovation+Excellence&aspect=16:9&seed=42`.

## Blog Page Pagination Removal (August 9, 2025)

**Objective:** Remove the non-functional and unnecessary pagination block from the blog page.

**Summary of Changes:**
- **`app/blog/page.js`:** Removed the static `<ul>` element with `className="pagination"` as it was not functional and there are not enough posts to paginate.

## Website Cost Calculator Real-time Calculation (August 9, 2025)

**Objective:** Improve user experience by implementing real-time cost calculation in the Website Cost Calculator.

**Summary of Changes:**
- **`components/WebsiteCostCalculator.js`:**
  - Modified `onChange` handlers for "Number of Pages", "Design Type", and "Features" to trigger `calculateCost()` immediately.
  - Removed the explicit "Calculate" button as it is no longer needed.

## Bug Fix: Website Cost Calculator Syntax Error (August 9, 2025)

**Issue:** Build failed due to a syntax error in `components/WebsiteCostCalculator.js` related to the `style` attribute of a `<span>` tag.

**Resolution:** Corrected the missing closing curly brace and misplaced text within the `style` attribute to `style={{display:'block',marginBottom:'6px'}}`.

## Global Dark Theme Implementation (August 9, 2025)

**Objective:** Implement a site-wide dark theme, specifically using the dark theme characteristics observed in the footer.

**Summary of Changes:**
- **`public/assets/css/style.css`:**
  - Introduced new CSS variables (`--main-bg-color`, `--main-text-color`, `--heading-color`, `--secondary-bg-color`, `--global-border-color`) for better theme management.
  - Defined default (light) theme values for these variables.
  - Defined dark theme values for these variables within a `body.dark-theme` selector.
  - Updated existing CSS rules (e.g., for `body`, `h1-h6`, `.list-style-two li`, `.pagination li a`) to use these new theme variables.
- **`layout/TekprofLayout.js`:**
  - Added `document.body.classList.add('dark-theme');` within the `useEffect` hook to apply the dark theme class globally to the `<body>` element.

## Dark Theme Text Color Adjustment (August 9, 2025)

**Objective:** Ensure better visibility of text against the dark theme background.

**Summary of Changes:**
- **`public/assets/css/style.css`:**
  - Modified the `--main-text-color` variable within the `body.dark-theme` block from `#F3F6F9` (light gray) to `white` for improved contrast and readability.

## Header Dark Theme Adaptation (August 9, 2025)

**Objective:** Adapt the main header to the dark theme, including text color, background, and menu icon.

**Summary of Changes:**
- **`app/globals.css`:**
  - Added CSS rules to override header styles when `body.dark-theme` is active:
    - `.main-header .header-top-wrap`: `background-color: var(--secondary-bg-color);`
    - `.main-header .header-top-wrap ul li`, `ul li a`, `.social-style-one span`, `a`: `color: var(--main-text-color);`
    - `.main-header .header-upper`: `background-color: var(--main-bg-color);`
    - `.main-header .header-upper .main-menu ul li a`: `color: var(--main-text-color);`
    - `.main-header .header-upper .main-menu ul li.dropdown ul`: `background-color: var(--main-bg-color);`
    - `.main-header .header-upper .main-menu ul li.dropdown ul li a`: `color: var(--main-text-color);`
    - `.main-header .header-upper .menu-btns .menu-sidebar button span`: `background: var(--main-text-color);`

## Testimonial Component Dark Theme Adaptation (August 9, 2025)

**Objective:** Adapt the Testimonial component to the dark theme for consistent styling.

**Summary of Changes:**
- **`app/globals.css`:**
  - Added CSS rules to override testimonial component styles when `body.dark-theme` is active:
    - `.testimonial-item .testi-text`: `color: var(--main-text-color);`
    - `.testimonial-item .testi-author b`, `.testimonial-item .testi-author span`: `color: var(--main-text-color);`
    - `.slick-arrow`: `color: var(--main-text-color); border-color: var(--global-border-color);`
    - `.slick-arrow:focus`, `.slick-arrow:hover`: `color: var(--tekprof-primary-color);`

## Mobile Menu and Header Icon Dark Theme Adaptation (August 10, 2025)

**Objective:** Implement dark theme for mobile menu background, text, and header menu/sidebar toggler icons.

**Summary of Changes:**
- **`app/globals.css`:**
  - Added CSS rules to apply dark background (`--main-bg-color`) and white text (`--main-text-color`) to the mobile menu/sidebar (`.hidden-bar`).
  - Added CSS rules to set the color of the close icon (`.hidden-bar .cross-icon .fa-times`) to white (`--main-text-color`).

## Homepage Hero Section Text Color Adjustment (August 10, 2025)

**Objective:** Change text color of homepage hero section paragraph to white in dark theme.

**Summary of Changes:**
- **`app/globals.css`:**
  - Added CSS rule to set `color: var(--main-text-color);` for `.hero-content p` within `body.dark-theme`.

## Testimonial Component Client Name Color Adjustment (August 10, 2025)

**Objective:** Ensure client name and profession in testimonial component are white in dark theme.

**Summary of Changes:**
- **`app/globals.css`:**
  - Modified CSS rule to apply `color: var(--main-text-color);` directly to `.testimonial-item .testi-author` within `body.dark-theme`.

## Testimonial Card Background on About Page (August 10, 2025)

**Objective:** Ensure testimonial card on about page is dark-themed.

**Summary of Changes:**
- **`app/globals.css`:**
  - Added CSS rule to override `bgc-gray` to use `var(--main-bg-color)` when `body.dark-theme` is active.

## Team Card Dark Theme Adaptation (August 10, 2025)

**Objective:** Ensure team card and its text color respect dark theme.

**Summary of Changes:**
- **`app/globals.css`:**
  - Added CSS rules to set `background-color: var(--main-bg-color);` for `.team-item` within `body.dark-theme`.
  - Added CSS rules to set `color: var(--main-text-color);` for `.team-item .content .name a` and `.team-item .content .designations` within `body.dark-theme`.

## Menu and Sidebar Toggler Color Adjustment (August 10, 2025)

**Objective:** Change the color of the menu toggler in the header and the sidebar toggler to white in dark theme.

**Summary of Changes:**
- **`app/globals.css`:**
  - Added CSS rules to set `background-color: var(--main-text-color);` for `.main-menu .navbar-header .navbar-toggle .icon-bar` within `body.dark-theme` to make the menu toggler bars white.
  - Added CSS rules to set `color: var(--main-text-color);` for `.menu-sidebar button` within `body.dark-theme` to make the sidebar toggler white.

## Homepage Sections Dark Theme Adaptation (August 10, 2025)

**Objective:** Ensure various sections and components on the homepage (`app/page.js`) are dark theme compatible, including background and text colors.

**Summary of Changes:**
- **`app/globals.css`:**
  - Added CSS rules to set `background-color: var(--main-bg-color);` for `.bgc-blue` within `body.dark-theme` to ensure blue backgrounds adapt to the dark theme.
  - Added CSS rules to set `background-color: var(--main-bg-color);` and `color: var(--main-text-color);` for `.achievement-counter.bg-white` within `body.dark-theme` to adapt the achievement counter background and text.
  - Added CSS rules to set `background-color: var(--main-bg-color);` and `border-color: var(--global-border-color);` for `.feature-item` within `body.dark-theme`, and `color: var(--main-text-color);` for its content (`h4 a`, `p`, `read-more`).
  - Added CSS rules to set `background-color: var(--main-bg-color);` and `border-color: var(--global-border-color);` for `.feature-item-two` within `body.dark-theme`, and `color: var(--main-text-color);` for its icon, `h5 a`, `p`, `tags a`, and `h3 a`. Also set `background-color: var(--secondary-bg-color);` for `.feature-item.style-two .content .tags a`.
  - Added CSS rules to set `background-color: var(--main-bg-color);` and `border-color: var(--global-border-color);` for `.blog-item` within `body.dark-theme`, and `color: var(--main-text-color);` for its content (`blog-meta li a`, `h4 a`, `p`).

## About Page Dark Theme Adaptation (August 10, 2025)

**Objective:** Ensure various sections and components on the About page (`app/about/page.js`) are dark theme compatible, including background and text colors.

**Summary of Changes:**
- **`app/globals.css`:**
  - Added CSS rules to set `background-color: var(--main-bg-color);` and `border-color: var(--global-border-color);` for `.trusted-clients-wrap` within `body.dark-theme`, and `color: var(--main-text-color);` for its content (`h5`, `p`, `ratting i`).
  - Added CSS rules to set `background-color: var(--main-bg-color);` for `.bgc-primary` within `body.dark-theme` to ensure primary backgrounds adapt to the dark theme.
  - Added CSS rules to set `color: var(--heading-color);` for `.section-title h2` and `color: var(--main-text-color);` for `.section-title p` within `body.dark-theme`.
  - Added CSS rules to set `background-color: var(--main-bg-color);` and `border-color: var(--global-border-color);` for `.testimonial-item-two` within `body.dark-theme`, and `color: var(--main-text-color);` for its rating stars (`ratting i`), testimonial text (`testi-text`), and author details (`testi-author span`).

## Services Page Dark Theme Adaptation (August 10, 2025)

**Objective:** Ensure various sections and components on the Services page (`app/services/page.js`) are dark theme compatible, including background and text colors.

**Summary of Changes:**
- **`components/PageBanner.js`:**
  - Modified `backgroundImage` to `backgroundColor: "var(--main-bg-color)"` to ensure the banner background adapts to the dark theme.
- **`app/globals.css`:**
  - Added CSS rules to set `color: var(--main-text-color);` for `.page-banner-area .page-title`, `.page-banner-area .breadcrumb`, `.page-banner-area .breadcrumb-item`, and `.page-banner-area .breadcrumb-item a` to ensure page banner title and breadcrumbs are white.
  - Added CSS rules to set `border-right-color: var(--global-border-color);`, `border-left-color: var(--global-border-color);`, and `border-bottom-color: var(--global-border-color);` for `.border-right`, `.border-left`, and `.for-border-bottom` respectively within `body.dark-theme` to ensure borders adapt to the dark theme.

## Contact Page Dark Theme Adaptation (August 10, 2025)

**Objective:** Ensure various sections and components on the Contact page (`app/contact/page.js`) are dark theme compatible, including background and text colors.

**Summary of Changes:**
- **`app/globals.css`:**
  - Added CSS rules to set `background-color: var(--main-bg-color);` and `border-color: var(--global-border-color);` for `.contact-info-part` within `body.dark-theme`, and `color: var(--main-text-color);` for its content (`p`, `.contact-info-item .text p`, `.contact-info-item .text a`) and icons (`.contact-info-item .icon i`).
  - Added CSS rules to set `background-color: var(--main-bg-color);` and `border-color: var(--global-border-color);` for `.contact-page-form` within `body.dark-theme`, and `color: var(--main-text-color);` for its content (`h4`, `p`, `label`).
  - Added CSS rules to set `background-color: var(--secondary-bg-color);`, `color: var(--main-text-color);`, and `border-color: var(--global-border-color);` for `.contact-page-form .form-control` within `body.dark-theme`, and `color: rgba(255, 255, 255, 0.7);` for its `::placeholder`.

## FAQs Page Dark Theme Adaptation (August 10, 2025)

**Objective:** Ensure various sections and components on the FAQs page (`app/faqs/page.js`) are dark theme compatible, including background and text colors.

**Summary of Changes:**
- **`app/globals.css`:**
  - Added CSS rules to set `background-color: var(--main-bg-color);` and `border-color: var(--global-border-color);` for `.accordion-item-four` within `body.dark-theme`.
  - Added CSS rules to set `background-color: var(--main-bg-color);`, `color: var(--main-text-color);`, and `border-color: var(--global-border-color);` for `.accordion-item-four .accordion-button` within `body.dark-theme`.
  - Added CSS rules to set `color: var(--main-text-color);` for `.accordion-item-four .accordion-button .title`, `.accordion-item-four .accordion-body p`, and `.accordion-item-four .accordion-button .icon i` within `body.dark-theme`.
  - Added CSS rules to set `background-color: var(--main-bg-color);` and `border-color: var(--global-border-color);` for `.service-get-consultations-wrap` within `body.dark-theme`, and `color: var(--main-text-color);` for its left content (`h5`, `p`, `a`).
  - Added CSS rules to set `background-color: var(--main-bg-color);` and `border-color: var(--global-border-color);` for `.get-consultations-form-area` within `body.dark-theme`, and `color: var(--main-text-color);` for its title (`h4`).
  - Added CSS rules to set `background-color: var(--secondary-bg-color);`, `color: var(--main-text-color);`, and `border-color: var(--global-border-color);` for `.get-consultations-form .form-control` within `body.dark-theme`, and `color: rgba(255, 255, 255, 0.7);` for its `::placeholder`.
  - Added CSS rules to set `background-color: var(--secondary-bg-color);`, `color: var(--main-text-color);`, and `border-color: var(--global-border-color);` for `.get-consultations-form select` and its `option` elements within `body.dark-theme`.

## Pricing Page Dark Theme Adaptation (August 10, 2025)

**Objective:** Ensure various sections and components on the Pricing page (`app/pricing/page.js`) are dark theme compatible, including background and text colors.

**Summary of Changes:**
- **`app/globals.css`:**
  - Added CSS rules to set `background-color: var(--main-bg-color);` for `.bgc-black` within `body.dark-theme` to ensure black backgrounds adapt to the dark theme.
  - Added CSS rules to set `background-color: var(--main-bg-color);` and `border-color: var(--global-border-color);` for `.pricing-item` within `body.dark-theme`, and `color: var(--main-text-color);` for its content (`title`, `text`, `included`, `list-style-one li`, `list-style-one li i`, `price`).
  - Added CSS rules to set `background-color: var(--secondary-bg-color);`, `color: var(--main-text-color);`, and `border-color: var(--global-border-color);` for `.pricing-item .form-control` within `body.dark-theme`, and `color: rgba(255, 255, 255, 0.7);` for its `::placeholder`.
  - Added CSS rules to set `background-color: var(--secondary-bg-color);`, `color: var(--main-text-color);`, and `border-color: var(--global-border-color);` for `.pricing-item select` and its `option` elements within `body.dark-theme`.
  - Added CSS rules to set `background-color: var(--secondary-bg-color);`, `color: var(--main-text-color);`, and `border-color: var(--global-border-color);` for `.pricing-tab li button` within `body.dark-theme`.
  - Added CSS rules to set `background-color: var(--tekprof-primary-color);`, `color: white;`, and `border-color: var(--tekprof-primary-color);` for `.pricing-tab li button.active` within `body.dark-theme`.

## Blog Page Dark Theme Adaptation (August 10, 2025)

**Objective:** Ensure various sections and components on the Blog page (`app/blog/page.js`) are dark theme compatible, including background and text colors.

**Summary of Changes:**
- **`app/globals.css`:**
  - Added CSS rules to set `background-color: var(--main-bg-color);` and `border-color: var(--global-border-color);` for `.blog-standard-item` within `body.dark-theme`.
  - Added CSS rules to set `color: var(--main-text-color);` for `.blog-standard-item .blog-meta-two li`, `.blog-standard-item .blog-meta-two li a`, `.blog-standard-item h3 a`, and `.blog-standard-item p` within `body.dark-theme`.
  - Added CSS rules to set `background-color: var(--main-bg-color);` and `border-color: var(--global-border-color);` for `.blog-sidebar .widget` within `body.dark-theme`.
  - Added CSS rules to set `color: var(--heading-color);` for `.blog-sidebar .widget .widget-title` within `body.dark-theme`.
  - Added CSS rules to set `background-color: var(--secondary-bg-color);`, `color: var(--main-text-color);`, and `border-color: var(--global-border-color);` for `.blog-sidebar .widget-search form .form-control` within `body.dark-theme`, and `color: rgba(255, 255, 255, 0.7);` for its `::placeholder`.
  - Added CSS rules to set `color: var(--main-text-color);` for `.blog-sidebar .widget-search form .searchbutton` within `body.dark-theme`.
  - Added CSS rules to set `color: var(--main-text-color);` for `.blog-sidebar .widget-category ul li a` and `.blog-sidebar .widget-category ul li span` within `body.dark-theme`.
  - Added CSS rules to set `color: var(--main-text-color);` for `.blog-sidebar .widget-news ul li .content h5 a` and `.blog-sidebar .widget-news ul li .content .date` within `body.dark-theme`.
  - Added CSS rules to set `background-color: var(--secondary-bg-color);`, `color: var(--main-text-color);`, and `border-color: var(--global-border-color);` for `.blog-sidebar .widget-tags .tag-clouds a` within `body.dark-theme`.
  - Added CSS rules to set `background-color: var(--main-bg-color);` and `border-color: var(--global-border-color);` for `.blog-sidebar .widget-cta` within `body.dark-theme`.
  - Added CSS rules to set `color: var(--main-text-color);` for `.blog-sidebar .widget-cta h3` within `body.dark-theme`.

## Features Section Dark Theme Adaptation (August 10, 2025)

**Objective:** Ensure the text within the `div` with class `container features` respects the dark theme and has white text color.

**Summary of Changes:**
- **`app/globals.css`:** Added CSS rule to set `color: var(--main-text-color);` for `body.dark-theme .container.features`.

## Blog Details Page Dark Theme Adaptation (August 10, 2025)

**Objective:** Ensure various sections and components on the Blog Details page (`app/blog-details/page.js`) are dark theme compatible, including background and text colors.

**Summary of Changes:**
- **`app/blog-details/page.js`:**
  - Modified `backgroundImage` to `backgroundColor: "var(--main-bg-color)"` for the `banner-wrap` to ensure the banner background adapts to the dark theme.
  - Modified `backgroundImage` to `backgroundColor: "var(--main-bg-color)"` for the `widget widget-cta` to ensure the CTA widget background adapts to the dark theme.
- **`app/globals.css`:**
  - Added CSS rules to set `color: var(--main-text-color);` for `.blog-details-content h3`, `p`, `h4`, `h5` within `body.dark-theme`.
  - Added CSS rules to set `background-color: var(--secondary-bg-color);` and `border-color: var(--global-border-color);` for `blockquote` within `body.dark-theme`, and `color: var(--main-text-color);` for its `.text` and `.blockquote-footer`.
  - Added CSS rules to set `border-color: var(--global-border-color);` for `hr` within `body.dark-theme`.
  - Added CSS rules to set `color: var(--heading-color);` for `.tag-share .item h6` within `body.dark-theme`.
  - Added CSS rules to set `background-color: var(--secondary-bg-color);`, `color: var(--main-text-color);`, and `border-color: var(--global-border-color);` for `.tag-share .tag-clouds a` within `body.dark-theme`.
  - Added CSS rules to set `color: var(--main-text-color);` for `.tag-share .social-style-five a` within `body.dark-theme`.
  - Added CSS rules to set `background-color: var(--main-bg-color);` and `border-color: var(--global-border-color);` for `.admin-comment .comment-body` within `body.dark-theme`.
  - Added CSS rules to set `color: var(--main-text-color);` for `.admin-comment .comment-body .content h5`, `.author`, `p`, and `.social-icons a` within `body.dark-theme`.
  - Added CSS rules to set `color: var(--main-text-color);` for `.next-prev-blog .item .content h5 a` and `.date` within `body.dark-theme`.
  - Added CSS rules to set `background-color: var(--main-bg-color);` and `border-color: var(--global-border-color);` for `.comment-form` within `body.dark-theme`.
  - Added CSS rules to set `color: var(--main-text-color);` for `.comment-form h3`, `p`, `label` within `body.dark-theme`.
  - Added CSS rules to set `background-color: var(--secondary-bg-color);`, `color: var(--main-text-color);`, and `border-color: var(--global-border-color);` for `.comment-form .form-control` within `body.dark-theme`, and `color: rgba(255, 255, 255, 0.7);` for its `::placeholder`.

## Team Page Dark Theme Adaptation (August 10, 2025)

**Objective:** Ensure various sections and components on the Team page (`app/team/page.js`) are dark theme compatible, including background and text colors.

**Summary of Changes:**
- **`app/team/page.js`:**
  - Modified `src` of `team-page-right.jpg` to use an image API URL for better dark theme compatibility.
- **`app/globals.css`:**
  - Added CSS rules to set `color: var(--main-text-color);` for `.team-page-left-content p` within `body.dark-theme`.
  - Added CSS rules to set `color: var(--heading-color);` for `.circle-progress-item-two h4` within `body.dark-theme`.
  - Added CSS rules to set `background-color: var(--main-bg-color);` and `border-color: var(--global-border-color);` for `.team-item-two` within `body.dark-theme`.
  - Added CSS rules to set `color: var(--main-text-color);` for `.team-item-two .content h3 a`, `span`, `p`, and `.social-style-five a` within `body.dark-theme`.

**Next Steps:**
- Continue with further content and visual enhancements as needed.