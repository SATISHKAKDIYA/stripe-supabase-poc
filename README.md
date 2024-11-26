# Next.js with Supabase

This project is a Next.js application integrated with Supabase, a backend-as-a-service platform providing real-time database, authentication, and storage functionalities. 

## Features

- **Next.js** for building server-rendered and static websites.
- **Supabase** for backend services, including:
  - PostgreSQL database
  - Authentication
  - Realtime data sync
  - File storage

## Setup and Installation

1. **Clone the Repository**

   git clone git@github.com:satishkakdiya/stripe-supabase-poc.git

   cd stripe-supabase-poc

2. **Install Dependencies**

    npm install
    or
    yarn install

3. **Set Up Environment Variables**

Create a .env file in the root of the project and add the following:

    NEXT_PUBLIC_SUPABASE_URL=<Your Supabase Project URL>
    NEXT_PUBLIC_SUPABASE_ANON_KEY=<Your Supabase Anon Key>

    create payment table manually with fields id, name, email, card_number, expiry_date, and cvv and table name must be Payment.

4. **Start the Development Server**

Run the following command to start the development server:

    npm run dev
    # or
    yarn dev