import ActionGroup from "./components/ActionGroup";
import CollectionsList from "./components/CollectionsList";

export default function Explorer() {
    return (
        <div className="w-72 h-screen flex flex-col gap-2 p-2 border-r border-gray-200">
            <h1 className="text-xl font-bold text-violet-600">ReqQuest</h1>
            <ActionGroup />
            <CollectionsList /> 
        </div>
    );
}
