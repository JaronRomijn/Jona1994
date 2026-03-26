"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

interface RevealImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  containerClassName?: string;
  fill?: boolean;
  priority?: boolean;
}

export default function RevealImage({
  src,
  alt,
  width,
  height,
  className = "",
  containerClassName = "",
  fill = false,
  priority = false,
}: RevealImageProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <div ref={ref} className={`overflow-hidden ${containerClassName}`}>
      <motion.div
        initial={{ scale: 1.3 }}
        animate={isInView ? { scale: 1 } : { scale: 1.3 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="w-full h-full"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-full"
        >
          {fill ? (
            <Image
              src={src}
              alt={alt}
              fill
              className={className}
              priority={priority}
            />
          ) : (
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              className={className}
              priority={priority}
            />
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
