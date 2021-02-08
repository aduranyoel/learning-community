import './footer.component.css';
import openCulture from '../../assets/img/219px-Definition_of_Free_Cultural_Works_logo_notext.svg.png';

export function FooterComponent() {
    return (
        <footer id="footer">
            <div className="container">
                <div className="copyright">
                    <img src={openCulture} style={{width: '50px'}}/>
                    <div className="slogan">
                        <strong><span>Learning Community</span></strong>
                        Free Cultural Works
                    </div>
                </div>
                {/*<div className="credits">*/}
                {/*    Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>*/}
                {/*</div>*/}
            </div>
        </footer>
    )
}
