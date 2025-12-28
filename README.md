Genie — AI Content Generation Platform

Live Demo: [LINK](https://genie-ai-pied.vercel.app/)

📌 Overview

Genie is a modern, full-stack AI-powered web application that generates images, code, text, video, and music from user prompts.
The app leverages cutting-edge AI via the Gemini API, a scalable backend with Node.js + Express, and a modern frontend built with Next.js and TypeScript.

Genie is fully responsive, fast, and designed with a clean, minimal UI using Tailwind CSS and shadcn/ui components. State management is handled with Redux Toolkit, and authentication/data storage is powered by Supabase, with Prisma used as the ORM for database access and schema management.

🛠️ Tech Stack
Frontend

Next.js

TypeScript

Redux Toolkit

Tailwind CSS

shadcn/ui

CSS

Backend

Node.js

Express.js

Supabase (Authentication & Database)

Prisma ORM

AI & APIs

Gemini API (AI generation for text, code, images, video, and music)

✨ Features

🖼️ AI image generation from prompts

🧑‍💻 AI-generated code snippets

✍️ AI text content generation

🎬 AI video generation

🎵 AI music generation

🔐 User authentication with Supabase

🗄️ Database access & migrations via Prisma

📦 Centralized state management using Redux Toolkit

📱 Fully responsive UI

⚡ Fast rendering with Next.js App Router

📂 Project Structure
src/
├── app/            # Next.js app router pages
├── components/     # Reusable UI components
├── features/       # Redux slices
├── store/          # Redux store configuration
├── lib/            # Utilities & helpers
├── services/       # API & Gemini integrations
├── prisma/         # Prisma schema & migrations
├── styles/         # Global styles
├── types/          # TypeScript types
└── middleware.ts   # Auth & request handling

🚀 Getting Started
✅ Prerequisites

Node.js (v18+ recommended)

npm / pnpm / yarn

Supabase account

Gemini API key

📦 Install Dependencies
npm install


or

pnpm install

🔑 Environment Variables

Create a .env.local file:

NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
DATABASE_URL=your_database_url
GEMINI_API_KEY=your_gemini_api_key

🛠 Start Development Server
npm run dev


App will be available at:

http://localhost:3000

🏗 Build for Production
npm run build

▶️ Start Production Server
npm run start

🌐 Deployment

This project is deployed on Vercel:

https://brilliant-test-mu.vercel.app/

🧠 Future Improvements

Prompt history & favorites

Credit-based usage system

Streaming AI responses

More AI model options

Export generated content

📄 License

This project is licensed under the MIT License.

If you want, I can also:

Add Prisma setup commands (prisma migrate, prisma generate)

Create a database schema example

Add architecture diagrams

Optimize for GitHub & portfolio presentation

Just say the word 🚀
