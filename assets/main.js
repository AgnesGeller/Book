const sizes = {
  "1x1": { title: "1x1 m", area: 1, scale: 0.35 },
  "2x2": { title: "2x2 m", area: 4, scale: 0.62 },
  "3x3": { title: "3x3 m", area: 9, scale: 1 },
  "4x4": { title: "4x4 m", area: 16, scale: 1.55 },
  "5x5": { title: "5x5 m", area: 25, scale: 2.25 }
};

const styles = [
  {
    key: "modern",
    label: "Modern",
    title: "Modern stílusú napos ágyás",
    image: "modern.png",
    water: "alacsony",
    light: "napos",
    description: "Letisztult, modern megjelenésű napos ágyás ismételt évelőfoltokkal és díszfüvekkel.",
    plants: [
      ["Kasvirág", "Echinacea purpurea", "K2", 5, "VI-IX", "#ca5b8d"],
      ["Levendula", "Lavandula angustifolia", "K2", 5, "VI-VIII", "#7462b7"],
      ["Tollborzfű", "Pennisetum alopecuroides", "K2", 5, "VII-X", "#c4a665"],
      ["Pompás varjúháj", "Sedum spectabile", "K2", 5, "VIII-X", "#8fb65f"],
      ["Kis meténg", "Vinca minor", "Csp9", 10, "IV-V", "#356d43"]
    ]
  },
  {
    key: "mediterran",
    label: "Mediterrán",
    title: "Mediterrán stílusú napos ágyás",
    image: "mediterran.png",
    water: "alacsony",
    light: "napos",
    description: "Melegkedvelő, szárazságtűrő évelőkből álló, kavicsfelülettel jól működő mediterrán ágyás.",
    plants: [
      ["Levendula", "Lavandula angustifolia", "K2", 5, "VI-VIII", "#7961b1"],
      ["Ligeti zsálya", "Salvia nemorosa", "K2", 4, "V-VIII", "#563d98"],
      ["Gyapjas tisztesfű", "Stachys byzantina", "Csp9", 5, "VI-VII", "#b6b9a6"],
      ["Varjúháj", "Sedum spectabile", "K2", 4, "VIII-X", "#9cbe61"],
      ["Sárga cickafark", "Achillea filipendulina", "Csp9", 5, "VI-IX", "#d6bd2f"],
      ["Kék csenkesz", "Festuca glauca", "Csp9", 6, "V-VI", "#7f9aa0"]
    ]
  },
  {
    key: "angol",
    label: "Angol",
    title: "Angol stílusú napos ágyás",
    image: "angol.png",
    water: "normál",
    light: "napos",
    description: "Romantikus, dús, természetes hatású évelőágyás hosszú virágzási idővel.",
    plants: [
      ["Kasvirág", "Echinacea purpurea", "K2", 3, "VI-IX", "#c64f83"],
      ["Levendula", "Lavandula angustifolia", "K2", 5, "VI-VIII", "#7e62b8"],
      ["Macskamenta", "Nepeta faassenii", "K2", 4, "V-X", "#6f75c8"],
      ["Sárga cickafark", "Achillea filipendulina", "Csp9", 6, "VI-IX", "#d7bd2d"],
      ["Ligeti zsálya", "Salvia nemorosa", "K2", 4, "V-VIII", "#6047a5"],
      ["Kerti margaréta", "Leucanthemum", "Csp9", 5, "VI-VIII", "#f4f1d7"]
    ]
  },
  {
    key: "japan",
    label: "Japán",
    title: "Japán stílusú félárnyékos ágyás",
    image: "japan.png",
    water: "normál",
    light: "félárnyék",
    description: "Letisztult, nyugodt hatású ágyás lombformákkal, sásokkal és árnyéktűrő évelőkkel.",
    plants: [
      ["Árnyékliliom", "Hosta", "K2", 3, "VI-VIII", "#8fbf5a"],
      ["Japán sás", "Carex morrowii", "Csp9", 5, "V-VI", "#5d8f3e"],
      ["Páfrány", "Dryopteris filix-mas", "K2", 3, "lombdísz", "#3f7a42"],
      ["Hunyor", "Helleborus orientalis", "K2", 3, "II-IV", "#cdd7a1"],
      ["Bőrlevél", "Bergenia cordifolia", "Csp9", 5, "III-IV", "#427b45"]
    ]
  },
  {
    key: "videki-rusztikus",
    label: "Vidéki rusztikus",
    title: "Vidéki rusztikus stílusú napos ágyás",
    image: "falusirusztikus.png",
    water: "normál",
    light: "napos",
    description: "Természetes hatású, vidéki hangulatú, méhbarát évelőágyás.",
    plants: [
      ["Kasvirág", "Echinacea purpurea", "K2", 4, "VI-IX", "#ca5b8d"],
      ["Levendula", "Lavandula angustifolia", "K2", 5, "VI-VIII", "#7462b7"],
      ["Cickafark", "Achillea millefolium", "Csp9", 6, "VI-IX", "#d7bd2d"],
      ["Macskamenta", "Nepeta faassenii", "K2", 5, "V-X", "#6870c2"],
      ["Sásliliom", "Hemerocallis", "Csp9", 4, "VI-VIII", "#d98126"],
      ["Kúpvirág", "Rudbeckia fulgida", "K2", 5, "VII-IX", "#d6a51d"]
    ]
  },
  {
    key: "videki-fuszer-eheto",
    label: "Vidéki fűszer és ehető növények",
    title: "Vidéki fűszer és ehető növényes ágyás",
    image: "falusirusztikus.png",
    water: "normál",
    light: "napos",
    description: "Hasznos, természetes hangulatú vidéki ágyás fűszernövényekkel és ehető évelőkkel.",
    plants: [
      ["Metélőhagyma", "Allium schoenoprasum", "Csp9", 8, "V-VI", "#8b69bc"],
      ["Oregánó", "Origanum vulgare", "Csp9", 6, "VII-IX", "#7c4fa3"],
      ["Citromfű", "Melissa officinalis", "K2", 4, "VI-VIII", "#82a84f"],
      ["Kakukkfű", "Thymus vulgaris", "Csp9", 8, "VI-VIII", "#8c76b9"],
      ["Menta", "Mentha spicata", "K2", 3, "VII-IX", "#4d8c4f"],
      ["Szamóca", "Fragaria vesca", "Csp9", 8, "IV-V", "#5b9b4a"]
    ]
  },
  {
    key: "tropusi",
    label: "Trópusi",
    title: "Trópusi hatású félárnyékos ágyás",
    image: "falusirusztikus.png",
    water: "magasabb",
    light: "félárnyék",
    description: "Magyarországon tartható, nagy levelű és erős karakterű évelőkből álló, buja hatású ágyás.",
    plants: [
      ["Árnyékliliom", "Hosta", "K2", 5, "VI-VIII", "#8fbf5a"],
      ["Tollbuga", "Astilbe", "K2", 5, "VI-VIII", "#d68aa9"],
      ["Sásliliom", "Hemerocallis", "K2", 5, "VI-VIII", "#d98126"],
      ["Ligulária", "Ligularia dentata", "K2", 3, "VII-IX", "#c6a52d"],
      ["Bőrlevél", "Bergenia cordifolia", "Csp9", 6, "III-IV", "#447d44"]
    ]
  },
  {
    key: "minimalista",
    label: "Minimalista",
    title: "Minimalista stílusú ágyás",
    image: "minimalist.png",
    water: "alacsony",
    light: "napos / félárnyék",
    description: "Tiszta vonalvezetésű, kevés fajt használó, alacsony gondozási igényű ágyás.",
    plants: [
      ["Levendula", "Lavandula angustifolia", "K2", 6, "VI-VIII", "#7462b7"],
      ["Kék csenkesz", "Festuca glauca", "Csp9", 7, "V-VI", "#7f9aa0"],
      ["Pompás varjúháj", "Sedum spectabile", "K2", 5, "VIII-X", "#8fb65f"],
      ["Japán sás", "Carex morrowii", "Csp9", 6, "V-VI", "#5d8f3e"],
      ["Bőrlevél", "Bergenia cordifolia", "Csp9", 4, "III-IV", "#447d44"]
    ]
  },
  {
    key: "termeszetkozeli-preri",
    label: "Természetközeli (préri)",
    title: "Természetközeli prérikert stílusú napos ágyás",
    image: "modern.png",
    water: "alacsony",
    light: "napos",
    description: "Laza, természetközeli, prérikert hatású évelőágyás szárazságtűrő virágzó évelőkkel és díszfüvekkel.",
    plants: [
      ["Kasvirág", "Echinacea purpurea", "K2", 5, "VI-IX", "#ca5b8d"],
      ["Kúpvirág", "Rudbeckia fulgida", "K2", 5, "VII-IX", "#d6a51d"],
      ["Díszcsorba", "Liatris spicata", "K2", 4, "VII-IX", "#8a5ab3"],
      ["Cickafark", "Achillea millefolium", "Csp9", 6, "VI-IX", "#d7bd2d"],
      ["Tollborzfű", "Pennisetum alopecuroides", "K2", 5, "VII-X", "#c4a665"],
      ["Ligeti zsálya", "Salvia nemorosa", "K2", 5, "V-VIII", "#6047a5"]
    ]
  },
  {
    key: "formalis-kastelykert",
    label: "Formális kastélykert",
    title: "Formális kastélykert stílusú ágyás",
    image: "minimalist.png",
    water: "normál",
    light: "napos / félárnyék",
    description: "Szimmetrikus, rendezett, klasszikus hatású évelőágyás ismétlődő foltokkal és tiszta szegélyekkel.",
    plants: [
      ["Levendula", "Lavandula angustifolia", "K2", 6, "VI-VIII", "#7462b7"],
      ["Ligeti zsálya", "Salvia nemorosa", "K2", 5, "V-VIII", "#6047a5"],
      ["Bőrlevél", "Bergenia cordifolia", "Csp9", 6, "III-IV", "#447d44"],
      ["Tűzeső", "Heuchera", "Csp9", 5, "V-VII", "#9f4d35"],
      ["Nőszirom", "Iris germanica", "K2", 4, "V-VI", "#8c75b9"],
      ["Sásliliom", "Hemerocallis", "K2", 4, "VI-VIII", "#d98126"]
    ]
  }
];

