// Exact text supplied by the presenter. Do not edit wording, punctuation or order.

export type Pose = "wave" | "point" | "celebrate";

export type Photo = { src: string; alt: string };

export type Slide = {
  kind: "cover" | "plan" | "section" | "closing" | "video";
  heading?: string;
  videos?: { youtubeId: string; title: string }[];
  paragraphs?: string[];
  items?: string[];
  title?: string;
  photos: Photo[];
  pose: Pose;
};

const img = (name: string) => `/images/${name}.jpg`;

const P1_DEF = [
  "Bonjour à tous. Aujourd’hui, je vais vous présenter le sujet du tourisme.",
  "Le tourisme est le fait de voyager dans un autre lieu pour découvrir de nouveaux endroits, connaître d’autres cultures et se détendre.",
];

const S2_P1 =
  "Le tourisme présente plusieurs avantages. Il crée des emplois, développe l’économie et permet de découvrir de nouvelles cultures.";
const S2_P2 =
  "Mais il présente aussi des inconvénients, comme la pollution, les déchets et la dégradation de certains sites naturels. Pour résoudre ces problèmes, il faut protéger l’environnement et encourager le tourisme durable.";

const S3_TITLE = "3. Le tourisme au niveau national : le Maroc";
const S3_P1 =
  "Au Maroc, le tourisme est un secteur très important. Notre pays possède de nombreux lieux touristiques, comme Marrakech, Agadir, Fès, Tanger et Chefchaouen. Il est connu pour ses plages, ses montagnes, son désert et sa culture.";
const S3_P2 =
  "Le tourisme aide à créer des emplois, à soutenir l’artisanat et à développer l’économie nationale. En 2025, le Maroc a accueilli environ 19,8 millions de visiteurs, un record pour notre pays.";
const S3_P3 =
  "Cependant, il faut améliorer les services touristiques, protéger les sites historiques et lutter contre la pollution.";

const S4_TITLE = "4. Le tourisme au niveau international";
const S4_P1 =
  "Au niveau international, le tourisme joue un rôle important dans l’économie mondiale. Des millions de personnes voyagent chaque année pour découvrir des pays comme la France, l’Espagne, l’Italie et la Turquie.";
const S4_P2 =
  "En 2025, environ 1,52 milliard de touristes internationaux ont voyagé dans le monde. Le tourisme favorise les échanges culturels, mais il peut aussi provoquer la pollution et la dégradation de l’environnement.";
const S4_P3 = "C’est pourquoi les pays doivent encourager un tourisme responsable et durable.";

const S5_TITLE = "6. Conclusion";
const S5_P1 =
  "Pour conclure, le tourisme est un secteur essentiel pour le développement économique et culturel. Il offre de nombreux avantages, mais il faut limiter ses effets négatifs. Nous devons protéger notre patrimoine et notre environnement pour développer un tourisme durable.";

export const TITLE = "Présentation sur le tourisme";
export const PLAN = [
  "1. Définition du tourisme",
  "2. Les avantages et les inconvénients",
  "3. Le tourisme au niveau national : le Maroc",
  "4. Le tourisme au niveau international",
  "5. Vidéos",
  "6. Conclusion",
];

