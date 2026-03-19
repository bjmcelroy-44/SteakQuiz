const STORAGE_KEY = "beef_cut_fit_dynamic_scaffold_v1";

const CUTS = [
  {
    id: "filet",
    name: "Filet Mignon",
    tagline: "Best when tenderness outranks price and big beef flavor.",
    traits: {
      tenderness: 11,
      leanness: 10,
      richness: 3,
      value: 2,
      forgiveness: 9,
      adventure: 2,
      showpiece: 10,
      classicness: 10,
    },
  },
  {
    id: "ribeye",
    name: "Ribeye",
    tagline: "The marbled choice when richness and indulgence come first.",
    traits: {
      tenderness: 8,
      leanness: 2,
      richness: 10,
      value: 3,
      forgiveness: 7,
      adventure: 3,
      showpiece: 8,
      classicness: 9,
    },
  },
  {
    id: "strip",
    name: "New York Strip",
    tagline: "Balanced steakhouse energy with a firmer bite than filet.",
    traits: {
      tenderness: 8,
      leanness: 5,
      richness: 7,
      value: 6,
      forgiveness: 7,
      adventure: 2,
      showpiece: 7,
      classicness: 10,
    },
  },
  {
    id: "sirloin",
    name: "Top Sirloin",
    tagline: "A practical middle ground for leaner eating and real value.",
    traits: {
      tenderness: 5,
      leanness: 7,
      richness: 4,
      value: 9,
      forgiveness: 7,
      adventure: 2,
      showpiece: 4,
      classicness: 8,
    },
  },
  {
    id: "flat_iron",
    name: "Flat Iron",
    tagline: "Strong value with impressive tenderness for the price.",
    traits: {
      tenderness: 9,
      leanness: 6,
      richness: 6,
      value: 8,
      forgiveness: 8,
      adventure: 4,
      showpiece: 5,
      classicness: 5,
    },
  },
  {
    id: "tri_tip",
    name: "Tri-Tip",
    tagline: "Leaner, crowd-friendly, and versatile if you cook and slice it well.",
    traits: {
      tenderness: 7,
      leanness: 8,
      richness: 6,
      value: 8,
      forgiveness: 6,
      adventure: 5,
      showpiece: 6,
      classicness: 6,
    },
  },
  {
    id: "hanger",
    name: "Hanger Steak",
    tagline: "Bold and beefy for eaters who want character over polish.",
    traits: {
      tenderness: 5,
      leanness: 4,
      richness: 8,
      value: 6,
      forgiveness: 4,
      adventure: 8,
      showpiece: 5,
      classicness: 3,
    },
  },
  {
    id: "skirt",
    name: "Skirt Steak",
    tagline: "Fast-cooking, beefy, and best when bold flavor matters more than finesse.",
    traits: {
      tenderness: 4,
      leanness: 5,
      richness: 8,
      value: 7,
      forgiveness: 3,
      adventure: 7,
      showpiece: 4,
      classicness: 3,
    },
  },
  {
    id: "flank",
    name: "Flank Steak",
    tagline: "Lean, affordable, and best for confident slicing and marinade play.",
    traits: {
      tenderness: 3,
      leanness: 8,
      richness: 5,
      value: 8,
      forgiveness: 3,
      adventure: 6,
      showpiece: 3,
      classicness: 4,
    },
  },
  {
    id: "picanha",
    name: "Picanha",
    tagline: "A crowd-pleasing fat-cap cut that feels premium without going full steakhouse luxury.",
    traits: {
      tenderness: 7,
      leanness: 4,
      richness: 8,
      value: 6,
      forgiveness: 6,
      adventure: 6,
      showpiece: 8,
      classicness: 4,
    },
  },
];

