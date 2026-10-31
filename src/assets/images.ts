// ─────────────────────────────────────────────────────────────
// Central de imágenes y datos de la app 💕
// ─────────────────────────────────────────────────────────────

import heroImage from './hero.jpg';
import timelineImage1 from './IMG_20240623_211114136.jpg';

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

const googlePhoto = (src: string, alt: string) => ({
  src,
  alt,
});

/** Portada principal — sección Hero / Inicio */
export const HERO_IMAGE = googlePhoto(heroImage, 'Nuestra foto favorita');

/** Hitos de la historia — sección Nuestra Historia (timeline) */
export const MILESTONES: Milestone[] = [
  {
    id: 'primera-cita',
    side: 'left',
    src: timelineImage1,
    alt: 'Nuestra primera cita',
    date: 'Febrero 2024',
    title: 'Nuestra primera cita',      
    desc: 'Me compraste unas flores y pasamos el día dando vueltas por el centro comercial.',
    full: 'Nuestra primera cita estuvo llena de detalles sencillos que la hicieron especial: me compraste unas flores y recorrimos juntos el centro comercial, disfrutando de la compañía y de cada momento. 💐💕',
  },
  {
    id: 'nosotros',
    side: 'right',
    src: 'https://photos.app.goo.gl/timeline-nosotros',
    alt: 'Nos convertimos en nosotros',
    date: 'Junio 2024',
    title: 'Nos convertimos en "nosotros"',
    desc: 'La palabra que solo nosotras/os importaba, la dijimos juntas.',
    full: 'Entre risas y planes locos, descubrimos que nuestra historia no era sobre las personas que éramos… sino sobre el nosotros que estábamos por crear.',
  },
  {
    id: 'primer-viaje',
    side: 'left',
    src: 'https://photos.app.goo.gl/timeline-primer-viaje',
    alt: 'El primer viaje grande',
    date: 'Enero 2025',
    title: 'El primer viaje grande',
    desc: 'Maletas, lista de canciones y un mapa que nunca terminó de dibujarse.',
    full: 'Volamos, subimos a un volcán y comimos postres en el avión. Los mejores días se cuentan en kilómetros. ✈️🏔️',
  },
  {
    id: 'noche-lluvia',
    side: 'right',
    src: 'https://photos.app.goo.gl/timeline-noche-lluvia',
    alt: 'La noche de lluvia',
    date: 'Agosto 2025',
    title: 'La noche de lluvia',
    desc: 'Cocinar, ver películas y llorar de risa sin parar.',
    full: 'La tormenta tocó fuerte y nosotros también. Pero la risa… la risa nunca necesitó paraguas. 🌧️🍿',
  },
  {
    id: 'rincon-privado',
    side: 'left',
    src: 'https://photos.app.goo.gl/timeline-rincon-privado',
    alt: 'Este rincón privado',
    date: 'Octubre 2026',
    title: 'Este rincón privado',
    desc: 'Lo creamos juntos, página a página, capítulo a capítulo.',
    full: 'Cada nota, cada tarea, cada recuerdo… todo empezó con un te quiero dicho con sabor a aventura. 💛',
  },
];

/** Fotos de los recuerdos — sección Galería de Recuerdos */
export const GALLERY_IMAGES: GalleryPhoto[] = [
  { id: 'viaje-1', cat: 'viajes', ...googlePhoto('https://photos.app.goo.gl/gallery-viaje-1', 'Amanecer en la montaña') },
  { id: 'viaje-2', cat: 'viajes', ...googlePhoto('https://photos.app.goo.gl/gallery-viaje-2', 'Olas en la playa') },
  { id: 'cita-1', cat: 'citas', ...googlePhoto('https://photos.app.goo.gl/gallery-cita-1', 'Primera cita en el café') },
  { id: 'cita-2', cat: 'citas', ...googlePhoto('https://photos.app.goo.gl/gallery-cita-2', 'Noche de karaoke') },
  { id: 'divertido-1', cat: 'divertidos', ...googlePhoto('https://photos.app.goo.gl/gallery-divertido-1', 'Nos reímos hasta llorar') },
  { id: 'divertido-2', cat: 'divertidos', ...googlePhoto('https://photos.app.goo.gl/gallery-divertido-2', 'Carrera de sacos') },
];
