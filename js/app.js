/* Victoria's Secret Flagship Web Application Logic
 * Engineered & Designed by Tamojit Roy
 * Responsive Cross-Device SPA Architecture for Netlify
 */

const VS_IMAGES = {
  "hero": "assets/images/hero.jpg",
  "bombshell": "assets/images/bombshell.jpg",
  "pajama_stripe": "assets/images/pajama_stripe.jpg",
  "silk_robe": "assets/images/silk_robe.jpg",
  "weekender_tote": "assets/images/weekender_tote.jpg",
  "bare_rose_duo": "assets/images/bare_rose_duo.jpg",
  "tease_noir": "assets/images/tease_noir.jpg",
  "ruby_slip": "assets/images/ruby_slip.jpg",
  "cashmere_set": "assets/images/cashmere_set.jpg",
  "black_cami": "assets/images/black_cami.jpg"
};
const VS_PRODUCTS = [
  {
    "id": "vs-01",
    "name": "Bombshell Eau de Parfum",
    "subtitle": "America's No. 1 Fragrance \u2022 Floral Fruity",
    "brand": "VS Beauty",
    "category": "Fine Fragrance",
    "price": 79.95,
    "originalPrice": 89.95,
    "rating": 4.9,
    "reviewsCount": 3420,
    "badge": "BESTSELLER",
    "promoTag": "FREE LUXURY TOTE WITH $85+ FRAGRANCE",
    "imageKey": "bombshell",
    "scentFamily": "Floral & Fruity",
    "colors": [
      {
        "name": "Signature Bombshell Pink",
        "hex": "#F2A2BD"
      },
      {
        "name": "Bombshell Seduction",
        "hex": "#E6C7D2"
      },
      {
        "name": "Bombshell Intense Ruby",
        "hex": "#9E1B32"
      }
    ],
    "sizes": [
      "50 ml / 1.7 fl oz",
      "100 ml / 3.4 fl oz",
      "Rollerball 7 ml"
    ],
    "description": "There's a Bombshell in every woman. Confident and bold, America's No. 1 Fragrance is a sparkling mix of fresh-cut peonies and exotic afternoon sun. Citrus notes and Brazilian Purple Passionfruit start Bombshell off with bright, sparkling intrigue.",
    "details": [
      "Fragrance type: Fruity Floral",
      "Notes: Brazilian Purple Passionfruit, Shangri-La Peony, Madagascar Vanilla Orchid",
      "TSA-friendly 50 ml option & signature diamond-cut glass bottle with black satin bow",
      "Cruelty-free & formulated without phthalates or parabens"
    ]
  },
  {
    "id": "vs-02",
    "name": "The Satin Long Pajama Set",
    "subtitle": "Iconic Pink & White Stripe \u2022 Silky Gloss Finish",
    "brand": "Victoria's Secret",
    "category": "Sleep & Lingerie",
    "price": 74.95,
    "originalPrice": 89.95,
    "rating": 4.9,
    "reviewsCount": 2890,
    "badge": "ICONIC EXCLUSIVE",
    "promoTag": "BUY 1, GET 1 40% OFF SLEEP",
    "imageKey": "pajama_stripe",
    "scentFamily": "None",
    "colors": [
      {
        "name": "Iconic Pink Stripe",
        "hex": "#F4C2D7"
      },
      {
        "name": "Champagne Ivory",
        "hex": "#F5E6D3"
      },
      {
        "name": "Midnight Noir",
        "hex": "#1A1A1A"
      }
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "Our most-loved sleepwear icon. Crafted from ultra-luxe, washable satin with an unmistakable drape, contrast black piping, chest pocket with embroidered 'V' monogram, and matching drawstring trousers.",
    "details": [
      "Relaxed fit button-front top hits at hip with notch collar",
      "Easy drawstring waist pant with 31\" regular inseam",
      "Contrast piping trim & mother-of-pearl style buttons",
      "Machine washable ultra-soft charmeuse satin"
    ]
  },
  {
    "id": "vs-03",
    "name": "Very Sexy Chantilly Lace Silk Kimono Robe",
    "subtitle": "Rose-Gold Charmeuse & French Eyelash Lace",
    "brand": "Victoria's Secret",
    "category": "Sleep & Lingerie",
    "price": 84.95,
    "originalPrice": 98.0,
    "rating": 4.8,
    "reviewsCount": 1450,
    "badge": "NEW ARRIVAL",
    "promoTag": "LIMITED ATELIER COLLECTION",
    "imageKey": "silk_robe",
    "scentFamily": "None",
    "colors": [
      {
        "name": "Champagne Rose Gold",
        "hex": "#E2BFA8"
      },
      {
        "name": "Blush Petal",
        "hex": "#F3D3DC"
      },
      {
        "name": "Onyx Black",
        "hex": "#181818"
      }
    ],
    "sizes": [
      "XS/S",
      "M/L",
      "XL/XXL"
    ],
    "description": "Drape yourself in pure indulgence. This floor-grazing kimono wrap robe combines luminous champagne rose-gold satin with scalloped Ivory Chantilly lace along the wide bell sleeves and hem.",
    "details": [
      "Removable waist tie belt with inner security ties",
      "Scalloped French Chantilly floral lace cuffs and hemline",
      "36\" length from shoulder; relaxed drape sleeve silhouette",
      "Packaged in signature Victoria's Secret gift tissue"
    ]
  },
  {
    "id": "vs-04",
    "name": "Signature Stripe Quilted Weekender Tote",
    "subtitle": "Runway Heritage Stripe & Gold Chain Hardware",
    "brand": "Victoria's Secret",
    "category": "Bags & Accessories",
    "price": 89.95,
    "originalPrice": 115.0,
    "rating": 4.9,
    "reviewsCount": 1920,
    "badge": "RUNWAY FAVORITE",
    "promoTag": "FREE MONOGRAM TAG INCLUDED",
    "imageKey": "weekender_tote",
    "scentFamily": "None",
    "colors": [
      {
        "name": "Heritage Pink & Black Stripe",
        "hex": "#E8B5C8"
      },
      {
        "name": "Noir Quilted Caviar",
        "hex": "#161616"
      }
    ],
    "sizes": [
      "One Size (21\" W x 13\" H)"
    ],
    "description": "Jet-set in unmistakable style. Featuring our iconic blush pink and black heritage ribbon stripes, diamond-quilted vegan leather base, polished 18k gold-tone chain straps, and removable tassel charm.",
    "details": [
      "Fits 16\" laptop, weekend wardrobe, beauty case & essentials",
      "Interior padded tech sleeve, zip pocket & trolley pass-through strap",
      "Top zip closure with protective metal feet on base",
      "Dimensions: 21\" L x 8.5\" D x 13\" H; 9.5\" strap drop"
    ]
  },
  {
    "id": "vs-05",
    "name": "Bare Rose Shimmer Mist & Velvet Lotion Duo",
    "subtitle": "24-Hour Moisture & Radiant Diamond Shimmer",
    "brand": "VS Beauty",
    "category": "Beauty & Mist",
    "price": 32.0,
    "originalPrice": 44.0,
    "rating": 4.8,
    "reviewsCount": 2180,
    "badge": "2 FOR $32 VALUE",
    "promoTag": "GIFT SET BUNDLE SAVINGS",
    "imageKey": "bare_rose_duo",
    "scentFamily": "Floral & Fruity",
    "colors": [
      {
        "name": "Bare Rose Shimmer",
        "hex": "#D99B92"
      },
      {
        "name": "Pure Seduction Glow",
        "hex": "#E87A99"
      },
      {
        "name": "Velvet Petals Gold",
        "hex": "#DFBE9F"
      }
    ],
    "sizes": [
      "250 ml Mist + 236 ml Lotion"
    ],
    "description": "Layer on luminous skin and captivating scent. This bestselling duo pairs our micro-fine diamond shimmer fragrance mist with a 24-hour Conditioning Velvet Body Lotion infused with shea butter and rosewater.",
    "details": [
      "Includes full-size Shimmer Fragrance Mist (250 ml / 8.4 fl oz)",
      "Includes full-size Nourishing Body Lotion (236 ml / 8.0 fl oz)",
      "Notes: Pear Skin, Rosa Centifolia, Sheer Cedarwood",
      "Dermatologist-tested, fast-absorbing, non-greasy radiance"
    ]
  },
  {
    "id": "vs-06",
    "name": "Tease Eau de Parfum Noir Collector's Edition",
    "subtitle": "Vintage Atomizer Bulb & French Lace Bottle",
    "brand": "VS Beauty",
    "category": "Fine Fragrance",
    "price": 84.95,
    "originalPrice": 95.0,
    "rating": 4.9,
    "reviewsCount": 1640,
    "badge": "COLLECTOR'S EDITION",
    "promoTag": "COMPLIMENTARY GIFT BOX",
    "imageKey": "tease_noir",
    "scentFamily": "Warm & Gourmand",
    "colors": [
      {
        "name": "Black Lace & Blush Glass",
        "hex": "#2B1922"
      },
      {
        "name": "Tease Cr\u00e8me Cloud",
        "hex": "#F4ECE8"
      },
      {
        "name": "Tease Candy Noir",
        "hex": "#5C1D3B"
      }
    ],
    "sizes": [
      "100 ml / 3.4 fl oz",
      "50 ml / 1.7 fl oz"
    ],
    "description": "Playful and feminine with a dark twist. Housed in a boudoir-inspired French lace glass flacon with a classic black tassel atomizer bulb, Tease Noir blends white gardenia petals wrapped in black vanilla warmth and juicy Anjou pear.",
    "details": [
      "Fragrance type: Warm Gourmand",
      "Notes: White Gardenia, Anjou Pear, Black Vanilla Bean",
      "Includes both luxury tassel bulb atomizer and travel spray cap",
      "Award-winning boudoir collector's bottle design"
    ]
  },
  {
    "id": "vs-07",
    "name": "Dream Angels Ruby Silk Lace Midi Slip Dress",
    "subtitle": "Bias-Cut Mulberry Satin & Scalloped Lace",
    "brand": "Victoria's Secret",
    "category": "Sleep & Lingerie",
    "price": 69.95,
    "originalPrice": 84.95,
    "rating": 4.7,
    "reviewsCount": 980,
    "badge": "HOLIDAY EDIT",
    "promoTag": "32B\u201338DD FIT GUIDE COMPATIBLE",
    "imageKey": "ruby_slip",
    "scentFamily": "None",
    "colors": [
      {
        "name": "Ruby Berry",
        "hex": "#8B112E"
      },
      {
        "name": "Blush Champagne",
        "hex": "#F3D1DC"
      },
      {
        "name": "Emerald Nocturne",
        "hex": "#134636"
      }
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Effortlessly romantic from bedroom to evening out. Cut on the bias for a figure-skimming drape, this midi slip dress features delicate floral Chantilly lace along the sweetheart neckline and adjustable gold-slider straps.",
    "details": [
      "Bias-cut midi silhouette hits mid-calf (44\" length)",
      "Unlined floral lace trim at V-neckline",
      "Adjustable spaghetti straps with gold-tone hardware",
      "Lustrous heavyweight satin with fluid movement"
    ]
  },
  {
    "id": "vs-08",
    "name": "Cloud Cashmere Ribbed Lounge Cardigan Set",
    "subtitle": " Blush & Ivory Ombr\u00e9 Knit with Pearl Buttons",
    "brand": "PINK",
    "category": "Lounge & Cashmere",
    "price": 78.0,
    "originalPrice": 94.0,
    "rating": 4.9,
    "reviewsCount": 2110,
    "badge": "PINK COZY EDIT",
    "promoTag": "FREE SHERPA SLIPPERS ON $120+",
    "imageKey": "cashmere_set",
    "scentFamily": "None",
    "colors": [
      {
        "name": "Blush Ivory Stripe",
        "hex": "#F3DFDC"
      },
      {
        "name": "Oatmeal Heather",
        "hex": "#E3DAC9"
      },
      {
        "name": "Sugar Plum",
        "hex": "#C9A0B8"
      }
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Cloud-like softness you'll never want to take off. Spun from our signature cashmere-blend ribbed knit, this 2-piece lounge set pairs a pearl-button V-neck cardigan with wide-leg palazzo lounge trousers.",
    "details": [
      "2-piece set includes Ribbed V-Neck Cardigan & Wide-Leg Lounge Pant",
      "Faux mother-of-pearl button placket & stretchy comfort waistband",
      "Super-soft modal, cotton & cashmere blend yarn",
      "Designed for cozy lounging or elevated travel comfort"
    ]
  },
  {
    "id": "vs-09",
    "name": "Wicked French Lace Mulberry Silk Cami Set",
    "subtitle": "100% Washable Mulberry Silk & Eyelash Lace",
    "brand": "Victoria's Secret",
    "category": "Sleep & Lingerie",
    "price": 64.95,
    "originalPrice": 79.95,
    "rating": 4.8,
    "reviewsCount": 1765,
    "badge": "MOST LOVED",
    "promoTag": "MATCHING ROBE AVAILABLE",
    "imageKey": "black_cami",
    "scentFamily": "None",
    "colors": [
      {
        "name": "Jet Black Lace",
        "hex": "#141414"
      },
      {
        "name": "Rose Quartz",
        "hex": "#F2C6D2"
      },
      {
        "name": "Ivory Pearl",
        "hex": "#F9F6F0"
      }
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "Timeless boudoir luxury. Crafted from liquid-soft mulberry silk satin, this 2-piece camisole and tap short set is framed in intricate French eyelash lace at the neckline and scalloped dolphin hem.",
    "details": [
      "2-piece set includes lace-trim camisole & matching tap shorts",
      "Adjustable straps and elastic waist for custom comfort",
      "Delicate eyelash lace trim along V-neck and leg openings",
      "Breathable, temperature-regulating silk-satin weave"
    ]
  },
  {
    "id": "vs-10",
    "name": "Body by Victoria Lightly Lined Demi Bra",
    "subtitle": "Memory Fit Foam & Signature Satin Bow",
    "brand": "Victoria's Secret",
    "category": "Sleep & Lingerie",
    "price": 54.95,
    "originalPrice": 64.95,
    "rating": 4.9,
    "reviewsCount": 4120,
    "badge": "FIT FINDER #1 PICK",
    "promoTag": "2 FOR $89 BRA EVENT",
    "imageKey": "silk_robe",
    "scentFamily": "None",
    "colors": [
      {
        "name": "Rose Champagne",
        "hex": "#E2BFA8"
      },
      {
        "name": "Soft Blush",
        "hex": "#F4C2D7"
      },
      {
        "name": "Classic Black",
        "hex": "#141414"
      }
    ],
    "sizes": [
      "32B",
      "32C",
      "34B",
      "34C",
      "34D",
      "36B",
      "36C",
      "36D",
      "38C",
      "38DD"
    ],
    "description": "Our #1 everyday bra, engineered with cloud-soft Memory Fit lining that molds to your natural curves and smoothing U-shaped ballet back wings for invisible comfort under every outfit.",
    "details": [
      "Lightly lined Memory Fit cups conform to your unique shape",
      " Cushioned underwire for poke-free all-day support",
      "Fully adjustable plush straps convert to crossback",
      " double-row hook-and-eye back closure with gold VS charm"
    ]
  },
  {
    "id": "vs-11",
    "name": "PINK Honey Glow Body Mist & Scrub Set",
    "subtitle": "Pure Golden Honey & Sweet Vanilla Whip",
    "brand": "PINK",
    "category": "Beauty & Mist",
    "price": 28.0,
    "originalPrice": 38.0,
    "rating": 4.8,
    "reviewsCount": 1530,
    "badge": "PINK BESTSELLER",
    "promoTag": "CLEAN & VEGAN FORMULA",
    "imageKey": "bare_rose_duo",
    "scentFamily": "Warm & Gourmand",
    "colors": [
      {
        "name": "Golden Honey Glow",
        "hex": "#E5B486"
      },
      {
        "name": "Coco Vanilla",
        "hex": "#F5ECE0"
      }
    ],
    "sizes": [
      "Full Size Set (250 ml)"
    ],
    "description": "Sweet, warm, and addictive. Formulated with ethically sourced golden honey and whipped vanilla bean, this PINK body care duo leaves skin glowing, silky smooth, and smelling irresistible.",
    "details": [
      "Fragrance type: Warm Gourmand Honey",
      "Dermatologist tested; free from sulfates, parabens & dyes",
      "Recycled PCR bottle packaging",
      "Layer together for 12+ hour scent longevity"
    ]
  },
  {
    "id": "vs-12",
    "name": "Runway Angel Monogram Vanity Train Case",
    "subtitle": "Striped Heritage Canvas & Mirror Organizer",
    "brand": "Victoria's Secret",
    "category": "Bags & Accessories",
    "price": 58.0,
    "originalPrice": 72.0,
    "rating": 4.9,
    "reviewsCount": 1290,
    "badge": "GIFT FAVORITE",
    "promoTag": "FITS FULL-SIZE PERFUMES",
    "imageKey": "weekender_tote",
    "scentFamily": "None",
    "colors": [
      {
        "name": "Iconic Stripe & Black",
        "hex": "#F2B8CE"
      },
      {
        "name": "Blush Saffiano",
        "hex": "#E8C4D0"
      }
    ],
    "sizes": [
      "One Size (10.5\" W x 7.5\" H)"
    ],
    "description": "Organize your entire fragrance and makeup collection like a backstage Angel. Features wipe-clean compartments, brush holders, an interior vanity mirror, and gold monogram zip pulls.",
    "details": [
      "Two-tier zip compartments for brushes, palettes, and full-size mists",
      "Built-in flip-up vanity mirror with top carry handle",
      "Wipe-clean satin lining in signature blush pink",
      "Matches the Signature Stripe Quilted Weekender Tote"
    ]
  }
];

const CURRENCY_RATES = {
  USD: { symbol: "$", rate: 1, code: "USD" },
  INR: { symbol: "₹", rate: 84.0, code: "INR" },
  EUR: { symbol: "€", rate: 0.92, code: "EUR" },
  GBP: { symbol: "£", rate: 0.79, code: "GBP" }
};

const PROMO_CODES = {
  VSANGEL25: { code: "VSANGEL25", type: "percent", value: 25, label: "25% Off Entire Order (Angel Exclusive)" },
  BOMBSHELL15: { code: "BOMBSHELL15", type: "fixed", value: 15, minOrder: 75, label: "$15 Off Orders $75+" },
  FREESHIP: { code: "FREESHIP", type: "shipping", value: 0, label: "Complimentary Express Shipping" }
};

const STORE_LOCATIONS = [
  {
    id: "st-1",
    name: "Victoria's Secret Fifth Avenue Flagship",
    city: "New York, NY",
    address: "640 Fifth Avenue, Manhattan, NY 10019",
    hours: "10:00 AM – 9:00 PM Daily",
    services: ["Complimentary 1-on-1 Bra Fitting", "Fragrance Engraving Bar", "PINK Lounge", "Buy Online Pick Up In Store"],
    phone: "+1 (212) 906-9133"
  },
  {
    id: "st-2",
    name: "Victoria's Secret Quest Mall Boutique",
    city: "Kolkata / Howrah Metro",
    address: "33 Syed Amir Ali Ave, Beck Bagan, Kolkata, WB 700017",
    hours: "11:00 AM – 9:30 PM Daily",
    services: ["Certified Bra Fit Stylists", "Fine Fragrance Studio", "Luxury Gift Wrapping", "VS Rewards Concierge"],
    phone: "+91 33 2287 7788"
  },
  {
    id: "st-3",
    name: "Victoria's Secret New Bond Street",
    city: "London, UK",
    address: "111 New Bond Street, Mayfair, London W1S 1DP",
    hours: "10:00 AM – 8:00 PM Daily",
    services: ["VIP Angel Suite Fitting", "Atelier Lingerie Collection", "Personal Shopping", "Same-Day Courier"],
    phone: "+44 20 7318 1780"
  },
  {
    id: "st-4",
    name: "Victoria's Secret Rodeo Drive Pavilion",
    city: "Beverly Hills, CA",
    address: "350 N Rodeo Drive, Beverly Hills, CA 90210",
    hours: "10:00 AM – 8:30 PM Daily",
    services: ["Private Fitting Suites", "Bombshell Scent Bar", "Monogramming Studio", "Curbside Pickup"],
    phone: "+1 (310) 271-5520"
  }
];

const state = {
  brandFilter: "All",
  categoryFilter: "All",
  searchQuery: "",
  sortBy: "featured",
  priceFilter: "all",
  onlyBestsellers: false,
  currency: "USD",
  selectedSizeByProduct: {},
  selectedColorByProduct: {},
  wishlist: ["vs-01", "vs-02"],
  bag: [
    {
      productId: "vs-01",
      qty: 1,
      size: "100 ml / 3.4 fl oz",
      color: "Signature Bombshell Pink"
    },
    {
      productId: "vs-02",
      qty: 1,
      size: "M",
      color: "Iconic Pink Stripe"
    }
  ],
  appliedPromo: "VSANGEL25",
  giftWrap: true,
  giftNote: "With love — enjoy your Victoria's Secret luxury gift!",
  activeProductModalId: null,
  activeProductModalTab: "details",
  activeProductModalQty: 1,
  rewardPoints: 1450,
  bookedStoreId: null,
  scentQuizStep: 1,
  scentQuizAnswers: { mood: "Floral & Fruity", intensity: "Eau de Parfum", occasion: "Signature Everyday" }
};

// Initialize default selected size & color for each product
VS_PRODUCTS.forEach((p) => {
  state.selectedSizeByProduct[p.id] = p.sizes[0];
  state.selectedColorByProduct[p.id] = p.colors[0].name;
});

// Safe localStorage persistence
function loadSavedState() {
  try {
    const raw = localStorage.getItem("vs_clone_state_tamojit_v1");
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed.wishlist)) state.wishlist = parsed.wishlist;
      if (Array.isArray(parsed.bag)) state.bag = parsed.bag;
      if (parsed.currency && CURRENCY_RATES[parsed.currency]) state.currency = parsed.currency;
      if (typeof parsed.giftWrap === "boolean") state.giftWrap = parsed.giftWrap;
    }
  } catch (err) {
    // Ignore storage error in restricted iframe
  }
}

function saveState() {
  try {
    localStorage.setItem(
      "vs_clone_state_tamojit_v1",
      JSON.stringify({
        wishlist: state.wishlist,
        bag: state.bag,
        currency: state.currency,
        giftWrap: state.giftWrap
      })
    );
  } catch (err) {
    // Ignore storage error in restricted iframe
  }
}

function formatPrice(usdAmount) {
  const curr = CURRENCY_RATES[state.currency] || CURRENCY_RATES.USD;
  const converted = usdAmount * curr.rate;
  if (state.currency === "INR") {
    return curr.symbol + Math.round(converted).toLocaleString("en-IN");
  }
  return curr.symbol + converted.toFixed(2);
}

let toastTimer = null;
function showToast(title, subtitle = "") {
  const container = document.getElementById("vs-toast-container");
  const titleEl = document.getElementById("vs-toast-title");
  const subEl = document.getElementById("vs-toast-subtitle");
  if (!container || !titleEl || !subEl) return;

  titleEl.textContent = title;
  subEl.textContent = subtitle;
  subEl.style.display = subtitle ? "block" : "none";

  container.classList.remove("translate-y-24", "opacity-0", "pointer-events-none");
  container.classList.add("translate-y-0", "opacity-100");

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    container.classList.add("translate-y-24", "opacity-0", "pointer-events-none");
    container.classList.remove("translate-y-0", "opacity-100");
  }, 3400);
}

