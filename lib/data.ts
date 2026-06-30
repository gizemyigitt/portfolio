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
    content: `
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
content: `
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
content: `
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
tags: ["SAP ABAP", "BAPI", "ALV Grid"],
readTime: 4,
publishedAt: "2026-06-30",
coverImage: undefined,
  },
];

export type Experience = typeof experiences[number];
export type Project    = typeof projects[number];
export type BlogPost   = typeof blogPosts[number];

export function getLang<T>(obj: { tr: T; en: T }, lang: Lang): T {
  return obj[lang];
}
