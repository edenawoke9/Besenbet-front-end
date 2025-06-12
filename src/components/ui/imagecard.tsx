import * as React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const images = [
  {
    src: "/gallery/worship1.jpg",
    alt: "Worship Service",
  },
  {
    src: "/gallery/cross1.jpg",
    alt: "Wooden Cross",
  },
  {
    src: "/gallery/bible1.jpg",
    alt: "Open Bible",
  },
  {
    src: "/gallery/prayer1.jpg",
    alt: "Prayer Beads",
  },
  {
    src: "/gallery/candle1.jpg",
    alt: "Church Candle",
  },
  {
    src: "/gallery/icon1.jpg",
    alt: "Religious Icon",
  },
];

export default function HomeImageList() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 max-w-3xl mx-auto">
      {images.map((item, index) => (
        <motion.div
          key={item.src}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="relative aspect-square overflow-hidden rounded-xl shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="object-cover transition-transform duration-300"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
              <p className="text-white text-sm font-medium">{item.alt}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