function copyTextSafe(text, label = "Promo code") {
  const onSuccess = () => {
    showToast(`${label} "${text}" Copied!`, "Ready to apply in your Shopping Bag at checkout.");
  };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(onSuccess).catch(() => fallbackCopy(text, onSuccess));
  } else {
    fallbackCopy(text, onSuccess);
  }
}

function fallbackCopy(text, callback) {
  try {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
    callback();
  } catch (e) {
    callback();
  }
}

function setBrandFilter(brand) {
  state.brandFilter = brand;
  updateBrandTabsUI();
  renderCatalog();
  const catalogSection = document.getElementById("catalog-section");
  if (catalogSection && brand !== "All") {
    catalogSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function setCategoryFilter(category) {
  state.categoryFilter = category;
  updateCategoryPillsUI();
  renderCatalog();
}

function scrollToSection(sectionId) {
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  closeMobileMenu();
}

function updateBrandTabsUI() {
  document.querySelectorAll("[data-brand-tab]").forEach((btn) => {
    const val = btn.getAttribute("data-brand-tab");
    if (val === state.brandFilter) {
      btn.className = "px-3.5 py-1.5 text-xs font-bold tracking-widest uppercase bg-white text-black rounded-sm shadow-sm transition";
    } else {
      btn.className = "px-3.5 py-1.5 text-xs font-semibold tracking-widest uppercase text-pink-200 hover:text-white transition";
    }
  });
}

function updateCategoryPillsUI() {
  document.querySelectorAll("[data-cat-pill]").forEach((btn) => {
    const val = btn.getAttribute("data-cat-pill");
    if (val === state.categoryFilter) {
      btn.className = "px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide bg-black text-pink-200 border border-black shadow-sm transition whitespace-nowrap";
    } else {
      btn.className = "px-4 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide bg-pink-50/70 text-gray-800 border border-pink-200 hover:bg-pink-100 transition whitespace-nowrap";
    }
  });

  document.querySelectorAll("[data-nav-cat]").forEach((btn) => {
    const val = btn.getAttribute("data-nav-cat");
    if (val === state.categoryFilter) {
      btn.classList.add("text-pink-700", "border-b-2", "border-pink-700");
    } else {
      btn.classList.remove("text-pink-700", "border-b-2", "border-pink-700");
    }
  });
}

function getFilteredProducts() {
  return VS_PRODUCTS.filter((p) => {
    if (state.brandFilter !== "All" && p.brand !== state.brandFilter) return false;
    if (state.categoryFilter !== "All" && p.category !== state.categoryFilter) return false;
    if (state.onlyBestsellers && !p.badge.includes("BESTSELLER") && !p.badge.includes("ICONIC") && !p.badge.includes("MOST LOVED")) {
      return false;
    }
    if (state.priceFilter === "under50" && p.price >= 50) return false;
    if (state.priceFilter === "50to80" && (p.price < 50 || p.price > 80)) return false;
    if (state.priceFilter === "over80" && p.price <= 80) return false;

    if (state.searchQuery.trim() !== "") {
      const q = state.searchQuery.toLowerCase().trim();
      const hay = `${p.name} ${p.subtitle} ${p.category} ${p.brand} ${p.description} ${p.badge}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  }).sort((a, b) => {
    if (state.sortBy === "price-asc") return a.price - b.price;
    if (state.sortBy === "price-desc") return b.price - a.price;
    if (state.sortBy === "rating") return b.rating - a.rating || b.reviewsCount - a.reviewsCount;
    if (state.sortBy === "popular") return b.reviewsCount - a.reviewsCount;
    return 0;
  });
}

function renderCatalog() {
  const grid = document.getElementById("product-catalog-grid");
  const countEl = document.getElementById("catalog-count-label");
  const emptyState = document.getElementById("catalog-empty-state");
  if (!grid || !countEl || !emptyState) return;

  const filtered = getFilteredProducts();
  countEl.textContent = `Showing ${filtered.length} of ${VS_PRODUCTS.length} Luxury Pieces`;

  if (filtered.length === 0) {
    grid.innerHTML = "";
    emptyState.classList.remove("hidden");
    return;
  }
  emptyState.classList.add("hidden");

  grid.innerHTML = filtered
    .map((p) => {
      const isWishlisted = state.wishlist.includes(p.id);
      const selectedColor = state.selectedColorByProduct[p.id] || p.colors[0].name;
      const selectedSize = state.selectedSizeByProduct[p.id] || p.sizes[0];
      const imgSrc = VS_IMAGES[p.imageKey] || VS_IMAGES.bombshell;
      const savingsPct = Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100);

      const swatchesHtml = p.colors
        .map((c) => {
          const isSelected = c.name === selectedColor;
          return `<button type="button" onclick="selectProductCardColor('${p.id}', '${c.name.replace(/'/g, "\'")}')" title="${c.name}" aria-label="Select color ${c.name}" class="w-5 h-5 rounded-full border transition transform ${
            isSelected ? "ring-2 ring-offset-2 ring-black scale-110 border-black" : "border-gray-300 hover:scale-105"
          }" style="background-color: ${c.hex};"></button>`;
        })
        .join("");

      const sizesHtml = p.sizes
        .slice(0, 5)
        .map((sz) => {
          const isSelected = sz === selectedSize;
          return `<button type="button" onclick="selectProductCardSize('${p.id}', '${sz.replace(/'/g, "\'")}')" class="px-2 py-1 text-[11px] font-medium rounded border transition ${
            isSelected
              ? "bg-black text-white border-black font-semibold"
              : "bg-white text-gray-700 border-gray-200 hover:border-pink-400"
          }">${sz}</button>`;
        })
        .join("");

      return `
      <article class="product-card group bg-white border border-pink-100 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
        <div>
          <!-- Image Container -->
          <div class="relative aspect-[3/4] bg-pink-50/40 overflow-hidden">
            <img src="${imgSrc}" alt="${p.name}" loading="lazy" onclick="openProductModal('${p.id}')" class="product-card-img w-full h-full object-cover cursor-pointer" />
            
            <!-- Top Left Badges -->
            <div class="absolute top-3 left-3 flex flex-col gap-1.5 pointer-events-none">
              <span class="inline-block bg-black/90 text-pink-200 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded backdrop-blur-sm">
                ${p.badge}
              </span>
              <span class="inline-block bg-pink-600/95 text-white text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded">
                Save ${savingsPct}%
              </span>
            </div>

            <!-- Top Right Wishlist Button -->
            <button type="button" onclick="toggleWishlist('${p.id}')" aria-label="Save ${p.name} to Wishlist" class="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-gray-900 shadow-md flex items-center justify-center transition transform active:scale-90">
              <svg class="w-5 h-5 ${isWishlisted ? "text-pink-600 fill-current" : "text-gray-700 fill-none"}" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
            </button>

            <!-- Quick View Overlay Bar -->
            <div class="absolute inset-x-3 bottom-3 opacity-95 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200">
              <button type="button" onclick="openProductModal('${p.id}')" class="w-full py-2 px-3 bg-white/95 hover:bg-black hover:text-white text-gray-900 text-xs font-bold tracking-widest uppercase rounded shadow-md backdrop-blur-sm transition">
                Quick View & Fit Details
              </button>
            </div>
          </div>

          <!-- Product Info -->
          <div class="p-4">
            <div class="flex items-center justify-between text-[11px] font-semibold tracking-wider uppercase text-pink-700 mb-1">
              <span>${p.brand} • ${p.category}</span>
              <span class="flex items-center gap-1 text-gray-800">
                <span class="text-amber-500">★</span> ${p.rating} <span class="text-gray-400 font-normal">(${p.reviewsCount})</span>
              </span>
            </div>

            <h3 onclick="openProductModal('${p.id}')" class="font-serif-vs text-base sm:text-lg font-bold text-gray-900 group-hover:text-pink-700 cursor-pointer transition line-clamp-1">
              ${p.name}
            </h3>
            <p class="text-xs text-gray-500 mt-0.5 line-clamp-1">${p.subtitle}</p>

            <!-- Price Row -->
            <div class="mt-2.5 flex items-baseline gap-2">
              <span class="text-base sm:text-lg font-bold text-gray-900">${formatPrice(p.price)}</span>
              <span class="text-xs text-gray-400 line-through">${formatPrice(p.originalPrice)}</span>
              <span class="text-[10px] font-semibold text-pink-700 bg-pink-50 px-1.5 py-0.5 rounded ml-auto">${p.promoTag}</span>
            </div>

            <!-- Color Swatches -->
            <div class="mt-3">
              <div class="text-[11px] text-gray-500 mb-1.5">Shade: <span class="font-semibold text-gray-800">${selectedColor}</span></div>
              <div class="flex items-center gap-2">
                ${swatchesHtml}
              </div>
            </div>

            <!-- Size Selector -->
            <div class="mt-3">
              <div class="flex items-center justify-between text-[11px] text-gray-500 mb-1">
                <span>Size: <strong class="text-gray-800">${selectedSize}</strong></span>
                <button type="button" onclick="openModal('fit-finder-modal')" class="text-pink-700 hover:underline font-medium">Size Guide</button>
              </div>
              <div class="flex flex-wrap gap-1.5">
                ${sizesHtml}
              </div>
            </div>
          </div>
        </div>

        <!-- Add to Bag Footer -->
        <div class="px-4 pb-4 pt-1">
          <button type="button" onclick="addToBag('${p.id}', 1)" class="w-full py-2.5 px-4 bg-black hover:bg-pink-700 active:scale-[0.99] text-white text-xs font-bold tracking-widest uppercase rounded-lg shadow-sm transition flex items-center justify-center gap-2">
            <svg class="w-4 h-4 text-pink-200" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
            </svg>
            Add to Shopping Bag
          </button>
        </div>
      </article>`;
    })
    .join("");
}

