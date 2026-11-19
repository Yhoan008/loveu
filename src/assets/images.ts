// ─────────────────────────────────────────────────────────────
// Central de imágenes y datos de la app 💕
// ─────────────────────────────────────────────────────────────

// Portada
import heroImage from './optimized/hero.webp';

// Historia (timeline)
import timelinePrimeraCita from './optimized/IMG_20240623_211114136.webp';
import timelineNosotros from './optimized/IMG_20240623_211037354.webp';
import timelinePrimerViaje from './optimized/IMG_20250525_153145461_HDR.webp';
import timelineNocheLluvia from './optimized/IMG-20250720-WA0011.webp';
import timelineRinconPrivado from './optimized/IMG_20261031_202230.webp';
import photo01 from './optimized/IMG_20240714_195506187.webp';
import photo02 from './optimized/IMG_20240824_200907595.webp';
import photo03 from './optimized/IMG_20240915_181850346.webp';
import photo04 from './optimized/IMG_20241026_181651054.webp';
import photo05 from './optimized/IMG-20250719-WA0010.webp';
import photo06 from './optimized/IMG-20250921-WA0013.webp';
import photo07 from './optimized/IMG_20251210_124819068_HDR.webp';
import photo08 from './optimized/IMG-20251224-WA0056.webp';
import photo09 from './optimized/IMG_20251228_180225188_HDR.webp';
import photo10 from './optimized/IMG-20251228-WA0044.webp';
import photo11 from './optimized/IMG-20251228-WA0052.webp';
import photo12 from './optimized/IMG-20260104-WA0011.webp';
import photo13 from './optimized/IMG-20260308-WA0010.webp';
import photo14 from './optimized/IMG_20260906_141134_850.webp';
import photo15 from './optimized/IMG_20260906_172840_102.webp';
import photo16 from './optimized/IMG-20260907-WA0018.webp';
import photo17 from './optimized/IMG_20261004_143547.webp';
import photo18 from './optimized/IMG_20261004_181728_266.webp';
import photo19 from './optimized/IMG-20261006-WA0041.webp';
import photo20 from './optimized/IMG_20261018_161257.webp';
import photo21 from './optimized/IMG_20261018_181626_435.webp';
import photo22 from './optimized/IMG_20261018_191943_300.webp';
import photo23 from './optimized/IMG-20261018-WA0014~3.webp';
import photo24 from './optimized/IMG-20261018-WA0017.webp';
import photo25 from './optimized/IMG_20261031_184307_809.webp';
import photo26 from './optimized/IMG_20261031_190133.webp';

export type GalleryPhoto = {
  id: string;
  cat: 'viajes' | 'citas' | 'divertidos';
  src: string;
  alt: string;
};

export type Milestone = {
  id: string;
  side: 'left' | 'right';
  src: string;
  alt: string;
  date: string;
  title: string;
  desc: string;
  full: string;
};

/**
 * Agrupa todas las imágenes locales de la carpeta `src/assets`.
 * Es el único punto desde el que se cargan las fotos de la app.
 */
export function getImages() {
  return {
    hero: heroImage,
    timeline: {
      'primera-cita': timelinePrimeraCita,
      nosotros: timelineNosotros,
      'primer-viaje': timelinePrimerViaje,
      'noche-lluvia': timelineNocheLluvia,
      'rincon-privado': timelineRinconPrivado,
    },
    gallery: [
      photo01,
      photo02,
      photo03,
      photo04,
      photo05,
      photo06,
      photo07,
      photo08,
      photo09,
      photo10,
      photo11,
      photo12,
      photo13,
      photo14,
      photo15,
      photo16,
      photo17,
      photo18,
      photo19,
      photo20,
      photo21,
      photo22,
      photo23,
      photo24,
      photo25,
      photo26,
    ],
  };
}

const images = getImages();

/** Portada principal — sección Hero / Inicio */
export const HERO_IMAGE = {
  src: images.hero,
  alt: 'Nuestra foto favorita',
};

/** Hitos de la historia — sección Nuestra Historia (timeline) */
export const MILESTONES: Milestone[] = [
  {
    id: 'primera-cita',
    side: 'left',
    src: images.timeline['primera-cita'],
    alt: 'Nuestra primera cita',
    date: 'Junio 2024',
    title: 'Nuestra primera cita',
    desc: 'Te compre unas flores y pasamos el día dando vueltas por el centro comercial.',
    full: 'Nuestra primera cita estuvo llena de detalles sencillos que la hicieron especial: Unas flores y recorrimos juntos el centro comercial, disfrutando de la compañía y de cada momento. 💐💕',
  },
  {
    id: 'nosotros',
    side: 'right',
    src: images.timeline.nosotros,
    alt: 'Nuestra primera cita',
    date: 'Junio 2024',
    title: 'Nos convertimos en "nosotros"',
    desc: 'La palabra que solo nosotras/os importaba, la dijimos juntos.',
    full: 'Entre risas y planes locos, descubrimos que nuestra historia no era sobre las personas que éramos… sino sobre el nosotros que estábamos por crear.',
  },
  {
    id: 'primer-viaje',
    side: 'left',
    src: images.timeline['primer-viaje'],
    alt: 'El primer gran viaje',
    date: 'Enero 2025',
    title: 'El primer gran viaje',
    desc: 'Un mapa que nunca terminó de dibujarse.',
    full: 'Nos divertimos en el parque Simón Bolivar con paisajes y disfraces. ✈️🏔️',
  },
  {
    id: 'noche-lluvia',
    side: 'right',
    src: images.timeline['noche-lluvia'],
    alt: 'El inicio de nuestra pequeña Familia',
    date: 'Agosto 2025',
    title: 'El inicio de nuestra pequeña familia, con Panelita',
    desc: 'Nuestra pequeña familia y el inicio de nuevas generaciones.',
    full: '',
  },
  {
    id: 'rincon-privado',
    side: 'left',
    src: images.timeline['rincon-privado'],
    alt: 'Este rincón privado',
    date: 'Octubre 2026',
    title: 'Nuestras historia nunca acaba',
    desc: 'Una inolvidable noche de brujas.',
    full: '',
  },
];

const EXTRA_CATEGORIES: GalleryPhoto['cat'][] = ['viajes', 'citas', 'divertidos'];

/** Fotos de los recuerdos — sección Galería de Recuerdos */
export const GALLERY_IMAGES: GalleryPhoto[] = images.gallery.map((src, i) => ({
  id: `recuerdo-${i + 1}`,
  cat: EXTRA_CATEGORIES[i % EXTRA_CATEGORIES.length],
  src,
  alt: `Recuerdo ${i + 1}`,
}));
