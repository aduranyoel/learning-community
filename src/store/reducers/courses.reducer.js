import {COURSES_TYPES} from "../actions/courses.action";
import {setWebStorage} from "../../share/utils";

const initialState = Array(4).fill({
    name: 'loading',
    nodeId: '',
    type: 1,
    children: [],
    accountId: 0,
    courseInfo: {description: 'loading'},
    loading: true
});

export function courses(state = initialState, action) {
    switch (action.type) {
        case COURSES_TYPES.LOAD:
            setWebStorage('courses', action.payload);
            return action.payload;
        default:
            return state;
    }
}

export const selectCourse = id => state => state?.courses?.find(c => c.nodeId === id);
export const selectAllCourses = state => state?.courses;
