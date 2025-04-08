import ActionGroup from "./components/ActionGroup";
import CollectionsList from "./components/CollectionsList";
import { SearchBar } from "./components/SearchBar";

export default function Explorer() {
    return (
        <div className="w-72 shrink-0 h-screen flex flex-col gap-2  border-r border-gray-200">
            <div className="flex flex-row items-center px-2 py-2 border-b border-gray-200">
                <h1 className="text-xl font-bold text-violet-600 grow">ReqQuest</h1>
                <ActionGroup />
            </div>
            <div className="px-2 pb-2 border-b border-gray-200">
                <SearchBar />
            </div>
            <CollectionsList />
        </div>
    );
}
