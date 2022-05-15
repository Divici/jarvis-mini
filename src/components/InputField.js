import { useState } from 'react';
import {BsFillArrowUpCircleFill} from 'react-icons/bs';
import TextareaAutosize from 'react-textarea-autosize';

const InputField = () => {
    const [prompt, setPrompt] = useState('');
    
    return (
        <section className="absolute bottom-4 flex items-center justify-between w-full p-3 bg-black ">
            <TextareaAutosize maxRows={3} type="textarea" placeholder="Enter a Prompt"
            className="block w-full py-2 pl-4 mx-3 bg-transparent rounded-xl border-2 border-gray-500 opacity-100 text-white"
            name="message" />
            
            <button>
                <BsFillArrowUpCircleFill className='w-7 h-7 text-blue-500'/>
            </button>
        </section>
    )
}

export default InputField;