const sizes = {
  "1x1": { title: "1x1 m", area: 1, plants: 7, work: "ajánlat szerint", scale: 0.35 },
  "2x2": { title: "2x2 m", area: 4, plants: 15, work: "ajánlat szerint", scale: 0.62 },
  "3x3": { title: "3x3 m", area: 9, plants: 24, work: "ajánlat szerint", scale: 1 },
  "4x4": { title: "4x4 m", area: 16, plants: 42, work: "ajánlat szerint", scale: 1.55 }
};

const styles = [
  {
    key: "japan",
    label: "japán",
    heading: "Japán stílusú félárnyékos ágyás",
    image: "japan.png",
    water: "normál",
    light: "félárnyék",
    description:
      "Letisztult, nyugodt hatású ágyás félárnyékos kertrészbe. A lombformák, a sások és az árnyéktűrő évelők adják a szerkezetet, a kő és sötét mulcs pedig rendezett, japán hangulatú alapot teremt.",
    maintenance: [
      "Évi 1-2 visszavágás az elszáradt leveleknél",
      "Normál öntözés, nyári melegben gyakoribb vízpótlás",
      "Tavaszi tápanyag-utánpótlás ajánlott",
      "Mulcs pótlása évente",
      "Gyommentesítés évente 1-2 alkalommal"
    ],
    notes: [
      "Kevés fajból, nagyobb foltokban mutat jól.",
      "A sások télen is szerkezetet adnak.",
      "Kavics és bazaltkő jól illik hozzá."
    ],
    plants: [
      ["Árnyékliliom", "Hosta", "K2", 3, "VI-VIII", "#8fbf5a"],
      ["Japán sás", "Carex morrowii", "Csp9", 5, "V-VI", "#5d8f3e"],
      ["Páfrány", "Dryopteris filix-mas", "K2", 3, "lombdísz", "#3f7a42"],
      ["Hunyor", "Helleborus orientalis", "K2", 3, "II-IV", "#cdd7a1"],
      ["Bőrlevél", "Bergenia cordifolia", "Csp9", 5, "III-IV", "#427b45"],
      ["Tollbuga", "Astilbe", "K2", 3, "VI-VIII", "#d68aa9"]
    ]
  },
  {
    key: "angol",
    label: "angolkert",
    heading: "Angolkert stílusú napos ágyás",
    image: "angol.png",
    water: "normál",
    light: "napos",
    description:
      "Romantikus, természetes hatású évelőágyás, amely egész szezonban virágzik. A kasvirág, macskamenta, cickafark és lángvirág kavalkádja klasszikus angolkerti hangulatot ad.",
    maintenance: [
      "Elvirágzott részek visszavágása szezon közben",
      "Rendszeres öntözés száraz időszakban",
      "Tavaszi tápanyag-utánpótlás ajánlott",
      "Mulcs pótlása évente",
      "Tőosztás 3-4 évente"
    ],
    notes: [
      "A virágzási idő hosszú, ezért ügyfélbemutatóban látványos.",
      "Méh- és pillangóbarát összeállítás.",
      "Természetesebb, lazább fenntartást igényel."
    ],
    plants: [
      ["Kasvirág", "Echinacea purpurea", "K2", 3, "VI-IX", "#c64f83"],
      ["Levendula", "Lavandula angustifolia", "K2", 5, "VI-VIII", "#7e62b8"],
      ["Macskamenta", "Nepeta faassenii", "K2", 4, "V-X", "#6f75c8"],
      ["Sárga cickafark", "Achillea filipendulina", "Csp9", 6, "VI-IX", "#d7bd2d"],
      ["Ligeti zsálya", "Salvia nemorosa", "K2", 4, "V-VIII", "#6047a5"],
      ["Bugás lángvirág", "Phlox paniculata", "K2", 3, "VII-IX", "#e6a4bd"],
      ["Kerti margaréta", "Leucanthemum", "Csp9", 5, "VI-VIII", "#f4f1d7"]
    ]
  },
  {
    key: "mediterran",
    label: "mediterrán",
    heading: "Mediterrán stílusú napos ágyás",
    image: "mediterran.png",
    water: "alacsony",
    light: "napos",
    description:
      "Melegkedvelő, napfénykedvelő, szárazságtűrő évelőkből álló ágyás. A levendula, zsálya, gyapjas tisztesfű és varjúháj kavicsfelülettel együtt mediterrán hangulatú, víztakarékos kialakítást ad.",
    maintenance: [
      "Évi 1 metszés a levendulán és zsályán",
      "Ritka, de alapos öntözés",
      "Kavics vagy mulcs pótlása évente",
      "Gyommentesítés évente 1-2 alkalommal",
      "Tavaszi visszavágás a száraz részeknél"
    ],
    notes: [
      "Kerüli a pangó vizet, jó vízelvezetés kell.",
      "Kavicsos fedéssel mutat a legjobban.",
      "A növények magyarországi kertekben télállóként tarthatók."
    ],
    plants: [
      ["Levendula", "Lavandula angustifolia", "K2", 5, "VI-VIII", "#7961b1"],
      ["Ligeti zsálya", "Salvia nemorosa", "K2", 4, "V-VIII", "#563d98"],
      ["Gyapjas tisztesfű", "Stachys byzantina", "Csp9", 5, "VI-VII", "#b6b9a6"],
      ["Varjúháj", "Sedum spectabile", "K2", 4, "VIII-X", "#9cbe61"],
      ["Sárga cickafark", "Achillea filipendulina", "Csp9", 5, "VI-IX", "#d6bd2f"],
      ["Kék csenkesz", "Festuca glauca", "Csp9", 6, "V-VI", "#7f9aa0"],
      ["Sudárzsálya", "Perovskia atriplicifolia", "K2", 3, "VII-IX", "#9f94c9"]
    ]
  },
  {
    key: "minimal",
    label: "minimál",
    heading: "Minimál stílusú ágyás",
    image: "minimalist.png",
    water: "alacsony",
    light: "napos / félárnyék",
    description:
      "Tiszta vonalvezetésű, kevés fajt használó ágyás modern előkertekhez. A díszfüvek, varjúháj és levendula erős ritmust adnak, miközben a gondozási igény alacsony marad.",
    maintenance: [
      "Évi 1-2 visszavágás",
      "Ritka, de alapos öntözés",
      "Tavaszi tápanyag-utánpótlás ajánlott",
      "Kavics vagy mulcs pótlása évente",
      "Gyommentesítés évente 1 alkalommal"
    ],
    notes: [
      "Kevés növényfajjal erősebb a hatás.",
      "Pontosan tartott szegély szükséges.",
      "A talajtakarás adja a tiszta megjelenést."
    ],
    plants: [
      ["Levendula", "Lavandula angustifolia", "K2", 6, "VI-VIII", "#7462b7"],
      ["Kék csenkesz", "Festuca glauca", "Csp9", 7, "V-VI", "#7f9aa0"],
      ["Pompás varjúháj", "Sedum spectabile", "K2", 5, "VIII-X", "#8fb65f"],
      ["Japán sás", "Carex morrowii", "Csp9", 6, "V-VI", "#5d8f3e"],
      ["Bőrlevél", "Bergenia cordifolia", "Csp9", 4, "III-IV", "#447d44"],
      ["Díszhagyma", "Allium", "hagymás", 18, "V-VI", "#9b7cc4"]
    ]
  },
  {
    key: "modern",
    label: "modern",
    heading: "Modern stílusú napos ágyás",
    image: "modern.png",
    water: "alacsony",
    light: "napos",
    description:
      "Letisztult, modern megjelenésű napos ágyás. Az ismételt évelőfoltok és díszfüvek strukturált, könnyen érthető formát adnak, amely egész évben rendezett látványt tart.",
    maintenance: [
      "Díszfüvek visszavágása tavasszal",
      "Évelők visszavágása évente egyszer",
      "Mulcsréteg fenntartása",
      "Ritkítás 2-3 évente",
      "Száraz időszakban mérsékelt öntözés"
    ],
    notes: [
      "A szimmetria és ismétlés fontosabb, mint a sok faj.",
      "Sötét mulccsal vagy kaviccsal erős modern hatású.",
      "Alacsony fenntartású, időtálló összeállítás."
    ],
    plants: [
      ["Kasvirág", "Echinacea purpurea", "K2", 5, "VI-IX", "#ca5b8d"],
      ["Levendula", "Lavandula angustifolia", "K2", 5, "VI-VIII", "#7462b7"],
      ["Tollborzfű", "Pennisetum alopecuroides", "K2", 5, "VII-X", "#c4a665"],
      ["Pompás varjúháj", "Sedum spectabile", "K2", 5, "VIII-X", "#8fb65f"],
      ["Kis meténg", "Vinca minor", "Csp9", 10, "IV-V", "#356d43"],
      ["Tűzeső", "Heuchera", "Csp9", 5, "V-VII", "#9f4d35"]
    ]
  },
  {
    key: "falusi-rusztikus",
    label: "falusi rusztikus",
    heading: "Falusi rusztikus stílusú napos ágyás",
    image: "falusirusztikus.png",
    water: "normál",
    light: "napos",
    description:
      "Természetes hatású, vidéki hangulatú ágyás. A hosszú virágzású, méhbarát évelők dús, változatos színű és textúrájú összeállítást alkotnak.",
    maintenance: [
      "Évi 1-2 metszés az elszáradt virágokon",
      "Rendszeres öntözés száraz időszakban",
      "Tavaszi tápanyag-utánpótlás ajánlott",
      "Mulcs pótlása évente",
      "Gyommentesítés évente 1-2 alkalommal"
    ],
    notes: [
      "Természetes, lazább növénykép ajánlott.",
      "Méh- és pillangóbarát összeállítás.",
      "Falusi kerítés, kőszegély és fa dekoráció jól illik hozzá."
    ],
    plants: [
      ["Kasvirág", "Echinacea purpurea", "K2", 4, "VI-IX", "#ca5b8d"],
      ["Levendula", "Lavandula angustifolia", "K2", 5, "VI-VIII", "#7462b7"],
      ["Cickafark", "Achillea millefolium", "Csp9", 6, "VI-IX", "#d7bd2d"],
      ["Macskamenta", "Nepeta faassenii", "K2", 5, "V-X", "#6870c2"],
      ["Sásliliom", "Hemerocallis", "Csp9", 4, "VI-VIII", "#d98126"],
      ["Kúpvirág", "Rudbeckia fulgida", "K2", 5, "VII-IX", "#d6a51d"],
      ["Kerti margaréta", "Leucanthemum", "Csp9", 5, "VI-VIII", "#f4f1d7"]
    ]
  },
  {
    key: "arab",
    label: "arab",
    heading: "Arab stílusú napos ágyás",
    image: "arab.png",
    water: "alacsony",
    light: "napos",
    description:
      "Meleg színekkel, kavicsfelülettel és szárazságtűrő évelőkkel kialakított, arab hangulatú napos ágyás. A formai rendet díszfüvek és ezüstös lombú növények adják.",
    maintenance: [
      "Ritka, de alapos öntözés",
      "Kavicsfelület gyommentesen tartása",
      "Tavaszi visszavágás",
      "Tápanyag-utánpótlás évente egyszer",
      "Túlöntözés kerülése"
    ],
    notes: [
      "Forró, napos helyen működik a legjobban.",
      "A kavics és terrakotta dekoráció erősíti a stílust.",
      "Minden kiválasztott növény magyarországi kertekben tartható."
    ],
    plants: [
      ["Levendula", "Lavandula angustifolia", "K2", 5, "VI-VIII", "#7462b7"],
      ["Gyapjas tisztesfű", "Stachys byzantina", "Csp9", 5, "VI-VII", "#b6b9a6"],
      ["Sárga cickafark", "Achillea filipendulina", "Csp9", 5, "VI-IX", "#d7bd2d"],
      ["Kék csenkesz", "Festuca glauca", "Csp9", 6, "V-VI", "#7f9aa0"],
      ["Varjúháj", "Sedum spectabile", "K2", 5, "VIII-X", "#8fb65f"],
      ["Sudárzsálya", "Perovskia atriplicifolia", "K2", 3, "VII-IX", "#9f94c9"],
      ["Nőszirom", "Iris germanica", "K2", 4, "V-VI", "#8c75b9"]
    ]
  },
  {
    key: "tropusi",
    label: "trópusi hatású",
    heading: "Trópusi hatású félárnyékos ágyás",
    image: "falusirusztikus.png",
    water: "magasabb",
    light: "félárnyék",
    description:
      "Magyarországon is tartható, nagy levelű és erős karakterű évelőkből álló, trópusi hangulatú ágyás. Nem fagyérzékeny egzótákra épít, hanem télálló, buja hatású fajokra.",
    maintenance: [
      "Rendszeres öntözés meleg időszakban",
      "Tavaszi tápanyag-utánpótlás",
      "Elszáradt levelek eltávolítása",
      "Mulcs pótlása évente",
      "Tőosztás 3-4 évente"
    ],
    notes: [
      "Nagyobb lombtömeg miatt több víz kell.",
      "Árnyékosabb kertrészekben is látványos.",
      "Télálló évelőkből ad trópusi karaktert."
    ],
    plants: [
      ["Árnyékliliom", "Hosta", "K2", 5, "VI-VIII", "#8fbf5a"],
      ["Tollbuga", "Astilbe", "K2", 5, "VI-VIII", "#d68aa9"],
      ["Sásliliom", "Hemerocallis", "K2", 5, "VI-VIII", "#d98126"],
      ["Ligulária", "Ligularia dentata", "K2", 3, "VII-IX", "#c6a52d"],
      ["Bőrlevél", "Bergenia cordifolia", "Csp9", 6, "III-IV", "#447d44"],
      ["Japánfű", "Hakonechloa macra", "K2", 4, "lombdísz", "#98a94a"],
      ["Nőszirom", "Iris sibirica", "K2", 4, "V-VI", "#7b68b5"]
    ]
  }
];