function selectProductCardColor(productId, colorName) {
  state.selectedColorByProduct[productId] = colorName;
  renderCatalog();
}

function selectProductCardSize(productId, sizeName) {
  state.selectedSizeByProduct[productId] = sizeName;
  renderCatalog();
}

function toggleWishlist(productId) {
  const idx = state.wishlist.indexOf(productId);
  const product = VS_PRODUCTS.find((p) => p.id === productId);
  if (idx > -1) {
    state.wishlist.splice(idx, 1);
    showToast(`Removed from Saved Favorites`, product ? product.name : "");
  } else {
    state.wishlist.push(productId);
    showToast(`Saved to Your VS Wishlist ♥`, product ? product.name : "");
  }
  saveState();
  renderCatalog();
  updateBadgesUI();
  renderWishlistModal();
  if (state.activeProductModalId === productId) {
    renderProductModalContent();
  }
}

function addToBag(productId, qty = 1, customSize = null, customColor = null) {
  const product = VS_PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  const size = customSize || state.selectedSizeByProduct[productId] || product.sizes[0];
  const color = customColor || state.selectedColorByProduct[productId] || product.colors[0].name;

  const existing = state.bag.find(
    (item) => item.productId === productId && item.size === size && item.color === color
  );

  if (existing) {
    existing.qty += qty;
  } else {
    state.bag.push({ productId, qty, size, color });
  }

  saveState();
  updateBadgesUI();
  renderBagDrawer();
  showToast(`Added to Your Victoria's Secret Bag`, `${product.name} (${color} • ${size})`);
}

