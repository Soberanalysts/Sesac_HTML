import { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

const ThemeSelector = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
        // 이전 테마 상태를 가져다가 반전 시키기
    }


    //위의 정보들을 컨텍스트에 담기
    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            { children }
            {/*나(ThemeContext) 를 감싼 하위 child들은.. 내 context에 접근이 가능함. */}
        </ThemeContext.Provider>
    )
    
}

//Custom Hook: 내가 직접 훅을 생성
const useTheme = () => useContext(ThemeContext);

export default {useTheme, ThemeSelector, ThemeContext};