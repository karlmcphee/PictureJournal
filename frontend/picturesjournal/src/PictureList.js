import React from 'react'
import PictureItem from './PictureItem'
import './PictureList.css';

function PictureList({ imageURLs }) {
    const renderedList = imageURLs.map(result => {
          return (
            <PictureItem
              key={result.id}
              pictureName={result.pictureName}
            />
          );
        });
      
        return <div className="imagelist">{renderedList}</div>;
}

export default PictureList