function updateBagItemQty(index, delta) {
  if (!state.bag[index]) return;
  state.bag[index].qty += delta;
  if (state.bag[index].qty <= 0) {
    state.bag.splice(index, 1);
  }
  saveState();
  updateBadgesUI();
  renderBagDrawer();
}

function removeBagItem(index) {
  if (!state.bag[index]) return;
  state.bag.splice(index, 1);
  saveState();
  updateBadgesUI();
  renderBagDrawer();
}

function calculateBagTotals() {
  let subtotal = 0;
  let originalSubtotal = 0;
  let totalItems = 0;

  state.bag.forEach((item) => {
    const product = VS_PRODUCTS.find((p) => p.id === item.productId);
    if (product) {
      subtotal += product.price * item.qty;
      originalSubtotal += product.originalPrice * item.qty;
      totalItems += item.qty;
    }
  });

  let discount = 0;
  const promo = PROMO_CODES[state.appliedPromo];
  if (promo) {
    if (promo.type === "percent") {
      discount = subtotal * (promo.value / 100);
    } else if (promo.type === "fixed" && subtotal >= (promo.minOrder || 0)) {
      discount = promo.value;
    }
  }

  const afterDiscount = Math.max(0, subtotal - discount);
  const giftWrapFee = state.giftWrap && totalItems > 0 ? 6.0 : 0;
  const freeShippingThreshold = 75.0;
  const qualifiesFreeShipping =
    afterDiscount >= freeShippingThreshold || (promo && promo.type === "shipping") || totalItems === 0;
  const shipping = qualifiesFreeShipping ? 0 : 8.95;
  const estimatedTax = afterDiscount * 0.07;
  const grandTotal = afterDiscount + giftWrapFee + shipping + estimatedTax;

  return {
    subtotal,
    originalSubtotal,
    totalItems,
    discount,
    afterDiscount,
    giftWrapFee,
    shipping,
    estimatedTax,
    grandTotal,
    freeShippingThreshold,
    freeShippingRemaining: Math.max(0, freeShippingThreshold - afterDiscount)
  };
}

