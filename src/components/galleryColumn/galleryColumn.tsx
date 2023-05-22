import React from "react";
import { galleryImages } from "../../data/galleryData";
import { Column, ColumnItem } from "./galleryColumnStyles";

const GalleryColumn = () => {
  return (
    <Column>
      {galleryImages.map((el) => {
        return <ColumnItem src={el} />;
      })}
    </Column>
  );
};

export default GalleryColumn;