let pageFlip;
let localFlip;
let activePages = [];
let currentPage = 0;

const elements = {
  flipbook: document.querySelector("#flipbook"),
  coverTemplate: document.querySelector("#cover-template"),
  searchInput: document.querySelector("#search-input"),
  sizeFilter: document.querySelector("#size-filter"),
  styleFilter: document.querySelector("#style-filter"),
  resetButton: document.querySelector("#reset-button"),
  resultSummary: document.querySelector("#result-summary"),
  pageStatus: document.querySelector("#page-status"),
  prevPage: document.querySelector("#prev-page"),
  nextPage: document.querySelector("#next-page")
};

const state = {
  query: "",
  size: "",
  style: ""
};

function normalizeText(value) {
  return value
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[×*]/g, "x")
    .trim();
}

function sizeQuantity(base, sizeKey) {
  return Math.max(1, Math.round(base * sizes[sizeKey].scale));
}

function buildCatalog() {
  return styles.flatMap((style, styleIndex) =>
    Object.entries(sizes).map(([sizeKey, size], sizeIndex) => ({
      ...style,
      id: `${style.key}-${sizeKey}`,
      order: styleIndex * 4 + sizeIndex + 1,
      sizeKey,
      sizeTitle: size.title,
      area: size.area,
      plantTarget: size.plants,
      workFee: size.work,
      plants: style.plants.map((plant) => ({
        name: plant[0],
        latin: plant[1],
        pot: plant[2],
        qty: sizeQuantity(plant[3], sizeKey),
        season: plant[4],
        color: plant[5]
      }))
    }))
  );
}

