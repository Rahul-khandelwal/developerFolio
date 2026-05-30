# Staff Backend Engineer Portfolio - Project PRD

## 1. Project Overview
A high-fidelity, professional portfolio for a Staff Backend Engineer with 13+ years of experience. The design balances a "geeky" technical aesthetic (inspired by the Zed editor) with executive-level professional clarity.

## 2. Design Identity: "Zenith Technical"
- **Aesthetic**: Minimalist, high-density, code-inspired but content-first.
- **Typography**: `JetBrains Mono` for a technical, precise feel.
- **Color Palette (Dark Mode)**:
  - Surface: `#131313`
  - Primary (Accents/Headings): `#3fb950` (Zenith Green)
  - Secondary (Text/Metadata): High-contrast grays and muted syntax-like colors.
- **Color Palette (Light Mode)**:
  - Surface: `#f7f9ff`
  - Primary: `#3fb950`
- **Key UI Patterns**:
  - Horizontal high-density tiles for lists (Reading, YouTube).
  - Syntax-highlighting style proficiency bars for Expertise.
  - Three-zone layout for list items: [Visual/Icon] | [Content/Description] | [Metadata/Actions].

## 3. Global Navigation & Header
- **Desktop/Tablet**:
  - Left: Profile photo (circular) + `BACKEND_STAFF_ENG` (Name).
  - Center/Right: Links (About Me, Experience, Reading, YouTube).
  - Far Right: Theme Switcher (Light/Dark).
- **Mobile**:
  - Hamburger menu placed *before* the profile photo.
  - Sticky header for accessibility.
- **Footer**:
  - Left: Copyright and "BUILT_WITH_PRECISION" tagline.
  - Right: Social links (GitHub, LinkedIn, RSS).

## 4. Page Specifications

### A. About & Expertise
- **Hero**: Clean bio without redundant photos.
- **Sections**: "About Me" and "Core Expertise" both use primary green headings.
- **Expertise**: Proficiency bars with percentage labels, utilizing full-width real estate.

### B. Experience
- **Layout**: Timeline-style list of roles.
- **Content**: Company, role, dates, and bulleted impact statements.
- **Styling**: Green headings for section titles.

### C. Reading List
- **Organization**: Two vertical sections: "Books" and "Articles & Papers".
- **Structure**: Single-column horizontal tiles.
  - Left: Book thumbnail or Document icon.
  - Center: Title and description (vertically centered).
  - Right: Status (Active/Completed) and external links.

### D. YouTube
- **Layout**: Single-column 1x1 grid (horizontal tiles).
  - Left: Video thumbnail.
  - Center: Title and description.
  - Right: Metadata (Views, Date) and "Watch" action.

## 5. Technical Requirements
- **Responsiveness**: Optimized for Desktop (Full Width), Tablet (No sidebar, expanded header), and Mobile (Compact, Menu-first).
- **Theme**: Full support for Light and Dark modes with consistent token mapping.
- **Assets**: Professional headshot {{DATA:IMAGE:IMAGE_13}} used as the primary brand mark.