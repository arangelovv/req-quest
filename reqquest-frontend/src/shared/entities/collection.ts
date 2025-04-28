import { Request } from "./request";

export interface Collection {
    collectionId: number;
    collectionName: string;
    collectionDescription?: string;
    collectionRequests?: Request[];
}

export const dummyCollection: Collection[] = [
    {
        collectionId: 1,
        collectionName: "Books Api",
        collectionRequests: [
            { requestId: 1, requestName: "Get Books", requestMethod: "GET" },
            { requestId: 2, requestName: "Put Book", requestMethod: "PUT" },
            { requestId: 3, requestName: "Post Book", requestMethod: "POST" },
            {
                requestId: 4,
                requestName: "Delete Book",
                requestMethod: "DELETE",
            },
            {
                requestId: 5,
                requestName: "Patch Book",
                requestMethod: "PATCH",
            },
        ],
    },
    {
        collectionId: 2,
        collectionName: "Weather Api",
    },
];
