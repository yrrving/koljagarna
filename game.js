const emitterCards = [
  {
    id: "mallis",
    name: "Flygcharter till Mallis",
    description: "Många blir glada direkt. Atmosfären får ta notan senare.",
    carbon: 26,
    comfort: 24,
    needs: 3,
    climate: -7,
    icon: "plane",
  },
  {
    id: "beef",
    name: "Biffbuffe hela veckan",
    description: "Billigt, snabbt och populärt. Metan och markanvändning följer med.",
    carbon: 18,
    comfort: 18,
    needs: 4,
    climate: -4,
    icon: "plate",
  },
  {
    id: "motorway",
    name: "Motorväg före cykelväg",
    description: "Smidigare vardag för vissa, mer fossil trafik för alla.",
    carbon: 22,
    comfort: 21,
    needs: 8,
    climate: -5,
    icon: "road",
  },
  {
    id: "gas",
    name: "Snabb el från fossilgas",
    description: "Stabil energi nu, men kol som legat lagrat släpps ut.",
    carbon: 30,
    comfort: 28,
    needs: 10,
    climate: -8,
    icon: "bolt",
  },
  {
    id: "shopping",
    name: "Köp nytt, släng snabbt",
    description: "Konsumtionen syns som vinst direkt, avfallet syns senare.",
    carbon: 16,
    comfort: 17,
    needs: 2,
    climate: -3,
    icon: "bag",
  },
  {
    id: "grill",
    name: "Kolgrillad festival",
    description: "Härlig stämning och höga utsläpp under samma kväll.",
    carbon: 14,
    comfort: 15,
    needs: 5,
    climate: -2,
    icon: "flame",
  },
  {
    id: "traintrip",
    name: "Tågsemester med budgetlyx",
    description: "Fortfarande konsumtion och resa, men mycket mindre kol än flyget.",
    carbon: 7,
    comfort: 12,
    needs: 7,
    climate: -1,
    icon: "train",
  },
  {
    id: "wintercoat",
    name: "Ny vinterjacka som behövs",
    description: "Ett köp kan vara rimligt när det faktiskt möter ett behov.",
    carbon: 8,
    comfort: 9,
    needs: 12,
    climate: -1,
    icon: "coat",
  },
  {
    id: "streaming",
    name: "Helg med spel och streaming",
    description: "Låg dramatik, men el, prylar och serverhallar räknas också.",
    carbon: 6,
    comfort: 10,
    needs: 4,
    climate: -1,
    icon: "screen",
  },
  {
    id: "renovation",
    name: "Riv ut och renovera nytt",
    description: "Känns fräscht direkt, men material och transporter väger tungt.",
    carbon: 20,
    comfort: 20,
    needs: 3,
    climate: -4,
    icon: "hammer",
  },
];

