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

const Messages = () => {
    return (
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
    )
}

export default Messages;