const catalog = buildCatalog();

function requestedSize(query) {
  const compactQuery = normalizeText(query).replace(/\s+/g, "");
  return Object.keys(sizes).find((size) => compactQuery.includes(size));
}

function requestedStyle(query) {
  const normalizedQuery = normalizeText(query);
  return styles.find((style) => {
    const aliases = [style.key, style.label, style.heading].map(normalizeText);
    return aliases.some((alias) => normalizedQuery.includes(alias));
  });
}

function matchesQuery(item) {
  if (!state.query) return true;

  const querySize = requestedSize(state.query);
  const queryStyle = requestedStyle(state.query);

  if (querySize && item.sizeKey !== querySize) return false;
  if (queryStyle && item.key !== queryStyle.key) return false;

  const haystack = normalizeText([
    item.heading,
    item.label,
    item.sizeKey,
    item.sizeTitle,
    item.water,
    item.light,
    item.description,
    item.plants.map((plant) => `${plant.name} ${plant.latin}`).join(" ")
  ].join(" "));

  return normalizeText(state.query)
    .split(/\s+/)
    .filter(Boolean)
    .every((part) => haystack.includes(part));
}

function filteredCatalog() {
  return catalog.filter((item) => {
    const sizeOk = !state.size || item.sizeKey === state.size;
    const styleOk = !state.style || item.key === state.style;
    return sizeOk && styleOk && matchesQuery(item);
  });
}

