import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Home";
import Login from "./Login";
import { Single } from "./Single";
import EditMusicRecord from "./EditMusicRecord";
import ReqAuth from "./Req";
const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/music/:id" element={
                <ReqAuth>
                    <Single />
                </ReqAuth>
                } 
            />
            <Route path="/music/:id/edit" element={<EditMusicRecord />} />
            <Route path="/Login" element={<Login />} />
            <Route path="*" element={<h3>Page Not Found</h3>} />
        </Routes>
    );
};
export default MainRoutes;