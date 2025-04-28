import { methodColors } from "../../../shared/entities/request";

export default function RequestItem({ requestName, requestMethod }) {
    const methodKey = requestMethod;
    const methodColor = methodColors[methodKey];

    return (
        <div className="w-full flex flex-row items-center gap-2 px-2 py-1.5 hover:bg-gray-100 cursor-pointer rounded-sm overflow-hidden">
            <span
                className={`uppercase ${methodColor}  p-0.5 rounded-sm text-xs font-medium text-gray-700`}
            >
                {requestMethod}
            </span>
            <span className="text-sm font-medium">{requestName}</span>
        </div>
    );
}