function updateBadgesUI() {
  const totals = calculateBagTotals();
  const bagCountIds = ["header-bag-count", "mobile-bottom-bag-count", "drawer-bag-count"];
  bagCountIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.textContent = totals.totalItems;
  });

  const wishCountIds = ["header-wishlist-count", "mobile-bottom-wishlist-count"];
  wishCountIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.textContent = state.wishlist.length;
  });

  const pointsEl = document.getElementById("header-points-label");
  if (pointsEl) {
    pointsEl.textContent = `${state.rewardPoints.toLocaleString()} PTS`;
  }
}

function renderBagDrawer() {
  const listEl = document.getElementById("bag-items-list");
  const summaryEl = document.getElementById("bag-summary-container");
  const shipBar = document.getElementById("bag-shipping-progress-bar");
  const shipText = document.getElementById("bag-shipping-progress-text");
  if (!listEl || !summaryEl || !shipBar || !shipText) return;

  const totals = calculateBagTotals();
  const pct = Math.min(100, Math.round((totals.afterDiscount / totals.freeShippingThreshold) * 100));
  shipBar.style.width = `${pct}%`;

  if (totals.totalItems === 0) {
    shipText.innerHTML = `Add <strong>${formatPrice(totals.freeShippingThreshold)}</strong> to unlock <strong>Complimentary Express Shipping</strong>`;
    listEl.innerHTML = `
      <div class="py-14 text-center">
        <div class="w-16 h-16 mx-auto rounded-full bg-pink-50 flex items-center justify-center text-pink-600 mb-3">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="1.6" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
          </svg>
        </div>
        <h4 class="font-serif-vs text-lg font-bold text-gray-900">Your Victoria's Secret Bag is Empty</h4>
        <p class="text-xs text-gray-500 mt-1 max-w-xs mx-auto">Explore our iconic Bombshell fragrances, washable silk sleepwear, and signature striped totes.</p>
        <button type="button" onclick="closeBagDrawer(); setCategoryFilter('All');" class="mt-4 px-5 py-2.5 bg-black text-white text-xs font-bold tracking-widest uppercase rounded-lg hover:bg-pink-700 transition">
          Shop Bestsellers
        </button>
      </div>`;
    summaryEl.classList.add("hidden");
    return;
  }

  summaryEl.classList.remove("hidden");
  if (totals.freeShippingRemaining <= 0) {
    shipText.innerHTML = `<span class="text-emerald-700 font-semibold">✓ You've unlocked Complimentary Victoria's Secret Express Shipping!</span>`;
  } else {
    shipText.innerHTML = `You're only <strong>${formatPrice(totals.freeShippingRemaining)}</strong> away from <strong>Complimentary Express Shipping!</strong>`;
  }

  listEl.innerHTML = state.bag
    .map((item, idx) => {
      const product = VS_PRODUCTS.find((p) => p.id === item.productId);
      if (!product) return "";
      const imgSrc = VS_IMAGES[product.imageKey] || VS_IMAGES.bombshell;
      return `
      <div class="flex gap-3.5 py-3.5 border-b border-pink-100">
        <img src="${imgSrc}" alt="${product.name}" onclick="closeBagDrawer(); openProductModal('${product.id}');" class="w-20 h-24 object-cover rounded-lg border border-pink-100 cursor-pointer flex-shrink-0" />
        <div class="flex-1 min-w-0">
          <div class="flex items-start justify-between gap-2">
            <h4 onclick="closeBagDrawer(); openProductModal('${product.id}');" class="font-serif-vs text-sm font-bold text-gray-900 hover:text-pink-700 cursor-pointer truncate">${product.name}</h4>
            <button type="button" onclick="removeBagItem(${idx})" aria-label="Remove item" class="text-gray-400 hover:text-red-600 text-xs p-0.5">✕</button>
          </div>
          <p class="text-[11px] text-gray-500 mt-0.5">Shade: <strong class="text-gray-700">${item.color}</strong></p>
          <p class="text-[11px] text-gray-500">Size: <strong class="text-gray-700">${item.size}</strong></p>
          <div class="mt-2.5 flex items-center justify-between">
            <div class="inline-flex items-center border border-gray-200 rounded-md bg-white">
              <button type="button" onclick="updateBagItemQty(${idx}, -1)" class="px-2 py-0.5 text-xs font-bold text-gray-700 hover:bg-pink-50">−</button>
              <span class="px-2.5 py-0.5 text-xs font-semibold text-gray-900">${item.qty}</span>
              <button type="button" onclick="updateBagItemQty(${idx}, 1)" class="px-2 py-0.5 text-xs font-bold text-gray-700 hover:bg-pink-50">+</button>
            </div>
            <div class="text-right">
              <span class="text-sm font-bold text-gray-900">${formatPrice(product.price * item.qty)}</span>
              <span class="block text-[10px] text-gray-400 line-through">${formatPrice(product.originalPrice * item.qty)}</span>
            </div>
          </div>
        </div>
      </div>`;
    })
    .join("");

  const giftCheckbox = document.getElementById("bag-gift-wrap-checkbox");
  if (giftCheckbox) giftCheckbox.checked = state.giftWrap;

  const promoLabel = document.getElementById("bag-active-promo-label");
  if (promoLabel) {
    if (state.appliedPromo && PROMO_CODES[state.appliedPromo]) {
      promoLabel.innerHTML = `<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-pink-50 text-pink-800 border border-pink-200 text-xs font-semibold">✓ ${state.appliedPromo}: ${PROMO_CODES[state.appliedPromo].label}</span>`;
    } else {
      promoLabel.innerHTML = `<span class="text-xs text-gray-400">Try code <strong>VSANGEL25</strong> for 25% off</span>`;
    }
  }

  document.getElementById("bag-subtotal-val").textContent = formatPrice(totals.subtotal);
  document.getElementById("bag-discount-val").textContent = `−${formatPrice(totals.discount)}`;
  document.getElementById("bag-giftwrap-val").textContent = totals.giftWrapFee > 0 ? formatPrice(totals.giftWrapFee) : "Free";
  document.getElementById("bag-shipping-val").textContent = totals.shipping === 0 ? "FREE" : formatPrice(totals.shipping);
  document.getElementById("bag-tax-val").textContent = formatPrice(totals.estimatedTax);
  document.getElementById("bag-total-val").textContent = formatPrice(totals.grandTotal);
}

function applyBagPromoCode() {
  const input = document.getElementById("bag-promo-input");
  if (!input) return;
  const code = input.value.trim().toUpperCase();
  if (!code) {
    showToast("Enter a Promo Code", "Try VSANGEL25, BOMBSHELL15, or FREESHIP");
    return;
  }
  if (PROMO_CODES[code]) {
    state.appliedPromo = code;
    renderBagDrawer();
    showToast(`Promo Code ${code} Applied!`, PROMO_CODES[code].label);
  } else {
    showToast(`Invalid Promo Code "${code}"`, "Valid codes: VSANGEL25 (25% off), BOMBSHELL15 ($15 off), FREESHIP");
  }
}