function renderOptions() {
  Object.entries(sizes).forEach(([value, size]) => {
    elements.sizeFilter.append(new Option(size.title, value));
  });

  styles.forEach((style) => {
    elements.styleFilter.append(new Option(style.label, style.key));
  });
}

function workItems(item) {
  const mediumPlants = item.plants.filter((plant) => plant.pot !== "Csp9" && plant.pot !== "hagymás").reduce((sum, plant) => sum + plant.qty, 0);
  const smallPlants = item.plants.filter((plant) => plant.pot === "Csp9" || plant.pot === "hagymás").reduce((sum, plant) => sum + plant.qty, 0);

  return [
    ["Terület tisztítása, előkészítése", item.area, "m²"],
    ["Évelők ültetése K2 méretig", mediumPlants, "db"],
    ["Csp9 / hagymás növény ültetés", smallPlants, "db"],
    ["Geotextília terítés", item.area, "m²"],
    [item.water === "alacsony" ? "Dekoratív kavics terítés" : "Barna mulcs terítés", item.area, "m²"],
    ["Szegélykő elhelyezés opcionális", Math.round(Math.sqrt(item.area) * 4 * 10) / 10, "fm"],
    ["Öntözőrendszer opcionális", 1, "csomag"]
  ];
}

function plantPositions(index) {
  const positions = [
    [6, 2, "large"],
    [3, 4, ""],
    [9, 4, ""],
    [5, 6, ""],
    [7, 6, ""],
    [3, 9, "small"],
    [6, 10, "small"],
    [9, 9, "small"]
  ];
  return positions[index % positions.length];
}