const services = {
  "Kerttervezés": [
    ["Kerttervezés", "https://diszkertek.hu/szolgaltatasok/#kerttervezes"],
    ["Öntözőrendszer tervezés", "https://diszkertek.hu/szolgaltatasok/#ontozorendszer"],
    ["Anyagbeszerzés", "https://diszkertek.hu/szolgaltatasok/#anyagbeszerzes"]
  ],
  "Kertépítés": [
    ["Tereprendezés", "https://diszkertek.hu/szolgaltatasok/#tereprendezes"],
    ["Telektisztítás, Bozótirtás", "https://diszkertek.hu/szolgaltatasok/#telektisztitas"],
    ["Növény Beszerzés, Ültetés", "https://diszkertek.hu/szolgaltatasok/#novenybeszerzes"],
    ["Gyepszőnyeg Terítés", "https://diszkertek.hu/szolgaltatasok/#fuvesites"],
    ["Sziklakert Építés", "https://diszkertek.hu/szolgaltatasok/#sziklakert"],
    ["Térburkolás, Térkövezés", "https://diszkertek.hu/szolgaltatasok/#szegely"],
    ["Magaságyás Építés", "https://diszkertek.hu/szolgaltatasok/#magasagyas"]
  ],
  "Kertfenntartás": [
    ["Kertek Ápolása, Karbantartása", "https://diszkertek.hu/szolgaltatasok/#kertapolas"],
    ["Növényvédelem, Permetezés", "https://diszkertek.hu/szolgaltatasok/#novenyvedelem"],
    ["Fűnyírás", "https://diszkertek.hu/szolgaltatasok/#fuvesites"],
    ["Favágás", "https://diszkertek.hu/szolgaltatasok/#favagas"],
    ["Metszés", "https://diszkertek.hu/szolgaltatasok/#metszes"],
    ["Sövénynyírás", "https://diszkertek.hu/szolgaltatasok/#sovenynyiras"]
  ]
};