const storageCards = [
  {
    id: "wetland",
    name: "Återvätad våtmark",
    description: "Stoppar torv från att läcka kol och blir starkare efter några år.",
    carbon: -8,
    stored: 20,
    longScore: 8,
    needs: -2,
    climate: 4,
    delay: 2,
    delayedStore: 24,
    icon: "wetland",
  },
  {
    id: "forest",
    name: "Skog som får växa",
    description: "Binder kol långsamt. Inte flashigt, men tungt i slutet.",
    carbon: -5,
    stored: 14,
    longScore: 7,
    needs: -1,
    climate: 3,
    delay: 3,
    delayedStore: 32,
    icon: "tree",
  },
  {
    id: "biochar",
    name: "Biokol i jorden",
    description: "Gör växtrester till stabilt kol som kan ligga kvar länge.",
    carbon: -12,
    stored: 18,
    longScore: 10,
    needs: 1,
    climate: 2,
    delay: 1,
    delayedStore: 12,
    icon: "soil",
  },
  {
    id: "foodwaste",
    name: "Mindre matsvinn",
    description: "Mindre onödig produktion ger snabb klimatnytta.",
    carbon: -10,
    stored: 8,
    longScore: 9,
    needs: 5,
    climate: 5,
    delay: 1,
    delayedStore: 8,
    icon: "apple",
  },
  {
    id: "meadow",
    name: "Äng och jordhälsa",
    description: "Mer liv i marken bygger små men stabila kollager.",
    carbon: -6,
    stored: 12,
    longScore: 6,
    needs: 2,
    climate: 6,
    delay: 2,
    delayedStore: 18,
    icon: "meadow",
  },
  {
    id: "bus",
    name: "Buss, tåg och cykel",
    description: "Byter vana snarare än teknik. Effekten kommer varje år.",
    carbon: -14,
    stored: 6,
    longScore: 11,
    needs: 6,
    climate: 3,
    delay: 2,
    delayedStore: 14,
    icon: "bus",
  },
  {
    id: "repaircafe",
    name: "Laga mobilen i stället",
    description: "Mindre nyproduktion, lite mer krångel, men vardagen fortsätter.",
    carbon: -7,
    stored: 5,
    longScore: 7,
    needs: 4,
    climate: 2,
    delay: 1,
    delayedStore: 7,
    icon: "wrench",
  },
  {
    id: "veggieparty",
    name: "Vegofest med importerad lyx",
    description: "Mindre kött, men fortfarande fest, transporter och förpackningar.",
    carbon: 3,
    stored: 3,
    longScore: 5,
    needs: 7,
    climate: 1,
    delay: 1,
    delayedStore: 4,
    icon: "apple",
  },
  {
    id: "ebike",
    name: "Elcyklar till laget",
    description: "Batterier kostar resurser, men kan ersätta många bilresor.",
    carbon: 6,
    stored: 4,
    longScore: 9,
    needs: 8,
    climate: 2,
    delay: 2,
    delayedStore: 18,
    icon: "bike",
  },
  {
    id: "reuse",
    name: "Klädbyte och second hand",
    description: "Behov möts utan att allt måste produceras från början.",
    carbon: -9,
    stored: 7,
    longScore: 8,
    needs: 7,
    climate: 3,
    delay: 1,
    delayedStore: 6,
    icon: "shirt",
  },
];

const iconPaths = {
  plane: `<path d="M6 25 L36 11 L31 22 L38 28 L34 32 L26 27 L18 37 L15 34 L19 25 L7 28 Z" />`,
  plate: `<circle cx="22" cy="22" r="14" fill="none" stroke-width="5" /><path d="M13 20 C18 16 25 16 31 21" fill="none" stroke-width="4" /><path d="M34 8 V35 M38 8 V35" stroke-width="3" />`,
  road: `<path d="M14 39 L20 6 H28 L34 39 Z" /><path d="M24 10 V18 M24 24 V33" stroke="#fffdf7" stroke-width="3" />`,
  bolt: `<path d="M25 4 L10 25 H21 L17 40 L36 17 H24 Z" />`,
  bag: `<path d="M11 16 H35 L32 39 H14 Z" /><path d="M17 16 C17 8 29 8 29 16" fill="none" stroke-width="4" />`,
  flame: `<path d="M24 40 C14 35 10 28 14 20 C16 16 20 13 20 7 C28 12 36 20 34 30 C33 36 29 39 24 40 Z" />`,
  train: `<path d="M12 8 H36 C39 8 41 10 41 13 V31 C41 34 38 36 35 36 H13 C10 36 7 34 7 31 V13 C7 10 9 8 12 8 Z" /><path d="M13 14 H35 V24 H13 Z" fill="#fffdf7" /><path d="M15 41 L21 35 M33 41 L27 35" fill="none" stroke-width="4" />`,
  coat: `<path d="M17 8 L24 13 L31 8 L38 16 L34 40 H14 L10 16 Z" /><path d="M24 13 V40" stroke="#fffdf7" stroke-width="3" />`,
  screen: `<path d="M8 11 H40 V33 H8 Z" /><path d="M18 39 H30 M24 33 V39" fill="none" stroke-width="4" />`,
  hammer: `<path d="M18 13 L25 6 L42 23 L35 30 Z" /><path d="M18 22 L7 33 L13 39 L24 28 Z" />`,
  wetland: `<path d="M7 29 C14 22 21 34 29 26 C34 21 38 25 41 29 V37 H7 Z" /><path d="M15 28 V10 M24 27 V7 M33 27 V13" stroke-width="4" />`,
  tree: `<path d="M24 6 C13 9 9 19 14 27 C10 30 13 37 22 35 H26 C36 37 39 29 34 26 C39 18 34 8 24 6 Z" /><path d="M24 27 V41" stroke-width="5" />`,
  soil: `<path d="M8 27 C14 22 18 31 24 26 C30 21 34 29 40 24 V38 H8 Z" /><circle cx="17" cy="31" r="2" /><circle cx="28" cy="32" r="2" />`,
  apple: `<path d="M24 15 C31 9 39 16 36 27 C34 37 28 41 24 36 C20 41 14 37 12 27 C9 16 17 9 24 15 Z" /><path d="M24 14 C24 9 27 6 31 5" fill="none" stroke-width="4" />`,
  meadow: `<path d="M8 38 C15 28 15 17 18 9 C22 20 22 29 24 38 M25 38 C30 30 30 20 35 13 C38 23 37 31 40 38" fill="none" stroke-width="5" />`,
  bus: `<path d="M9 13 C9 9 13 7 24 7 C35 7 39 9 39 13 V32 H9 Z" /><path d="M14 14 H34 V23 H14 Z" fill="#fffdf7" /><circle cx="16" cy="34" r="4" /><circle cx="32" cy="34" r="4" />`,
  wrench: `<path d="M33 8 C29 7 24 8 21 12 C19 15 19 18 20 21 L8 33 L15 40 L27 28 C31 30 36 28 39 24 C41 21 41 17 40 14 L34 20 L29 15 Z" />`,
  bike: `<circle cx="15" cy="32" r="8" fill="none" stroke-width="4" /><circle cx="35" cy="32" r="8" fill="none" stroke-width="4" /><path d="M15 32 L23 19 L30 32 H21 L35 32 M23 19 H29" fill="none" stroke-width="4" />`,
  shirt: `<path d="M17 8 L24 12 L31 8 L40 16 L34 24 L32 19 V40 H16 V19 L14 24 L8 16 Z" />`,
};

