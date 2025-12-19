import type { ArticleModel, GalleryItemModel } from '../types';
import flyer from '../assets/images/flyer.jpeg';
import vorher2024 from '../assets/images/2024_vorher.jpeg';
import nachher2024 from '../assets/images/2024_nachher.jpeg';
import vorher2023 from '../assets/images/2023_vorher.jpeg';
import nachher2023 from '../assets/images/2023_nachher.jpeg';

export const articles: ArticleModel[] = [
  {
    id: '1',
    title: 'Ankündigung',
    content: 'Am 31. Dezember 2025 startet die dritte Auflage des Tälchen Silvesterlaufs.',
    image: flyer,
  }
];

export const galleryItems: GalleryItemModel[] = [
  {
    id: '1',
    title: 'Vorher',
    subtitle: '2024',
    imageUrl: vorher2024,
    description: 'Vor dem Lauf. Die stille Erwartung eines besonderen Lauferlebnisses, das Körper und Geist herausfordert.'
  },
  {
    id: '2',
    title: 'Nachher',
    subtitle: '2024',
    imageUrl: nachher2024,
    description: 'Erschöpft aber zufrieden. Ein Lauf durch winterliche Landschaften, der den Geist erfrischt und die Seele belebt.'
  },
    {
    id: '3',
    title: 'Vorher',
    subtitle: '2023',
    imageUrl: vorher2023,
    description: 'Da waren sie noch Freunde: Die Favoriten Matthias und Svenja vor dem Skandalrennen 2023.'
  },
    {
    id: '4',
    title: 'Nachher',
    subtitle: '2023',
    imageUrl: nachher2023,
    description: 'Life on the fast lane: Sebastian.'
  }
];
