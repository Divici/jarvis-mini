import { useState } from 'react';
import { addMessage } from '../actions';
import { connect } from 'react-redux';
import { Configuration, OpenAIApi } from "openai";
import {BsFillArrowUpCircleFill} from 'react-icons/bs';
import TextareaAutosize from 'react-textarea-autosize';

const InputField = (props) => {
    const [prompt, setPrompt] = useState('');
    const {messages} = props;

    const handleChange = (e) => {
        setPrompt(e.target.value);
    }

    function generatePrompt(message) {
    
        const conversation = messages.map(message=> message.message).join('\n\n');
      
        return `The following is a conversation with an AI assistant named Jarvis. The assistant is helpful, creative, witty, very friendly and clever.
    
        \n\n${conversation}
        \n\n${message}`;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
       
        props.addMessage({
            type: 'user',
            message: prompt
        })
        
        const configuration = new Configuration({
            apiKey: process.env.REACT_APP_OPENAI_API_KEY,
        });
        const openai = new OpenAIApi(configuration);
          
        openai.createCompletion("text-davinci-002", {
            prompt: generatePrompt(prompt),
            temperature: 0.9,
            max_tokens: 100,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0.6,
        })
        .then(res=>{
            props.addMessage({
                type: 'openai',
                message: res.data.choices[0].text
            })
        })
        .catch(err=>{
            console.log(err);
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