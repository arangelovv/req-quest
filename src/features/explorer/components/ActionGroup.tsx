export default function ActionGroup() {
    return (
        <div className="p-2 flex flex-row gap-3">
            <button className="flex flex-row gap-2 px-3 py-2 rounded-md bg-violet-600 text-white text-sm cursor-pointer">
                <span>+</span>
                <span>Collection</span>
            </button>
            <button className="flex flex-row gap-2 px-3 py-2 rounded-md bg-gray-200 text-green-900 text-sm  cursor-pointer">
                <span>+</span>
                <span>Project</span>
            </button>
        </div>
    );
}

//Todo: add background hover effect on buttons