const maxRounds = 8;
let state;

const elements = {
  atmosphereValue: document.querySelector("#atmosphereValue"),
  storedValue: document.querySelector("#storedValue"),
  climateValue: document.querySelector("#climateValue"),
  economyValue: document.querySelector("#economyValue"),
  roundValue: document.querySelector("#roundValue"),
  temperatureValue: document.querySelector("#temperatureValue"),
  emitterScore: document.querySelector("#emitterScore"),
  storageScore: document.querySelector("#storageScore"),
  statusMessage: document.querySelector("#statusMessage"),
  cardGrid: document.querySelector("#cardGrid"),
  phaseKicker: document.querySelector("#phaseKicker"),
  phaseTitle: document.querySelector("#phaseTitle"),
  phaseCopy: document.querySelector("#phaseCopy"),
  selectedText: document.querySelector("#selectedText"),
  resolveButton: document.querySelector("#resolveButton"),
  timeline: document.querySelector("#timeline"),
  pendingProjects: document.querySelector("#pendingProjects"),
  gameLog: document.querySelector("#gameLog"),
  classModeButton: document.querySelector("#classModeButton"),
  summaryButton: document.querySelector("#summaryButton"),
  summaryDialog: document.querySelector("#summaryDialog"),
  closeSummaryButton: document.querySelector("#closeSummaryButton"),
  playAgainButton: document.querySelector("#playAgainButton"),
  summaryTitle: document.querySelector("#summaryTitle"),
  projectionChart: document.querySelector("#projectionChart"),
  summaryList: document.querySelector("#summaryList"),
  reflectionText: document.querySelector("#reflectionText"),
  rulesDialog: document.querySelector("#rulesDialog"),
  rulesButton: document.querySelector("#rulesButton"),
  closeRulesButton: document.querySelector("#closeRulesButton"),
  newGameButton: document.querySelector("#newGameButton"),
};

