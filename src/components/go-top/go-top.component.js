import React, {useEffect, useRef} from 'react';
import './go-top.component.css';
import iconUp from "../../assets/img/simple-up.svg";

export function GoTop() {

    const refLink = useRef();
    const DISTANCE = 550;

    function onScroll(e) {
        if (window.scrollY > DISTANCE) {
            if (!refLink.current?.classList.contains('show')) refLink.current?.classList.add('show');
        } else {
            refLink.current?.classList.remove('show');
        }
    }

    function goTop(e) {
        e.preventDefault();
        window.scrollTo(0, 0);
    }

    useEffect(() => {

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        }


    }, []);

    return (
        <a ref={refLink} href="/" className="back-to-top" style={{display: 'inline'}} onClick={goTop}>
            <i>
                <img style={{width: '24px'}} src={iconUp} alt="up"/>
            </i>
        </a>
    )
}
