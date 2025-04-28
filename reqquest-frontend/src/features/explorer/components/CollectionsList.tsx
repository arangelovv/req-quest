import { useEffect, useState } from "react";
import CollectionItem from "./CollectionItem";
import {
    Collection,
    dummyCollection,
} from "../../../shared/entities/collection";

export default function CollectionsList() {
    const [collections, setCollections] = useState<Collection[]>([]);

    useEffect(() => {
        setCollections(dummyCollection);
    }, [dummyCollection]);

    return (
        <div className="flex flex-col px-2 gap-1">
            <span className="text-xs uppercase text-gray-500 font-semibold">
                Collections
            </span>
            {collections.map((collection) => (
                <CollectionItem
                    key={collection.collectionId}
                    collectionId={collection.collectionId}
                    collectionName={collection.collectionName}
                    collectionRequests={collection?.collectionRequests}
                />
            ))}
        </div>
    );
}
