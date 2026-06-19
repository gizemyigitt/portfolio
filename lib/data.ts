import { Lang } from "@/lib/i18n";

export const siteConfig = {
  name: "Ad Soyad",
  title: {
    tr: "Full Stack Developer",
    en: "Full Stack Developer",
  },
  bio: {
    tr: "Modern web uygulamaları ve veri odaklı projeler geliştiriyorum. Özellikle fintech ve kripto alanındaki ürünlere ilgi duyuyorum.",
    en: "I build modern web applications and data-driven projects, with a special interest in fintech and crypto products.",
  },
  email: "ornek@email.com",
  github: "https://github.com/kullanici",
  linkedin: "https://linkedin.com/in/kullanici",
  twitter: "https://twitter.com/kullanici",
};

export const skills = [
  { name: "TypeScript",       level: 90, category: { tr: "Dil",        en: "Language"  } },
  { name: "React / Next.js",  level: 92, category: { tr: "Frontend",   en: "Frontend"  } },
  { name: "TailwindCSS",      level: 88, category: { tr: "Frontend",   en: "Frontend"  } },
  { name: "Node.js",          level: 80, category: { tr: "Backend",    en: "Backend"   } },
  { name: "Python",           level: 75, category: { tr: "Dil",        en: "Language"  } },
  { name: "PostgreSQL",       level: 72, category: { tr: "Veritabanı", en: "Database"  } },
  { name: "Redis",            level: 65, category: { tr: "Veritabanı", en: "Database"  } },
  { name: "Docker",           level: 68, category: { tr: "DevOps",     en: "DevOps"    } },
  { name: "Git",              level: 90, category: { tr: "Araç",       en: "Tool"      } },
  { name: "REST API",         level: 88, category: { tr: "Backend",    en: "Backend"   } },
];

export const projects = [
  {
    id: "crypto-hype-scanner",
    title: "Crypto Hype Scanner",
    description: {
      tr: "Binance ve CoinGecko verilerini birleştirerek hacim, trend ve volatilite skorlarına göre kripto paraları sıralayan real-time dashboard.",
      en: "A real-time dashboard that combines Binance and CoinGecko data to rank cryptocurrencies by volume, trend, and volatility scores.",
    },
    longDescription: {
      tr: "Binance 24h ticker verileri ile CoinGecko trending endpoint'ini harmanlayan bu proje, Volume %50 + Trending %30 + Volatility %20 ağırlıklı bir skorlama algoritması kullanıyor. SWR ile 30 saniyelik otomatik yenileme mevcut.",
      en: "This project blends Binance 24h ticker data with the CoinGecko trending endpoint using a weighted scoring algorithm: Volume 50% + Trending 30% + Volatility 20%. Auto-refresh every 30 seconds via SWR.",
    },
    tech: ["Next.js 16", "TypeScript", "TailwindCSS", "SWR", "Binance API", "CoinGecko API"],
    github: "https://github.com/kullanici/crypto-hype-scanner",
    demo: null,
    featured: true,
    status: "active",
    year: 2025,
  },
  {
    id: "portfolio-site",
    title: "Portfolio & Blog",
    description: {
      tr: "Next.js 16 App Router ile oluşturulmuş kişisel portfolyo ve teknik blog sitesi. Framer Motion animasyonları ve tam responsive tasarım.",
      en: "Personal portfolio and technical blog built with Next.js 16 App Router, Framer Motion animations, and fully responsive design.",
    },
    longDescription: {
      tr: "Bu sitenin kendisi. Next.js 16'nın App Router mimarisi, TailwindCSS v4, Framer Motion animasyonları kullanılarak sıfırdan inşa edildi.",
      en: "This very site. Built from scratch using Next.js 16 App Router architecture, TailwindCSS v4, and Framer Motion animations.",
    },
    tech: ["Next.js 16", "TypeScript", "TailwindCSS", "Framer Motion"],
    github: "https://github.com/kullanici/portfolio",
    demo: "https://portfoliom.com",
    featured: true,
    status: "active",
    year: 2026,
  },
  {
    id: "task-manager-api",
    title: "Task Manager REST API",
    description: {
      tr: "JWT kimlik doğrulama, role tabanlı yetkilendirme ve PostgreSQL ile tam featured bir görev yönetim API'si.",
      en: "A full-featured task management API with JWT auth, role-based authorization, and PostgreSQL.",
    },
    longDescription: {
      tr: "Express.js + TypeScript ile yazılmış, Prisma ORM kullanan, Redis cache entegrasyonu olan, Docker ile containerize edilmiş bir REST API projesi.",
      en: "A REST API written in Express.js + TypeScript, using Prisma ORM, Redis cache integration, and containerized with Docker.",
    },
    tech: ["Node.js", "Express", "TypeScript", "PostgreSQL", "Prisma", "Redis", "Docker"],
    github: "https://github.com/kullanici/task-manager-api",
    demo: null,
    featured: false,
    status: "completed",
    year: 2025,
  },
];