function toggleGiftWrap(checked) {
  state.giftWrap = checked;
  saveState();
  renderBagDrawer();
}

function openBagDrawer() {
  renderBagDrawer();
  const drawer = document.getElementById("shopping-bag-drawer");
  const panel = document.getElementById("shopping-bag-panel");
  if (!drawer || !panel) return;
  drawer.classList.remove("hidden");
  setTimeout(() => {
    panel.classList.remove("translate-x-full");
  }, 10);
}

function closeBagDrawer() {
  const drawer = document.getElementById("shopping-bag-drawer");
  const panel = document.getElementById("shopping-bag-panel");
  if (!drawer || !panel) return;
  panel.classList.add("translate-x-full");
  setTimeout(() => {
    drawer.classList.add("hidden");
  }, 280);
}

function openMobileMenu() {
  const menu = document.getElementById("mobile-menu-drawer");
  const panel = document.getElementById("mobile-menu-panel");
  if (!menu || !panel) return;
  menu.classList.remove("hidden");
  setTimeout(() => {
    panel.classList.remove("-translate-x-full");
  }, 10);
}

function closeMobileMenu() {
  const menu = document.getElementById("mobile-menu-drawer");
  const panel = document.getElementById("mobile-menu-panel");
  if (!menu || !panel) return;
  panel.classList.add("-translate-x-full");
  setTimeout(() => {
    menu.classList.add("hidden");
  }, 260);
}

function openProductModal(productId) {
  state.activeProductModalId = productId;
  state.activeProductModalTab = "details";
  state.activeProductModalQty = 1;
  renderProductModalContent();
  openModal("product-detail-modal");
}

function renderProductModalContent() {
  const container = document.getElementById("product-modal-body");
  if (!container || !state.activeProductModalId) return;
  const p = VS_PRODUCTS.find((item) => item.id === state.activeProductModalId);
  if (!p) return;

  const imgSrc = VS_IMAGES[p.imageKey] || VS_IMAGES.bombshell;
  const selectedColor = state.selectedColorByProduct[p.id] || p.colors[0].name;
  const selectedSize = state.selectedSizeByProduct[p.id] || p.sizes[0];
  const isWishlisted = state.wishlist.includes(p.id);

  const colorButtons = p.colors
    .map((c) => {
      const active = c.name === selectedColor;
      return `<button type="button" onclick="state.selectedColorByProduct['${p.id}']='${c.name.replace(/'/g, "\'")}'; renderProductModalContent(); renderCatalog();" class="flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium transition ${
        active ? "border-black bg-pink-50 text-black font-semibold ring-1 ring-black" : "border-gray-200 text-gray-700 hover:border-pink-300"
      }">
        <span class="w-3.5 h-3.5 rounded-full border border-gray-300" style="background-color:${c.hex}"></span>
        ${c.name}
      </button>`;
    })
    .join("");

  const sizeButtons = p.sizes
    .map((sz) => {
      const active = sz === selectedSize;
      return `<button type="button" onclick="state.selectedSizeByProduct['${p.id}']='${sz.replace(/'/g, "\'")}'; renderProductModalContent(); renderCatalog();" class="px-3.5 py-2 rounded-lg border text-xs font-semibold transition ${
        active ? "bg-black text-white border-black" : "bg-white text-gray-800 border-gray-200 hover:border-pink-400"
      }">${sz}</button>`;
    })
    .join("");

  const detailsList = p.details
    .map((d) => `<li class="flex items-start gap-2 text-xs sm:text-sm text-gray-600"><span class="text-pink-600 font-bold">•</span><span>${d}</span></li>`)
    .join("");

  container.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
      <!-- Image Column -->
      <div class="md:col-span-5 relative rounded-xl overflow-hidden bg-pink-50/40 border border-pink-100">
        <img src="${imgSrc}" alt="${p.name}" class="w-full h-auto object-cover aspect-[3/4]" />
        <span class="absolute top-3 left-3 bg-black text-pink-200 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded">
          ${p.badge}
        </span>
      </div>

      <!-- Details Column -->
      <div class="md:col-span-7 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between text-xs font-bold tracking-widest uppercase text-pink-700">
            <span>${p.brand} • ${p.category}</span>
            <span class="text-amber-500">★★★★★ <span class="text-gray-700 font-semibold">${p.rating} (${p.reviewsCount} Reviews)</span></span>
          </div>

          <h2 class="font-serif-vs text-2xl sm:text-3xl font-bold text-gray-900 mt-1">${p.name}</h2>
          <p class="text-xs sm:text-sm text-gray-500 mt-0.5">${p.subtitle}</p>

          <div class="mt-3 flex items-baseline gap-3 pb-3 border-b border-pink-100">
            <span class="text-2xl font-bold text-gray-900">${formatPrice(p.price)}</span>
            <span class="text-sm text-gray-400 line-through">${formatPrice(p.originalPrice)}</span>
            <span class="text-xs font-bold text-pink-700 bg-pink-50 px-2.5 py-1 rounded border border-pink-200">${p.promoTag}</span>
          </div>

          <p class="text-xs sm:text-sm text-gray-700 leading-relaxed mt-3">${p.description}</p>

          <!-- Color Selection -->
          <div class="mt-4">
            <label class="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Select Shade: <span class="text-pink-700">${selectedColor}</span></label>
            <div class="flex flex-wrap gap-2">
              ${colorButtons}
            </div>
          </div>

          <!-- Size Selection -->
          <div class="mt-4">
            <div class="flex items-center justify-between mb-2">
              <label class="text-xs font-bold uppercase tracking-wider text-gray-700">Select Size: <span class="text-pink-700">${selectedSize}</span></label>
              <button type="button" onclick="closeModal('product-detail-modal'); openModal('fit-finder-modal');" class="text-xs font-semibold text-pink-700 underline">Open VS Fit Calculator</button>
            </div>
            <div class="flex flex-wrap gap-2">
              ${sizeButtons}
            </div>
          </div>

          <!-- Highlights List -->
          <div class="mt-4 bg-pink-50/50 rounded-xl p-3.5 border border-pink-100">
            <h4 class="text-xs font-bold uppercase tracking-wider text-gray-900 mb-2">Atelier Specifications & Notes</h4>
            <ul class="space-y-1.5">
              ${detailsList}
            </ul>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="mt-5 pt-4 border-t border-pink-100 flex flex-col sm:flex-row gap-3">
          <div class="inline-flex items-center justify-center border border-gray-300 rounded-lg px-2 py-2 bg-white">
            <button type="button" onclick="state.activeProductModalQty = Math.max(1, state.activeProductModalQty - 1); renderProductModalContent();" class="px-3 text-base font-bold text-gray-700">−</button>
            <span class="px-4 text-sm font-bold text-gray-900">${state.activeProductModalQty}</span>
            <button type="button" onclick="state.activeProductModalQty += 1; renderProductModalContent();" class="px-3 text-base font-bold text-gray-700">+</button>
          </div>

          <button type="button" onclick="addToBag('${p.id}', state.activeProductModalQty, '${selectedSize.replace(/'/g, "\'")}', '${selectedColor.replace(/'/g, "\'")}'); closeModal('product-detail-modal'); openBagDrawer();" class="flex-1 py-3 px-5 bg-black hover:bg-pink-700 text-white text-xs sm:text-sm font-bold tracking-widest uppercase rounded-lg shadow transition">
            Add to Bag • ${formatPrice(p.price * state.activeProductModalQty)}
          </button>

          <button type="button" onclick="toggleWishlist('${p.id}')" class="py-3 px-4 rounded-lg border ${
            isWishlisted ? "border-pink-600 bg-pink-50 text-pink-700" : "border-gray-300 text-gray-700 hover:border-pink-400"
          } text-xs font-bold uppercase tracking-wider transition">
            ${isWishlisted ? "♥ Saved" : "♡ Wishlist"}
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderWishlistModal() {
  const container = document.getElementById("wishlist-modal-list");
  if (!container) return;

  if (state.wishlist.length === 0) {
    container.innerHTML = `
      <div class="py-12 text-center">
        <p class="font-serif-vs text-lg font-bold text-gray-900">Your Wishlist is Currently Empty</p>
        <p class="text-xs text-gray-500 mt-1">Tap the heart icon on any Victoria's Secret creation to save it for later.</p>
      </div>`;
    return;
  }

  const itemsHtml = state.wishlist
    .map((id) => {
      const p = VS_PRODUCTS.find((item) => item.id === id);
      if (!p) return "";
      const imgSrc = VS_IMAGES[p.imageKey] || VS_IMAGES.bombshell;
      return `
      <div class="flex items-center gap-4 p-3 rounded-xl border border-pink-100 bg-white shadow-sm">
        <img src="${imgSrc}" alt="${p.name}" class="w-16 h-20 object-cover rounded-lg flex-shrink-0" />
        <div class="flex-1 min-w-0">
          <span class="text-[10px] font-bold uppercase tracking-wider text-pink-700">${p.brand}</span>
          <h4 class="font-serif-vs text-sm font-bold text-gray-900 truncate">${p.name}</h4>
          <p class="text-xs font-bold text-gray-900 mt-1">${formatPrice(p.price)} <span class="text-gray-400 line-through font-normal">${formatPrice(p.originalPrice)}</span></p>
        </div>
        <div class="flex flex-col gap-1.5">
          <button type="button" onclick="addToBag('${p.id}', 1); closeModal('wishlist-modal'); openBagDrawer();" class="px-3 py-1.5 bg-black text-white text-[11px] font-bold uppercase tracking-wider rounded hover:bg-pink-700 transition">
            Move to Bag
          </button>
          <button type="button" onclick="toggleWishlist('${p.id}')" class="px-3 py-1 text-[11px] text-gray-500 hover:text-red-600">
            Remove
          </button>
        </div>
      </div>`;
    })
    .join("");

  container.innerHTML = `<div class="grid grid-cols-1 sm:grid-cols-2 gap-3">${itemsHtml}</div>`;
}

