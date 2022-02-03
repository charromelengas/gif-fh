import React from 'react';

export const GifCollectionItem = ({img, title, url}) => {
  console.log({img, title, url})
    return (
      <div className="card animate__slideInLeft">
         <p> {title }</p>
        <img src={ url } alt={title}></img>
      </div>
  )
};
