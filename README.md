<div align="center">

# Bondeth & Salyna — Memories

**A personal web app that preserves our shared memories as a digital memory book of photos, stories, special moments, and milestones.**

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)

</div>

---

## Overview

This is a personal digital memory book made for my girlfriend and me. It turns our journey into a story you can page through, with a cover, introduction, a "together" timeline, a distance chapter, dreams, a letter, and a photo gallery, all wrapped in gentle animations and background music.

## Features

- **Book-style chapters:** Cover, Introduction, Together, Distance, Dreams, Adore, Letter, and Gallery.
- **Categorized photo gallery** with an archive view and a gallery manager, stored locally in IndexedDB.
- **HEIC photo support** through server-side conversion.
- **Distance map** showing the miles between us.
- **Animated details:** floating hearts, sparkles, click hearts, animated text, and scroll reveals.
- **Background music** and language switching.

## Tech Stack

| Area | Technology |
| --- | --- |
| Framework | Next.js 16 (App Router), React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS 4, shadcn/ui, Radix UI |
| Animation | GSAP |
| Storage | IndexedDB |

## Getting Started

### Prerequisites

- Node.js and npm

### Installation

```bash
git clone https://github.com/RithyBondeth/Bondeth-Salyna-Memories-Web.git
cd Bondeth-Salyna-Memories-Web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```text
Bondeth-Salyna-Memories-Web/
├── app/
│   ├── (book)/            # cover, introduction, together, distance, dreams,
│   │                      # adore, letter, gallery
│   └── api/heic/          # HEIC image conversion
├── components/memory-book/  # Pages, gallery, effects, music, map
├── shared/memory-book/      # Shared shell, sections, constants
└── public/assets/           # Photos
```

## Author

**Rithy Bondeth** — Full Stack Developer & AI Engineer

[![Portfolio](https://img.shields.io/badge/Portfolio-0A0A0A?style=for-the-badge&logo=vercel&logoColor=white)](https://bondeth.dev)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/RithyBondeth)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rithy-bondeth-484073282/)
