"use client";
import React from "react";
import { motion } from "framer-motion";

const TransitionEffect = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-0 w-screen h-screen z-40 bg-cyan-200 dark:bg-gray-900"
        initial={{ x: "50%", width: "50%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />

      <motion.div
        className="fixed top-0 bottom-0 left-0 w-screen h-screen z-40 bg-cyan-200 dark:bg-gray-900"
        initial={{ x: "-50%", width: "50%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
    </>
  );
};

export default TransitionEffect;
