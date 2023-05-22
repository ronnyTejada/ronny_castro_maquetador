import React from "react";
import { galleryImages } from "../../data/galleryData";
import { Column, ColumnItem } from "./galleryColumnStyles";

const GalleryColumn = () => {
  return (
    <Column>
      {galleryImages.map((el,index) => {
        return <ColumnItem src={el} key={index}/>;
      })}
    </Column>
  );
};

export default GalleryColumn;