const RECOMMENDATION_LEVELS = {
  filet: {
    2: [
      {
        name: "Center-Cut Filet",
        meta: "Cleaner premium refinement if you want the same tender lane in a more polished format.",
      },
    ],
    3: [
      {
        name: "Porterhouse",
        meta: "Best if you want filet tenderness with larger classic steakhouse presence.",
      },
    ],
    4: [
      {
        name: "Beef Tenderloin Roast",
        meta: "Holiday or entertaining format if you want the filet profile at scale.",
      },
    ],
  },
  ribeye: {
    2: [
      {
        name: "Bone-In Ribeye",
        meta: "Same ribeye personality with a more premium steakhouse presentation.",
      },
    ],
    3: [
      {
        name: "Tomahawk",
        meta: "Showpiece ribeye for celebration cooks, visual impact, and big-table energy.",
      },
    ],
    4: [
      {
        name: "Beef Short Ribs",
        meta: "BBQ or braise project if you love rich, indulgent beef flavor.",
      },
    ],
  },
  strip: {
    2: [
      {
        name: "Bone-In Strip",
        meta: "Closest steakhouse upgrade if you want strip character with more presence.",
      },
    ],
    3: [
      {
        name: "Porterhouse",
        meta: "Premium crossover if you want some filet tenderness with strip flavor.",
      },
      {
        name: "T-Bone",
        meta: "Bone-in steakhouse variant that stays more strip-forward.",
      },
    ],
    4: [
      {
        name: "Brisket",
        meta: "Weekend smoke project if you like classic beef flavor and longer cooks.",
      },
    ],
  },
  sirloin: {
    2: [
      {
        name: "Tri-Tip",
        meta: "Closest roast-steak crossover if you want sirloin versatility.",
      },
    ],
    3: [
      {
        name: "Picanha",
        meta: "Richer sirloin-adjacent specialty cut with more occasion energy.",
      },
    ],
    4: [
      {
        name: "Brisket",
        meta: "Practical beefy BBQ project when you want scale and patience.",
      },
    ],
  },
  flat_iron: {
    2: [
      {
        name: "Denver Steak",
        meta: "Similar value-forward tenderness from the chuck family.",
      },
    ],
    3: [
      {
        name: "Chuck Eye",
        meta: "Richer budget-minded specialty move if you want more beefiness.",
      },
    ],
    4: [
      {
        name: "Chuck Short Ribs",
        meta: "Slow-cook project if you like chuck flavor in a bigger format.",
      },
    ],
  },
  tri_tip: {
    2: [
      {
        name: "Whole Tri-Tip Roast",
        meta: "Larger sliced serving format for the same carve-and-serve personality.",
      },
    ],
    3: [
      {
        name: "Picanha",
        meta: "Richer carve-and-slice step up if you want more indulgence.",
      },
    ],
    4: [
      {
        name: "Brisket",
        meta: "Low-and-slow crowd project if you like roast-friendly beef cuts.",
      },
    ],
  },
  hanger: {
    2: [
      {
        name: "Skirt Steak",
        meta: "Closest adjacent butcher cut with similar grill-fast energy.",
      },
    ],
    3: [
      {
        name: "Bavette",
        meta: "Explorer cut for sliced, beef-forward steak lovers.",
      },
      {
        name: "Flap Steak",
        meta: "Loose-grain specialty option with the same butcher-cut attitude.",
      },
    ],
    4: [
      {
        name: "Plate Short Ribs",
        meta: "Smoke or braise project when you want maximum beef intensity.",
      },
    ],
  },
  skirt: {
    2: [
      {
        name: "Hanger Steak",
        meta: "Thicker adjacent butcher cut with similar bold-beef personality.",
      },
    ],
    3: [
      {
        name: "Bavette",
        meta: "Explorer cut for sliced, beefy grill-first cooking.",
      },
      {
        name: "Flap Steak",
        meta: "Another high-heat butcher-cut option with real personality.",
      },
    ],
    4: [
      {
        name: "Beef Short Ribs",
        meta: "Long-cook extension of the bold, rich beef lane.",
      },
    ],
  },
  flank: {
    2: [
      {
        name: "Skirt Steak",
        meta: "More flavorful nearby alternative if you can give up some leanness.",
      },
    ],
    3: [
      {
        name: "Tri-Tip",
        meta: "More forgiving carve-and-slice upgrade from the same general lane.",
      },
    ],
    4: [
      {
        name: "Brisket",
        meta: "Value-minded BBQ project if you want scale and patience.",
      },
    ],
  },
  picanha: {
    2: [
      {
        name: "Whole Picanha Roast",
        meta: "Larger carve-and-slice version of the same fat-cap profile.",
      },
    ],
    3: [
      {
        name: "Bone-In Ribeye",
        meta: "Familiar steakhouse-rich crosswalk if you want a classic premium format.",
      },
      {
        name: "Tomahawk",
        meta: "Showpiece option if you want maximum presentation.",
      },
    ],
    4: [
      {
        name: "Beef Short Ribs",
        meta: "Long-cook extension of the rich premium beef lane.",
      },
    ],
  },
};

const COOKING_GUIDES = {
  filet: {
    method: "Hard sear, then gentle finish",
    doneness: "Rare to medium-rare",
    temp: "120 to 125F pull",
    watchout: "It dries quickly if pushed past medium.",
    family: "lean_tender",
  },
  ribeye: {
    method: "Direct grill or cast-iron sear",
    doneness: "Medium-rare",
    temp: "125 to 130F pull",
    watchout: "Render fat instead of only chasing color.",
    family: "rich_classic",
  },
  strip: {
    method: "Cast-iron sear or grill",
    doneness: "Medium-rare",
    temp: "125 to 130F pull",
    watchout: "Rest well so the firmer grain relaxes.",
    family: "rich_classic",
  },
  sirloin: {
    method: "Direct grill or hot cast iron",
    doneness: "Medium-rare",
    temp: "125 to 130F pull",
    watchout: "It tightens up fast if you overcook it.",
    family: "lean_value",
  },
  flat_iron: {
    method: "Quick hot sear or grill",
    doneness: "Medium-rare",
    temp: "125 to 130F pull",
    watchout: "Treat it like a quick-cook steak, not a slow roast.",
    family: "lean_value",
  },
  tri_tip: {
    method: "Reverse-sear or roast, then slice",
    doneness: "Medium-rare",
    temp: "125 to 130F pull",
    watchout: "Slicing direction matters as much as doneness.",
    family: "roast_slice",
  },
  hanger: {
    method: "Hot sear or grill fast",
    doneness: "Rare to medium-rare",
    temp: "120 to 125F pull",
    watchout: "Cook fast and rest fully before slicing.",
    family: "butcher_cut",
  },
  skirt: {
    method: "Blazing-hot quick grill or cast iron",
    doneness: "Rare to medium-rare",
    temp: "120 to 125F pull",
    watchout: "It overcooks in a hurry and must be sliced against the grain.",
    family: "butcher_cut",
  },
  flank: {
    method: "High heat, quick cook, aggressive slicing",
    doneness: "Rare to medium-rare",
    temp: "120 to 125F pull",
    watchout: "Texture falls off fast if overcooked or sliced with the grain.",
    family: "lean_slice",
  },
  picanha: {
    method: "Render fat cap, then roast or grill",
    doneness: "Medium-rare",
    temp: "125 to 130F pull",
    watchout: "Build fat rendering before chasing the final crust.",
    family: "fat_cap",
  },
};

