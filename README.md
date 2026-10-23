# Mahjabin Alif Lamiya - Portfolio Website

A modern, professional portfolio website built with Next.js 15 App Router and Tailwind CSS, showcasing projects and professional experience.

## Features

- **Modern Design**: Clean, elegant design with navy blue, white, and subtle blue accents
- **Responsive**: Fully responsive on desktop, laptop, tablet, and mobile devices
- **Smooth Animations**: Polished animations and transitions
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Project Showcase**: Featured projects with detailed project pages
- **Resume Download**: Direct resume download functionality
- **Privacy-Focused**: No phone numbers or private addresses displayed

## Tech Stack

- [Next.js 15](https://nextjs.org/) - React framework with App Router
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [React 19](https://react.dev/) - UI library

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Add your resume:
   - Replace `public/resume.pdf` with your actual resume file

4. Add project images (optional):
   - Add images to `public/images/` folder as specified in `public/images/README-IMAGES.txt`

5. Update personal information:
   - Update email in `src/components/Contact.tsx`
   - Update educational details in `src/components/Education.tsx`
   - Update experience details in `src/components/Experience.tsx`
   - Update LinkedIn URL if different

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build

Build the production application:
```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Deployment

### Deploy to Vercel

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project" and import your repository
4. Vercel will automatically detect Next.js and configure build settings
5. Click "Deploy"

The build command is `npm run build` and the output directory is `.next` (handled automatically by Vercel).

### Manual Deployment

1. Build the project: `npm run build`
2. Upload the entire project to your hosting provider
3. Ensure Node.js is available and run `npm start`

## Project Structure

```
src/
├── app/                    # App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   └── projects/[id]/     # Dynamic project detail pages
├── components/            # React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Education.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
└── data/
    └── projects.ts        # Project data
```

## Personal Details Requiring Approval

The following placeholders need to be updated with your verified information:

- **Email**: `src/components/Contact.tsx` - Replace `[email-placeholder]`
- **Education**: `src/components/Education.tsx` - Add institution name, degree, field of study, year
- **Experience**: `src/components/Experience.tsx` - Add company name, position, duration, and verified responsibilities
- **Profile Photo**: `src/components/Hero.tsx` - Currently shows placeholder, enable when approved
- **Resume**: `public/resume.pdf` - Add your actual resume file
- **LinkedIn URL**: Update if different from current placeholder
- **Project Images**: Add to `public/images/` for better visual presentation

**Privacy Notes:**
- Phone number, WhatsApp, and home address are intentionally not included
- No API keys or secrets are present in the codebase
- Profile photo is optional and requires explicit approval before use

## License

This project is private and for personal use.
