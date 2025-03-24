import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useZustand } from "../store/useZustand";
import Dropdown from "../components/dropdown/Dropdown";

export const Home = () => {
    const { menuArr } = useZustand();
    const { isAuthenticated } = useAuth0();

    if (!isAuthenticated) {
        return (
            <div className="absolute z-10 flex flex-col items-center justify-center w-full h-full text-center text-white bg-black text-8xl">
                <div>Please log in to analyze websites</div>
            </div>
        );
    }

    return (
        <div className="absolute z-10 flex flex-col items-center justify-center w-full h-full text-center text-white bg-black text-8xl">
            {menuArr.length === 0 ? <Dropdown /> : <div>Sites ajoutés</div>}
        </div>
    );
};