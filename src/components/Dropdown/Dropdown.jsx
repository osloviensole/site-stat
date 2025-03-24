import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Dropdown = () => {
    const { isAuthenticated, user, logout } = useAuth0();
    const [open, setOpen] = useState(false);

    if (!isAuthenticated || !user) return null;

    return (
        <div className="relative">
            {/* Bouton Dropdown avec Icône */}
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-500 transition"
            >
                {"User Connected"}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-700"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* Contenu du Dropdown */}
            {open && (
                <div className="absolute right-0 mt-2 bg-white shadow-md rounded-lg p-3 w-full border">
                    <p className="text-3xl font-semibold text-gray-800">{user.nickname || "Nom inconnu"}</p>
                    <p className="text-3xl text-gray-600 mt-2">{user.email || 'Email inconnu'}</p>

                </div>
            )}
        </div>
    );
};

export default Dropdown;
