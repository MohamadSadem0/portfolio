import type { Project } from './profile';

// A list of portfolio projects.  Each project can include a URL, a
// screenshot, a description and a set of tags.  To add your own
// projects simply append to this array.  The image path should be
// relative to the /src/assets folder and will be processed by Vite.
// Import custom artwork for the projects.  These images live in the /src/assets folder
// and were generated specifically for this portfolio.
import ecommerce from '../assets/ecommerce2.png';
import game from '../assets/game2.png';
import springboot from '../assets/springboot2.png';

export const projects: Project[] = [
  {
    slug: 'shopiishop',
    name: 'ShopiiShop E‑Commerce',
    description:
      'Multi‑vendor e‑commerce platform built with Next.js (TypeScript) and Spring Boot 3. Implements secure JWT authentication, realtime socket integration and containerised services deployed to Oracle VM.',
    image: ecommerce,
    tags: ['Spring Boot', 'Next.js', 'Docker', 'JWT'],
    link: '#',
  },
  {
    slug: 'game-dev',
    name: 'Game Development Projects',
    description:
      'Independent game projects developed using C++ and Unreal Engine, including prototypes showcased in the Epic Game Jam. Demonstrates creativity, rapid prototyping and strong algorithmic skills.',
    image: game,
    tags: ['C++', 'Unreal Engine', 'Game Dev'],
    link: '#',
  },
  {
    slug: 'spring-boot-training',
    name: 'Spring Boot Learning',
    description:
      'Hands‑on Spring Boot web development focusing on building secure back‑end services and REST APIs. Developed several mini‑projects during an intensive bootcamp while mastering deployment and security best practices.',
    image: springboot,
    tags: ['Spring Boot', 'Java', 'Web Development'],
    link: '#',
  },
];