export const slides: Slide[] = [
  {
    kind: "cover",
    title: TITLE,
    photos: [{ src: img("marrakech-night"), alt: "Place Jemaa el-Fna à Marrakech la nuit" }],
    pose: "wave",
  },
  {
    kind: "plan",
    heading: "Plan",
    items: PLAN,
    photos: [
      { src: img("essaouira"), alt: "Ville côtière d’Essaouira au Maroc" },
      { src: img("sahara"), alt: "Dunes du désert du Sahara" },
    ],
    pose: "point",
  },
  {
    kind: "section",
    heading: "1. Définition du tourisme",
    paragraphs: P1_DEF,
    photos: [
      { src: img("ait-benhaddou"), alt: "Ksar d’Aït Ben Haddou au Maroc" },
      { src: img("paris-eiffel"), alt: "La tour Eiffel à Paris" },
    ],
    pose: "point",
  },
  {
    kind: "section",
    heading: "2. Les avantages et les inconvénients",
    paragraphs: [S2_P1],
    photos: [{ src: img("marrakech-square"), alt: "Place Jemaa el-Fna pleine de monde à Marrakech" }],
    pose: "point",
  },
  {
    kind: "section",
    heading: "2. Les avantages et les inconvénients",
    paragraphs: [S2_P2],
    photos: [{ src: img("pollution"), alt: "Déchets plastiques sur une plage" }],
    pose: "point",
  },
  {
    kind: "section",
    heading: S3_TITLE,
    paragraphs: [S3_P1],
    photos: [
      { src: img("fes-medina"), alt: "Médina de Fès" },
      { src: img("chefchaouen"), alt: "Chefchaouen, la ville bleue" },
      { src: img("agadir"), alt: "Plage et baie d’Agadir" },
      { src: img("sahara"), alt: "Désert du Sahara marocain" },
    ],
    pose: "point",
  },
  {
    kind: "section",
    heading: S3_TITLE,
    paragraphs: [S3_P2],
    photos: [
      { src: img("zellige"), alt: "Artisan qui travaille le zellige" },
      { src: img("marrakech-night"), alt: "Place Jemaa el-Fna de Marrakech la nuit" },
    ],
    pose: "point",
  },
  {
    kind: "section",
    heading: S3_TITLE,
    paragraphs: [S3_P3],
    photos: [
      { src: img("fes-karaouiyine"), alt: "Université Al Quaraouiyine à Fès" },
      { src: img("ait-benhaddou-river"), alt: "Ksar d’Aït Ben Haddou au bord de la rivière" },
    ],
    pose: "point",
  },
  {
    kind: "section",
    heading: S4_TITLE,
    paragraphs: [S4_P1],
    photos: [
      { src: img("paris-eiffel"), alt: "La France : la tour Eiffel" },
      { src: img("barcelona-sagrada"), alt: "L’Espagne : la Sagrada Família" },
      { src: img("rome-colosseum"), alt: "L’Italie : le Colisée" },
      { src: img("istanbul"), alt: "La Turquie : la mosquée Bleue" },
    ],
    pose: "point",
  },
  {
    kind: "section",
    heading: S4_TITLE,
    paragraphs: [S4_P2],
    photos: [
      { src: img("cappadocia"), alt: "Montgolfières en Cappadoce, Turquie" },
      { src: img("madrid"), alt: "Place Mayor de Madrid" },
    ],
    pose: "point",
  },
  {
    kind: "section",
    heading: S4_TITLE,
    paragraphs: [S4_P3],
    photos: [
      { src: img("atlas-valley"), alt: "Vallée verte au pied de l’Atlas" },
      { src: img("essaouira-beach"), alt: "Côte atlantique du Maroc" },
    ],
    pose: "point",
  },
  {
    kind: "video",
    heading: "5. Vidéos",
    videos: [{ youtubeId: "TPHwUGTxgiw", title: "Morocco | Cinematic Video - SONY A7SIII" }],
    photos: [],
    pose: "point",
  },
  {
    kind: "section",
    heading: S5_TITLE,
    paragraphs: [S5_P1],
    photos: [
      { src: img("atlas"), alt: "Montagnes de l’Atlas enneigées" },
      { src: img("sahara"), alt: "Dunes du désert du Sahara" },
      { src: img("essaouira"), alt: "Ville côtière d’Essaouira" },
    ],
    pose: "point",
  },
  {
    kind: "closing",
    paragraphs: ["Merci pour votre attention."],
    photos: [{ src: img("marrakech-night"), alt: "Place Jemaa el-Fna la nuit" }],
    pose: "celebrate",
  },
];
