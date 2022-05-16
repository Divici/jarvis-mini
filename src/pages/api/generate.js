import { Configuration, OpenAIApi } from "openai";
import { connect } from 'react-redux';

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const Generate = async (req, res, props) => {
    const {messages} = props;
    const completion = await openai.createCompletion("text-davinci-002", {
        prompt: generatePrompt(req.body.message, messages),
        temperature: 0.9,
        max_tokens: 60,
        top_p: 1.0,
        frequency_penalty: 0,
        presence_penalty: 0.6,
    });
    res.status(200).json({ result: completion.data.choices[0].text });
};

function generatePrompt(message, messages) {
    
    const conversation = messages.map(message=> message.message).join('\n\n');
  
    return `The following is a conversation with an AI assistant named Jarvis. The assistant is helpful, creative, witty, and clever.

    \n\n${conversation}
    \n\n${message}`;
}

const mapStateToProps = (state) => {
    return ({
        messages: state.messages
    });
}

export default connect(mapStateToProps)(Generate);