const TIP_CARDS_BY_FAMILY = {
  lean_tender: [
    {
      title: "Prep",
      fitLabel: "Key",
      tips: [
        "Pat it very dry so a lean cut can still build a crust.",
        "Salt early or right before cooking, but keep seasoning simple.",
        "If the medallion is thick, tie it for more even cooking.",
      ],
    },
    {
      title: "Cook",
      fitLabel: "Best Fit",
      tips: [
        "Sear hard for color, then drop the heat to protect the center.",
        "Flip often if pan-searing to avoid a grey band.",
        "Butter-baste late, not early.",
      ],
    },
    {
      title: "Serve",
      fitLabel: "Finish",
      tips: [
        "Rest briefly, then serve thick, not thin.",
        "Use flaky salt at the end so the cut still tastes vivid.",
        "Lean premium cuts benefit from a light sauce more than heavy butter.",
      ],
    },
  ],
  rich_classic: [
    {
      title: "Prep",
      fitLabel: "Key",
      tips: [
        "Bring the surface dry before cooking so fat renders and crust forms.",
        "Season assertively; rich cuts can handle more salt.",
        "Give the fat side time too, not just the flat faces.",
      ],
    },
    {
      title: "Cook",
      fitLabel: "Best Fit",
      tips: [
        "Start with enough heat to build crust, then finish more gently.",
        "For thick steaks, render the edge fat deliberately.",
        "Medium-rare usually shows the best balance of tenderness and richness.",
      ],
    },
    {
      title: "Serve",
      fitLabel: "Finish",
      tips: [
        "Rest long enough for the rendered fat to settle.",
        "Slice across the grain if serving family-style.",
        "Finish with salt, pepper, and acid before adding heavy sauces.",
      ],
    },
  ],
  lean_value: [
    {
      title: "Prep",
      fitLabel: "Key",
      tips: [
        "Trim silverskin or hard exterior fat when needed.",
        "Dry brining helps these cuts stay seasoned without extra fuss.",
        "Use a hot cooking surface from the start.",
      ],
    },
    {
      title: "Cook",
      fitLabel: "Best Fit",
      tips: [
        "Aim for medium-rare and do not linger over the fire.",
        "These cuts reward clean execution more than slow cooking.",
        "Finish thicker pieces with indirect heat instead of dragging out the sear.",
      ],
    },
    {
      title: "Serve",
      fitLabel: "Finish",
      tips: [
        "Rest briefly, then slice cleanly.",
        "Compound butter or chimichurri works well if you want extra richness.",
        "These are strong repeat-buy cuts when cooked simply and consistently.",
      ],
    },
  ],
  roast_slice: [
    {
      title: "Prep",
      fitLabel: "Key",
      tips: [
        "Season the whole roast evenly and let it sit uncovered if possible.",
        "Know the grain direction before cooking so slicing is easy later.",
        "Reverse-sear setups usually outperform frantic hot starts here.",
      ],
    },
    {
      title: "Cook",
      fitLabel: "Best Fit",
      tips: [
        "Cook gently first, then finish hot for the crust.",
        "Pull in the medium-rare range for the best balance of tenderness and beefiness.",
        "Avoid chasing too much carryover; tri-tip keeps cooking after the fire.",
      ],
    },
    {
      title: "Serve",
      fitLabel: "Finish",
      tips: [
        "Slice across the changing grain, even if that means rotating the roast.",
        "Serve thin slices instead of thick steakhouse slabs.",
        "This cut shines when carved for a table, not plated as a tiny steak.",
      ],
    },
  ],
  butcher_cut: [
    {
      title: "Prep",
      fitLabel: "Key",
      tips: [
        "High heat matters more than long cook time.",
        "These cuts are ideal for marinade, acid, or aggressive seasoning.",
        "Trim only what is necessary; too much cleanup costs flavor.",
      ],
    },
    {
      title: "Cook",
      fitLabel: "Best Fit",
      tips: [
        "Cook fast and stay in the rare to medium-rare window.",
        "Do not crowd the pan or baby the grill temperature.",
        "Crust and slicing matter more than chasing perfect center symmetry.",
      ],
    },
    {
      title: "Serve",
      fitLabel: "Finish",
      tips: [
        "Rest, then slice thinly against the grain.",
        "Serve these cuts family-style instead of as thick individual steaks.",
        "Chimichurri, salsa roja, or citrus works especially well here.",
      ],
    },
  ],
  lean_slice: [
    {
      title: "Prep",
      fitLabel: "Key",
      tips: [
        "Marinade is optional, but slicing strategy is not.",
        "Keep the surface dry enough to sear, even if you marinate.",
        "Treat it as a carved steak, not a thick chop.",
      ],
    },
    {
      title: "Cook",
      fitLabel: "Best Fit",
      tips: [
        "Use high heat and short cook times.",
        "Pull early; medium and beyond makes this cut feel narrow and tough.",
        "Let it rest before carving so the grain slices more cleanly.",
      ],
    },
    {
      title: "Serve",
      fitLabel: "Finish",
      tips: [
        "Slice very thin and sharply against the grain.",
        "Serve with bold sauces, herbs, or tacos rather than alone on a plate.",
        "This cut wins when technique is part of the value equation.",
      ],
    },
  ],
  fat_cap: [
    {
      title: "Prep",
      fitLabel: "Key",
      tips: [
        "Score the fat cap lightly if needed, but do not cut deep into the meat.",
        "Season aggressively enough to support the fat rendering.",
        "Skewer or keep whole depending on the format you are cooking.",
      ],
    },
    {
      title: "Cook",
      fitLabel: "Best Fit",
      tips: [
        "Start by rendering the fat cap instead of rushing to the final sear.",
        "Once the fat starts to soften, treat it like a premium roast-steak crossover.",
        "Medium-rare usually gives the best payoff.",
      ],
    },
    {
      title: "Serve",
      fitLabel: "Finish",
      tips: [
        "Slice with some fat attached to each piece.",
        "Salt at the end helps the rendered fat taste cleaner and brighter.",
        "This cut is strongest when carved for a table, not hidden under sauce.",
      ],
    },
  ],
};

