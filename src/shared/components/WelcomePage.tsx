import { Zap, Database, Info, ArrowUpDown, Briefcase, Plus } from "lucide-react";

export function WelcomePage() {
    return (
        <div className="p-8 flex flex-col gap-6 grow overflow-hidden bg-gray-50">
            <div className="flex flex-col gap-4">
                <h1 className="text-center text-3xl font-bold text-violet-600">
                    Welcome to ReqQuest
                </h1>
                <span className="text-center text-lg text-gray-600">
                    Open-source API testing tool to streamline your development workflow
                </span>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-2 items-center">
                    <Zap className="w-5 h-5 text-violet-500" />
                    <h2 className="text-xl font-semibold text-gray-800">Quick Start</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-4 flex flex-col gap-2 shadow-sm border border-gray-200 rounded-md">
                        <Database className="w-5 h-5 text-violet-400" />
                        <p className="font-medium text-gray-900">Create a collection</p>
                        <p className="text-sm text-gray-600">
                            Collections help you organize related API requests together
                        </p>
                        <div className="bg-gray-100 p-2 rounded-sm flex flex-row items-center gap-2">
                            <Info className="w-5 h-5" />
                            <p className="text-xs text-gray-600">
                                Click the + button in the sidebar and select 'New Collection'
                            </p>
                        </div>
                    </div>
                    <div className="bg-white p-4 flex flex-col gap-2 shadow-sm border border-gray-200 rounded-md">
                        <ArrowUpDown className="w-5 h-5 text-violet-400" />
                        <p className="font-medium text-gray-900">Make a Request</p>
                        <p className="text-sm text-gray-600">
                            Test your APIs with different HTTP methods and parameters
                        </p>
                        <div className="bg-gray-100 p-2 rounded-sm flex flex-row items-center gap-2">
                            <Info className="w-5 h-5" />
                            <p className="text-xs text-gray-600">
                                Select a collection and click + to add a new request
                            </p>
                        </div>
                    </div>
                    <div className="bg-white p-4 flex flex-col gap-2 shadow-sm border border-gray-200 rounded-md">
                        <Briefcase className="w-5 h-5 text-violet-400" />
                        <p className="font-medium text-gray-900">Organize with Projects</p>
                        <p className="text-sm text-gray-600">
                            Group related collections into projects for better organization
                        </p>
                        <div className="bg-gray-100 p-2 rounded-sm flex flex-row items-center gap-2">
                            <Info className="w-5 h-5" />
                            <p className="text-xs text-gray-600">
                                Click the + button and select 'New Project'
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-violet-500 rounded-lg px-10 py-4 flex flex-col gap-4 items-center">
                    <h3 className="text-2xl font-semibold text-white">Ready to get started?</h3>
                    <p className="text-md text-white">Create your first collection and start testing your APIs</p>
                    <button className="bg-white text-violet-600 px-4 py-2 rounded-md flex flex-row gap-2 cursor-pointer hover:bg-gray-100 transition duration-300">
                    <Plus />
                        <span className="font-semibold">Create Collection</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
