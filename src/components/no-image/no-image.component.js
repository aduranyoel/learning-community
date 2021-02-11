import React from 'react';
import './no-image.component.css';
import imageNotFound from '../../assets/img/camera-solid.svg'

export function NoImage() {
    return (
        <div className="no-image-found">
            <img src={imageNotFound} alt="no image"/>
            No image found
        </div>
    )
}
