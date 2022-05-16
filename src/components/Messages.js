import { connect } from 'react-redux';

const Messages = (props) => {
    const {messages} = props;
    localStorage.setItem("messages", JSON.stringify(messages));

    return (
        <div className={`relative w-full p-6 overflow-y-auto h-[476px] `}>
            {
                messages.length > 0 &&

                messages.map((message, i) =>{
                    if(message.type === 'user'){
                        return (
                            <div className="flex justify-end" key={i}>
                                <p className="relative max-w-xs my-2 px-4 py-2 text-white bg-blue-500 rounded-2xl shadow">
                                    {message.message}
                                </p>
                            </div>
                        )
                    }
                    else {
                        return (
                            <div className="flex justify-start" key={i}>
                                <p className="relative max-w-xs my-2 px-4 py-2 text-white bg-gray-800 rounded-2xl shadow">
                                    {message.message}
                                </p>
                            </div>
                        )
                    }
                }) 
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        messages: state.messages
    });
}

export default connect(mapStateToProps)(Messages);