function freshState() {
  const seed = Math.floor(Math.random() * 100000);
  const emitterOffers = buildOffers(emitterCards, seed + 17);
  const storageOffers = buildOffers(storageCards, seed + 53);
  return {
    round: 1,
    phase: "emitter",
    atmosphere: 420,
    stored: 80,
    climate: 65,
    needs: 58,
    emitterScore: 0,
    storageScore: 0,
    selectedEmitter: null,
    selectedStorage: null,
    emitterOffers,
    storageOffers,
    history: [],
    classMode: false,
    pending: [],
    log: [],
    finished: false,
    summaryShown: false,
  };
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function temperature() {
  return 1.2 + (state.atmosphere - 420) / 115;
}

function seededRandom(seed) {
  const value = Math.sin(seed * 999) * 10000;
  return value - Math.floor(value);
}

function buildOffers(deck, seed) {
  return Array.from({ length: maxRounds }, (_, roundIndex) => {
    const ranked = deck
      .map((card, index) => ({
        card,
        sort: seededRandom(seed + (roundIndex + 1) * 37 + index * 11),
      }))
      .sort((a, b) => a.sort - b.sort)
      .map((item) => item.card);
    return ranked.slice(0, 3);
  });
}

function signed(value) {
  return value > 0 ? `+${value}` : String(value);
}

function availableCards(deck) {
  if (deck === emitterCards) return state.emitterOffers[state.round - 1];
  return state.storageOffers[state.round - 1];
}

function renderIcon(card) {
  const color = emitterCards.includes(card) ? "#b84a3d" : "#326955";
  return `<svg viewBox="0 0 48 48" aria-hidden="true" fill="${color}" stroke="${color}" stroke-linecap="round" stroke-linejoin="round">${iconPaths[card.icon]}</svg>`;
}

function renderCards() {
  const isEmitterPhase = state.phase === "emitter";
  const cards = availableCards(isEmitterPhase ? emitterCards : storageCards);
  elements.cardGrid.innerHTML = cards
    .map((card) => {
      const selected = isEmitterPhase
        ? state.selectedEmitter?.id === card.id
        : state.selectedStorage?.id === card.id;
      const effects = state.classMode
        ? [card.carbon > 12 ? "Hög kolrisk" : card.carbon > 0 ? "Viss kolrisk" : "Minskar kol", card.needs > 6 ? "Stärker behov" : "Kräver val"]
        : isEmitterPhase
          ? [`${signed(card.comfort)} kort sikt`, `${signed(card.carbon)} kol`, `${signed(card.needs)} behov`]
          : [`${signed(card.carbon)} kol`, `${signed(card.stored)} lagrat`, `${signed(card.needs)} behov`];
      return `
        <button class="card-button ${isEmitterPhase ? "is-emitter" : "is-storage"} ${selected ? "is-selected" : ""}" type="button" data-id="${card.id}">
          <span class="card-art">${renderIcon(card)}</span>
          <h3>${card.name}</h3>
          <p>${card.description}</p>
          <span class="effect-list">${effects.map((effect) => `<span>${effect}</span>`).join("")}</span>
        </button>
      `;
    })
    .join("");

  [...elements.cardGrid.querySelectorAll(".card-button")].forEach((button) => {
    button.addEventListener("click", () => selectCard(button.dataset.id));
  });
}

function selectCard(id) {
  if (state.finished) return;
  if (state.phase === "emitter") {
    state.selectedEmitter = emitterCards.find((card) => card.id === id);
    state.phase = "storage";
  } else {
    state.selectedStorage = storageCards.find((card) => card.id === id);
  }
  render();
}

function resolveYear() {
  if (!state.selectedEmitter || !state.selectedStorage || state.finished) return;

  const emitter = state.selectedEmitter;
  const storage = state.selectedStorage;
  state.atmosphere += emitter.carbon + storage.carbon;
  state.stored += storage.stored;
  state.climate += emitter.climate + storage.climate;
  state.needs += emitter.needs + storage.needs - 3;
  state.emitterScore += emitter.comfort;
  state.storageScore += storage.longScore + Math.round(storage.stored * 0.25);

  state.pending.push({
    name: storage.name,
    yearsLeft: storage.delay,
    amount: storage.delayedStore,
  });

  const matured = [];
  state.pending = state.pending
    .map((project) => ({ ...project, yearsLeft: project.yearsLeft - 1 }))
    .filter((project) => {
      if (project.yearsLeft <= 0) {
        matured.push(project);
        return false;
      }
      return true;
    });

  matured.forEach((project) => {
    state.stored += project.amount;
    state.atmosphere -= Math.round(project.amount * 0.45);
    state.storageScore += Math.round(project.amount * 0.7);
  });

  const heat = temperature();
  if (heat > 1.8) {
    state.climate -= 7;
    state.emitterScore -= 4;
    state.log.unshift({
      title: `Värmevarning år ${state.round}`,
      text: "Hög kolhalt gav torka och skadade ekosystemen.",
    });
  } else if (state.atmosphere < 430 && state.climate > 70) {
    state.storageScore += 5;
    state.log.unshift({
      title: `Medvind år ${state.round}`,
      text: "Stabila ekosystem gjorde lagringsprojekten lättare att försvara.",
    });
  }

  state.climate = clamp(state.climate, 0, 100);
  state.needs = clamp(state.needs, 0, 100);
  state.atmosphere = clamp(state.atmosphere, 340, 620);
  state.stored = clamp(state.stored, 0, 360);

  state.history.push({
    round: state.round,
    atmosphere: Math.round(state.atmosphere),
    stored: Math.round(state.stored),
    climate: Math.round(state.climate),
    needs: Math.round(state.needs),
    emitter: emitter.name,
    storage: storage.name,
    netCarbon: emitter.carbon + storage.carbon,
  });

  const maturedText = matured.length
    ? ` ${matured.map((project) => `${project.name} lagrade ${project.amount}`).join(", ")}.`
    : "";
  state.log.unshift({
    title: `År ${state.round}`,
    text: `${emitter.name} mötte ${storage.name}.${maturedText}`,
  });

  if (state.round >= maxRounds) {
    finishGame();
  } else {
    state.round += 1;
    state.phase = "emitter";
    state.selectedEmitter = null;
    state.selectedStorage = null;
  }

  render();
  if (state.finished && !state.summaryShown) {
    state.summaryShown = true;
    window.setTimeout(openSummary, 350);
  }
}

function finishGame() {
  state.finished = true;
  const atmospherePenalty = Math.max(0, state.atmosphere - 460);
  const ecosystemBonus = Math.round((state.climate - 50) * 0.6);
  const needsBonus = Math.round((state.needs - 50) * 0.35);
  state.emitterScore += Math.round(state.needs * 0.22) - Math.round(atmospherePenalty * 0.55);
  state.storageScore += Math.round(state.stored * 0.28) + ecosystemBonus + needsBonus - Math.round(atmospherePenalty * 0.18);
  state.log.unshift({
    title: "Sluträkning",
    text: `Atmosfärstraff ${Math.round(atmospherePenalty)}, ekosystembonus ${ecosystemBonus} och behovsbonus ${needsBonus}.`,
  });
}

function statusText() {
  if (state.round === 1 && state.emitterScore === 0 && state.storageScore === 0) {
    return "Utsläpp kan dra ifrån snabbt. Lagring behöver tid för att hinna ikapp.";
  }
  if (state.finished) {
    if (state.emitterScore > state.storageScore) {
      return "Lag Utsläpp vann på poäng, men jämför slutläget: var vinsten hållbar eller bara snabb?";
    }
    if (state.storageScore > state.emitterScore) {
      return "Lag Lagring vann. Den långsamma effekten hann ikapp när sluträkningen tog med systemet.";
    }
    return "Oavgjort. Perfekt läge för diskussion: vilken regel skulle ändra resultatet?";
  }
  if (state.round <= 3 && state.emitterScore > state.storageScore) {
    return "Utsläpp leder ofta tidigt. Frågan är vad ledningen kostar i atmosfären.";
  }
  if (state.storageScore >= state.emitterScore) {
    return "Lagring har börjat hinna ikapp. Projekt med fördröjd effekt gör skillnad.";
  }
  return "Spelet väger mellan snabb nytta och långsam återhämtning.";
}

function renderSelection() {
  const emitter = state.selectedEmitter ? `Utsläpp: ${state.selectedEmitter.name}` : "Utsläpp: inget valt";
  const storage = state.selectedStorage ? `Lagring: ${state.selectedStorage.name}` : "Lagring: inget valt";
  elements.selectedText.textContent = `${emitter}. ${storage}.`;
  elements.resolveButton.disabled = !state.selectedEmitter || !state.selectedStorage || state.finished;
}

function renderPhase() {
  if (state.finished) {
    elements.phaseKicker.textContent = "Spelet är klart";
    elements.phaseTitle.textContent = "Slutresultat";
    elements.phaseCopy.textContent = "Starta ett nytt spel eller ändra reglerna tillsammans med klassen.";
    elements.resolveButton.textContent = "Färdigt";
    return;
  }

  elements.resolveButton.textContent = "Spela året";
  if (state.phase === "emitter") {
    elements.phaseKicker.textContent = "Lag Utsläpp";
    elements.phaseTitle.textContent = `Välj utsläppskort för år ${state.round}`;
    elements.phaseCopy.textContent = "Korten ger snabb poäng men skickar mer kol till atmosfären.";
  } else {
    elements.phaseKicker.textContent = "Lag Lagring";
    elements.phaseTitle.textContent = `Svara med lagring år ${state.round}`;
    elements.phaseCopy.textContent = "Välj ett projekt som minskar, fångar eller försenar kolets väg till atmosfären.";
  }
}

function renderTimeline() {
  elements.timeline.innerHTML = Array.from({ length: maxRounds }, (_, index) => {
    const year = index + 1;
    const className = year < state.round ? "is-past" : year === state.round ? "is-current" : "";
    return `<span class="${className}" title="År ${year}"></span>`;
  }).join("");
}

function renderPending() {
  if (state.pending.length === 0) {
    elements.pendingProjects.innerHTML = `<div class="pending-item"><span>Inga projekt väntar</span><strong>än</strong></div>`;
    return;
  }

  elements.pendingProjects.innerHTML = state.pending
    .map(
      (project) => `
        <div class="pending-item">
          <span>${project.name}</span>
          <strong>${project.yearsLeft} år</strong>
        </div>
      `,
    )
    .join("");
}

function renderLog() {
  elements.gameLog.innerHTML = state.log
    .slice(0, 12)
    .map((entry) => `<div class="log-entry"><strong>${entry.title}</strong><br>${entry.text}</div>`)
    .join("");
}

function renderMetrics() {
  elements.atmosphereValue.textContent = Math.round(state.atmosphere);
  elements.storedValue.textContent = Math.round(state.stored);
  elements.climateValue.textContent = Math.round(state.climate);
  elements.economyValue.textContent = Math.round(state.needs);
  elements.roundValue.textContent = `${state.round} / ${maxRounds}`;
  elements.temperatureValue.textContent = `+${temperature().toFixed(1)}°C`;
  elements.emitterScore.textContent = Math.round(state.emitterScore);
  elements.storageScore.textContent = Math.round(state.storageScore);
  elements.statusMessage.textContent = statusText();
  elements.summaryButton.disabled = !state.finished;
  elements.classModeButton.textContent = state.classMode ? "Visa siffror" : "Klassläge";

  document.documentElement.style.setProperty("--cloud-scale", String(clamp((state.atmosphere - 380) / 120, 0.55, 1.8)));
  document.querySelectorAll(".carbon-cloud").forEach((cloud, index) => {
    const scale = clamp((state.atmosphere - 360) / 100 + index * 0.05, 0.65, 1.9);
    cloud.style.transform = `scale(${scale})`;
    cloud.style.opacity = String(clamp((state.atmosphere - 360) / 130, 0.28, 0.82));
  });
}

function projectionPoints() {
  const points = [...state.history];
  let atmosphere = state.atmosphere;
  let stored = state.stored;
  let climate = state.climate;
  let needs = state.needs;
  const recentNet =
    state.history.slice(-3).reduce((total, year) => total + year.netCarbon, 0) /
    Math.max(1, state.history.slice(-3).length);

  for (let year = maxRounds + 1; year <= 30; year += 1) {
    const delayed = Math.max(0, (stored - 120) * 0.018);
    atmosphere = clamp(atmosphere + recentNet * 0.42 - delayed, 340, 680);
    stored = clamp(stored + Math.max(0, 8 - recentNet * 0.15), 0, 460);
    climate = clamp(climate - Math.max(0, (atmosphere - 455) / 38) + Math.max(0, (stored - 150) / 120), 0, 100);
    needs = clamp(needs - Math.max(0, (atmosphere - 480) / 65) + (climate > 60 ? 0.25 : -0.2), 0, 100);
    points.push({
      round: year,
      atmosphere: Math.round(atmosphere),
      stored: Math.round(stored),
      climate: Math.round(climate),
      needs: Math.round(needs),
    });
  }
  return points;
}

function lineSvg(points, key, color, min, max) {
  const width = 520;
  const height = 180;
  const path = points
    .map((point, index) => {
      const x = (index / (points.length - 1)) * width;
      const y = height - ((point[key] - min) / (max - min)) * height;
      return `${index === 0 ? "M" : "L"} ${x.toFixed(1)} ${clamp(y, 0, height).toFixed(1)}`;
    })
    .join(" ");
  return `<path d="${path}" fill="none" stroke="${color}" stroke-width="4" stroke-linecap="round" />`;
}

function renderSummary() {
  const points = projectionPoints();
  const last = points[points.length - 1];
  const winner =
    state.storageScore > state.emitterScore
      ? "Lagring vinner när framtiden räknas"
      : state.emitterScore > state.storageScore
        ? "Utsläpp vinner poängen, men framtiden behöver granskas"
        : "Oavgjort med flera möjliga tolkningar";

  elements.summaryTitle.textContent = winner;
  elements.projectionChart.innerHTML = `
    <svg viewBox="0 0 520 220" role="img" aria-label="Långtidsprojektion för atmosfär, ekosystem och grundbehov">
      <line x1="0" y1="181" x2="520" y2="181" stroke="#d8d1c3" stroke-width="2" />
      <line x1="132" y1="0" x2="132" y2="190" stroke="#d8d1c3" stroke-width="2" stroke-dasharray="6 6" />
      ${lineSvg(points, "atmosphere", "#b84a3d", 360, 650)}
      ${lineSvg(points, "climate", "#78aeb2", 0, 100)}
      ${lineSvg(points, "needs", "#e4a945", 0, 100)}
      <text x="8" y="210">år 1</text>
      <text x="126" y="210">år 8</text>
      <text x="462" y="210">år 30</text>
    </svg>
    <div class="legend-row">
      <span><i class="legend atmosphere-line"></i>Atmosfär</span>
      <span><i class="legend climate-line"></i>Ekosystem</span>
      <span><i class="legend needs-line"></i>Grundbehov</span>
    </div>
  `;

  const mostCarbon = [...state.history].sort((a, b) => b.netCarbon - a.netCarbon)[0];
  const leastCarbon = [...state.history].sort((a, b) => a.netCarbon - b.netCarbon)[0];
  elements.summaryList.innerHTML = `
    <div class="summary-item"><strong>${Math.round(state.atmosphere)}</strong><span>kol i atmosfären vid år 8</span></div>
    <div class="summary-item"><strong>${Math.round(last.atmosphere)}</strong><span>projicerad atmosfär vid år 30</span></div>
    <div class="summary-item"><strong>${Math.round(state.needs)}</strong><span>grundbehov och livsbalans vid år 8</span></div>
    <div class="summary-item"><strong>${mostCarbon?.round ?? "-"}</strong><span>året med störst nettoutsläpp: ${mostCarbon?.emitter ?? "saknas"}</span></div>
    <div class="summary-item"><strong>${leastCarbon?.round ?? "-"}</strong><span>bästa kolåret: ${leastCarbon?.storage ?? "saknas"}</span></div>
  `;

  elements.reflectionText.textContent =
    last.atmosphere > state.atmosphere + 25
      ? "Projektionen fortsätter åt fel håll. Vilka val gav hög livskvalitet utan att bygga fast mer utsläpp?"
      : "Projektionen planar ut. Vilka uppoffringar var rimliga, och vilka behov måste samhället ändå lösa?";
}

function openSummary() {
  renderSummary();
  elements.summaryDialog.showModal();
}

function render() {
  renderMetrics();
  renderPhase();
  renderSelection();
  renderCards();
  renderTimeline();
  renderPending();
  renderLog();
}

function startNewGame() {
  const classMode = state?.classMode ?? false;
  state = freshState();
  state.classMode = classMode;
  state.log.unshift({
    title: "Start",
    text: "Åtta år, två lag, en atmosfär. Vem tjänar mest när slutet räknas?",
  });
  render();
}

elements.resolveButton.addEventListener("click", resolveYear);
elements.newGameButton.addEventListener("click", startNewGame);
elements.summaryButton.addEventListener("click", openSummary);
elements.playAgainButton.addEventListener("click", () => {
  elements.summaryDialog.close();
  startNewGame();
});
elements.classModeButton.addEventListener("click", () => {
  state.classMode = !state.classMode;
  render();
});
elements.rulesButton.addEventListener("click", () => elements.rulesDialog.showModal());
elements.closeRulesButton.addEventListener("click", () => elements.rulesDialog.close());
elements.closeSummaryButton.addEventListener("click", () => elements.summaryDialog.close());
elements.rulesDialog.addEventListener("click", (event) => {
  if (event.target === elements.rulesDialog) elements.rulesDialog.close();
});
elements.summaryDialog.addEventListener("click", (event) => {
  if (event.target === elements.summaryDialog) elements.summaryDialog.close();
});

startNewGame();
