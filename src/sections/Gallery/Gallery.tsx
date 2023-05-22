import React, { useEffect } from "react";
import GalleryColumn from "../../components/galleryColumn/galleryColumn";
import { GallerySection, GalleryContentWrapper } from "./GalleryStyles";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Gallery = () => {
  const initial = { y: 20 };
  const animation = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      animation.start({
        y: -1200,
      });
    } else {
    }
  }, [inView, animation]);

  return (
    <GallerySection ref={ref}>
      <motion.div
        initial={initial}
        style={{ backgroundColor: "#D6F379" }}
        transition={{ delay: 1, duration: 0.8 }}
        animate={animation}
        exit={{ y: 20 }}
      >
        <GalleryContentWrapper>
          <GalleryColumn />
          <GalleryColumn />
          <GalleryColumn />
          <GalleryColumn />
          <GalleryColumn />
          <GalleryColumn />
          <GalleryColumn />
        </GalleryContentWrapper>
      </motion.div>
    </GallerySection>
  );
};

export default Gallery;
