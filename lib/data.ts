import { Lang } from "@/lib/i18n";

export const siteConfig = {
  name: "Gizem Seferoğlu",
  title: {
    tr: "Bilgisayar Mühendisi",
    en: "Computer Engineer",
  },
  bio: {
    tr: "Bu siteyi hem kendime ait bir bilgi arşivi oluşturmak hem de deneyimlerimi paylaşmak için hazırladım. Burada SAP ve ABAP üzerine teknik içerikler, kariyer yolculuğumdan notlar, ilgimi çeken teknolojiler ve zaman içinde öğrendiğim küçük ipuçları bulabilirsin.\n\nKısacası, burası öğrenmeye ve gelişmeye devam eden bir yazılımcının dijital köşesi.\n\nHoş geldin.",
    en: "I built this site to create a personal knowledge archive and share my experiences. Here you'll find technical content on SAP and ABAP, notes from my career journey, technologies that interest me, and small tips I've picked up along the way.\n\nIn short, this is the digital corner of a developer who keeps learning and growing.\n\nWelcome.",
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
    github: "https://github.com/gizemyigitt/Crypto_Hype_Scanner",
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
    demo: "https://gizem-seferoglu.vercel.app/",
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
    content: {
      tr: `
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
      en: `
## Introduction

Binance offers a comprehensive API for developers. In this post we'll build a Next.js application that pulls crypto data using its REST endpoints.

## 1. Creating the API Route

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

## 2. Real-Time Updates with SWR

\`\`\`typescript
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(r => r.json());

export function useTicker() {
  return useSWR('/api/binance/ticker', fetcher, {
    refreshInterval: 30000,
  });
}
\`\`\`

## 3. Filtering and Sorting the Data

\`\`\`typescript
const filtered = data
  .filter((t: Ticker) => t.symbol.endsWith('USDT'))
  .sort((a: Ticker, b: Ticker) =>
    parseFloat(b.quoteVolume) - parseFloat(a.quoteVolume)
  )
  .slice(0, 50);
\`\`\`

## Conclusion

With this structure you can have a working crypto dashboard up and running in minutes.
    `,
    },
    tags: ["Next.js", "TypeScript", "Binance API", "SWR"],
    readTime: 8,
    publishedAt: "2026-06-20",
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
    content: {
      tr: `
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
      en: `
## Why Server Components Matter

Server Components, introduced with the Next.js App Router, represent one of React's biggest paradigm shifts.

## The Core Difference

| Feature | Server Component | Client Component |
|---------|-----------------|-----------------|
| Where it renders | Server | Browser |
| useState/useEffect | ❌ | ✅ |
| Direct DB access | ✅ | ❌ |
| Bundle size | 0 | Added to the JS bundle |

## When Should You Use "use client"?

\`\`\`typescript
'use client';
import { useState } from 'react';

export function SearchBar() {
  const [query, setQuery] = useState('');
  return <input onChange={e => setQuery(e.target.value)} />;
}
\`\`\`

## Conclusion

Getting the Server/Client split right both boosts performance and shrinks your bundle size.
    `,
    },
    tags: ["Next.js", "React", "Server Components"],
    readTime: 6,
    publishedAt: "2026-06-17",
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
    content: {
      tr: `
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
      en: `
## Why Type-Safe Scoring?

Financial algorithms are easily broken by incorrect type conversions.

## Core Design

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

## Conclusion

Type-safe scoring algorithms catch errors at compile-time instead of at runtime.
    `,
    },
    tags: ["TypeScript", "Algoritma", "Kripto"],
    readTime: 7,
    publishedAt: "2026-06-11",
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
    content: {
      tr: `
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
      en: `
## What Is SWR?

SWR (stale-while-revalidate) is a React data-fetching library built by Vercel.

## Basic Usage

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

## Conclusion

SWR is ideal for fast-changing data like crypto prices.
    `,
    },
    tags: ["SWR", "React", "Next.js", "Performance"],
    readTime: 9,
    publishedAt: "2026-06-05",
  },
  {
    slug: "search-help-exit-ile-dinamik-filtreleme",
    title: {
      tr: "Search Help Exit ile Dinamik Filtreleme ve Otomatik Gösterim",
      en: "Dynamic Filtering and Auto-Display with Search Help Exit",
    },
    excerpt: {
      tr: "SAP ABAP'ta Search Help Exit kullanarak arama yardımını runtime'da dinamik olarak filtrelemeyi ve popup açmadan doğrudan liste göstermeyi inceliyoruz.",
      en: "We explore how to use SAP ABAP Search Help Exit to dynamically filter search help results at runtime and display them directly without a popup.",
    },
    content: {
      tr: `
## Giriş

SAP projelerinde kullanıcıya sunulan F4 arama yardımlarını (Search Help) belirli kriterlere göre dinamik olarak filtrelemek sık karşılaşılan bir gereksinimdir. Örneğin bir sipariş ekranında, kullanıcının seçebileceği hareket kodlarının yalnızca kendi fabrikasına (WERKS) ait olanlarla sınırlandırılması gerekebilir.

Bu yazıda **Search Help Exit** mekanizmasını kullanarak bu filtrelemeyi nasıl gerçekleştirdiğimi ve arama yardımının popup ekranı açmadan doğrudan liste sunmasını nasıl sağladığımı anlatıyorum.

## Search Help Exit Nedir?

Search Help Exit, standart bir Function Module olan **F4IF_SHLP_EXIT_MASSVARNAME**'in kopyalanmasıyla oluşturulan özel bir FM'dir. SAP, arama yardımının farklı adımlarında (SELONE, PRESEL, SELECT, DISP, vb.) bu FM'i otomatik olarak çağırır. Biz de ilgili adımı yakalayarak kayıtları manipüle edebiliriz.

## Adım 1 — Search Help Tanımı

Öncelikle SE11'de arama yardımı oluşturulur. Örneğimizde **ZMM_SH_MOVEMENT** adlı Search Help, **ZMMT_MOVEMENT** tablosunu selection method olarak kullanır.

![ZMM_SH_MOVEMENT Search Help tanımı — SE11](/blog/search-help-exit/search-help-exit-tanim.jpeg)

Exit alanına oluşturacağımız FM'in adını yazıyoruz: **FM_EXIT**

Dialog tipi olarak **"Değer Sınırlamalı Diyalog"** (Dialog with value restriction) seçilmelidir — bu sayede kayıtlar FM içinde runtime'da düzenlenebilir hale gelir.

Eğer popup ekranı hiç açılmadan sonuçların direkt gösterilmesi isteniyorsa **"Hemen Görüntüle"** (Immediate Display) seçeneği de işaretlenmelidir.

## Adım 2 — FM_EXIT Oluşturma

F4IF_SHLP_EXIT_MASSVARNAME fonksiyonu kopyalanarak **FM_EXIT** oluşturulur. Interface aynen korunur.

\`\`\`abap
FUNCTION FM_EXIT.
*"-----------------------------------------------------------------------
*"*"Local Interface:
*"  TABLES
*"      SHLP_TAB  TYPE  SHLP_DESCR_TAB_T
*"      RECORD_TAB  STRUCTURE  SEAHLPRES
*"  CHANGING
*"      VALUE(SHLP)  TYPE  SHLP_DESCR_T
*"      VALUE(CALLCONTROL)  LIKE  DDSHF4CTRL
*"-----------------------------------------------------------------------

  DATA: lv_werks  TYPE eban-werks,
        lv_string TYPE c LENGTH 4.

  IMPORT werks = lv_werks FROM MEMORY ID 'ZWERKS'.

  IF callcontrol-step = 'DISP'.
    LOOP AT record_tab.
      lv_string = record_tab-string+23(4).
      IF lv_string NE lv_werks.
        DELETE record_tab.
      ENDIF.
    ENDLOOP.

    FREE MEMORY ID 'ZWERKS'.
  ENDIF.

ENDFUNCTION.
\`\`\`

## Kodun Detayı

**CALLCONTROL-STEP = 'DISP'** adımı, kayıtların ekrana basılmadan hemen önceki aşamadır. Bu adımı yakalayarak **RECORD_TAB** içindeki kayıtları manipüle edebiliriz.

**RECORD_TAB-STRING** alanı, tüm arama yardımı kolonlarını art arda karakterler halinde tutar. \`+23(4)\` ifadesi, WERKS alanının bu string içindeki offset ve uzunluğunu belirtir — bu değer her Search Help tanımına göre değişir.

**IMPORT ... FROM MEMORY ID** ile çağıran programın daha önce **EXPORT ... TO MEMORY ID** ile yazdığı fabrika bilgisi alınır. Bu, ekranlar arasında değer aktarmanın temiz bir yoludur.

## Adım 3 — Çağıran Programda MEMORY Yazımı

FM_EXIT çalışmadan önce, çağıran ABAP programında aktif WERKS değeri memory'e yazılmalıdır:

\`\`\`abap
EXPORT werks = sy-mandt TO MEMORY ID 'ZWERKS'.
\`\`\`

Ya da screen field değeriyle:

\`\`\`abap
EXPORT werks = gs_header-werks TO MEMORY ID 'ZWERKS'.
\`\`\`

## Sonuç

Bu yapı sayesinde:

- Kullanıcı F4 tuşuna bastığında Search Help otomatik olarak FM_EXIT'i tetikler
- FM, DISP adımında RECORD_TAB içinden sadece ilgili fabrikaya ait hareket kodlarını bırakır
- "Hemen Görüntüle" aktifse popup açılmadan filtrelenmiş liste direkt gösterilir
- Memory temizlenerek veri sızıntısı önlenir

Search Help Exit, standart arama yardımlarını projeye özgü iş kurallarına göre şeffaf biçimde uyarlamanın en temiz yöntemlerinden biridir.
    `,
      en: `
## Introduction

Dynamically filtering F4 search helps based on specific criteria is a common requirement in SAP projects. For example, on an order screen, the movement codes a user can select might need to be restricted to only those belonging to their own plant (WERKS).

In this post I explain how I achieved this filtering using the **Search Help Exit** mechanism, and how I made the search help display results directly without opening a popup screen.

## What Is a Search Help Exit?

A Search Help Exit is a custom Function Module created by copying the standard **F4IF_SHLP_EXIT_MASSVARNAME** module. SAP automatically calls this FM at different steps of the search help lifecycle (SELONE, PRESEL, SELECT, DISP, etc.). We can hook into the relevant step to manipulate the records.

## Step 1 — Defining the Search Help

First, the search help is created in SE11. In our example, the search help **ZMM_SH_MOVEMENT** uses the table **ZMMT_MOVEMENT** as its selection method.

![ZMM_SH_MOVEMENT Search Help definition — SE11](/blog/search-help-exit/search-help-exit-tanim.jpeg)

We enter the name of the FM we'll create in the exit field: **FM_EXIT**

The dialog type must be set to **"Dialog with value restriction"** — this allows the records to be edited dynamically inside the FM at runtime.

If the results should be shown directly without ever opening the popup screen, the **"Immediate Display"** option should also be checked.

## Step 2 — Creating FM_EXIT

**FM_EXIT** is created by copying the F4IF_SHLP_EXIT_MASSVARNAME function. The interface is kept exactly the same.

\`\`\`abap
FUNCTION FM_EXIT.
*"-----------------------------------------------------------------------
*"*"Local Interface:
*"  TABLES
*"      SHLP_TAB  TYPE  SHLP_DESCR_TAB_T
*"      RECORD_TAB  STRUCTURE  SEAHLPRES
*"  CHANGING
*"      VALUE(SHLP)  TYPE  SHLP_DESCR_T
*"      VALUE(CALLCONTROL)  LIKE  DDSHF4CTRL
*"-----------------------------------------------------------------------

  DATA: lv_werks  TYPE eban-werks,
        lv_string TYPE c LENGTH 4.

  IMPORT werks = lv_werks FROM MEMORY ID 'ZWERKS'.

  IF callcontrol-step = 'DISP'.
    LOOP AT record_tab.
      lv_string = record_tab-string+23(4).
      IF lv_string NE lv_werks.
        DELETE record_tab.
      ENDIF.
    ENDLOOP.

    FREE MEMORY ID 'ZWERKS'.
  ENDIF.

ENDFUNCTION.
\`\`\`

## Breaking Down the Code

The **CALLCONTROL-STEP = 'DISP'** step is the stage right before the records are rendered on screen. By hooking into this step, we can manipulate the records inside **RECORD_TAB**.

The **RECORD_TAB-STRING** field holds all search help columns concatenated as a single character string. The expression \`+23(4)\` specifies the offset and length of the WERKS field within that string — this value changes depending on each search help's definition.

**IMPORT ... FROM MEMORY ID** retrieves the plant information that the calling program previously wrote with **EXPORT ... TO MEMORY ID**. This is a clean way to pass values between screens.

## Step 3 — Writing to MEMORY in the Calling Program

Before FM_EXIT runs, the active WERKS value must be written to memory in the calling ABAP program:

\`\`\`abap
EXPORT werks = sy-mandt TO MEMORY ID 'ZWERKS'.
\`\`\`

Or using a screen field value:

\`\`\`abap
EXPORT werks = gs_header-werks TO MEMORY ID 'ZWERKS'.
\`\`\`

## Conclusion

With this setup:

- When the user presses F4, the search help automatically triggers FM_EXIT
- The FM keeps only movement codes belonging to the relevant plant within RECORD_TAB during the DISP step
- If "Immediate Display" is enabled, the filtered list is shown directly without opening a popup
- Memory is cleared afterward to prevent data leaks

Search Help Exit is one of the cleanest ways to transparently adapt standard search helps to project-specific business rules.
    `,
    },
    tags: ["SAP ABAP", "Search Help", "Function Module", "Dialog"],
    readTime: 6,
    publishedAt: "2026-06-24",
    coverImage: undefined,
  },
  {
    slug: "alv-grid-f4-dump-cozumu",
    title: {
      tr: "ALV Grid Alanları İçin F4 Yardımı Eklerken lvc_t_f4 Dump Problemi ve Çözümü",
      en: "Fixing lvc_t_f4 Dump When Registering F4 Help in ALV Grid",
    },
    excerpt: {
      tr: "ALV Grid üzerinde F4 yardımı eklerken lvc_t_f4 tipinin SORTED TABLE yapısından kaynaklanan dump problemini ve güvenli çözüm yöntemini inceliyoruz.",
      en: "Learn why lvc_t_f4 may cause dumps when registering F4 help in ALV Grid and how to solve it safely using a standard internal table.",
    },
    content: {
      tr: `
## Giriş

ALV Grid üzerinde belirli alanlar için özel **F4 (Search Help)** desteği eklemek istediğimizde, \`REGISTER_F4_FOR_FIELDS\` metoduna gönderilen tablo **lvc_t_f4** tipindedir.

İlk bakışta bu tabloya normal bir internal table gibi kayıt eklemek yeterli gibi görünse de, dinamik olarak alan eklenen senaryolarda beklenmedik **dump** hatalarıyla karşılaşabilirsiniz.

Bu yazıda bu problemin neden oluştuğunu ve güvenli bir şekilde nasıl çözülebileceğini adım adım anlatıyorum.

## Problemin Sebebi

\`lvc_t_f4\` tipi standart bir internal table değildir. SAP içerisinde aşağıdaki şekilde tanımlanmıştır:

\`\`\`abap
TYPE SORTED TABLE OF lvc_s_f4
WITH UNIQUE KEY fieldname.
\`\`\`

Bu nedenle tablo;

- Kayıtları sıralı olarak tutar.
- **fieldname** alanına göre benzersiz anahtar kullanır.
- Yanlış sırada eklenen kayıtları kabul etmez.

Dinamik olarak aşağıdaki gibi kayıt eklendiğinde:

\`\`\`abap
APPEND ls_f4 TO lt_f4.
\`\`\`

veya

\`\`\`abap
INSERT ls_f4 INTO TABLE lt_f4.
\`\`\`

alanlar sıralı değilse çalışma zamanında dump oluşabilir.

## Adım 1 — Standart Internal Table Oluşturma

Öncelikle F4 alanlarını eklemek için standart bir internal table tanımlıyoruz.

\`\`\`abap
DATA:
  lt_f4     TYPE lvc_t_f4,
  ls_f4     TYPE lvc_s_f4,
  lt_f4_std TYPE STANDARD TABLE OF lvc_s_f4 WITH DEFAULT KEY.
\`\`\`

Bu tabloya kayıt eklerken herhangi bir sıralama zorunluluğu bulunmaz.

## Adım 2 — F4 Alanlarını Standart Tabloya Eklemek

Alanlar normal şekilde **APPEND** edilerek standart tabloya eklenebilir.

\`\`\`abap
CLEAR ls_f4.
ls_f4-fieldname = 'ESAS_DOS_NO'.
ls_f4-register  = 'X'.
APPEND ls_f4 TO lt_f4_std.

CLEAR ls_f4.
ls_f4-fieldname = 'KNA1_NAME1'.
ls_f4-register  = 'X'.
APPEND ls_f4 TO lt_f4_std.

CLEAR ls_f4.
ls_f4-fieldname = 'KNA1_STCD2'.
ls_f4-register  = 'X'.
APPEND ls_f4 TO lt_f4_std.

CLEAR ls_f4.
ls_f4-fieldname = 'LFA1_NAME1'.
ls_f4-register  = 'X'.
APPEND ls_f4 TO lt_f4_std.

CLEAR ls_f4.
ls_f4-fieldname = 'LFA1_STCD2'.
ls_f4-register  = 'X'.
APPEND ls_f4 TO lt_f4_std.
\`\`\`

Bu aşamada kayıtların alfabetik sırada olması gerekmez.

## Adım 3 — Alanları Sıralamak

Tüm kayıtlar eklendikten sonra standart tablo **fieldname** alanına göre sıralanır.

\`\`\`abap
SORT lt_f4_std BY fieldname.
\`\`\`

Bu işlem sayesinde kayıtlar **lvc_t_f4** tipinin beklediği düzene getirilmiş olur.

## Adım 4 — lvc_t_f4 Tablosuna Aktarmak

Artık sıralanmış veriler güvenli şekilde hedef tabloya aktarılabilir.

\`\`\`abap
LOOP AT lt_f4_std INTO ls_f4.
  INSERT ls_f4 INTO TABLE lt_f4.
ENDLOOP.
\`\`\`

Daha sonra ALV Grid'e kayıt işlemi yapılabilir.

\`\`\`abap
CALL METHOD gr_grid->register_f4_for_fields
  EXPORTING
    it_f4 = lt_f4.
\`\`\`

## Sonuç

**lvc_t_f4**, standart bir internal table değil, **SORTED TABLE** olarak tanımlanmıştır. Bu nedenle dinamik olarak eklenen kayıtların sıralama kurallarına uygun olmaması çalışma zamanında dump oluşmasına neden olabilir.

Bu problemi önlemenin en güvenilir yöntemi, önce standart bir internal table kullanmak, tüm kayıtları bu tabloya eklemek, ardından **SORT** işlemini uygulayıp son olarak verileri **lvc_t_f4** tipine aktarmaktır.

Bu yaklaşım özellikle dinamik F4 alanlarının oluşturulduğu ALV Grid geliştirmelerinde daha okunabilir, sürdürülebilir ve güvenli bir çözüm sunmaktadır.
`,
      en: `
## Introduction

When we want to add custom **F4 (Search Help)** support for specific fields on an ALV Grid, the table passed to the \`REGISTER_F4_FOR_FIELDS\` method is of type **lvc_t_f4**.

At first glance, simply appending records to this table like a normal internal table seems sufficient — but in scenarios where fields are added dynamically, you can run into unexpected **dump** errors.

In this post I walk through why this problem occurs and how to solve it safely, step by step.

## Why the Problem Occurs

The \`lvc_t_f4\` type is not a standard internal table. SAP defines it as follows:

\`\`\`abap
TYPE SORTED TABLE OF lvc_s_f4
WITH UNIQUE KEY fieldname.
\`\`\`

Because of this, the table:

- Keeps its records sorted.
- Uses a unique key based on the **fieldname** field.
- Rejects records inserted out of order.

When records are added dynamically like this:

\`\`\`abap
APPEND ls_f4 TO lt_f4.
\`\`\`

or

\`\`\`abap
INSERT ls_f4 INTO TABLE lt_f4.
\`\`\`

a runtime dump can occur if the fields aren't already sorted.

## Step 1 — Creating a Standard Internal Table

First, we define a standard internal table to collect the F4 fields.

\`\`\`abap
DATA:
  lt_f4     TYPE lvc_t_f4,
  ls_f4     TYPE lvc_s_f4,
  lt_f4_std TYPE STANDARD TABLE OF lvc_s_f4 WITH DEFAULT KEY.
\`\`\`

There's no ordering requirement when appending to this table.

## Step 2 — Adding F4 Fields to the Standard Table

Fields can be appended normally to the standard table with **APPEND**.

\`\`\`abap
CLEAR ls_f4.
ls_f4-fieldname = 'ESAS_DOS_NO'.
ls_f4-register  = 'X'.
APPEND ls_f4 TO lt_f4_std.

CLEAR ls_f4.
ls_f4-fieldname = 'KNA1_NAME1'.
ls_f4-register  = 'X'.
APPEND ls_f4 TO lt_f4_std.

CLEAR ls_f4.
ls_f4-fieldname = 'KNA1_STCD2'.
ls_f4-register  = 'X'.
APPEND ls_f4 TO lt_f4_std.

CLEAR ls_f4.
ls_f4-fieldname = 'LFA1_NAME1'.
ls_f4-register  = 'X'.
APPEND ls_f4 TO lt_f4_std.

CLEAR ls_f4.
ls_f4-fieldname = 'LFA1_STCD2'.
ls_f4-register  = 'X'.
APPEND ls_f4 TO lt_f4_std.
\`\`\`

At this stage the records don't need to be in alphabetical order.

## Step 3 — Sorting the Fields

Once all records have been added, the standard table is sorted by the **fieldname** field.

\`\`\`abap
SORT lt_f4_std BY fieldname.
\`\`\`

This brings the records into the order that the **lvc_t_f4** type expects.

## Step 4 — Transferring to the lvc_t_f4 Table

The now-sorted data can be safely transferred to the target table.

\`\`\`abap
LOOP AT lt_f4_std INTO ls_f4.
  INSERT ls_f4 INTO TABLE lt_f4.
ENDLOOP.
\`\`\`

Registration with the ALV Grid can then proceed.

\`\`\`abap
CALL METHOD gr_grid->register_f4_for_fields
  EXPORTING
    it_f4 = lt_f4.
\`\`\`

## Conclusion

**lvc_t_f4** is not a standard internal table — it's defined as a **SORTED TABLE**. This means dynamically added records that don't follow the sorting rule can cause a runtime dump.

The most reliable way to prevent this is to first use a standard internal table, add all records to it, apply a **SORT**, and only then transfer the data into the **lvc_t_f4** type.

This approach offers a more readable, maintainable, and safe solution, especially in ALV Grid developments where F4 fields are created dynamically.
`,
    },
    tags: ["SAP ABAP", "ALV Grid", "F4 Help"],
    readTime: 5,
    publishedAt: "2026-06-30",
    coverImage: undefined,
  },
  {
    slug: "bapi-alv-grid-refresh-mesaj-guncelleme",
    title: {
      tr: "BAPI'den Dönen Hata Mesajlarının ALV Grid Üzerinde Görüntülenmemesi Sorunu",
      en: "Displaying BAPI Return Messages in ALV Grid After Refresh",
    },
    excerpt: {
      tr: "BAPI çağrısı sonrasında dönen hata mesajlarının ALV Grid üzerinde anında görünmemesi problemini ve refresh işlemiyle nasıl çözülebileceğini inceliyoruz.",
      en: "Learn why BAPI return messages may not appear immediately in an ALV Grid and how refreshing the grid resolves the issue.",
    },
    content: {
      tr: `
## Giriş

SAP ABAP projelerinde BAPI çağrıları sonrasında kullanıcıya işlem sonucunu ALV Grid üzerinde göstermek oldukça yaygın bir senaryodur. Özellikle toplu işlem ekranlarında, her satırın işlem sonucunun **İleti (Message)** alanında görüntülenmesi kullanıcı deneyimi açısından önem taşır.

Ancak bazı durumlarda BAPI'den dönen hata mesajı ilgili alana başarıyla yazılmasına rağmen ALV Grid üzerinde hemen görüntülenmeyebilir. Bunun nedeni, ALV'nin ekrandaki veriyi otomatik olarak yenilememesidir.

Bu yazıda karşılaştığım bu problemi ve uyguladığım çözümü anlatıyorum.

## Problemin Sebebi

Mal kabul işlemi için kullanıcı önce ALV Grid üzerinden satır seçmektedir.

\`\`\`abap
CALL METHOD go_alv->get_selected_rows
  IMPORTING
    et_index_rows = lt_selected.
\`\`\`

Daha sonra kullanıcıdan işlem onayı alınmaktadır.

\`\`\`abap
CALL FUNCTION 'POPUP_TO_CONFIRM'
  EXPORTING
    titlebar      = 'Mal Kabul'
    text_question = 'Mal kabulü yapılacaktır. Devam edilsin mi?'
  IMPORTING
    answer        = lv_answer.
\`\`\`

Seçilen satırlar için BAPI çağrısı gerçekleştirilir ve dönen hata mesajı ALV Grid'in **İleti** alanına aktarılır.

Fakat bu aşamada ALV Grid yenilenmediği için kullanıcı mesajı ekranda göremez.

## Adım 1 — BAPI Dönüş Mesajını Yakalamak

BAPI çağrılarında dönüş mesajları genellikle **BAPIRET2** tipindeki tabloda tutulur.

\`\`\`abap
DATA lt_return TYPE STANDARD TABLE OF bapiret2.
\`\`\`

İşlem tamamlandıktan sonra bu tablo okunarak hata veya bilgi mesajı ilgili ALV satırına yazılır.

## Adım 2 — MESSAGE Komutunu Çalıştırmak

BAPI'den dönen mesaj kullanıcıya standart SAP mesajı olarak da gösterilebilir.

\`\`\`abap
MESSAGE ID ls_return-id
        TYPE ls_return-type
        NUMBER ls_return-number
        WITH ls_return-message_v1
             ls_return-message_v2
             ls_return-message_v3
             ls_return-message_v4.
\`\`\`

Bu işlem kullanıcıya anlık geri bildirim sağlar.

## Adım 3 — ALV Grid'i Yenilemek

Sorunun temel nedeni ALV'nin otomatik olarak güncellenmemesidir.

Mesaj alanı güncellendikten sonra ALV mutlaka yenilenmelidir.

\`\`\`abap
gr_main->refresh_alv( ).
\`\`\`

Bu metod çalıştırıldığında ALV Grid ekrandaki veriyi yeniden okuyarak güncel mesajları kullanıcıya gösterir.

Aynı şekilde başarılı BAPI çağrısı sonucunda oluşan **Malzeme Belgesi** gibi bilgiler de ALV üzerinde anında görüntülenebilir.

## Sonuç

BAPI çağrısı sonrasında dönen hata mesajının ALV satırına yazılması tek başına yeterli değildir. ALV Grid mevcut ekran verisini otomatik olarak güncellemediği için kullanıcı değişikliği göremez.

Mesaj veya belge bilgileri ALV satırına aktarıldıktan sonra **refresh_alv()** metodunun çağrılması, hem hata mesajlarının hem de başarılı işlem sonuçlarının anında görüntülenmesini sağlar.

Özellikle toplu işlem yapılan ALV ekranlarında bu küçük adım kullanıcı deneyimini önemli ölçüde iyileştirir ve ekran üzerindeki verilerin güncel kalmasını sağlar.
`,
      en: `
## Introduction

Showing the result of a BAPI call to the user via an ALV Grid is a very common scenario in SAP ABAP projects. Especially on mass-processing screens, displaying each row's outcome in a **Message** column matters a lot for user experience.

In some cases, however, even though the error message returned by the BAPI is successfully written to the relevant field, it may not appear immediately in the ALV Grid. The reason is that the ALV doesn't automatically refresh the data shown on screen.

In this post I describe this problem and the fix I applied.

## Why the Problem Occurs

For a goods receipt process, the user first selects rows from the ALV Grid.

\`\`\`abap
CALL METHOD go_alv->get_selected_rows
  IMPORTING
    et_index_rows = lt_selected.
\`\`\`

The user is then asked to confirm the action.

\`\`\`abap
CALL FUNCTION 'POPUP_TO_CONFIRM'
  EXPORTING
    titlebar      = 'Goods Receipt'
    text_question = 'Goods receipt will be posted. Continue?'
  IMPORTING
    answer        = lv_answer.
\`\`\`

A BAPI call is then made for the selected rows, and the returned error message is written into the ALV Grid's **Message** field.

But at this point, since the ALV Grid hasn't been refreshed, the user can't see the message on screen.

## Step 1 — Capturing the BAPI Return Message

In BAPI calls, return messages are typically held in a table of type **BAPIRET2**.

\`\`\`abap
DATA lt_return TYPE STANDARD TABLE OF bapiret2.
\`\`\`

Once the operation completes, this table is read and the error or info message is written to the corresponding ALV row.

## Step 2 — Triggering the MESSAGE Statement

The message returned by the BAPI can also be shown to the user as a standard SAP message.

\`\`\`abap
MESSAGE ID ls_return-id
        TYPE ls_return-type
        NUMBER ls_return-number
        WITH ls_return-message_v1
             ls_return-message_v2
             ls_return-message_v3
             ls_return-message_v4.
\`\`\`

This gives the user immediate feedback.

## Step 3 — Refreshing the ALV Grid

The root cause of the problem is that the ALV doesn't update itself automatically.

After the message field is updated, the ALV must be explicitly refreshed.

\`\`\`abap
gr_main->refresh_alv( ).
\`\`\`

Calling this method makes the ALV Grid re-read the on-screen data and display the current messages to the user.

The same applies to information like the **Material Document** number generated after a successful BAPI call — it can also be shown instantly on the ALV once refreshed.

## Conclusion

Writing the BAPI's return message into the ALV row is not enough on its own. Because the ALV Grid doesn't automatically refresh its current screen data, the user won't see the change.

Calling **refresh_alv()** after transferring the message or document information to the ALV row ensures that both error messages and successful operation results are displayed immediately.

This small step significantly improves the user experience, especially on ALV screens used for mass processing, and keeps the on-screen data up to date.
`,
    },
    tags: ["SAP ABAP", "BAPI", "ALV Grid"],
    readTime: 4,
    publishedAt: "2026-06-30",
    coverImage: undefined,
  },
  {
    slug: "group-by-ile-veri-isleme-optimizasyonu",
    title: {
      tr: "GROUP BY ile Veri İşleme Optimizasyonu",
      en: "Optimizing Data Processing with GROUP BY in ABAP",
    },
    excerpt: {
      tr: "Aynı sap_no değerine sahip kayıtları çiftli LOOP ile tek tek işlemek yerine, ABAP'ın GROUP BY ifadesiyle daha performanslı ve sürdürülebilir bir çözüm tasarlıyoruz.",
      en: "Instead of processing records with the same sap_no one by one in nested loops, we design a more performant and maintainable solution using ABAP's GROUP BY clause.",
    },
    content: {
      tr: `
## Giriş

Aynı **sap_no** değerine sahip kayıtları işlerken klasik yaklaşım genellikle iç içe iki **LOOP** kullanmaktır: dış loop ile ana kayıtlar, iç loop ile her kaydın alt belge listesi (document_list) tek tek dolaşılır.

Bu yöntem küçük veri setlerinde çalışsa da, kayıt sayısı arttıkça gereksiz döngü tetiklenmesine, performans kaybına ve kodun sürdürülebilirliğinin zayıflamasına yol açar. Bu yazıda bu problemi **GROUP BY** ile nasıl çözdüğümü anlatıyorum.

## Problemin Sebebi

Klasik yaklaşımda her kayıt için ayrı ayrı iç loop çalıştırılır ve aynı sap_no'ya ait kayıtlar birbirinden bağımsız işlenir. Bu durumda:

- Aynı gruba ait kayıtlar arasında **order_no** çakışmaları oluşabilir.
- Döngü karmaşıklığı artar, kod okunabilirliği düşer.
- Performans, kayıt sayısıyla doğru orantılı şekilde kötüleşir.

## Adım 1 — GROUP BY ile Kayıtları Gruplamak

ABAP'ın **LOOP AT ... GROUP BY** ifadesi, belirtilen alana göre kayıtları runtime'da gruplayarak her grup için tek bir referans (group key) üretir.

\`\`\`abap
LOOP AT ls_output-mt_documents-document_map_list
     ASSIGNING FIELD-SYMBOL(<lfs_list>)
     WHERE document_list IS NOT INITIAL
     GROUP BY ( sap_no = <lfs_list>-sap_no ) INTO DATA(ls_group_key).
\`\`\`

Bu sayede aynı **sap_no** değerine sahip tüm kayıtlar, ayrı ayrı değil tek bir grup olarak ele alınır.

## Adım 2 — Grup İçindeki Kayıtları İşlemek

Her grup için **LOOP AT GROUP** kullanılarak grubun içindeki kayıtlar dolaşılır.

\`\`\`abap
LOOP AT GROUP ls_group_key ASSIGNING FIELD-SYMBOL(<lfs_grouped>).

  IF ls_output_temp-mt_documents-document_map_list IS INITIAL.
    APPEND <lfs_grouped> TO ls_output_temp-mt_documents-document_map_list.

  ELSE.
    " ... order_no çakışması burada çözülür
  ENDIF.

ENDLOOP.
\`\`\`

İlk kayıt doğrudan eklenirken, sonraki kayıtlar için **order_no** çakışmasının önüne geçilmesi gerekir.

## Adım 3 — REDUCE ile Maksimum order_no Hesaplama

Aynı gruba ait belgeler birleştirilirken, önceki belgelerin en yüksek **order_no** değeri **REDUCE** ifadesiyle tek satırda hesaplanır.

\`\`\`abap
DATA(lv_max_order_no) = REDUCE i(
    INIT lv = 0
    FOR wa IN ls_output_temp-mt_documents-document_map_list
    FOR doc IN wa-document_list
    NEXT lv = nmax( lv, doc-order_no ) ).

LOOP AT <lfs_grouped>-document_list ASSIGNING FIELD-SYMBOL(<lfs_doc>).
  <lfs_doc>-order_no += lv_max_order_no.
  APPEND <lfs_doc> TO ls_output_temp-mt_documents-document_map_list[ 1 ]-document_list.
ENDLOOP.
\`\`\`

Yeni eklenen her belgenin **order_no** değeri, mevcut maksimum değerin üzerine eklenerek sıralama bütünlüğü korunur.

## Tam Yapı

\`\`\`abap
IF ls_output IS NOT INITIAL.

  LOOP AT ls_output-mt_documents-document_map_list
       ASSIGNING FIELD-SYMBOL(<lfs_list>)
       WHERE document_list IS NOT INITIAL
       GROUP BY ( sap_no = <lfs_list>-sap_no ) INTO DATA(ls_group_key).

    CLEAR ls_output_temp.

    LOOP AT GROUP ls_group_key ASSIGNING FIELD-SYMBOL(<lfs_grouped>).

      IF ls_output_temp-mt_documents-document_map_list IS INITIAL.
        APPEND <lfs_grouped> TO ls_output_temp-mt_documents-document_map_list.

      ELSE.
        DATA(lv_max_order_no) = REDUCE i(
            INIT lv = 0
            FOR wa IN ls_output_temp-mt_documents-document_map_list
            FOR doc IN wa-document_list
            NEXT lv = nmax( lv, doc-order_no ) ).

        LOOP AT <lfs_grouped>-document_list ASSIGNING FIELD-SYMBOL(<lfs_doc>).
          <lfs_doc>-order_no += lv_max_order_no.
          APPEND <lfs_doc> TO ls_output_temp-mt_documents-document_map_list[ 1 ]-document_list.
        ENDLOOP.

      ENDIF.

    ENDLOOP.

  ENDLOOP.

ENDIF.
\`\`\`

## Sonuç

Klasik yaklaşımda iki loop ile aynı sap_no değerine sahip kayıtların her biri üzerinde tek tek işlem yapmak, gereksiz döngü tetiklenmesine ve kodun sürdürülebilirliğinin zayıflamasına yol açar.

**GROUP BY** kullanmak hem döngü tekrarlarını ortadan kaldırıp işlemi verimli hale getiriyor, hem de her grup için maksimum **order_no**'yu tek seferde belirleyip sonraki kayıtları kontrollü şekilde güncelleyerek veri bütünlüğünü koruyor.

Böylece kod hem daha okunabilir, hem performanslı, hem de sürdürülebilir bir hale geliyor.
    `,
      en: `
## Introduction

When processing records that share the same **sap_no**, the classic approach is usually two nested **LOOP** statements: an outer loop over the main records, and an inner loop iterating each record's sub-document list (document_list) one by one.

While this works for small data sets, as the record count grows it leads to unnecessary loop triggering, performance loss, and weakened code maintainability. In this post I explain how I solved this using **GROUP BY**.

## Why the Problem Occurs

In the classic approach, a separate inner loop runs for every record, and records sharing the same sap_no are processed independently of each other. As a result:

- **order_no** collisions can occur between records belonging to the same group.
- Loop complexity increases and code readability drops.
- Performance degrades in direct proportion to the record count.

## Step 1 — Grouping Records with GROUP BY

ABAP's **LOOP AT ... GROUP BY** clause groups records at runtime based on a specified field, producing a single reference (group key) per group.

\`\`\`abap
LOOP AT ls_output-mt_documents-document_map_list
     ASSIGNING FIELD-SYMBOL(<lfs_list>)
     WHERE document_list IS NOT INITIAL
     GROUP BY ( sap_no = <lfs_list>-sap_no ) INTO DATA(ls_group_key).
\`\`\`

This way, all records sharing the same **sap_no** are handled as a single group instead of separately.

## Step 2 — Processing Records Within a Group

For each group, **LOOP AT GROUP** is used to iterate the records that belong to it.

\`\`\`abap
LOOP AT GROUP ls_group_key ASSIGNING FIELD-SYMBOL(<lfs_grouped>).

  IF ls_output_temp-mt_documents-document_map_list IS INITIAL.
    APPEND <lfs_grouped> TO ls_output_temp-mt_documents-document_map_list.

  ELSE.
    " ... order_no collision is resolved here
  ENDIF.

ENDLOOP.
\`\`\`

The first record is appended directly, while subsequent records need their **order_no** collision avoided.

## Step 3 — Calculating the Maximum order_no with REDUCE

When merging documents belonging to the same group, the highest **order_no** among the previous documents is calculated in a single line using **REDUCE**.

\`\`\`abap
DATA(lv_max_order_no) = REDUCE i(
    INIT lv = 0
    FOR wa IN ls_output_temp-mt_documents-document_map_list
    FOR doc IN wa-document_list
    NEXT lv = nmax( lv, doc-order_no ) ).

LOOP AT <lfs_grouped>-document_list ASSIGNING FIELD-SYMBOL(<lfs_doc>).
  <lfs_doc>-order_no += lv_max_order_no.
  APPEND <lfs_doc> TO ls_output_temp-mt_documents-document_map_list[ 1 ]-document_list.
ENDLOOP.
\`\`\`

Every newly added document's **order_no** is offset on top of the current maximum, preserving ordering integrity.

## Full Structure

\`\`\`abap
IF ls_output IS NOT INITIAL.

  LOOP AT ls_output-mt_documents-document_map_list
       ASSIGNING FIELD-SYMBOL(<lfs_list>)
       WHERE document_list IS NOT INITIAL
       GROUP BY ( sap_no = <lfs_list>-sap_no ) INTO DATA(ls_group_key).

    CLEAR ls_output_temp.

    LOOP AT GROUP ls_group_key ASSIGNING FIELD-SYMBOL(<lfs_grouped>).

      IF ls_output_temp-mt_documents-document_map_list IS INITIAL.
        APPEND <lfs_grouped> TO ls_output_temp-mt_documents-document_map_list.

      ELSE.
        DATA(lv_max_order_no) = REDUCE i(
            INIT lv = 0
            FOR wa IN ls_output_temp-mt_documents-document_map_list
            FOR doc IN wa-document_list
            NEXT lv = nmax( lv, doc-order_no ) ).

        LOOP AT <lfs_grouped>-document_list ASSIGNING FIELD-SYMBOL(<lfs_doc>).
          <lfs_doc>-order_no += lv_max_order_no.
          APPEND <lfs_doc> TO ls_output_temp-mt_documents-document_map_list[ 1 ]-document_list.
        ENDLOOP.

      ENDIF.

    ENDLOOP.

  ENDLOOP.

ENDIF.
\`\`\`

## Conclusion

In the classic approach, processing every record sharing the same sap_no individually with two nested loops leads to unnecessary loop triggering and weakens the maintainability of the code.

Using **GROUP BY** eliminates redundant loop iterations and makes the operation efficient, while determining the maximum **order_no** for each group in a single pass and updating subsequent records in a controlled way preserves data integrity.

The result is code that is more readable, more performant, and more maintainable.
    `,
    },
    tags: ["SAP ABAP", "GROUP BY", "REDUCE", "Performance"],
    readTime: 6,
    publishedAt: "2026-06-30",
    coverImage: undefined,
  },
];

export const sortedBlogPosts = [...blogPosts].sort(
  (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
);

export type Experience = typeof experiences[number];
export type Project    = typeof projects[number];
export type BlogPost   = typeof blogPosts[number];

export function getLang<T>(obj: { tr: T; en: T }, lang: Lang): T {
  return obj[lang];
}