export const blogPosts = [
  {
    slug: "binance-api-ile-kripto-dashboard",
    title: {
      tr: "Binance API ile Kripto Dashboard Nasıl Yapılır?",
      en: "How to Build a Crypto Dashboard with Binance API",
    },
    excerpt: {
      tr: "Binance'in WebSocket ve REST API'larını kullanarak real-time fiyat ve hacim verisi çeken bir Next.js dashboard'u sıfırdan inşa ediyoruz.",
      en: "We build a Next.js dashboard from scratch that pulls real-time price and volume data using Binance REST and WebSocket APIs.",
    },
    content: `
## Giriş

Binance, geliştiriciler için kapsamlı bir API sunar. Bu yazıda hem REST hem de WebSocket endpoint'lerini kullanarak kripto verilerini çeken bir Next.js uygulaması oluşturacağız.

## Gereksinimler

- Node.js 18+
- Next.js 14+
- Binance API anahtarı (sadece okuma izniyle yeterli)

## 1. API Route Oluşturma

\`\`\`typescript
// app/api/binance/ticker/route.ts
export async function GET() {
  const res = await fetch(
    'https://api.binance.com/api/v3/ticker/24hr',
    { next: { revalidate: 30 } }
  );
  const data = await res.json();
  return Response.json(data);
}
\`\`\`

## 2. SWR ile Real-Time Güncelleme

SWR kütüphanesi ile her 30 saniyede otomatik yenileme:

\`\`\`typescript
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(r => r.json());

export function useTicker() {
  return useSWR('/api/binance/ticker', fetcher, {
    refreshInterval: 30000,
  });
}
\`\`\`

## 3. Veriyi Filtrelemek ve Sıralamak

Binance 1500+ çifti döndürür. Sadece USDT çiftlerini alıp hacime göre sıralıyoruz:

\`\`\`typescript
const filtered = data
  .filter((t: Ticker) => t.symbol.endsWith('USDT'))
  .sort((a: Ticker, b: Ticker) =>
    parseFloat(b.quoteVolume) - parseFloat(a.quoteVolume)
  )
  .slice(0, 50);
\`\`\`

## Sonuç

Bu yapıyla dakikalar içinde çalışan bir kripto dashboard'u oluşturabilirsiniz.
    `,
    tags: ["Next.js", "TypeScript", "Binance API", "SWR"],
    readTime: 8,
    publishedAt: "2025-12-15",
  },
  {
    slug: "nextjs-server-vs-client-components",
    title: {
      tr: "Next.js App Router: Server vs Client Components",
      en: "Next.js App Router: Server vs Client Components",
    },
    excerpt: {
      tr: "Server Components ve Client Components arasındaki farkı, ne zaman hangisini kullanacağınızı ve sık yapılan hataları ele alıyoruz.",
      en: "We cover the difference between Server and Client Components, when to use each, and common mistakes.",
    },
    content: `
## Server Components Neden Önemli?

Next.js App Router ile gelen Server Components, React'in en büyük paradigma değişiklerinden biri.

## Temel Fark

| Özellik | Server Component | Client Component |
|---------|-----------------|-----------------|
| Render yeri | Sunucu | Tarayıcı |
| useState/useEffect | ❌ | ✅ |
| DB'ye direkt erişim | ✅ | ❌ |
| Bundle boyutu | 0 | JS bundle'a eklenir |

## Ne Zaman use client Kullanmalı?

\`\`\`typescript
'use client';
import { useState } from 'react';

export function SearchBar() {
  const [query, setQuery] = useState('');
  return <input onChange={e => setQuery(e.target.value)} />;
}
\`\`\`

## Sonuç

Server/Client ayrımını doğru yapmak hem performansı artırır hem de bundle boyutunu düşürür.
    `,
    tags: ["Next.js", "React", "Server Components"],
    readTime: 6,
    publishedAt: "2025-11-28",
  },
  {
    slug: "typescript-scoring-algoritmasi",
    title: {
      tr: "TypeScript ile Tip Güvenli Scoring Algoritması Tasarımı",
      en: "Designing a Type-Safe Scoring Algorithm with TypeScript",
    },
    excerpt: {
      tr: "Crypto Hype Scanner projesinde kullandığım çok faktörlü scoring algoritmasını nasıl tasarladığımı anlatıyorum.",
      en: "I walk through the multi-factor scoring algorithm I designed for the Crypto Hype Scanner project.",
    },
    content: `
## Neden Tip Güvenli Scoring?

Finansal algoritmalar, yanlış tip dönüşümlerinden kolayca zarar görür.

## Temel Tasarım

\`\`\`typescript
interface ScoringWeights {
  volume: number;
  trending: number;
  volatility: number;
}

interface ScoredCoin extends CoinData {
  score: number;
}
\`\`\`

## Normalizasyon

\`\`\`typescript
function normalize(value: number, min: number, max: number): number {
  if (max === min) return 0;
  return Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100));
}
\`\`\`

## Sonuç

Tip güvenli scoring algoritmaları, hataları runtime yerine compile-time'da yakalar.
    `,
    tags: ["TypeScript", "Algoritma", "Kripto"],
    readTime: 7,
    publishedAt: "2025-11-10",
  },
  {
    slug: "swr-ile-realtime-veri-senkronizasyonu",
    title: {
      tr: "SWR ile Real-Time Veri Senkronizasyonu",
      en: "Real-Time Data Sync with SWR",
    },
    excerpt: {
      tr: "SWR'nin cache stratejileri, revalidasyon mantığı ve polling yapısını derinlemesine inceliyoruz.",
      en: "A deep dive into SWR's cache strategies, revalidation logic, and polling patterns.",
    },
    content: `
## SWR Nedir?

SWR (stale-while-revalidate), Vercel'in geliştirdiği React data-fetching kütüphanesidir.

## Temel Kullanım

\`\`\`typescript
const { data, error, isLoading } = useSWR('/api/hype', fetcher);
\`\`\`

## Polling

\`\`\`typescript
useSWR('/api/hype', fetcher, {
  refreshInterval: 30000,
  revalidateOnFocus: true,
  dedupingInterval: 5000,
});
\`\`\`

## Sonuç

SWR, kripto gibi sık değişen veri için idealdir.
    `,
    tags: ["SWR", "React", "Next.js", "Performance"],
    readTime: 9,
    publishedAt: "2025-10-22",
  },
];

export type Project = typeof projects[number];
export type BlogPost = typeof blogPosts[number];
export function getLang<T>(obj: { tr: T; en: T }, lang: Lang): T {
  return obj[lang];
}
