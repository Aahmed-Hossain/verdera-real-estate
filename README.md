# Verdera Real Estate MERN Stack Website.

## [Live Link](https://fir-module51.web.app/)
Verdera is a real estate website with dashboard interface created with three separate role Admin, Agent & User.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Protected Routes](#protected-routes)
- [Screenshots](#screenshots)

## Features

- Users can buy properties from verified agents and can pay using valid cards, after successful payment user will get a email notification with details of the bought property & TransactionID.
- Admin can make an agent as Fraud so he can't able to add any Properties and all his unSold Properties will be deleted.
- Admin can add, delete, edit and see all Properties status.
- Admin can make new Admin & new Agent from dashboard.
- Only Verified Properties by Admin will be shown in the Site.
- Also have individual Profile Route for Admins, Agents & Users.
- Users able to post review for a properties and have right delete the reviews.
- Users have right to choose price range and agents have free right to accept any offer.
- Only agents have right to add Properties and able see , edit & delete his Added Properties.
- Agent able to see statistics of total sold properties, Amount($), Revenue by Recharts.
- Other Features:
  - Property Search
  - Social Login.
  - client testimonials and reviews.
  - Recaptcha validation
  - Strong password validation
 
- **Client Dashboard:**
  - Personalized dashboard for clients after login.
  - View and manage saved properties.
  - Access and update account information.
    
- **Agent Dashboard: [email: agnet1@gmail.com & password: 123456aA!]**
  - Dedicated dashboard for real estate agents.
  - Manage listed properties, including adding new ones and updating existing ones.
  - Access performance analytics and reports.

- **Admin Dashboard: [email: admin@gmail.com & password: 123456aA!]**
  - Admin-specific dashboard for managing the entire real estate platform.
  - Monitor and manage user accounts, properties, and agent profiles.
  - Review and moderate user-generated content.
## Tech Stack
- React
- Tailwind
- DaisyUI
- React Router
- Firebase Auth
- React Firebase hooks
- Toastify
- Stripe
- JSON Web Token
- 
## Installation

To run the project locally, follow these steps:

1. Clone the repository from GitHub.
2. Install dependencies using `npm install`.
3. Start the development server using `npm run dev`.

```bash
git clone https://github.com/Aahmed-Hossain/verdera-real-estate
cd verdera-real-estate
npm
npm run dev
```
## Protected Routes

- User cant access [Offer Property Page](https://fir-module51.web.app/offerNow/65683fcb223f469e38c97943) without authentication

## Screenshots

<p>Banner Page: </p>
<img src="/public/ss/banner.png" width="450px"/>

<p>Feature Page: </p>
<img src="/public/ss/featured.png" width="450px"/>

<p>PC Builder Page: </p>
<img src="/public/ss/pc-builder.png" width="450px"/>

<p>Items Page: </p>
<img src="/public/ss/items.png" width="450px"/>