const QUESTIONS = {
  texture_goal: {
    id: "texture_goal",
    type: "Baseline Signal",
    prompt: "What kind of bite are you chasing?",
    detail: "Start with texture. This sets the first major branch in the cut pool.",
    options: [
      {
        value: "tender",
        label: "Very tender",
        detail: "Soft, refined, minimal chew.",
        weights: { tenderness: 3, forgiveness: 1 },
      },
      {
        value: "balanced",
        label: "Balanced steak bite",
        detail: "Tender, but still steaky.",
        weights: { tenderness: 2, richness: 1, value: 1 },
      },
      {
        value: "hearty",
        label: "Chewier and more steak-forward",
        detail: "I want texture and character.",
        weights: { adventure: 2, richness: 1, tenderness: -1 },
      },
    ],
  },
  fat_profile: {
    id: "fat_profile",
    type: "Baseline Signal",
    prompt: "Which fat profile sounds best?",
    detail: "This separates lean cuts from heavily marbled steakhouse cuts.",
    options: [
      {
        value: "lean",
        label: "Lean and clean",
        detail: "Less fat, cleaner finish.",
        weights: { leanness: 3, richness: -1 },
      },
      {
        value: "balanced",
        label: "Some marbling, not too much",
        detail: "A middle ground.",
        weights: { leanness: 1, richness: 1, tenderness: 1 },
      },
      {
        value: "rich",
        label: "Rich and marbled",
        detail: "I want indulgence and depth.",
        weights: { richness: 3, leanness: -2, showpiece: 1 },
      },
    ],
  },
  budget_goal: {
    id: "budget_goal",
    type: "Baseline Signal",
    prompt: "How do you want to spend on this steak?",
    detail: "Budget is often where ideal preferences become real tradeoffs.",
    options: [
      {
        value: "economical",
        label: "Keep it economical",
        detail: "Best fit for the money matters.",
        weights: { value: 3, showpiece: -1, classicness: 1 },
      },
      {
        value: "flexible",
        label: "Middle ground is fine",
        detail: "I want solid fit without overspending.",
        weights: { value: 1, tenderness: 1, richness: 1, classicness: 1 },
      },
      {
        value: "premium",
        label: "Willing to pay for the right cut",
        detail: "Fit matters more than price.",
        weights: { showpiece: 2, tenderness: 1, richness: 1, value: -1, classicness: 1 },
      },
    ],
  },
  priority_triangle: {
    id: "priority_triangle",
    type: "Conflict Resolver",
    prompt: "You picked tender, lean, and economical. If you cannot get all three, what wins?",
    detail: "This is the core tradeoff question for the filet-style request on a budget.",
    options: [
      {
        value: "tenderness",
        label: "Tenderness wins",
        detail: "I will spend more or give up some leanness.",
        weights: { tenderness: 4, value: -2, richness: 1 },
      },
      {
        value: "leanness",
        label: "Leanness wins",
        detail: "I want a cleaner cut even if it is less luxurious.",
        weights: { leanness: 4, tenderness: 1, richness: -1 },
      },
      {
        value: "value",
        label: "Price wins",
        detail: "Keep it affordable even if the steak is less ideal.",
        weights: { value: 4, tenderness: -1, showpiece: -1 },
      },
    ],
  },
  tender_vs_budget: {
    id: "tender_vs_budget",
    type: "Conflict Resolver",
    prompt: "If tenderness pushes the price up, which side do you want to protect?",
    detail: "This separates premium tender cuts from smart-value compromises.",
    options: [
      {
        value: "protect_tenderness",
        label: "Protect tenderness",
        detail: "I want the softest bite first.",
        weights: { tenderness: 3, value: -2, showpiece: 1 },
      },
      {
        value: "find_middle",
        label: "Find the middle",
        detail: "Keep some tenderness without jumping to luxury pricing.",
        weights: { tenderness: 2, value: 2 },
      },
      {
        value: "protect_budget",
        label: "Protect the budget",
        detail: "A good fit matters more than a perfect bite.",
        weights: { value: 3, tenderness: -1 },
      },
    ],
  },
  rich_vs_budget: {
    id: "rich_vs_budget",
    type: "Conflict Resolver",
    prompt: "You want marbling, but also value. Which compromise feels better?",
    detail: "This clarifies whether to chase ribeye energy or a more practical cut.",
    options: [
      {
        value: "pay_for_richness",
        label: "Pay for richness",
        detail: "I want the marbling experience.",
        weights: { richness: 4, value: -2, showpiece: 1 },
      },
      {
        value: "balanced_value",
        label: "Hit a value sweet spot",
        detail: "Good richness, sensible price.",
        weights: { richness: 2, value: 2 },
      },
      {
        value: "budget_over_marbling",
        label: "Value first",
        detail: "Marbling is nice, not essential.",
        weights: { value: 3, richness: -1 },
      },
    ],
  },
  luxury_vs_practical: {
    id: "luxury_vs_practical",
    type: "Priority Check",
    prompt: "Is this steak more about impressing or just reliably eating well?",
    detail: "Useful when premium-lean or premium-balanced answers leave more than one strong candidate.",
    options: [
      {
        value: "impress",
        label: "Impress",
        detail: "This should feel premium.",
        weights: { showpiece: 3, tenderness: 1, richness: 1, classicness: 1 },
      },
      {
        value: "balanced",
        label: "A bit of both",
        detail: "Fit matters more than the label.",
        weights: { showpiece: 1, value: 1, forgiveness: 1, classicness: 2 },
      },
      {
        value: "practical",
        label: "Reliable and practical",
        detail: "I care more about repeatability than wow factor.",
        weights: { value: 2, forgiveness: 2, showpiece: -1, classicness: 2 },
      },
    ],
  },
  cooking_confidence: {
    id: "cooking_confidence",
    type: "Execution Filter",
    prompt: "How confident are you cooking steak well?",
    detail: "Some cuts are forgiving. Others need cleaner technique or precise slicing.",
    options: [
      {
        value: "beginner",
        label: "Beginner",
        detail: "I want a cut that is hard to mess up.",
        weights: { forgiveness: 4, adventure: -1, classicness: 2 },
      },
      {
        value: "comfortable",
        label: "Comfortable",
        detail: "I can handle a normal steak cook.",
        weights: { forgiveness: 2, tenderness: 1, richness: 1, classicness: 1 },
      },
      {
        value: "confident",
        label: "Confident",
        detail: "Technique-sensitive cuts are fine.",
        weights: { adventure: 2, forgiveness: -1, value: 1, classicness: -1 },
      },
    ],
  },
  adventure_guardrail: {
    id: "adventure_guardrail",
    type: "Preference Check",
    prompt: "Would you rather stay classic or try a cut with more personality?",
    detail: "This decides between familiar steakhouse cuts and more expressive butcher cuts.",
    options: [
      {
        value: "classic",
        label: "Stay classic",
        detail: "Give me the familiar answer.",
        weights: { adventure: -2, showpiece: 1, forgiveness: 1, classicness: 4 },
      },
      {
        value: "open",
        label: "Open to either",
        detail: "I care about fit more than reputation.",
        weights: { adventure: 1, value: 1, classicness: 1 },
      },
      {
        value: "adventurous",
        label: "Try something with personality",
        detail: "I want character over convention.",
        weights: { adventure: 3, richness: 1, forgiveness: -1, classicness: -2 },
      },
    ],
  },
};

