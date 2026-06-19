import { Lang } from "@/lib/i18n";

export const siteConfig = {
  name: "Gizem Seferoğlu",
  title: {
    tr: "SAP ABAP Yazılım Geliştirici",
    en: "SAP ABAP Software Developer",
  },
  bio: {
    tr: "Bilgisayar Mühendisliği altyapısına sahip, SAP ABAP alanında uzmanlaşmış yazılım geliştirici. Kurumsal ERP projelerinde finans, tedarik zinciri ve satış süreçlerine yönelik ölçeklenebilir çözümler geliştiriyorum.",
    en: "Computer Engineering graduate specialising in SAP ABAP development. I build scalable enterprise ERP solutions across finance, supply chain, and sales processes.",
  },
  email: "muh.gizemyigit@gmail.com",
  github: "https://github.com/gizemyigitt",
  linkedin: "https://www.linkedin.com/in/gizem-yigit-5a0257192",
  twitter: "https://twitter.com/gizemyigitt",
};

export const experiences = [
  {
    id: "vitycode",
    title:   { tr: "SAP ABAP Yazılım Geliştirici",  en: "SAP ABAP Software Developer"    },
    company: "VityCode Danışmanlık",
    period:  { tr: "Nis 2024 — Oca 2026",            en: "Apr 2024 — Jan 2026"            },
    bullets: {
      tr: [
        "Farklı sektörlerdeki büyük ölçekli kurumların ERP dönüşüm ve geliştirme projelerinde aktif rol üstlendi",
        "Finans, tedarik zinciri, satış, bakım ve kalite süreçlerine yönelik kurumsal ABAP uygulamaları geliştirdi",
        "RFC/BAPI tabanlı entegrasyon çözümleri, OData/CDS View servisleri ve ALV raporlama altyapıları kurdu",
        "Smart Forms ve SAPscript ile doküman yönetimi; e-dönüşüm uygulamaları hayata geçirdi",
        "Hata analizi ve debugging yoluyla sistem performansını iyileştirdi",
      ],
      en: [
        "Took an active role in ERP transformation and development projects for large-scale enterprises across multiple sectors",
        "Developed corporate ABAP applications for finance, supply chain, sales, maintenance, and quality processes",
        "Built RFC/BAPI-based integration solutions, OData/CDS View services, and ALV reporting infrastructure",
        "Implemented document management with Smart Forms & SAPscript; delivered e-transformation applications",
        "Improved system performance through error analysis and debugging",
      ],
    },
  },
  {
    id: "besler",
    title:   { tr: "Yazılım Destek Sorumlusu",       en: "Software Support Specialist"    },
    company: "Besler Group",
    period:  { tr: "Ara 2023 — Nis 2024",             en: "Dec 2023 — Apr 2024"            },
    bullets: {
      tr: [
        "İş birimlerinden gelen talepler doğrultusunda hata analizi, süreç iyileştirme ve teknik destek çalışmaları yürüttü",
        "SAP sistemlerinde kullanıcı sorunlarını tespit edip çözdü; iş sürekliliğini destekledi",
      ],
      en: [
        "Performed error analysis, process improvement, and technical support based on business unit requests",
        "Identified and resolved user issues in SAP systems, supporting business continuity",
      ],
    },
  },
];

export const skills = [
  { name: "SAP ABAP",           level: 92, category: { tr: "SAP Core",   en: "SAP Core"   } },
  { name: "BAPI / RFC",         level: 85, category: { tr: "SAP Core",   en: "SAP Core"   } },
  { name: "CDS Views",          level: 80, category: { tr: "SAP Core",   en: "SAP Core"   } },
  { name: "OData",              level: 76, category: { tr: "Entegrasyon", en: "Integration"} },
  { name: "ALV Raporlama",      level: 88, category: { tr: "Raporlama",  en: "Reporting"  } },
  { name: "Smart Forms",        level: 80, category: { tr: "Doküman",    en: "Document"   } },
  { name: "Dialog Programming", level: 74, category: { tr: "ABAP",       en: "ABAP"       } },
  { name: "SQL",                level: 72, category: { tr: "Veritabanı", en: "Database"   } },
  { name: "Debugging",          level: 88, category: { tr: "Araç",       en: "Tool"       } },
  { name: "ERP Süreçleri",      level: 82, category: { tr: "Domain",     en: "Domain"     } },
];

