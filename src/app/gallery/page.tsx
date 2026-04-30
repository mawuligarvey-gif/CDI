"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { X, ZoomIn, ZoomOut, Plus } from "lucide-react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);
  const [visibleImages, setVisibleImages] = useState(9);
  const [loading, setLoading] = useState(false);

  // Updated image filenames based on gallery folder
  const imageFiles = [
    "cmn_1.jpg",
    "cmn_2.jpg",
    "cmn_3.jpg",
    "cmn_4.jpg",
    "cmn_5.jpg",
    "cmn_6.jpg",
    "cmn_7.jpg",
    "cmn_8.jpg",
    "cmn_9.jpg",
    "cmn_10.jpg",
    "cmn_11.jpg",
    "cmn_12.jpg",
    "cmn_13.jpg",
    "cmn_14.jpg",
    "cmn_15.jpg",
    "cmn_16.jpg",
    "cmn_17.jpg",
    "cmn_18.jpg",
    "cmn_19.jpg",
    "cmn_20.jpg",
    "cmn_21.jpg",
    "cmn_22.jpg",
    "cmn_23.jpg",
    "cmn_24.jpg",
    "cmn_25.jpg",
    "cmn_26.jpg",
    "cmn_26 (2).jpg",
    "cmn_27.jpg",
    "cmn_28.jpg",
    "cmn_29.jpg",
    "cmn_30.jpg",
    "cmn_31.jpg",
    "cmn_32.jpg",
    "cmn_33.jpg",
    "cmn_34.jpg",
    "cmn_35.jpg",
    "cmn_36.jpg",
    "cmn_37.jpg",
    "cmn_38.jpg",
    "cmn_40.jpg",
    "cmn_41.jpg",
    "cmn_42.jpg",
    "cmn_43.jpg",
    "cmn_44.jpg",
    "cmn_45.jpg",
    "cmn_46.jpg",
  ];

  const images = imageFiles.map((file) => ({
    image: `/images/gallery/${file}`,
  }));

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleImages(prev => Math.min(prev + 9, images.length));
      setLoading(false);
    }, 500); // Simulate loading time for pro feel
  };

  const SkeletonCard = () => (
    <div className="h-64 rounded-xl bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse border-2 border-gray-300">
      <div className="w-full h-full bg-gray-400 rounded-lg"></div>
    </div>
  );

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-20 md:py-32 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/gallery/worldmap.png')",
          }}
        />
        <div className="absolute inset-0 bg-[#011C40]/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Gallery
            </h1>
            <p className="text-xl text-gray-100">
              Moments of impact and inspiration from Cultural Diplomat Impact Organization
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {images.slice(0, visibleImages).map((image, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.08 }}
                onClick={() => {
                  setSelectedImage(i);
                  setZoom(1);
                }}
                className="h-64 rounded-xl bg-gradient-to-br from-highlight/20 to-secondary/20 border-2 border-accent/30 cursor-pointer hover:shadow-2xl hover:border-accent/80 transition-all overflow-hidden group relative"
              >
                <img
                  src={image.image}
                  alt="Gallery image"
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
                </div>
              </motion.div>
            ))}
            {loading && Array.from({ length: 9 }).map((_, i) => (
              <SkeletonCard key={`skeleton-${i}`} />
            ))}
          </div>

          {/* Load More Button */}
          {visibleImages < images.length && !loading && (
            <div className="flex justify-center mt-12">
              <motion.button
                onClick={loadMore}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-tertiary to-tertiary text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              >
                <Plus size={20} />
                Load More Images
              </motion.button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-full max-w-3xl max-h-[75vh] flex flex-col bg-primary rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-accent/20">
              <div className="flex gap-2">
                <button
                  onClick={() => setZoom(Math.max(1, zoom - 0.2))}
                  className="p-2 hover:bg-tertiary/20 rounded-lg text-tertiary transition-colors"
                  title="Zoom out"
                >
                  <ZoomOut size={20} />
                </button>
                <span className="text-tertiary px-3 py-2">{Math.round(zoom * 100)}%</span>
                <button
                  onClick={() => setZoom(Math.min(3, zoom + 0.2))}
                  className="p-2 hover:bg-tertiary/20 rounded-lg text-tertiary transition-colors"
                  title="Zoom in"
                >
                  <ZoomIn size={20} />
                </button>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="p-2 hover:bg-tertiary/20 rounded-lg text-tertiary transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Image Container */}
            <div className="flex-1 overflow-auto flex items-center justify-center p-4">
              <div style={{ transform: `scale(${zoom})` }} className="transition-transform">
                <img
                  src={images[selectedImage].image}
                  alt="Gallery image"
                  className="max-w-full max-h-[60vh] rounded-lg"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
