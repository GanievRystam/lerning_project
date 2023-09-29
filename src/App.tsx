import { Route, Routes, Link} from "react-router-dom";
import { AboutAsync } from "./pages/aboutPage/About.async";
import { MainAsync } from "./pages/mainPage/Main.async";
import { Suspense, useContext, useState } from "react";
import './styles/index.scss'
import { useTheme } from "./theme/useTheme";

const App = () => {
    const {theme, toggleTheme} = useTheme();
    return (
        <div className= {`app ${theme}`}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={<div>Loading....</div>}>
                <Routes>
                        <Route path={'/about'} element = {<AboutAsync/>}></Route>
                        <Route path={'/'} element = {<MainAsync/>}></Route>
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;