export const certifications = [
  { name: "SAP ABAP Bootcamp",    issuer: "Renova Consulting" },
  { name: "Agile Development Day", issuer: "Coderspace"      },
];

export const languages = [
  { name: { tr: "Türkçe",    en: "Turkish" },  level: 5 },
  { name: { tr: "İngilizce", en: "English" },  level: 3 },
];

export const projects = [
  {
    id: "crypto-hype-scanner",
    title: "Crypto Hype Scanner",
    description: {
      tr: "Binance ve CoinGecko verilerini birleştirerek hacim, trend ve volatilite skorlarına göre kripto paraları sıralayan real-time dashboard.",
      en: "A real-time dashboard combining Binance and CoinGecko data to rank cryptocurrencies by volume, trend, and volatility scores.",
    },
    longDescription: {
      tr: "Binance 24h ticker verileri ile CoinGecko trending endpoint'ini harmanlayan bu proje, Volume %50 + Trending %30 + Volatility %20 ağırlıklı bir skorlama algoritması kullanıyor. SWR ile 30 saniyelik otomatik yenileme mevcut.",
      en: "This project blends Binance 24h ticker data with the CoinGecko trending endpoint using a weighted scoring algorithm: Volume 50% + Trending 30% + Volatility 20%. Auto-refresh every 30 seconds via SWR.",
    },
    tech: ["Next.js 16", "TypeScript", "TailwindCSS", "SWR", "Binance API", "CoinGecko API"],
    github: "https://github.com/gizemyigitt/crypto-hype-scanner",
    demo: null,
    featured: true,
    status: "active",
    year: 2025,
  },
  {
    id: "portfolio-site",
    title: "Portfolio & Blog",
    description: {
      tr: "Next.js 16 App Router ile oluşturulmuş kişisel portfolyo ve teknik blog sitesi.",
      en: "Personal portfolio and technical blog built with Next.js 16 App Router.",
    },
    longDescription: {
      tr: "Bu sitenin kendisi. Next.js 16 App Router, TailwindCSS v4, Framer Motion ve TR/EN dil desteği ile sıfırdan inşa edildi.",
      en: "This very site. Built from scratch with Next.js 16 App Router, TailwindCSS v4, Framer Motion, and full TR/EN i18n support.",
    },
    tech: ["Next.js 16", "TypeScript", "TailwindCSS", "Framer Motion"],
    github: "https://github.com/gizemyigitt/portfolio",
    demo: "https://gizemyigitt.vercel.app",
    featured: true,
    status: "active",
    year: 2026,
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
      tr: "Binance REST API'sını kullanarak real-time fiyat ve hacim verisi çeken bir Next.js dashboard'u sıfırdan inşa ediyoruz.",
      en: "We build a Next.js dashboard from scratch that pulls real-time price and volume data using the Binance REST API.",
    },
    content: `
## Giriş

Binance, geliştiriciler için kapsamlı bir API sunar. Bu yazıda REST endpoint'lerini kullanarak kripto verilerini çeken bir Next.js uygulaması oluşturacağız.

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
      tr: "Server Components ve Client Components arasındaki farkı, ne zaman hangisini kullanacağınızı ele alıyoruz.",
      en: "We cover the difference between Server and Client Components and when to use each.",
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
      tr: "TypeScript ile Tip Güvenli Scoring Algoritması",
      en: "Type-Safe Scoring Algorithm with TypeScript",
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

export type Experience = typeof experiences[number];
export type Project    = typeof projects[number];
export type BlogPost   = typeof blogPosts[number];

export function getLang<T>(obj: { tr: T; en: T }, lang: Lang): T {
  return obj[lang];
}
