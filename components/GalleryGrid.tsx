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
    src: '/gallery/system-inspection.avif',
    alt: 'HVAC technician performing system inspection on mini-split unit',
    caption: 'System Inspection',
    category: 'Maintenance',
  },
  {
    id: 2,
    src: '/gallery/ac-installation.avif',
    alt: 'Technician installing a mini-split air conditioning unit',
    caption: 'AC Unit Installation',
    category: 'Installation',
  },
  {
    id: 3,
    src: '/gallery/thermostat-upgrade.avif',
    alt: 'Nest smart thermostat installed on wall showing temperature',
    caption: 'Thermostat Upgrade',
    category: 'Installation',
  },
  {
    id: 6,
    src: '/gallery/heating-repair.avif',
    alt: 'HVAC technician repairing a residential heating and furnace system',
    caption: 'Heating System Repair',
    category: 'Repair',
  },
  {
    id: 4,
    src: '/gallery/ductwork-airflow.avif',
    alt: 'Large commercial HVAC ductwork and ventilation pipes',
    caption: 'Ductwork & Airflow',
    category: 'Installation',
  },
  {
    id: 5,
    src: '/gallery/high-efficiency-system.avif',
    alt: 'Rooftop high-efficiency HVAC cooling units on commercial building',
    caption: 'High-Efficiency System',
    category: 'Installation',
  },
];

const CATEGORIES = ['All', 'Installation', 'Repair', 'Maintenance'];

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
