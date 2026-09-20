"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { gallery } from "@/app/resources/content";
import { Section } from "./Section";

type GalleryImage = {
  src: string;
  alt: string;
  orientation: string;
};

export function GalleryGrid() {
  const reduce = useReducedMotion();
  const images = gallery.images as GalleryImage[];

  return (
    <Section id="gallery" eyebrow="Media" title="Gallery">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
        {images.map((image) => (
          <motion.div
            key={image.src}
            className="group relative aspect-[4/3] overflow-hidden border border-black bg-[var(--apple-aluminum)]"
            whileHover={reduce ? undefined : { scale: 1.02 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Image
              src={image.src}
              alt={image.alt || "Gallery image"}
              fill
              className="object-cover transition-opacity duration-300 group-hover:opacity-95"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