const state = {
  page: 0,
  query: "",
  size: "",
  style: ""
};

const els = {
  book: document.querySelector("#flipBook"),
  search: document.querySelector("#searchInput"),
  size: document.querySelector("#sizeFilter"),
  style: document.querySelector("#styleFilter"),
  searchButton: document.querySelector("#searchButton"),
  prev: document.querySelector("#prevPage"),
  next: document.querySelector("#nextPage"),
  pageInfo: document.querySelector("#pageInfo"),
  resultInfo: document.querySelector("#resultInfo")
};

let pages = [];
const sizeCount = Object.keys(sizes).length;
const mobileQuery = window.matchMedia("(max-width: 900px)");
let direction = "next";

function normalizeText(value) {
  return value.toString().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[×*]/g, "x").trim();
}

function qty(base, sizeKey) {
  return Math.max(1, Math.round(base * sizes[sizeKey].scale));
}

function catalogItems() {
  return styles.flatMap((style, styleIndex) =>
    Object.entries(sizes).map(([sizeKey, size], sizeIndex) => ({
      ...style,
      order: styleIndex * sizeCount + sizeIndex + 1,
      sizeKey,
      sizeTitle: size.title,
      area: size.area,
      plants: style.plants.map((plant) => ({
        name: plant[0],
        latin: plant[1],
        pot: plant[2],
        count: qty(plant[3], sizeKey),
        season: plant[4],
        color: plant[5]
      }))
    }))
  );
}

