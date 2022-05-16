// import { Configuration, OpenAIApi } from "openai";
// import { connect } from 'react-redux';

// const configuration = new Configuration({
//   apiKey: process.env.REACT_APP_OPENAI_API_KEY,
// });

// const openai = new OpenAIApi(configuration);

// const Generate = async (req, res, props) => {
//     const {messages} = props;
//     const completion = await openai.createCompletion("text-davinci-002", {
//         prompt: generatePrompt(req.body.message, messages),
//         temperature: 0.9,
//         max_tokens: 60,
//         top_p: 1.0,
//         frequency_penalty: 0,
//         presence_penalty: 0.6,
//     });
//     res.status(200).json({ result: completion.data.choices[0].text });
// };

// function generatePrompt(message, messages) {
    
//     const conversation = messages.map(message=> message.message).join('\n\n');
  
//     return `The following is a conversation with an AI assistant named Jarvis. The assistant is helpful, creative, witty, and clever.

//     \n\n${conversation}
//     \n\n${message}`;
// }

// const mapStateToProps = (state) => {
//     return ({
//         messages: state.messages
//     });
// }

// export default connect(mapStateToProps)(Generate);

import { useState } from 'react';
import { addMessage } from '../actions';
import { connect } from 'react-redux';
import {BsFillArrowUpCircleFill} from 'react-icons/bs';
import TextareaAutosize from 'react-textarea-autosize';

const InputField = (props) => {
    const [prompt, setPrompt] = useState('');
    const [result, setResult] = useState();

    const handleChange = (e) => {
        setPrompt(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        //Send prompt axios call and push prompt to conversation state
        
        const response = await fetch("../api/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ message: prompt }),
        });

        const data = await response.json();
        setResult(data.result);
        console.log(data.result);
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

export default connect(null, {addMessage})(InputField);