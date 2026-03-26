'use client';

import Image from 'next/image';
import { useState } from 'react';

type GalleryItem = {
  id: number;
  src: string;
  alt: string;
  caption: string;
  category: string;
};

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
    alt: 'HVAC technician performing system inspection and maintenance',
    caption: 'System Inspection',
    category: 'Maintenance',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    alt: 'Outdoor air conditioning condensing unit installation',
    caption: 'AC Unit Installation',
    category: 'Installation',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80',
    alt: 'HVAC professional working on residential heating system',
    caption: 'Heating System Repair',
    category: 'Repair',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80',
    alt: 'Smart thermostat installation in modern home',
    caption: 'Thermostat Upgrade',
    category: 'Installation',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=800&q=80',
    alt: 'HVAC ductwork and ventilation system installation in residential property',
    caption: 'Ductwork & Airflow',
    category: 'Installation',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?w=800&q=80',
    alt: 'High-efficiency HVAC system installation completed',
    caption: 'High-Efficiency System',
    category: 'Installation',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1527689638836-411945a2b57c?w=800&q=80',
    alt: 'Smart programmable thermostat displaying energy savings on wall',
    caption: 'Smart Thermostat Setup',
    category: 'Installation',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1596003906949-67221c37965c?w=800&q=80',
    alt: 'HVAC diagnostic equipment and system performance testing',
    caption: 'System Diagnostics',
    category: 'Diagnostics',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80',
    alt: 'HVAC technician performing seasonal tune-up and preventive maintenance on outdoor unit',
    caption: 'Seasonal Tune-Up',
    category: 'Maintenance',
  },
];

const CATEGORIES = ['All', 'Installation', 'Repair', 'Maintenance', 'Diagnostics'];

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* Category filter pills */}
      <div
        className="flex flex-wrap justify-center gap-2 mb-10"
        role="tablist"
        aria-label="Filter projects by category"
      >
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={cat === activeCategory}
            onClick={() => setActiveCategory(cat)}
            className={`inline-flex px-4 py-1.5 rounded-full text-sm font-outfit font-medium transition-colors duration-200 cursor-pointer ${
              cat === activeCategory
                ? 'bg-secondary text-white'
                : 'bg-white text-slate-500 border border-slate-200 hover:border-secondary hover:text-secondary'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map(({ id, src, alt, caption, category }) => (
          <article key={id} className="card overflow-hidden group">
            <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-100">
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-hidden="true"
              />
            </div>
            <div className="p-4 flex items-center justify-between">
              <h3 className="font-outfit font-semibold text-primary text-sm">{caption}</h3>
              <span className="inline-flex px-2.5 py-1 bg-secondary/10 text-secondary text-xs font-outfit font-medium rounded-full">
                {category}
              </span>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
