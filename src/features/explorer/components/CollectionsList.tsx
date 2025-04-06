import CollectionItem from "./CollectionItem";

export default function CollectionsList() {
    return (
        <div className="flex flex-col px-2 gap-1">
            <span className="text-xs uppercase text-gray-500 font-semibold">
                Collections
            </span>
            <CollectionItem />
            <CollectionItem />
        </div>
    );
}
