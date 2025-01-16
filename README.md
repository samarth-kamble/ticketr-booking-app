<div align="center">
  <br />
    <a href="https://github.com/samarth-kamble" target="_blank">
      <img src="./public/thumbnail.png" alt="Project Banner">
    </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Typescript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Next_._JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="nodejs" />
    <img src="https://img.shields.io/badge/-Stripe-black?style=for-the-badge&logoColor=white&logo=stripe&color=008CDD" alt="stripe" />
    <img src="https://img.shields.io/badge/Bun-000?logo=bun&logoColor=fff" alt="bun" />
  </div>
  <h3 align="center">Ticketr - Real-time Event Ticketing Platform</h3>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)

## <a name="introduction">🤖 Introduction</a>

Welcome to Ticketr, your ultimate destination for seamless event creation and ticketing! Designed to empower event organizers and elevate attendee experiences, Ticketr makes event management and ticket purchasing effortless.

A cutting-edge, real-time event ticketing platform powered by Next.js 14, Convex, Clerk, and Stripe Connect. It boasts an advanced queue management system, live updates, and robust payment processing for a seamless user experience.

As an organizer, signing up is simple—complete Stripe Connect onboarding and start creating events in minutes. From setting event details to managing ticket quantities, publishing your event is just a few clicks away.

For attendees, Ticketr offers an intuitive way to explore exciting events. Browse available options, join a queue for your preferred event, and receive exclusive ticket offers. Complete your purchase within the time limit, and instantly access your digital ticket, equipped with a QR code for easy entry.

Ticketr ensures a secure and smooth experience for both organizers and attendees. Join the Ticketr community today and redefine how events are organized and enjoyed!

## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- TypeScript
- Convex
- Clerk
- ShadCN
- Tailwind CSS
- Stripe Connect
- Clerk
- Bun

## <a name="features">🔋 Features</a>

### For Event Attendees

- 🎫 Real-time ticket availability tracking
- ⚡ Smart queuing system with position updates
- 🕒 Time-limited ticket offers
- 📱 Mobile-friendly ticket management
- 🔒 Secure payment processing with Stripe
- 📲 Digital tickets with QR codes
- 💸 Automatic refunds for cancelled events

### For Event Organizers

- 💰 Direct payments via Stripe Connect
- 📊 Real-time sales monitoring
- 🎯 Automated queue management
- 📈 Event analytics and tracking
- 🔄 Automatic ticket recycling
- 🎟️ Customizable ticket limits
- ❌ Event cancellation with automatic refunds
- 🔄 Bulk refund processing

### Technical Features

- 🚀 Real-time updates using Convex
- 👤 Authentication with Clerk
- 💳 Payment processing with Stripe Connect
- 🌐 Server-side and client-side rendering
- 🎨 Modern UI with Tailwind CSS and shadcn/ui
- 📱 Responsive design
- 🛡️ Rate limiting for queue joins and purchases
- 🔒 Automated fraud prevention
- 🔔 Toast notifications for real-time feedback
- ✨ Beautiful, accessible components with shadcn/ui

### UI/UX Features

- 🎯 Instant feedback with toast notifications
- 🎨 Consistent design system using shadcn/ui
- ♿ Fully accessible components
- 🎭 Animated transitions and feedback
- 📱 Responsive design across all devices
- 🔄 Loading states and animations
- 💫 Micro-interactions for better engagement

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [bun](https://bun.sh/) (Bun Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/samarth-kamble/ticketr-booking-app.git
cd ticketr-booking-app
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
# Clerk Credentials
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# Convex Credentials
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=
CLERK_JWT_ISSUER_DOMAIN=

# https://dashboard.stripe.com/apikeys
# This is your test secret API key.
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=

```

Replace the placeholder values with your actual Convex & Clerk credentials. You can obtain these credentials by signing up on the [Convex](https://www.convex.dev/) and [Clerk](https://clerk.com/) websites.

**Running the Project**

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.
