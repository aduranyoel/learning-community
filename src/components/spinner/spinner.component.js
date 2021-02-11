import React from 'react';
import './spinner.component.css';

export function Spinner({active}) {
    return <div className={`loader ${active ? '' : 'd-none'}`}>Loading...</div>
}