const BASELINE_IDS = ["texture_goal", "fat_profile", "budget_goal"];
const TECHNIQUE_SENSITIVE_CUT_IDS = new Set([
  "flank",
  "hanger",
  "skirt",
  "tri_tip",
]);
const LUXURY_CUT_IDS = new Set(["filet", "ribeye", "strip"]);
const PERSONALITY_CUT_IDS = new Set(["hanger", "skirt", "flank", "picanha"]);

const state = {
  currentIndex: 0,
  questionOrder: [...BASELINE_IDS],
  answers: {},
};

const introPanel = document.getElementById("introPanel");
const quizPanel = document.getElementById("quizPanel");
const resultPanel = document.getElementById("resultPanel");
const progressLabel = document.getElementById("progressLabel");
const answeredLabel = document.getElementById("answeredLabel");
const progressFill = document.getElementById("progressFill");
const questionType = document.getElementById("questionType");
const questionPrompt = document.getElementById("questionPrompt");
const questionDetail = document.getElementById("questionDetail");
const optionsWrap = document.getElementById("optionsWrap");
const warningText = document.getElementById("warningText");
const primaryCutName = document.getElementById("primaryCutName");
const primaryCutTagline = document.getElementById("primaryCutTagline");
const quickReadNarrative = document.getElementById("quickReadNarrative");
const signalChips = document.getElementById("signalChips");
const fitReasonsList = document.getElementById("fitReasonsList");
const tradeoffSummary = document.getElementById("tradeoffSummary");
let cookingList = document.getElementById("cookingList");
let tipsCutLabel = document.getElementById("tipsCutLabel");
let tipsColumns = document.getElementById("tipsColumns");
let tier1Title = document.getElementById("tier1Title");
let tier2Title = document.getElementById("tier2Title");
let tier3Title = document.getElementById("tier3Title");
let tier4Title = document.getElementById("tier4Title");
let tier1List = document.getElementById("tier1List");
let tier2List = document.getElementById("tier2List");
let tier3List = document.getElementById("tier3List");
let tier4List = document.getElementById("tier4List");
const answerPath = document.getElementById("answerPath");
const startBtn = document.getElementById("startBtn");
const backBtn = document.getElementById("backBtn");
const editBtn = document.getElementById("editBtn");
const restartBtn = document.getElementById("restartBtn");

ensureDynamicResultSections();
refreshResultNodes();

startBtn.addEventListener("click", startAssessment);
backBtn.addEventListener("click", goBack);
editBtn.addEventListener("click", adjustLastAnswer);
restartBtn.addEventListener("click", resetAssessment);

hydrateState();
renderInitialState();

function ensureDynamicResultSections() {
  const resultGrid = resultPanel?.querySelector?.(".result-grid");
  if (!resultGrid) {
    return;
  }

  if (!document.getElementById("cookingList")) {
    const cookingCard = document.createElement("article");
    cookingCard.className = "result-card full-width";
    cookingCard.innerHTML = `
      <h3>Cooking Profile</h3>
      <ul id="cookingList" class="clean-list kv-list"></ul>
    `;
    resultGrid.insertBefore(cookingCard, answerPath?.closest?.(".result-card") || null);
  }

  if (!document.getElementById("tipsColumns")) {
    const tipsCard = document.createElement("article");
    tipsCard.className = "result-card full-width";
    tipsCard.innerHTML = `
      <h3>Cooking Tips &amp; Tricks</h3>
      <p id="tipsCutLabel" class="tips-cut-label"></p>
      <div id="tipsColumns" class="tips-columns"></div>
    `;
    resultGrid.insertBefore(tipsCard, answerPath?.closest?.(".result-card") || null);
  }

  if (!document.getElementById("tier1List")) {
    const levelsCard = document.createElement("article");
    levelsCard.className = "result-card full-width";
    levelsCard.innerHTML = `
      <h3>Recommendation Levels</h3>
      <div class="tier-grid">
        <section class="tier-column">
          <h4 id="tier1Title">Level 1: Primary Recommendation</h4>
          <ul id="tier1List" class="clean-list"></ul>
        </section>
        <section class="tier-column">
          <h4 id="tier2Title">Level 2: Same-Lane Upgrades</h4>
          <ul id="tier2List" class="clean-list"></ul>
        </section>
        <section class="tier-column">
          <h4 id="tier3Title">Level 3: Premium / Specialty</h4>
          <ul id="tier3List" class="clean-list"></ul>
        </section>
        <section class="tier-column">
          <h4 id="tier4Title">Level 4: BBQ / Explorer</h4>
          <ul id="tier4List" class="clean-list"></ul>
        </section>
      </div>
    `;
    resultGrid.insertBefore(levelsCard, answerPath?.closest?.(".result-card") || null);
  }
}

function refreshResultNodes() {
  cookingList = document.getElementById("cookingList");
  tipsCutLabel = document.getElementById("tipsCutLabel");
  tipsColumns = document.getElementById("tipsColumns");
  tier1Title = document.getElementById("tier1Title");
  tier2Title = document.getElementById("tier2Title");
  tier3Title = document.getElementById("tier3Title");
  tier4Title = document.getElementById("tier4Title");
  tier1List = document.getElementById("tier1List");
  tier2List = document.getElementById("tier2List");
  tier3List = document.getElementById("tier3List");
  tier4List = document.getElementById("tier4List");
}