const allItems = catalogItems();

function requestedSize(query) {
  const compact = normalizeText(query).replace(/\s+/g, "");
  return Object.keys(sizes).find((size) => compact.includes(size));
}

function requestedStyle(query) {
  const normalized = normalizeText(query);
  return styles.find((style) => normalized.includes(normalizeText(style.key)) || normalized.includes(normalizeText(style.label)));
}

function filteredItems() {
  const querySize = requestedSize(state.query);
  const queryStyle = requestedStyle(state.query);

  return allItems.filter((item) => {
    if (state.size && item.sizeKey !== state.size) return false;
    if (state.style && item.key !== state.style) return false;
    if (querySize && item.sizeKey !== querySize) return false;
    if (queryStyle && item.key !== queryStyle.key) return false;
    if (!state.query) return true;

    const haystack = normalizeText([
      item.title,
      item.label,
      item.sizeKey,
      item.sizeTitle,
      item.light,
      item.water,
      item.description,
      item.plants.map((plant) => `${plant.name} ${plant.latin}`).join(" ")
    ].join(" "));

    return normalizeText(state.query).split(/\s+/).filter(Boolean).every((part) => haystack.includes(part));
  });
}

function workRows(item) {
  const medium = item.plants.filter((plant) => plant.pot !== "Csp9").reduce((sum, plant) => sum + plant.count, 0);
  const small = item.plants.filter((plant) => plant.pot === "Csp9").reduce((sum, plant) => sum + plant.count, 0);
  const edge = Math.round(Math.sqrt(item.area) * 4 * 10) / 10;

  return [
    ["Terület tisztítása, előkészítése", item.area, "m²"],
    ["Közepes méretű évelők ültetése", medium, "db"],
    ["Csp9 növény ültetés", small, "db"],
    ["Geotextília terítés", item.area, "m²"],
    [item.water === "alacsony" ? "Dekoratív kavics terítés" : "Mulcs terítés", item.area, "m²"],
    ["Szegélykő elhelyezés opcionális", edge, "fm"]
  ];
}

