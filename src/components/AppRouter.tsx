import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "../router/routes";
const AppRouter = () => {
    return (
        <Routes>
            {routes.map(({ path, Component }) => (
                <Route
                    path={path}
                    element={React.createElement(Component)}
                    key={path}
                />
            ))}
            <Route path="*" element={<Navigate to='/' />}/>
        </Routes>
    );
};

export default AppRouter;