function calculateBraFit() {
  const underbustInput = document.getElementById("fit-underbust-input");
  const bustInput = document.getElementById("fit-bust-input");
  const coverageSelect = document.getElementById("fit-coverage-select");
  const resultBox = document.getElementById("fit-finder-result-box");
  if (!underbustInput || !bustInput || !resultBox) return;

  const under = parseFloat(underbustInput.value) || 30;
  const bust = parseFloat(bustInput.value) || 35;
  const coverage = coverageSelect ? coverageSelect.value : "Demi";

  let band = Math.round(under);
  if (band % 2 !== 0) band += 1;
  band = Math.min(42, Math.max(30, band));

  const diff = Math.max(1, Math.round(bust - band));
  const cupMap = { 1: "A", 2: "B", 3: "C", 4: "D", 5: "DD", 6: "DDD/F" };
  const cup = cupMap[diff] || (diff > 6 ? "DDD/F" : "B");
  const computedSize = `${band}${cup}`;

  let sleepSize = "M";
  if (bust <= 33) sleepSize = "XS";
  else if (bust <= 35) sleepSize = "S";
  else if (bust <= 37.5) sleepSize = "M";
  else if (bust <= 40.5) sleepSize = "L";
  else sleepSize = "XL";

  resultBox.classList.remove("hidden");
  resultBox.innerHTML = `
    <div class="p-4 rounded-xl bg-gradient-to-r from-pink-50 via-white to-pink-50 border border-pink-200">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <span class="text-[10px] font-bold uppercase tracking-widest text-pink-700">Your Certified VS Fit Profile</span>
          <h4 class="font-serif-vs text-xl font-bold text-gray-900 mt-0.5">
            Bra Size: <span class="text-pink-700">${computedSize}</span> • Sleep & Lounge: <span class="text-pink-700">${sleepSize}</span>
          </h4>
          <p class="text-xs text-gray-600 mt-1">Recommended Silhouette: <strong>Body by Victoria ${coverage} Fit</strong> & <strong>Satin Pajama Set (${sleepSize})</strong></p>
        </div>
        <button type="button" onclick="applyFitSizeToCatalog('${computedSize}', '${sleepSize}')" class="px-4 py-2.5 bg-black text-white text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-pink-700 transition whitespace-nowrap">
          Apply My Size to Catalog
        </button>
      </div>
    </div>
  `;
}

function applyFitSizeToCatalog(braSize, sleepSize) {
  VS_PRODUCTS.forEach((p) => {
    if (p.sizes.includes(braSize)) {
      state.selectedSizeByProduct[p.id] = braSize;
    } else if (p.sizes.includes(sleepSize)) {
      state.selectedSizeByProduct[p.id] = sleepSize;
    }
  });
  renderCatalog();
  closeModal("fit-finder-modal");
  showToast(`Applied Your Fit Profile (${braSize} / ${sleepSize})`, "Product cards updated with your tailored size.");
}

function runFragranceMatcher() {
  const familySelect = document.getElementById("scent-family-select");
  const vibeSelect = document.getElementById("scent-vibe-select");
  const out = document.getElementById("scent-quiz-result");
  if (!familySelect || !out) return;

  const fam = familySelect.value;
  const vibe = vibeSelect ? vibeSelect.value : "Day-to-Night Glamour";

  let matchedProduct = VS_PRODUCTS[0]; // Bombshell default
  if (fam === "Warm & Gourmand") {
    matchedProduct = VS_PRODUCTS.find((p) => p.id === "vs-06") || VS_PRODUCTS[0];
  } else if (fam === "Shimmer & Rose") {
    matchedProduct = VS_PRODUCTS.find((p) => p.id === "vs-05") || VS_PRODUCTS[0];
  } else if (fam === "Honey & Vanilla") {
    matchedProduct = VS_PRODUCTS.find((p) => p.id === "vs-11") || VS_PRODUCTS[0];
  }

  const imgSrc = VS_IMAGES[matchedProduct.imageKey];
  out.classList.remove("hidden");
  out.innerHTML = `
    <div class="mt-4 p-4 rounded-xl bg-white border border-pink-200 shadow-sm flex flex-col sm:flex-row items-center gap-4">
      <img src="${imgSrc}" alt="${matchedProduct.name}" class="w-20 h-24 object-cover rounded-lg border border-pink-100" />
      <div class="flex-1 text-center sm:text-left">
        <span class="text-[10px] font-bold uppercase tracking-widest text-pink-700">99% Scent Match for ${vibe}</span>
        <h4 class="font-serif-vs text-lg font-bold text-gray-900">${matchedProduct.name}</h4>
        <p class="text-xs text-gray-600 mt-0.5">${matchedProduct.subtitle}</p>
        <p class="text-sm font-bold text-gray-900 mt-1">${formatPrice(matchedProduct.price)}</p>
      </div>
      <button type="button" onclick="addToBag('${matchedProduct.id}', 1); closeModal('scent-finder-modal'); openBagDrawer();" class="px-4 py-2.5 bg-black text-white text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-pink-700 transition">
        Add Match to Bag
      </button>
    </div>
  `;
}

function renderStoreLocator() {
  const container = document.getElementById("store-locator-list");
  if (!container) return;

  container.innerHTML = STORE_LOCATIONS.map((st) => {
    const isBooked = state.bookedStoreId === st.id;
    const servicesBadges = st.services
      .map((s) => `<span class="px-2 py-0.5 bg-pink-50 text-pink-800 rounded text-[10px] font-medium border border-pink-100">${s}</span>`)
      .join("");
    return `
      <div class="p-4 rounded-xl border ${isBooked ? "border-pink-600 bg-pink-50/30" : "border-gray-200 bg-white"} shadow-sm flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between gap-2">
            <span class="text-[10px] font-bold uppercase tracking-widest text-pink-700">${st.city}</span>
            <span class="text-[11px] text-emerald-700 font-semibold">● Open Today</span>
          </div>
          <h4 class="font-serif-vs text-base font-bold text-gray-900 mt-0.5">${st.name}</h4>
          <p class="text-xs text-gray-600 mt-1">${st.address}</p>
          <p class="text-xs text-gray-500 mt-0.5">Hours: ${st.hours} • ${st.phone}</p>
          <div class="flex flex-wrap gap-1.5 mt-2.5">${servicesBadges}</div>
        </div>
        <div class="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
          <span class="text-[11px] text-gray-500">Complimentary Stylist Fitting</span>
          <button type="button" onclick="bookStoreFitting('${st.id}')" class="px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition ${
            isBooked ? "bg-emerald-700 text-white" : "bg-black text-white hover:bg-pink-700"
          }">
            ${isBooked ? "✓ Fitting Reserved" : "Book VIP Fitting"}
          </button>
        </div>
      </div>`;
  }).join("");
}

function bookStoreFitting(storeId) {
  state.bookedStoreId = storeId;
  const st = STORE_LOCATIONS.find((s) => s.id === storeId);
  renderStoreLocator();
  showToast(
    `VIP Bra Fitting Reserved!`,
    st ? `Confirmed at ${st.name} (${st.city})` : "Stylist reservation confirmed."
  );
}

function redeemRewardPerk(pointsCost, promoCode, title) {
  if (state.rewardPoints < pointsCost) {
    showToast("Additional Points Needed", `You have ${state.rewardPoints} pts; this reward requires ${pointsCost} pts.`);
    return;
  }
  state.rewardPoints -= pointsCost;
  state.appliedPromo = promoCode;
  updateBadgesUI();
  renderBagDrawer();
  const ptsModalEl = document.getElementById("rewards-modal-points-balance");
  if (ptsModalEl) ptsModalEl.textContent = state.rewardPoints.toLocaleString();
  showToast(`Unlocked ${title}!`, `Applied code ${promoCode} to your Shopping Bag.`);
}

