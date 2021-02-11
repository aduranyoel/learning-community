export const COURSES_TYPES = {
    LOAD: '[COURSES] Load'
};

export function loadCourses(courses) {
    return {
        type: COURSES_TYPES.LOAD,
        payload: courses
    }
}