function renderPlan(item) {
  return item.plants
    .slice(0, 8)
    .map((plant, index) => {
      const [column, row, size] = plantPositions(index);
      return `<span class="plant-dot ${size}" style="grid-column:${column};grid-row:${row};--color:${plant.color}">${index + 1}</span>`;
    })
    .join("");
}

function renderDesignPage(item) {
  const plantTotal = item.plants.reduce((sum, plant) => sum + plant.qty, 0);
  const workRows = workItems(item)
    .map((row) => `<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td></tr>`)
    .join("");

  return `
    <section class="page design-page" data-id="${item.id}">
      <h2 class="page-title">${item.order}. ${item.heading} - ${item.sizeTitle}</h2>

      <div class="top-layout">
        <aside class="style-panel">
          <div class="info-row"><span class="icon">⌂</span><div><span>Stílus:</span><strong>${item.label}</strong></div></div>
          <div class="info-row"><span class="icon">♢</span><div><span>Fény:</span><strong>${item.light}</strong></div></div>
          <div class="info-row"><span class="icon water">▽</span><div><span>Vízigény:</span><strong>${item.water}</strong></div></div>
          <div class="description">
            <h3>Leírás</h3>
            <p>${item.description}</p>
          </div>
        </aside>

        <img class="hero-image" src="./assets/img/${item.image}" alt="${item.heading}" />
      </div>

      <div class="middle-grid">
        <section class="table-card">
          <h3>Növénylista</h3>
          <table>
            <thead><tr><th>Növény</th><th>Méret</th><th>Db</th><th>Ár</th></tr></thead>
            <tbody>
              ${item.plants.map((plant) => `
                <tr>
                  <td class="plant-name">${plant.name}<em>${plant.latin}</em></td>
                  <td>${plant.pot}</td>
                  <td>${plant.qty}</td>
                  <td>ajánlat szerint</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
          <div class="total-row"><span>Növények összesen:</span><span>${plantTotal} db</span></div>
          <p class="note">Az árak később cserélhetők. A táblázat jelenleg mennyiségi ügyfélbemutatóként használható.</p>
        </section>

        <section class="table-card">
          <h3>Kivitelezési tételek</h3>
          <table>
            <thead><tr><th>Munka</th><th>Mennyiség</th><th>Egység</th></tr></thead>
            <tbody>${workRows}</tbody>
          </table>
          <div class="work-fee">Kivitelezési munkadíj: ${item.workFee}</div>
          <p class="note">A munkadíj később, pontos árlista és helyszíni adottságok alapján tölthető ki.</p>
        </section>
      </div>

      <div class="bottom-grid">
        <div class="stack">
          <section class="box">
            <h3>Fenntartási igény</h3>
            <ul class="check-list">${item.maintenance.map((text) => `<li>${text}</li>`).join("")}</ul>
          </section>
          <section class="box">
            <h3>Virágzási időszak</h3>
            <ul class="season-list">${item.plants.slice(0, 6).map((plant) => `<li><span>${plant.name}</span><strong>${plant.season}</strong></li>`).join("")}</ul>
          </section>
        </div>

        <section class="plan-wrap">
          <h3 class="plan-title">Felülnézeti vázlat (${item.sizeTitle})</h3>
          <div class="garden-plan">${renderPlan(item)}</div>
          <div class="dimension"><span>${item.sizeTitle.split("x")[0]},0 m</span><span>${item.sizeTitle.replace("x", " x ")}</span></div>
          <div class="cost-card">
            <h3>Becsült összköltség</h3>
            <div class="cost-grid">
              <span>Növényköltség:<strong>ajánlat szerint</strong></span>
              <span>Kivitelezés:<strong>${item.workFee}</strong></span>
            </div>
          </div>
        </section>

        <div class="stack">
          <section class="box">
            <h3>Jelmagyarázat</h3>
            <ul class="plain-list">${item.plants.slice(0, 8).map((plant, index) => `<li><strong>${index + 1}</strong><span>${plant.name}</span></li>`).join("")}</ul>
          </section>
          <section class="box">
            <h3>Fenntartási megjegyzések</h3>
            <ul class="check-list">${item.notes.map((note) => `<li>${note}</li>`).join("")}</ul>
          </section>
        </div>
      </div>
    </section>
  `;
}

function renderEmptyPage() {
  return `
    <section class="page empty-page">
      <div>
        <h2>Nincs találat</h2>
        <p>Próbálj rövidebb keresést, másik méretet vagy másik stílust.</p>
      </div>
    </section>
  `;
}

function updateStatus() {
  const totalPages = activePages.length;
  elements.pageStatus.textContent = `${Math.min(currentPage + 1, totalPages)} / ${totalPages}`;
  elements.prevPage.disabled = currentPage <= 0;
  elements.nextPage.disabled = currentPage >= totalPages - 1;
}

class LocalFlipBook {
  constructor(root, pages) {
    this.root = root;
    this.pages = pages;
    this.current = 0;
    this.root.classList.add("local-flipbook");
    this.turnToPage(0);
  }

  turnToPage(page) {
    this.current = Math.max(0, Math.min(page, this.pages.length - 1));
    this.pages.forEach((pageElement, index) => {
      pageElement.classList.toggle("active", index === this.current);
    });
  }

  destroy() {
    this.root.classList.remove("local-flipbook");
    this.pages.forEach((pageElement) => pageElement.classList.remove("active"));
  }
}

function renderBook() {
  const filtered = filteredCatalog();
  elements.flipbook.innerHTML = "";

  const cover = elements.coverTemplate.content.firstElementChild.cloneNode(true);
  elements.flipbook.append(cover);

  if (filtered.length === 0) {
    elements.flipbook.insertAdjacentHTML("beforeend", renderEmptyPage());
  } else {
    elements.flipbook.insertAdjacentHTML("beforeend", filtered.map(renderDesignPage).join(""));
  }

  activePages = [...elements.flipbook.querySelectorAll(".page")];
  currentPage = 0;
  elements.resultSummary.textContent = `${filtered.length} ágyásterv találat, ${activePages.length} lap`;

  if (pageFlip) {
    pageFlip.destroy();
    pageFlip = undefined;
  }

  if (localFlip) {
    localFlip.destroy();
    localFlip = undefined;
  }

  if (window.St?.PageFlip) {
    pageFlip = new St.PageFlip(elements.flipbook, {
      width: 610,
      height: 760,
      size: "stretch",
      minWidth: 320,
      maxWidth: 610,
      minHeight: 520,
      maxHeight: 760,
      drawShadow: true,
      flippingTime: 650,
      usePortrait: true,
      startPage: 0,
      autoSize: true,
      showCover: true,
      mobileScrollSupport: true
    });

    pageFlip.loadFromHTML(activePages);
    pageFlip.on("flip", (event) => {
      currentPage = event.data;
      updateStatus();
    });
  } else {
    localFlip = new LocalFlipBook(elements.flipbook, activePages);
    window.BookFlipAPI = {
      next: () => goToPage(currentPage + 1),
      prev: () => goToPage(currentPage - 1),
      turnToPage: (page) => goToPage(page),
      pageCount: () => activePages.length
    };
  }

  updateStatus();
}

function goToPage(page) {
  const target = Math.max(0, Math.min(page, activePages.length - 1));
  currentPage = target;

  if (pageFlip) {
    pageFlip.turnToPage(target);
  } else if (localFlip) {
    localFlip.turnToPage(target);
  } else {
    activePages[target]?.scrollIntoView({ block: "start", behavior: "smooth" });
  }

  updateStatus();
}

elements.searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderBook();
});

elements.sizeFilter.addEventListener("change", (event) => {
  state.size = event.target.value;
  renderBook();
});

elements.styleFilter.addEventListener("change", (event) => {
  state.style = event.target.value;
  renderBook();
});

elements.resetButton.addEventListener("click", () => {
  state.query = "";
  state.size = "";
  state.style = "";
  elements.searchInput.value = "";
  elements.sizeFilter.value = "";
  elements.styleFilter.value = "";
  renderBook();
});

elements.prevPage.addEventListener("click", () => goToPage(currentPage - 1));
elements.nextPage.addEventListener("click", () => goToPage(currentPage + 1));

renderOptions();
renderBook();
