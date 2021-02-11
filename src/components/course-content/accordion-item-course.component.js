import React from 'react';
import {useHistory} from 'react-router-dom';
import './accprdion-item-course.component.css';
import {v4 as uuid} from 'uuid';
import play from '../../assets/img/play-circle-solid.svg';

export function AccordionItemCourse({expanded, id, idAccordion, title, loading, children = [], pathCourse, setActive}) {
    const history = useHistory();
    const sanitizeName = name => {
        const piece = name.split('.');
        return piece.slice(1, 2);
    };

    function handleActive(nodeId) {
        const active = `${pathCourse}/${nodeId}`;
        history.push(`/lesson?a=${active}`);
        setActive(active);
    }

    return (
        <div className={`accordion-item ${loading ? 'loading' : ''}`}>
            <h2 className="accordion-header" id={`heading${id}`}>
                <button className={`accordion-button ${expanded ? '' : 'collapsed'}`} type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${id}`} aria-expanded={expanded}
                        aria-controls={`collapse${id}`}>
                    {title}
                </button>
            </h2>
            <div id={`collapse${id}`} className={`accordion-collapse collapse ${expanded ? 'show' : ''}`}
                 aria-labelledby={`heading${id}`} data-bs-parent={`#${idAccordion}`}>
                <div className="accordion-body">
                    <ul>
                        {
                            children.map(c =>
                                <li key={uuid()}>
                                    <div>
                                        <img src={play} alt="play"/>
                                        <span onClick={() => handleActive(c.nodeId)}>{sanitizeName(c.name)}</span>
                                    </div>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
