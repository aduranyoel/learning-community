import React, {createContext, useState} from 'react';
import {useSelector} from "react-redux";

export const HomeContext = createContext(null);

export function HomeProvider({children}) {
    const [courses, setCourses] = useState(useSelector(state => state.courses));
    return (
        <HomeContext.Provider value={{courses, setCourses}}>{children}</HomeContext.Provider>
    )
}