function openCheckoutModal() {
  const totals = calculateBagTotals();
  if (totals.totalItems === 0) {
    showToast("Your Bag is Empty", "Add at least one item before proceeding to checkout.");
    return;
  }
  closeBagDrawer();
  document.getElementById("checkout-total-Amount-label").textContent = formatPrice(totals.grandTotal);
  document.getElementById("checkout-form-step").classList.remove("hidden");
  document.getElementById("checkout-success-step").classList.add("hidden");
  openModal("checkout-modal");
}

function submitOrderCheckout(event) {
  if (event) event.preventDefault();
  const nameInput = document.getElementById("checkout-name-input");
  const emailInput = document.getElementById("checkout-email-input");
  const cityInput = document.getElementById("checkout-city-input");

  const customerName = nameInput && nameInput.value.trim() ? nameInput.value.trim() : "Valued VS Angel";
  const customerEmail = emailInput && emailInput.value.trim() ? emailInput.value.trim() : "angel@victoriassecret.com";
  const customerCity = cityInput && cityInput.value.trim() ? cityInput.value.trim() : "New York / Kolkata";

  const totals = calculateBagTotals();
  const orderNumber = "VS-" + Math.floor(100000 + Math.random() * 900000);
  const earnedPts = Math.round(totals.grandTotal * 10);
  state.rewardPoints += earnedPts;

  const summaryBox = document.getElementById("checkout-order-confirmation-details");
  if (summaryBox) {
    summaryBox.innerHTML = `
      <div class="bg-pink-50/60 border border-pink-200 rounded-xl p-4 text-left space-y-1.5 text-xs">
        <div class="flex justify-between"><span class="text-gray-500">Order Reference:</span><strong class="text-gray-900">${orderNumber}</strong></div>
        <div class="flex justify-between"><span class="text-gray-500">Recipient:</span><strong class="text-gray-900">${customerName} (${customerEmail})</strong></div>
        <div class="flex justify-between"><span class="text-gray-500">Destination:</span><strong class="text-gray-900">${customerCity}</strong></div>
        <div class="flex justify-between"><span class="text-gray-500">Total Charged:</span><strong class="text-pink-700 text-sm">${formatPrice(totals.grandTotal)}</strong></div>
        <div class="flex justify-between"><span class="text-gray-500">VS Collective Points Earned:</span><strong class="text-emerald-700">+${earnedPts} PTS</strong></div>
      </div>
    `;
  }

  state.bag = [];
  saveState();
  updateBadgesUI();
  renderBagDrawer();

  document.getElementById("checkout-form-step").classList.add("hidden");
  document.getElementById("checkout-success-step").classList.remove("hidden");
  showToast(`Order ${orderNumber} Confirmed!`, `Thank you ${customerName}! +${earnedPts} VS Collective Points added.`);
}

function openModal(modalId) {
  const m = document.getElementById(modalId);
  if (!m) return;
  if (modalId === "wishlist-modal") renderWishlistModal();
  if (modalId === "store-locator-modal") renderStoreLocator();
  if (modalId === "rewards-modal") {
    const ptsModalEl = document.getElementById("rewards-modal-points-balance");
    if (ptsModalEl) ptsModalEl.textContent = state.rewardPoints.toLocaleString();
  }
  m.classList.remove("hidden");
}

function closeModal(modalId) {
  const m = document.getElementById(modalId);
  if (!m) return;
  m.classList.add("hidden");
}

function handleCurrencyChange(newCurrency) {
  if (!CURRENCY_RATES[newCurrency]) return;
  state.currency = newCurrency;
  saveState();
  const sel1 = document.getElementById("currency-selector-desktop");
  const sel2 = document.getElementById("currency-selector-mobile");
  if (sel1) sel1.value = newCurrency;
  if (sel2) sel2.value = newCurrency;
  renderCatalog();
  renderBagDrawer();
  renderWishlistModal();
  if (state.activeProductModalId) renderProductModalContent();
  showToast(`Currency Changed to ${newCurrency}`, "All catalog & bag prices updated automatically.");
}

// Expose global handlers for inline onclick attributes
window.setBrandFilter = setBrandFilter;
window.setCategoryFilter = setCategoryFilter;
window.scrollToSection = scrollToSection;
window.selectProductCardColor = selectProductCardColor;
window.selectProductCardSize = selectProductCardSize;
window.toggleWishlist = toggleWishlist;
window.addToBag = addToBag;
window.updateBagItemQty = updateBagItemQty;
window.removeBagItem = removeBagItem;
window.applyBagPromoCode = applyBagPromoCode;
window.toggleGiftWrap = toggleGiftWrap;
window.openBagDrawer = openBagDrawer;
window.closeBagDrawer = closeBagDrawer;
window.openMobileMenu = openMobileMenu;
window.closeMobileMenu = closeMobileMenu;
window.openProductModal = openProductModal;
window.renderProductModalContent = renderProductModalContent;
window.openModal = openModal;
window.closeModal = closeModal;
window.calculateBraFit = calculateBraFit;
window.applyFitSizeToCatalog = applyFitSizeToCatalog;
window.runFragranceMatcher = runFragranceMatcher;
window.bookStoreFitting = bookStoreFitting;
window.redeemRewardPerk = redeemRewardPerk;
window.openCheckoutModal = openCheckoutModal;
window.submitOrderCheckout = submitOrderCheckout;
window.copyTextSafe = copyTextSafe;
window.handleCurrencyChange = handleCurrencyChange;
window.showToast = showToast;
window.renderCatalog = renderCatalog;

document.addEventListener("DOMContentLoaded", () => {
  loadSavedState();

  // Set hero and editorial images
  const heroImg = document.getElementById("vs-hero-banner-img");
  if (heroImg) heroImg.src = VS_IMAGES.hero;

  const editImg1 = document.getElementById("editorial-card-img-1");
  if (editImg1) editImg1.src = VS_IMAGES.tease_noir;

  const editImg2 = document.getElementById("editorial-card-img-2");
  if (editImg2) editImg2.src = VS_IMAGES.ruby_slip;

  const editImg3 = document.getElementById("editorial-card-img-3");
  if (editImg3) editImg3.src = VS_IMAGES.cashmere_set;

  // Bind search inputs
  const searchDesktop = document.getElementById("catalog-search-input");
  const searchMobile = document.getElementById("catalog-search-input-mobile");

  function syncSearch(val) {
    state.searchQuery = val;
    if (searchDesktop && searchDesktop.value !== val) searchDesktop.value = val;
    if (searchMobile && searchMobile.value !== val) searchMobile.value = val;
    renderCatalog();
  }

  if (searchDesktop) {
    searchDesktop.addEventListener("input", (e) => syncSearch(e.target.value));
  }
  if (searchMobile) {
    searchMobile.addEventListener("input", (e) => syncSearch(e.target.value));
  }

  // Bind sort & price filters
  const sortSelect = document.getElementById("catalog-sort-select");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      state.sortBy = e.target.value;
      renderCatalog();
    });
  }

  const priceSelect = document.getElementById("catalog-price-select");
  if (priceSelect) {
    priceSelect.addEventListener("change", (e) => {
      state.priceFilter = e.target.value;
      renderCatalog();
    });
  }

  const bestsellerCheck = document.getElementById("catalog-bestseller-checkbox");
  if (bestsellerCheck) {
    bestsellerCheck.addEventListener("change", (e) => {
      state.onlyBestsellers = e.target.checked;
      renderCatalog();
    });
  }

  const resetBtn = document.getElementById("reset-catalog-filters-btn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      state.brandFilter = "All";
      state.categoryFilter = "All";
      state.searchQuery = "";
      state.priceFilter = "all";
      state.onlyBestsellers = false;
      state.sortBy = "featured";
      if (searchDesktop) searchDesktop.value = "";
      if (searchMobile) searchMobile.value = "";
      if (sortSelect) sortSelect.value = "featured";
      if (priceSelect) priceSelect.value = "all";
      if (bestsellerCheck) bestsellerCheck.checked = false;
      updateBrandTabsUI();
      updateCategoryPillsUI();
      renderCatalog();
      showToast("Catalog Filters Reset", "Showing all 12 Victoria's Secret & PINK creations.");
    });
  }

  // Sync currency dropdowns
  const sel1 = document.getElementById("currency-selector-desktop");
  const sel2 = document.getElementById("currency-selector-mobile");
  if (sel1) sel1.value = state.currency;
  if (sel2) sel2.value = state.currency;

  updateBrandTabsUI();
  updateCategoryPillsUI();
  updateBadgesUI();
  renderCatalog();
  renderBagDrawer();
  calculateBraFit();
});
