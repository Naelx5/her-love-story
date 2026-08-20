# Her Love Story

Birthday Celebration Experience — Plan

Overview

Build a single-page, deeply personal, interactive birthday celebration web

experience for a girlfriend/partner. The experience will be built inside the

existing TanStack Start project at /, replacing the placeholder. It will use

cinematic glassmorphism, ambient particles, smooth scroll-driven storytelling,

and Arabic typography with full RTL support.

Aesthetic Direction

Concept: "A Love Letter in Motion" — a sequence of remembered moments, wishes,

and intimate details presented as a floating, dreamlike journey.

Visual style: Dark cinematic background, glassmorphism cards, soft glowing

gradients, ambient floating particles, golden accents, deep indigo and rose

tones.

Motion: Smooth scroll-triggered reveals, micro-interactions (hover lift, heart

bursts, confetti), parallax layers, and gentle ambient drift.

Typography: Modern Arabic typeface via Google Fonts (e.g., IBM Plex Sans Arabic,

Vazirmatn, or Noto Sans Arabic) with thin/light weights for elegance; Latin

accents in a delicate sans-serif.

Information Needed (to be filled in by the user)

The experience will be strongest with personal details. The following questions

are asked to shape the copy and interactions:

Her name / the nickname you call her.

How many years you are celebrating (or a specific age if appropriate).

One or two shared memories or inside jokes to weave into the story.

A favorite song, flower, color, or quote of hers (optional).

Whether you want a romantic, playful, nostalgic, or grand cinematic vibe.

The final message you want to leave her with.

Implementation Steps

Replace the placeholder in src/routes/index.tsx with a full birthday route

component.

Install dependencies for particles and animations: canvas-confetti (for

celebratory bursts), plus GSAP or Framer Motion for scroll-driven reveals. Keep

the bundle reasonable.

Set up Google Fonts for Arabic typography in src/routes/__root.tsx head.

Create sections in src/routes/index.tsx:

Hero: her name in elegant Arabic typography, ambient particles, a single opening

line.

Memory cards: glassmorphism cards revealing shared memories or inside jokes as

she scrolls.

Wishes/gallery wall: floating polaroids or cards with short, poetic Arabic

messages.

Interactive moments: a "blow the candle" or click-to-reveal surprise, a confetti

burst, and a final love note.

Implement RTL and responsive design: set dir="rtl" on the root, use Tailwind RTL

utilities, ensure mobile and desktop both feel intimate.

Add micro-interactions: hover lift, scroll progress indicator, gentle parallax,

heart/flower particle bursts.

Write the Arabic copy: poetic, genuine, tailored to the user's inputs. Avoid

generic templates; every line should feel personal.

Test on desktop and mobile preview to verify performance, readability, and no

layout breaks.

Technical Details

All work lives in src/routes/index.tsx and src/routes/__root.tsx head fonts.

No backend or database needed; this is a static, emotional front-end experience.

Keep the existing TanStack Start router structure intact.

The route will use head() with a custom title/description in Arabic and English

for SEO/sharing.

Ensure particles and animations are GPU-accelerated and degrade gracefully on

low-power devices.

Output

A single, polished, responsive route at / that feels like a cinematic love

letter and is unforgettable to scroll through.

1 Labubu 2 nearly 2 years and in 2025 april 5 we start talking 3 how much lovely

our memories وبجانبها او اسفلها كنكتة ولحظة كانت بيننا ne içersiniz (AYRAAANNNN)

4

زهرة الزنبق

https://open.spotify.com/track/5TTGoX70AFrTvuEtqHK37S?si=8ad320a72b9a4592

الالوان المفضلة الكحلي والخمري الكلمة يلي اقولها لها هي فراشتي 5 اريد

النمط يكون لطيف متفاعل جميل وفيه ستيكرات جميلة وتفاعليه انت اختر الاجمل والافضل

ابدع في اختايرك المناسب 6 Happy 2nd Anniversary My Angel

Two years with you…

and somehow, I still don’t have enough words to explain how lucky I feel to have

you in my life.

You are one of the most beautiful things that ever happened to me.

I hope you achieve every dream you have, and I hope life gives you all the

happiness you deserve.

I hope you always keep that beautiful smile, because you don’t even know how

much it means to me and how much brighter my days become when I see it.

I’ll love you now, tomorrow, and forever.

And every single day, I’ll be more and more proud of you, proud of the person

you are and the person you’re becoming.

Thank you for every moment, every laugh, every memory, and for simply being you.

Two years ago, we started writing our story…

and I still want every next page to be with you. 

And NEVER forget!!!

No matter how much you grow up,

you’ll always be my little LABUUBUBBUB. 

I love you sooo much my butterfly

ملاحظة : خلي الموقع باللغة الانجليزية

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d3b8ff69-5452-468f-88d7-f130264404bb).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
