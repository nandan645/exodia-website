'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface FlipEventCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  rulebook: string;
  details: string;
}

export default function FlipEventCard({
  title,
  description,
  image,
  category,
  rulebook,
  details,
}: FlipEventCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative h-[400px] perspective-[1000px] cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full transition-all duration-500"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front of card */}
        <div className="absolute inset-0 backface-hidden">
          <div className="relative h-full bg-[#0A0A0A] rounded-lg overflow-hidden">
            {/* Image and overlay */}
            <div className="relative h-full">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70"></div>
            </div>

            {/* Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <div className="mb-4">
                <span className="px-3 py-1 bg-[#BB0000]/20 text-[#BB0000] text-sm rounded-full">
                  {category}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
              <p className="text-gray-300 text-sm">{description}</p>
            </div>

            {/* Flip indicator */}
            <div className="absolute top-4 right-4 text-white/50">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div 
          className="absolute inset-0 backface-hidden"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <div className="h-full bg-[#0A0A0A] rounded-lg p-6 flex flex-col">
            <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
            <p className="text-gray-300 mb-6 flex-grow">{details}</p>
            <Link 
              href={rulebook}
              className="w-full text-center px-6 py-3 bg-[#BB0000] text-white rounded-lg hover:bg-[#BB0000]/80 transition-colors duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              View Rulebook
            </Link>

            {/* Flip back indicator */}
            <div className="absolute top-4 right-4 text-white/50">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>
        </div>

        {/* Hover Effect Border */}
        <div className="absolute inset-0 border border-[#BB0000]/0 group-hover:border-[#BB0000] transition-colors duration-300 pointer-events-none rounded-lg"></div>
      </motion.div>
    </div>
  );
} 