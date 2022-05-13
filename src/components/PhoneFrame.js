import {BsFillArrowUpCircleFill} from 'react-icons/bs';
import TextareaAutosize from 'react-textarea-autosize';

const PhoneFrame = () => {
    return (
        <div className="relative h-[712px] sm:w-[550px] bg-gray-900 mx-2 sm:mx-auto rounded-[60px] shadow-xl overflow-hidden border-[14px] border-gray-900">
            <div className="absolute inset-0 h-auto w-full overflow-y-auto bg-black">
                {/* Header */}
                <div className="absolute inset-0 h-[110px] w-full bg-gray-500 opacity-50"></div>
                <div className="absolute inset-0 h-6 w-40 mx-auto bg-black rounded-b-3xl"></div>
                <img className="absolute inset-10 mx-auto object-cover w-10 h-10 rounded-full"
                src="https://cdn.pixabay.com/photo/2017/03/31/23/11/robot-2192617_960_720.png" alt="username" />
                <span className="absolute w-3 h-3 sm:bg-blue-500 bg-transparent rounded-full left-[270px] top-10"></span>
                <h2 className="absolute inset-[85px] text-center font-normal text-xs text-white">JARVIS mini</h2>
                
                {/* Message Input Field */}
                <div className="absolute flex items-center justify-between w-full p-3 bg-black/50 bottom-10">
                    <TextareaAutosize maxRows={5} type="textarea" placeholder="Enter a Prompt"
                    className="block w-full h-auto py-2 pl-4 mx-3 bg-transparent rounded-xl border-2 border-gray-500 opacity-100 text-white"
                    name="message" />
                    
                    <button>
                        <BsFillArrowUpCircleFill className='w-7 h-7 text-blue-500'/>
                    </button>
                </div>

            </div>    
        </div>
    )
}

export default PhoneFrame;