function hydrateState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (!saved || typeof saved !== "object") {
      return;
    }

    if (saved.answers && typeof saved.answers === "object") {
      state.answers = saved.answers;
    }

    state.questionOrder = buildQuestionOrder(state.answers);
    state.currentIndex = Math.max(
      0,
      Math.min(Number(saved.currentIndex) || 0, state.questionOrder.length - 1)
    );
  } catch (error) {
    console.warn("Dynamic scaffold state restore failed.", error);
  }
}

function persistState() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      answers: state.answers,
      currentIndex: state.currentIndex,
    })
  );
}

function startAssessment() {
  syncQuestionOrder();
  introPanel.classList.add("hidden");
  resultPanel.classList.add("hidden");
  quizPanel.classList.remove("hidden");
  renderQuestion();
}

function goBack() {
  if (state.currentIndex === 0) {
    return;
  }

  warningText.classList.add("hidden");
  state.currentIndex -= 1;
  persistState();
  renderQuestion();
}

function goNext() {
  const question = getCurrentQuestion();
  if (!question) {
    return;
  }

  if (!state.answers[question.id]) {
    warningText.classList.remove("hidden");
    return;
  }

  warningText.classList.add("hidden");
  syncQuestionOrder();

  if (state.currentIndex < state.questionOrder.length - 1) {
    state.currentIndex += 1;
    persistState();
    renderQuestion();
    return;
  }

  if (isAssessmentComplete()) {
    persistState();
    renderResults();
    return;
  }

  persistState();
  renderQuestion();
}

function advanceFromSelection() {
  warningText.classList.add("hidden");
  syncQuestionOrder();

  if (isAssessmentComplete()) {
    persistState();
    renderResults();
    return;
  }

  const nextUnansweredIndex = state.questionOrder.findIndex(
    (id) => !state.answers[id]
  );

  state.currentIndex =
    nextUnansweredIndex === -1 ? state.questionOrder.length - 1 : nextUnansweredIndex;
  persistState();
  renderQuestion();
}

function adjustLastAnswer() {
  syncQuestionOrder();
  state.currentIndex = Math.max(0, state.questionOrder.length - 1);
  resultPanel.classList.add("hidden");
  quizPanel.classList.remove("hidden");
  renderQuestion();
}

function resetAssessment() {
  state.currentIndex = 0;
  state.questionOrder = [...BASELINE_IDS];
  state.answers = {};
  localStorage.removeItem(STORAGE_KEY);
  renderInitialState();
}

function renderInitialState() {
  introPanel.classList.remove("hidden");
  quizPanel.classList.add("hidden");
  resultPanel.classList.add("hidden");
}

function renderQuestion() {
  syncQuestionOrder();
  const question = getCurrentQuestion();
  if (!question) {
    renderResults();
    return;
  }

  questionType.textContent = question.type;
  questionPrompt.textContent = question.prompt;
  questionDetail.textContent = question.detail;
  optionsWrap.innerHTML = "";

  const currentValue = state.answers[question.id];
  question.options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-card";
    if (currentValue === option.value) {
      button.classList.add("selected");
    }

    button.innerHTML = `
      <span class="option-label">${option.label}</span>
      <span class="option-detail">${option.detail}</span>
    `;

    button.addEventListener("click", () => {
      state.answers[question.id] = option.value;
      advanceFromSelection();
    });

    optionsWrap.appendChild(button);
  });

  const questionNumber = state.currentIndex + 1;
  const questionTotal = state.questionOrder.length;
  const answeredCount = Object.keys(state.answers).filter((id) =>
    state.questionOrder.includes(id)
  ).length;

  progressLabel.textContent = `Question ${questionNumber} of ${questionTotal}`;
  answeredLabel.textContent = `${answeredCount} answered`;
  progressFill.style.width = `${(questionNumber / questionTotal) * 100}%`;
  backBtn.disabled = state.currentIndex === 0;
}

function renderResults() {
  syncQuestionOrder();
  const rankedCuts = rankCuts(state.answers);
  const primary = rankedCuts[0];
  const profileSummary = summarizeProfile(state.answers, primary);
  const cookingGuide = buildCookingGuide(primary);
  const recommendationLevels = buildRecommendationLevels(primary, rankedCuts);

  quizPanel.classList.add("hidden");
  introPanel.classList.add("hidden");
  resultPanel.classList.remove("hidden");

  primaryCutName.textContent = primary.name;
  primaryCutTagline.textContent = primary.tagline;
  quickReadNarrative.textContent = profileSummary.quickRead;
  tradeoffSummary.textContent = profileSummary.tradeoff;

  renderSignalChips(profileSummary.signals);
  renderList(
    fitReasonsList,
    profileSummary.reasons.map((reason) => reason)
  );
  renderCookingProfile(cookingGuide);
  renderCookingTips(primary, cookingGuide);
  renderRecommendationLevelsGrid(recommendationLevels);
  renderAnswerPath();
}

function renderSignalChips(signals) {
  signalChips.innerHTML = "";
  signals.forEach((signal) => {
    const chip = document.createElement("span");
    chip.className = "answer-chip";
    chip.textContent = signal;
    signalChips.appendChild(chip);
  });
}

function renderAnswerPath() {
  answerPath.innerHTML = "";
  state.questionOrder.forEach((questionId) => {
    const question = QUESTIONS[questionId];
    const option = question.options.find(
      (item) => item.value === state.answers[questionId]
    );

    if (!option) {
      return;
    }

    const entry = document.createElement("article");
    entry.className = "answer-path-item";
    entry.innerHTML = `
      <h4>${question.prompt}</h4>
      <p>${option.label}</p>
    `;
    answerPath.appendChild(entry);
  });
}

function renderList(node, items) {
  node.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    node.appendChild(li);
  });
}

function renderCookingProfile(guide) {
  if (!cookingList) {
    return;
  }

  const profileItems = [
    { key: "Lead Option", value: guide.method },
    { key: "Best Doneness", value: guide.doneness },
    { key: "Pull Temp", value: guide.temp },
    { key: "Watchout", value: guide.watchout },
  ];

  cookingList.innerHTML = "";
  profileItems.forEach((item) => {
    const li = document.createElement("li");
    const key = document.createElement("span");
    const value = document.createElement("span");
    key.className = "kv-key";
    value.className = "kv-value";
    key.textContent = item.key;
    value.textContent = item.value;
    li.appendChild(key);
    li.appendChild(value);
    cookingList.appendChild(li);
  });
}

