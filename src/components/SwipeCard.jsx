import React, { useState } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";

const SwipeCards = () => {
  const [cards, setCards] = useState(cardData);

  return (
    <div className="relative h-[400px] w-full flex items-center justify-center">
      <AnimatePresence>
        {cards.map((card, index) => (
          <Card key={card.id} id={card.id} url={card.url} setCards={setCards} cards={cards} index={index} />
        ))}
      </AnimatePresence>
    </div>
  );
};

const Card = ({ id, url, setCards, cards, index }) => {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-150, 150], [-18, 18]);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);

  const isFront = id === cards[cards.length - 1]?.id;

  const handleDragEnd = (event, info) => {
    if (Math.abs(info.point.x) > 100) {
      setCards((prev) => {
        const updatedCards = prev.filter((card) => card.id !== id); // Remove the swiped card
        return [{ id, url }, ...updatedCards]; // Add it to the bottom
      });
    }
  };

  return (
    <motion.img
      src={url}
      alt="Card"
      className="absolute -translate-x-36 h-80 w-64 md:h-96 md:w-72 rounded-lg bg-white object-cover hover:cursor-grab active:cursor-grabbing"
      style={{
        x,
        rotate,
        opacity,
        top: `${index * 2}px`,
        left: `calc(50% + ${index * 2}px)`,
        transform: `translateX(-50%) rotate(${index * 0.5}deg)`,
        zIndex: index,
        transition: "0.125s transform",
        boxShadow: isFront
          ? "0 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.5)"
          : "0 4px 6px -1px rgb(0 0 0 / 0.1)",
      }}
      initial={{ scale: 1, opacity: 1 }}
      animate={{ scale: isFront ? 1 : 1.1 - index * 0.01 }}
      exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.3 } }}
      drag={isFront ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      whileTap={{ scale: 1.1 }}
      onDragEnd={handleDragEnd}
    />
  );
};

export default SwipeCards;

const cardData = [
  { id: 1, url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2370&auto=format&fit=crop" },
  { id: 2, url: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=2235&auto=format&fit=crop" },
  { id: 3, url: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=2342&auto=format&fit=crop" },
  { id: 4, url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2224&auto=format&fit=crop" },
  { id: 5, url: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?q=80&w=2340&auto=format&fit=crop" },
  { id: 6, url: "https://images.unsplash.com/photo-1570464197285-9949814674a7?q=80&w=2273&auto=format&fit=crop" },
  { id: 7, url: "https://images.unsplash.com/photo-1578608712688-36b5be8823dc?q=80&w=2187&auto=format&fit=crop" },
  { id: 8, url: "https://images.unsplash.com/photo-1505784045224-1247b2b29cf3?q=80&w=2340&auto=format&fit=crop" },
];
