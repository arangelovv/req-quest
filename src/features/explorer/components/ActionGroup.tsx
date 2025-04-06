import { Plus } from 'lucide-react';

export default function ActionGroup() {
    return (
        <button className='p-2 bg-violet-500 w-fit rounded-md cursor-pointer hover:bg-violet-700 transition duration-300'>
            <Plus className='w-4 h-4 font-bold text-white'/>
        </button>
    );
}