function renderCookingTips(primaryCut, guide) {
  if (!tipsColumns || !tipsCutLabel) {
    return;
  }

  tipsCutLabel.textContent = `Method-specific tips for ${primaryCut.name}`;
  tipsColumns.innerHTML = "";

  guide.tipCards.forEach((card) => {
    const cardElement = document.createElement("article");
    cardElement.className = "tips-method-card";

    const head = document.createElement("div");
    head.className = "tips-method-head";

    const title = document.createElement("h4");
    title.className = "tips-method-title";
    title.textContent = card.title;

    const fit = document.createElement("span");
    fit.className = "tips-method-fit";
    fit.textContent = card.fitLabel;

    head.appendChild(title);
    head.appendChild(fit);

    const list = document.createElement("ul");
    list.className = "tips-method-list";
    card.tips.forEach((tip) => {
      const item = document.createElement("li");
      item.textContent = tip;
      list.appendChild(item);
    });

    cardElement.appendChild(head);
    cardElement.appendChild(list);
    tipsColumns.appendChild(cardElement);
  });
}

function renderRecommendationLevelsGrid(levels) {
  if (tier1Title) {
    tier1Title.textContent = "Level 1: Primary Recommendation";
  }
  if (tier2Title) {
    tier2Title.textContent = "Level 2: Same-Lane Upgrades";
  }
  if (tier3Title) {
    tier3Title.textContent = "Level 3: Premium / Specialty";
  }
  if (tier4Title) {
    tier4Title.textContent = "Level 4: BBQ / Explorer";
  }

  renderTierEntries(tier1List, levels[1]);
  renderTierEntries(tier2List, levels[2]);
  renderTierEntries(tier3List, levels[3]);
  renderTierEntries(tier4List, levels[4]);
}

function renderTierEntries(target, entries) {
  if (!target) {
    return;
  }

  target.innerHTML = "";
  entries.forEach((entry) => {
    const li = document.createElement("li");
    li.className = "tier-cut-item";

    const row = document.createElement("div");
    row.className = "tier-cut-row";

    const copy = document.createElement("div");
    copy.className = "tier-cut-copy";

    const name = document.createElement("span");
    name.className = "tier-cut-name";
    name.textContent = entry.name;

    const meta = document.createElement("span");
    meta.className = "tier-cut-meta";
    meta.textContent = entry.meta;

    copy.appendChild(name);
    copy.appendChild(meta);
    row.appendChild(copy);
    li.appendChild(row);
    target.appendChild(li);
  });
}

function buildCookingGuide(primaryCut) {
  const guide = COOKING_GUIDES[primaryCut.id];
  return {
    ...guide,
    tipCards: TIP_CARDS_BY_FAMILY[guide.family] || [],
  };
}

function buildRecommendationLevels(primaryCut, rankedCuts) {
  const fallbackBase = rankedCuts.filter((cut) => cut.id !== primaryCut.id).slice(0, 3);
  const mapped = RECOMMENDATION_LEVELS[primaryCut.id] || {};

  return {
    1: [
      {
        name: primaryCut.name,
        meta: `Primary direct match from your adaptive path. ${primaryCut.tagline}`,
      },
    ],
    2: mapped[2] || buildFallbackLevel(fallbackBase[0], "Closest nearby alternative base cut."),
    3: mapped[3] || buildFallbackLevel(fallbackBase[1], "Premium or specialty extension of the same lane."),
    4: mapped[4] || buildFallbackLevel(fallbackBase[2], "Explorer or project cut if you want to go farther."),
  };
}

function buildFallbackLevel(cut, descriptor) {
  if (!cut) {
    return [
      {
        name: "No alternate loaded",
        meta: "This prototype does not have a mapped recommendation here yet.",
      },
    ];
  }

  return [
    {
      name: cut.name,
      meta: `${descriptor} ${cut.tagline}`,
    },
  ];
}

function getCurrentQuestion() {
  return QUESTIONS[state.questionOrder[state.currentIndex]];
}

function isAssessmentComplete() {
  return state.questionOrder.every((id) => Boolean(state.answers[id]));
}

function syncQuestionOrder() {
  const derivedOrder = buildQuestionOrder(state.answers);
  state.questionOrder = mergeQuestionOrder(state.questionOrder, derivedOrder);
  pruneStaleAnswers();
  if (state.currentIndex >= state.questionOrder.length) {
    state.currentIndex = Math.max(0, state.questionOrder.length - 1);
  }
}

function mergeQuestionOrder(previousOrder, derivedOrder) {
  const merged = previousOrder.filter((id) => derivedOrder.includes(id));
  derivedOrder.forEach((id) => {
    if (!merged.includes(id)) {
      merged.push(id);
    }
  });
  return merged;
}

function pruneStaleAnswers() {
  const validIds = new Set(state.questionOrder);
  Object.keys(state.answers).forEach((questionId) => {
    if (!validIds.has(questionId)) {
      delete state.answers[questionId];
    }
  });
}

function buildQuestionOrder(answers) {
  const order = [...BASELINE_IDS];
  if (!BASELINE_IDS.every((id) => Boolean(answers[id]))) {
    return order;
  }

  const preview = rankCuts(answers);
  const topIds = preview.slice(0, 3).map((cut) => cut.id);
  const { texture_goal: texture, fat_profile: fat, budget_goal: budget } = answers;

  if (texture === "tender" && fat === "lean" && budget === "economical") {
    order.push("priority_triangle");
  } else {
    if (texture === "tender" && budget === "economical") {
      order.push("tender_vs_budget");
    }

    if (fat === "rich" && budget === "economical") {
      order.push("rich_vs_budget");
    }

    if (budget === "premium" || topIds.some((id) => LUXURY_CUT_IDS.has(id))) {
      order.push("luxury_vs_practical");
    }
  }

  if (topIds.some((id) => TECHNIQUE_SENSITIVE_CUT_IDS.has(id))) {
    order.push("cooking_confidence");
  }

  if (
    texture === "hearty" ||
    topIds.some((id) => PERSONALITY_CUT_IDS.has(id))
  ) {
    order.push("adventure_guardrail");
  }

  return [...new Set(order)];
}

