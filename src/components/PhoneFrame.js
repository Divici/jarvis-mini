import {BsFillArrowUpCircleFill} from 'react-icons/bs';
import TextareaAutosize from 'react-textarea-autosize';

const prompts = [
    'hi',
    'how are you doing today',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
];

const responses = [
    'Robot hi',
    'Im a robot in disguise',
    'Robot ipsum dolor sit, amet consectetur adipisicing elit.',
    'Robot ipsum dolor sit, amet consectetur adipisicing elit.',
    'Robot ipsum dolor sit, amet consectetur robot.',
    'Robot ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Robot ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
];

const PhoneFrame = () => {
    
    return (
        <div className="relative h-[712px] sm:w-[550px] bg-gray-900 mx-2 sm:mx-auto rounded-[60px] shadow-xl overflow-hidden border-[14px] border-gray-900">
            <div className="absolute inset-0 h-auto w-full bg-black">

                {/* Header */}
                <div className='h-[110px] w-full bg-gray-500/95'>
                    <div className="h-6 w-40 mx-auto bg-black rounded-b-3xl opacity-100"></div>
                    <img className="mt-[15px] mx-auto object-cover w-10 h-10 rounded-full"
                    src="https://cdn.pixabay.com/photo/2017/03/31/23/11/robot-2192617_960_720.png" alt="username" />
                    <span className="absolute w-3 h-3 sm:bg-blue-500 bg-transparent rounded-full left-[270px] top-10"></span>
                    <h2 className="mt-1 text-center font-normal text-xs text-white">J.A.R.V.I.S. mini</h2>
                </div>
                

                {/* Messages field with scroll */}
                <div className={`relative w-full p-6 overflow-y-auto h-[476px] `}>
                    {
                        prompts.map((message, i) =>(
                            <div className="flex justify-end">
                                <p className="relative max-w-xs my-2 px-4 py-2 text-white bg-blue-500 rounded-2xl shadow">
                                    {message}
                                </p>
                            </div>
                        )) 
                    }
                    {
                        responses.map((message, i) =>(
                            <div className="flex justify-start">
                                <p className="relative max-w-xs my-2 px-4 py-2 text-white bg-gray-800 rounded-2xl shadow">
                                    {message}
                                </p>
                            </div>
                        )) 
                    }
                    {
                        responses.map((message, i) =>(
                            <div className="flex justify-start">
                                <p className="relative max-w-xs my-2 px-4 py-2 text-white bg-gray-800 rounded-2xl shadow">
                                    {message}
                                </p>
                            </div>
                        )) 
                    }
                </div>
                

                
                
                {/* Message Input Field */}
                <div  className="absolute bottom-4 flex items-center justify-between w-full p-3 bg-black ">
                    <TextareaAutosize maxRows={3} type="textarea" placeholder="Enter a Prompt"
                    className="block w-full py-2 pl-4 mx-3 bg-transparent rounded-xl border-2 border-gray-500 opacity-100 text-white"
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