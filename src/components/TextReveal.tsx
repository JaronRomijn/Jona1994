"use client";

import { useRef, Fragment } from "react";
import { motion, useInView } from "framer-motion";

interface TextRevealProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  staggerChildren?: number;
  once?: boolean;
  wordPadding?: string;
  wordStyles?: Record<string, string>;
}

export default function TextReveal({
  children,
  className = "",
  as: Tag = "h1",
  delay = 0,
  staggerChildren = 0.035,
  once = true,
  wordPadding,
  wordStyles = {},
}: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-10% 0px" });

  const words = children.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: {
      y: "100%",
      opacity: 0,
    },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <Tag ref={ref} className={className}>
      <motion.span
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="inline"
      >
        {words.map((word, i) => (
          <Fragment key={i}>
            <span className={`inline-block overflow-hidden${wordPadding ? ` ${wordPadding}` : ""}`}>
              <motion.span variants={child} className={`inline-block${wordPadding ? ` ${wordPadding}` : ""}${wordStyles[word] ? ` ${wordStyles[word]}` : ""}`}>
                {word}
              </motion.span>
            </span>
            {i < words.length - 1 && " "}
          </Fragment>
        ))}
      </motion.span>
    </Tag>
  );
}