function rankCuts(answers) {
  const preferenceWeights = buildPreferenceWeights(answers);

  return CUTS.map((cut) => {
    let score = 0;
    Object.entries(preferenceWeights).forEach(([dimension, weight]) => {
      score += weight * cut.traits[dimension];
    });

    score += getCutAdjustment(cut.id, preferenceWeights);

    return {
      ...cut,
      score,
    };
  }).sort((a, b) => b.score - a.score);
}

function getCutAdjustment(cutId, preferenceWeights) {
  if (cutId === "flank") {
    return (
      -6 +
      Math.max(0, preferenceWeights.leanness) +
      Math.max(0, preferenceWeights.value) -
      Math.max(0, preferenceWeights.tenderness) -
      Math.max(0, preferenceWeights.showpiece)
    );
  }

  if (cutId === "skirt") {
    return (
      Math.max(0, preferenceWeights.richness) +
      Math.max(0, preferenceWeights.adventure) +
      Math.max(0, preferenceWeights.value) -
      Math.max(0, preferenceWeights.showpiece) -
      Math.max(0, preferenceWeights.leanness)
    );
  }

  if (cutId === "hanger") {
    return (
      Math.max(0, preferenceWeights.richness) +
      Math.max(0, preferenceWeights.adventure) +
      Math.max(0, preferenceWeights.showpiece) -
      Math.max(0, preferenceWeights.leanness)
    );
  }

  if (cutId === "picanha") {
    return (
      Math.max(0, preferenceWeights.richness) +
      Math.max(0, preferenceWeights.showpiece) -
      Math.max(0, preferenceWeights.value)
    );
  }

  return 0;
}

function buildPreferenceWeights(answers) {
  const weights = {
    tenderness: 0,
    leanness: 0,
    richness: 0,
    value: 0,
    forgiveness: 0,
    adventure: 0,
    showpiece: 0,
    classicness: 0,
  };

  Object.entries(answers).forEach(([questionId, answerValue]) => {
    const question = QUESTIONS[questionId];
    if (!question) {
      return;
    }

    const option = question.options.find((item) => item.value === answerValue);
    if (!option) {
      return;
    }

    Object.entries(option.weights).forEach(([dimension, delta]) => {
      weights[dimension] += delta;
    });
  });

  return weights;
}

function summarizeProfile(answers, primaryCut) {
  const weights = buildPreferenceWeights(answers);
  const topSignals = Object.entries(weights)
    .sort((a, b) => Math.abs(b[1]) - Math.abs(a[1]))
    .slice(0, 3);

  const signals = topSignals.map(([dimension, value]) => {
    const direction = value >= 0 ? "Priority" : "Avoid";
    return `${direction}: ${formatDimension(dimension)}`;
  });

  const reasons = topSignals.map(([dimension]) => {
    return `${primaryCut.name} scores well on ${formatDimension(dimension).toLowerCase()} relative to your answers.`;
  });

  const tradeoff = detectTradeoff(answers);
  const quickRead = buildQuickRead(primaryCut, answers, tradeoff);

  return {
    signals,
    reasons,
    tradeoff,
    quickRead,
  };
}

function detectTradeoff(answers) {
  if (answers.priority_triangle === "tenderness") {
    return "You protected tenderness over both leanness and price, so the prototype leaned toward premium-soft cuts.";
  }

  if (answers.priority_triangle === "leanness") {
    return "You protected a leaner eating experience, even if that meant less luxury or slightly less tenderness.";
  }

  if (answers.priority_triangle === "value") {
    return "You protected budget, so the prototype favored practical cuts that preserve enough fit without pretending to be filet.";
  }

  if (answers.tender_vs_budget === "protect_tenderness") {
    return "You accepted higher spend in exchange for tenderness, which pushed the result toward filet-style logic.";
  }

  if (answers.tender_vs_budget === "protect_budget") {
    return "You kept the budget intact, so the prototype looked for cuts that approximate tenderness without luxury pricing.";
  }

  if (answers.rich_vs_budget === "pay_for_richness") {
    return "You prioritized marbling over price, so the ranking favored richer steakhouse cuts.";
  }

  if (answers.rich_vs_budget === "budget_over_marbling") {
    return "You treated marbling as optional, so the ranking moved toward more economical cuts.";
  }

  if (answers.cooking_confidence === "beginner") {
    return "Cooking confidence mattered, so forgiving cuts got a lift over cuts that depend on slicing technique or tighter execution.";
  }

  return "The prototype found a compromise between texture, fat profile, spend, and cooking difficulty based on your answers.";
}

function buildQuickRead(primaryCut, answers, tradeoff) {
  const textureLabel = getAnswerLabel("texture_goal", answers.texture_goal);
  const fatLabel = getAnswerLabel("fat_profile", answers.fat_profile);
  const budgetLabel = getAnswerLabel("budget_goal", answers.budget_goal);

  return `${primaryCut.name} rose to the top because you started with ${textureLabel.toLowerCase()}, ${fatLabel.toLowerCase()}, and ${budgetLabel.toLowerCase()}. ${tradeoff}`;
}

function getAnswerLabel(questionId, answerValue) {
  const question = QUESTIONS[questionId];
  const option = question?.options.find((item) => item.value === answerValue);
  return option ? option.label : "an unresolved preference";
}

function formatDimension(dimension) {
  const labels = {
    tenderness: "Tenderness",
    leanness: "Leanness",
    richness: "Richness",
    value: "Value",
    forgiveness: "Forgiveness",
    adventure: "Adventure",
    showpiece: "Premium feel",
    classicness: "Classic steakhouse feel",
  };

  return labels[dimension] || dimension;
}
