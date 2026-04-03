"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Small delay to ensure content is ready
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[10000] bg-green-dark flex items-center justify-center"
          exit={{
            clipPath: "inset(0 0 100% 0)",
          }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="text-center">
            <motion.p
              className="font-heading text-cream text-[2rem] md:text-[3rem] tracking-[0.3em]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              LOR
            </motion.p>
            <motion.div
              className="h-px bg-cream/30 mx-auto mt-6"
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            />
            <motion.p
              className="text-cream/80 text-[14px] tracking-[0.5em] uppercase font-body mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Finance
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
