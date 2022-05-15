import { useState } from 'react';
import { addPrompt } from '../actions';
import { connect } from 'react-redux';
import {BsFillArrowUpCircleFill} from 'react-icons/bs';
import TextareaAutosize from 'react-textarea-autosize';

const InputField = (props) => {
    const [prompt, setPrompt] = useState('');

    const handleChange = (e) => {
        setPrompt(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //Send prompt axios call and push prompt to conversation state
        props.addPrompt({
            type: 'user',
            message: prompt
        })
        console.log(prompt);
        setPrompt('')
    }

    return (
        <section className="absolute bottom-4 flex items-center justify-between w-full p-3 bg-black ">
            <TextareaAutosize maxRows={3} type="textarea" placeholder="Enter a Prompt"
            className="block w-full py-2 pl-4 mx-3 bg-transparent rounded-xl border-2 border-gray-500 opacity-100 text-white"
            name="prompt" value={prompt} onChange={handleChange}/>
            
            <button onClick={handleSubmit}>
                <BsFillArrowUpCircleFill className='w-7 h-7 text-blue-500'/>
            </button>
        </section>
    )
}

export default connect(null, {addPrompt})(InputField);