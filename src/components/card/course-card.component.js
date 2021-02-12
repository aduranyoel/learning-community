import React from 'react';
import {useHistory} from 'react-router-dom';
import './card.component.css';
import {childrenSorted} from "../../share/utils";
import {NoImage} from "../no-image/no-image.component";

export function CourseCard({name, nodeId, children, accountId, courseInfo = {}, loading}) {
    const {picture, description} = courseInfo;
    const history = useHistory();

    const firstLesson = (nodes, path = '') => {
        if (Array.isArray(nodes) && nodes.length) {
            const first = nodes[0];
            path += `/${first.nodeId}`;
            if (Array.isArray(first.children)) {
                return firstLesson(first.children, path)
            } else {
                return path;
            }
        }
        return '';
    };

    const sorted = childrenSorted(children);

    const firstFilePath = `${accountId}/${nodeId}${firstLesson(sorted)}`;

    const openCourse = () => {
        if (!nodeId) return null;
        history.push(`/lesson?a=${firstFilePath}`)
    };

    return (
        <div className={'my-card' + (loading ? ' loading' : '')} onClick={openCourse}>
            <div className="my-card-header">
                {!loading ? picture ? <img src={`data:image/jpg;base64, ${picture}`} alt={name}/> : <NoImage/> : null}
            </div>
            <div className="my-card-body">
                <div className="title">{name}</div>
                <div className="subtitle">{description}</div>
            </div>
        </div>
    )
}
