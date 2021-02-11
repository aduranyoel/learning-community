import React from 'react';
import './footer.component.css';
import openCulture from '../../assets/img/219px-Definition_of_Free_Cultural_Works_logo_notext.svg.png';

export function Footer() {
    return (
        <footer id="footer">
            <div className="container">
                <div className="copyright">
                    <img src={openCulture}/>
                    <div className="slogan">
                        <strong><span>Learning Community</span></strong>
                        Free Content, Open Knowledge
                    </div>
                </div>
            </div>
        </footer>
    )
}
