import React from 'react';
import './paginator.component.css';

export function Paginator() {
    console.clear();
    return (
        <div className="blog">
            <div className="blog-pagination">
                <ul className="justify-content-center">
                    <li className="disabled">
                        <a href="javascript:undefined" className="navigate">{'<'}</a>
                    </li>
                    <li><a href="javascript:undefined">1</a></li>
                    <li className="active"><a href="javascript:undefined">2</a></li>
                    <li><a href="javascript:undefined">3</a></li>
                    <li>
                        <a href="javascript:undefined" className="navigate">{'>'}</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