function designPage(item) {
  const plantTotal = item.plants.reduce((sum, plant) => sum + plant.count, 0);

  return `
    <article class="page catalog-page">
      <h2 class="page-title">${item.order}. ${item.title} - ${item.sizeTitle}</h2>
      <section class="page-hero">
        <aside class="side-info">
          <div class="info-row"><span class="icon">⌂</span><div><span>Stílus irányzat:</span><strong>${item.label}</strong></div></div>
          <div class="info-row"><span class="icon">☀</span><div><span>Fény:</span><strong>${item.light}</strong></div></div>
          <div class="info-row"><span class="icon">▽</span><div><span>Vízigény:</span><strong>${item.water}</strong></div></div>
          <div class="description"><h3>Leírás</h3><p>${item.description}</p></div>
        </aside>
        <img class="main-image" src="./assets/img/${item.image}" alt="${item.title}">
      </section>
      <section class="content-grid">
        <div class="panel">
          <h3>Növénylista</h3>
          <table>
            <thead><tr><th>Növény</th><th>Méret</th><th>Db</th><th>Ár</th></tr></thead>
            <tbody>
              ${item.plants.map((plant) => `<tr><td class="plant-name">${plant.name}<em>${plant.latin}</em></td><td>${plant.pot}</td><td>${plant.count}</td><td>ajánlat szerint</td></tr>`).join("")}
            </tbody>
          </table>
          <div class="total-row"><span>Növények összesen</span><strong>${plantTotal} db</strong></div>
        </div>
        <div class="panel">
          <h3>Kivitelezési tételek</h3>
          <table>
            <thead><tr><th>Munka</th><th>Mennyiség</th><th>Egység</th></tr></thead>
            <tbody>${workRows(item).map((row) => `<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td></tr>`).join("")}</tbody>
          </table>
          <div class="work-fee"><span>Kivitelezés</span><strong>ajánlat szerint</strong></div>
        </div>
      </section>
      <section class="bottom-grid">
        <div>
          <div class="box"><h3>Fenntartási igény</h3><ul class="check-list"><li>Évi 1-2 visszavágás</li><li>Öntözés száraz időszakban</li><li>Tavaszi tápanyag-utánpótlás</li><li>Mulcs pótlása évente</li></ul></div>
          <div class="box"><h3>Virágzási időszak</h3><ul class="season-list">${item.plants.slice(0, 6).map((plant) => `<li><span>${plant.name}</span><strong>${plant.season}</strong></li>`).join("")}</ul></div>
        </div>
        <div class="plan-wrap">
          <h3 class="plan-title">Felülnézeti vázlat (${item.sizeTitle})</h3>
          <figure class="garden-plan">
            <img src="./assets/img/plans/${item.key}.png" alt="${item.label} felülnézeti ültetési vázlat">
          </figure>
          <div class="dimension">${item.sizeTitle}</div>
        </div>
        <div>
          <div class="box"><h3>Jelmagyarázat</h3><ul class="legend-list">${item.plants.slice(0, 8).map((plant, index) => `<li><strong>${index + 1}</strong><span>${plant.name}</span></li>`).join("")}</ul></div>
          <div class="box"><h3>Megjegyzés</h3><ul class="check-list"><li>Magyarországon tartható évelők.</li><li>Az árak később cserélhetők.</li><li>A kép illusztrációként használható.</li></ul></div>
        </div>
      </section>
    </article>
  `;
}

function servicesPage() {
  return `
    <article class="page services-page">
      <h2 class="page-title">Díszkertek - szolgáltatások és kapcsolat</h2>
      <div class="services-layout">
        <aside class="contact-card">
          <img src="./assets/img/logo.png" alt="Díszkertek logó">
          <p><strong>Minden, ami kerttel kapcsolatos.</strong></p>
          <p>Kérjen ingyenes felmérést:<br><a href="tel:+36706349630">+36 70 634 9630</a></p>
          <p><a href="https://diszkertek.hu/" target="_blank" rel="noreferrer">www.diszkertek.hu</a></p>
          <p><a href="https://www.facebook.com/profile.php?id=61581708015145" target="_blank" rel="noreferrer">Facebook oldal</a></p>
        </aside>
        <section class="service-columns">
          ${Object.entries(services).map(([title, links]) => `
            <div>
              <h3>${title}</h3>
              <ul>${links.map(([label, href]) => `<li><a href="${href}" target="_blank" rel="noreferrer">${label}</a></li>`).join("")}</ul>
            </div>
          `).join("")}
        </section>
      </div>
    </article>
  `;
}


function coverPage() {
  return `
    <article class="page cover-page">
      <img src="./assets/img/hero.png" alt="Kerti ágyás katalógus Díszkertek borító">
      <div class="cover-copy" aria-hidden="true">
        <p>Díszkertek</p>
        <h1>Kerti ágyás katalógus</h1>
        <span>Kertépítéshez</span>
      </div>
    </article>
  `;
}
function renderOptions() {
  Object.entries(sizes).forEach(([value, size]) => els.size.append(new Option(size.title, value)));
  styles.forEach((style) => els.style.append(new Option(style.label, style.key)));
}

