import React from 'react'

function PlaceImg({ place, index = 0, className }) {
    if (!place.photos?.length) {
        return '';
    }
    if(!className){
        className = 'object-cover';
    }
    return (
        <img className={className} src={'https://wanderstay-backend.onrender.com/uploads/' + place.photos[index]} alt="" />
    )
}

export default PlaceImg;
