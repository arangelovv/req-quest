import { Plus } from "lucide-react";
import { Database } from "lucide-react";
import { FolderCode } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function ActionGroup() {
    const [menuToggle, setToggle] = useState(false);

    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setToggle(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
    }, []);

    const toggleMenu = () => {
        setToggle(!menuToggle);
    };

    return (
        <div ref={menuRef} className="relative">
            <button
                onClick={toggleMenu}
                className="p-2 bg-violet-500 rounded-md cursor-pointer hover:bg-violet-700 transition duration-300 relative "
            >
                <Plus className="w-4 h-4 font-bold text-white" />
            </button>
            {menuToggle && <ActionGroupMenu />}
        </div>
    );
}

function ActionGroupMenu() {
    return (
        <div className="flex flex-col items-start gap-2 w-fit text-nowrap z-10 absolute left-0 mt-2 px-4 py-3 bg-white shadow-gray-200 shadow-lg border border-gray-300 rounded-md nowrap">
            <button className="flex flex-row gap-2 items-center cursor-pointer hover:text-violet-600">
                <Database className="w-4 h-4" />
                <span className="text-sm">New Collection</span>
            </button>
            <button className="flex flex-row gap-2 items-center cursor-pointer hover:text-violet-600">
                <FolderCode className="w-4 h-4" />
                <span className="text-sm">New Project</span>
            </button>
        </div>
    );
}
