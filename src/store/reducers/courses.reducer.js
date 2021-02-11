import {COURSES_TYPES} from "../actions/courses.action";

const initialState = Array(4).fill({
    name: 'loading',
    nodeId: '',
    type: 1,
    children: [],
    accountId: 0,
    courseInfo: {description: 'loading'}
});

export function courses(state = initialState, action) {
    switch (action.type) {
        case COURSES_TYPES.LOAD:
            return action.payload;
        default:
            return state;
    }
}

export const selectCourse = id => state => state?.courses?.find(c => c.nodeId === id);
