import {createContext,useContext} from 'react';

export const ThemeContext = createContext({
    themeMode:"dark",
    darkTheme:() =>{},
    lightTheme:() =>{},
})



export function useTheme(){
    return useContext(ThemeContext);
}
