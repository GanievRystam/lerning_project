import { Route, Routes, Link} from "react-router-dom";
import { MainPage } from "pages/mainPage";
import { Suspense, useContext, useState } from "react";
import './styles/index.scss'
import { useTheme } from "app/providers/ThemeProvider/lib/useTheme";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/navbar";

const App = () => {
    const {theme} = useTheme();
    return (
        <div className= {classNames('app', {}, [theme])}>
            <Navbar/>
            <AppRouter/>
        </div>
    );
}

export default App;