import { Database } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { Plus } from "lucide-react";
import { EllipsisVertical } from "lucide-react";
import { ChevronDown } from "lucide-react";
import RequestItem from "./RequestItem";
import { useState } from "react";
import { Request } from "../../../shared/entities/request";
import { Collection } from "../../../shared/entities/collection";

export default function CollectionItem({ collectionName, collectionRequests, collectionId }: Collection) {
    const [toggled, setToggled] = useState(false);

    const toggleCollection = () => {
        setToggled(!toggled);
    };
    return (
        <div
            className="flex flex-col select-none
"
        >
            <div
                onClick={toggleCollection}
                className="flex flex-row items-center p-2 gap-2 w-full rounded-sm cursor-pointer hover:bg-gray-200 transition duration-300"
            >
                {toggled ? (
                    <ChevronDown className="w-4 h-4" />
                ) : (
                    <ChevronRight className="w-4 h-4" />
                )}
                <div className="flex flex-row items-center gap-2 grow">
                    <Database className="w-4 h-4 text-violet-500" />
                    <span className="text-sm">{collectionName}</span>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <button className="p-1 hover:bg-gray-300 rounded-md  cursor-pointer">
                        <Plus className="w-4 h-4 text-gray-600" />
                    </button>

                    <button className="p-1 hover:bg-gray-300 rounded-md  cursor-pointer">
                        <EllipsisVertical className="w-4 h-4 text-gray-600" />
                    </button>
                </div>
            </div>
            {toggled && (
                <div className="pl-8 ">
                    {collectionRequests?.length && collectionRequests.length > 0 ? (
                        collectionRequests.map((request:Request) => (
                            <RequestItem
                                requestName={request.requestName}
                                requestMethod={request.requestMethod}
                            />
                        ))
                    ) : (<span className="text-xs">This collection is empty.</span>)}

                </div>
            )}
        </div>
    );
}
