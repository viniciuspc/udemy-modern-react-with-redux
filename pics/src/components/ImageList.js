import React from "react";

const ImageList = (props) => {
  const images = props.images.map(({ description, id, urls }) => {
    //Include the key property to the root node returned by the map function.
    return <img alt={description} key={id} src={urls.regular} />;
  });

  return <div>{images}</div>;
};

export default ImageList;
