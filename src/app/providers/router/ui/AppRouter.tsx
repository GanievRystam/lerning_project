import { MainPage } from "pages/mainPage";
import { AboutPage } from "pages/aboutPage";
import { Route, Routes, Link} from "react-router-dom";
import { Suspense, useContext, useState } from "react";
import { routeConfig } from "shared/config/routeConfig/routeConfig";
const AppRouter = () => {
    return(
        <Suspense fallback={<div>Loading....</div>}>
                <Routes>
                      { Object.values(routeConfig).map(({element, path}) => (
                            <Route key={path} path={path} element = {(
                                <Suspense fallback={<div>Loading...</div>}>
                                    <div className="page-wrapper">
                                        {element}
                                    </div>

                                </Suspense>
                            )}></Route>
                        )) }
                </Routes>
            </Suspense>
    );
}

export default AppRouter;