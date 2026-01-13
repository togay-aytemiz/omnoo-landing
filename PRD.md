# Product Requirements Document (PRD) - Omnoo

## 1. Product Overview
**Omnoo** is an AI-enabled meal planner app that acts as a personal chef. It creates personalized weekly meal plans based on user routines, preferences, and lifestyles.
The **Omnoo Landing Page** serves as the initial touchpoint to capture early interest (Waitlist) before the mobile app launch.

**Mascot**: Omnoo (Duck character).

## 2. Target Audience
- Busy professionals who want to eat healthy but lack planning time.
- People who want efficient cooking strategies ("Cook Once, Eat Twice").
- Users in Turkey (Primary) and English-speaking markets (Secondary).

## 3. Core Features (MVP)
### 3.1 Landing Page Structure
- **Desktop**: Split-screen design. Left side contains content (scrollable), Right side features a full-height (100vh) background image.
- **Mobile**: Single column layout. Content flows naturally with an adaptive background image.

### 3.2 Key Sections
- **Header**:
    - Logo: "Omnoo" (Poppins Semibold, Black).
    - Language Switcher: Toggle between TR (Default) and EN.
- **Hero**:
    - Headline: Value proposition (Fraunces Bold, 56px).
    - Sub-headline: Description (Outfit Regular, 20px).
    - Email Capture Form: Input field + "Join Waitlist" button.
    - Success State: "Thank you" message after submission.
- **Features Grid**:
    - 4 Key Value Props (Personalized, Cuisines, Cook Smart, Auto Groceries).
- **Footer**: Simplified copyright notice.

### 3.3 Internationalization (i18n)
- **Default Locale**: `tr` (Turkish).
- **Secondary Locale**: `en` (English).
- **Routing**: `src/middleware.ts` handles auto-detection and routing (`/` vs `/en`).

## 4. Design System
### 4.1 Typography
- **Headlines**: Fraunces (Google Font). Bold/Medium.
- **Body/UI**: Outfit (Google Font). Regular/SemiBold.
- **Logo**: Poppins (Google Font). SemiBold.

### 4.2 Color Palette
- **Primary**: Orange (`#FF6B4A`) - Used for CTAs.
- **Background**: Off-white (`#F9F9F8`).
- **Text**: Dark Gray (`#1A1A1A`) for headings, lighter gray for body.

### 4.3 Technical Implementation
- **Framework**: Next.js (App Router).
- **Styling**: Vanilla CSS Modules with CSS Variables (`src/theme/tokens.css`). No Tailwind.
- **State Management**: React `useState` for form handling.

## 5. Future Roadmap
- **Mobile App**: iOS and Android launch (Free during beta).
- **Integrations**: Connect Waitlist form to Airtable/Firebase.
- **Expansion**: Add detailed "How it works" sections below the fold.