function renderBook() {
  const items = filteredItems();
  els.book.innerHTML = `
    ${coverPage()}
    ${items.map(designPage).join("")}
    ${servicesPage()}
  `;
  pages = [...els.book.querySelectorAll(".page")];
  els.resultInfo.textContent = `${items.length} ágyásterv találat, ${pages.length} lap`;
  createFlipBook();
}


function pageFlipConfig() {
  const narrow = window.matchMedia("(max-width: 640px)").matches;
  const tablet = window.matchMedia("(max-width: 980px)").matches;

  return {
    width: narrow ? 360 : 600,
    height: narrow ? 540 : 800,
    size: "stretch",
    minWidth: 300,
    maxWidth: 1160,
    minHeight: narrow ? 480 : 560,
    maxHeight: narrow ? 680 : 1200,
    drawShadow: true,
    flippingTime: 900,
    usePortrait: tablet,
    startPage: 0,
    autoSize: false,
    showCover: true,
    mobileScrollSupport: false,
    useMouseEvents: true,
    swipeDistance: 24,
    disableFlipByClick: false
  };
}
function createFlipBook() {
  if (!window.St || !St.PageFlip) {
    els.pageInfo.textContent = `1 / ${pages.length}`;
    els.prev.disabled = true;
    els.next.disabled = true;
    els.resultInfo.textContent += " - a lapozó API nem töltött be";
    pages.forEach((page, index) => {
      page.style.display = index === 0 ? "block" : "none";
    });
    return;
  }

  if (state.pageFlip && typeof state.pageFlip.destroy === "function") {
    state.pageFlip.destroy();
  }

  state.pageFlip = new St.PageFlip(els.book, pageFlipConfig());

  state.pageFlip.loadFromHTML(pages);
  updatePager();

  state.pageFlip.on("flip", updatePager);
  state.pageFlip.on("changeState", updatePager);
}

function currentPageIndex() {
  if (!state.pageFlip || typeof state.pageFlip.getCurrentPageIndex !== "function") return 0;
  return state.pageFlip.getCurrentPageIndex();
}

function updatePager() {
  const current = currentPageIndex();
  els.pageInfo.textContent = `${current + 1} / ${pages.length}`;
  els.prev.disabled = current <= 0;
  els.next.disabled = current >= pages.length - 1;
}

function flipNext() {
  if (state.pageFlip && typeof state.pageFlip.flipNext === "function") {
    state.pageFlip.flipNext();
  }
}

function flipPrev() {
  if (state.pageFlip && typeof state.pageFlip.flipPrev === "function") {
    state.pageFlip.flipPrev();
  }
}

function applySearch() {
  state.query = els.search.value.trim();
  renderBook();
}


els.search.addEventListener("input", () => {
  if (els.search.value.trim() !== "") return;
  if (state.query === "") return;
  state.query = "";
  renderBook();
});
els.search.addEventListener("keydown", (event) => {
  if (event.key === "Enter") applySearch();
  if (event.key === "Escape") {
    state.query = "";
    els.search.value = "";
    renderBook();
  }
});

els.searchButton.addEventListener("click", applySearch);

els.size.addEventListener("change", (event) => {
  state.size = event.target.value;
  renderBook();
});

els.style.addEventListener("change", (event) => {
  state.style = event.target.value;
  renderBook();
});

els.prev.addEventListener("click", flipPrev);
els.next.addEventListener("click", flipNext);
let resizeTimer = 0;
let lastViewportWidth = window.innerWidth;
window.addEventListener("resize", () => {
  const widthChanged = Math.abs(window.innerWidth - lastViewportWidth) > 24;
  if (!widthChanged) return;
  lastViewportWidth = window.innerWidth;

  window.clearTimeout(resizeTimer);
  resizeTimer = window.setTimeout(() => {
    renderBook();
  }, 180);
});


window.DiszkertekFlipBook = {
  next: flipNext,
  prev: flipPrev,
  search: applySearch,
  pages: () => pages.length
};

renderOptions();
renderBook();