import { useState } from 'react';
import { addMessage } from '../actions';
import { connect } from 'react-redux';
import axiosWithAuth from '../utils/axiosWithAuth';
import {BsFillArrowUpCircleFill} from 'react-icons/bs';
import TextareaAutosize from 'react-textarea-autosize';

const InputField = (props) => {
    const [prompt, setPrompt] = useState('');
    const [result, setResult] = useState();
    const {messages} = props;

    const handleChange = (e) => {
        setPrompt(e.target.value);
    }

    const dataPrompt = {
        prompt: generatePrompt(prompt, messages),
        temperature: 0.9,
        max_tokens: 60,
        top_p: 1.0,
        frequency_penalty: 0,
        presence_penalty: 0.6,
    }

    function generatePrompt(message, messages) {
    
        const conversation = messages.map(message=> message.message).join('\n\n');
      
        return `The following is a conversation with an AI assistant named Jarvis. The assistant is helpful, creative, witty, and clever.
    
        \n\n${conversation}
        \n\n${message}`;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        //Send prompt axios call and push prompt to conversation state
        
        axiosWithAuth()
            .post('/', dataPrompt)
                .then(res=>{
                    console.log(res);;
                }) 
                .catch(err=>{
                    console.log(err.response.data);
                })   

        props.addMessage({
            type: 'user',
            message: prompt
        })

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

const mapStateToProps = (state) => {
    return ({
        messages: state.messages
    });
}

export default connect(mapStateToProps, {addMessage})(InputField);