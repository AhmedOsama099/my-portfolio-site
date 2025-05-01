"use client";

import React from "react";
import { motion } from "framer-motion";
import MotionPageWrapper from "@/Components/motionPageWrapper";

// Sample literature content - replace with your actual content
const literatureContent = [
  {
    id: 1,
    title: "The Silent Observer",
    content:
      "In the quiet corners of existence, where shadows dance with light, I find myself an observer of life's intricate ballet. The world unfolds its stories before me, each moment a verse in the grand poem of time. I watch, I listen, I absorb the symphony of human experience, translating emotions into words that might, perhaps, echo in the hearts of others.",
    date: "2023-05-15",
  },
  {
    id: 2,
    title: "Whispers of the Sea",
    content:
      "The ocean speaks in hushed tones to those who listen carefully. Its rhythmic waves carry stories from distant shores, tales of adventure and longing, of departure and return. I sit by the water's edge, pen in hand, transcribing the whispers that only poets can hear. The salt air fills my lungs as words flow onto paper, capturing the eternal conversation between humanity and the vast blue expanse that has inspired dreamers since time immemorial.",
    date: "2023-06-22",
  },
  {
    id: 3,
    title: "Fragments of Memory",
    content:
      "We are collections of moments, preserved in the amber of memory. Each experience shapes us, carves pathways in our minds that guide future steps. I find myself returning to certain memories, turning them over like smooth stones in my hand, examining their contours and weight. Through writing, I attempt to crystallize these fragments, to arrange them in patterns that reveal deeper truths about the human condition and the invisible threads that connect us all.",
    date: "2023-08-10",
  },
  {
    id: 4,
    title: "The Art of Silence",
    content:
      "In a world that never stops talking, silence becomes a rare art form. Between the words we speak lie universes of meaning, waiting to be discovered by those patient enough to listen. I've learned that the most profound truths often reveal themselves not in what is said, but in the spaces between utterances. The pause before a response, the breath between sentences—these are the moments where authenticity resides.",
    date: "2023-09-18",
  },
];

const BlogPage = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <MotionPageWrapper>
      <div className="min-h-screen py-12 px-4 sm:px-8 md:px-12 max-w-4xl mx-auto">
        {/* Page Header */}
        <motion.div
          className="mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r  from-[#565FA1] to-slate-300 bg-clip-text text-transparent mb-6 md:leading-[90px] leading-[70px]">
            نصوص
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            قد تلاقيني في طيّات الكلمات والحروف، فسلامٌ عليك إن ألقيت أو لم تلقِ
            السلام.
          </p>
        </motion.div>

        {/* Literature Content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-12"
        >
          {literatureContent.map((piece) => (
            <motion.div
              key={piece.id}
              variants={item}
              className="prose prose-lg max-w-none bg-white rounded-lg shadow-md p-8 border-r-4 border-[#565FA1]"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-2 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 m-0">
                  {piece.title}
                </h2>
              </div>

              <div className="text-gray-700 leading-relaxed">
                <p>{piece.content}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </MotionPageWrapper>
  );
};

export default BlogPage;
