import React from 'react';
import './404.component.css';
import notFound from '../../assets/img/not-found.png';

export function NotFoundPage() {
    return (
        <div className="not-found">
            <div className="content">
                <img src={notFound} alt="not found"/>
                <a href="/" className="btn-get-started animate__animated animate__fadeInUp">Go Home</a>
            </div>
        </div>
    )
}
