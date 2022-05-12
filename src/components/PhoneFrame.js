const PhoneFrame = () => {
    return (
        <div className=" relative h-[712px] sm:w-[550px] bg-gray-900 mx-2 sm:mx-auto rounded-[60px] shadow-xl overflow-hidden border-[14px] border-gray-900">
            <div className="absolute inset-0 h-full w-full bg-black">
                <div className="absolute inset-0 h-[110px] w-full bg-slate-500 opacity-50"></div>
                <div className="absolute inset-0 h-6 w-40 mx-auto bg-black rounded-b-3xl"></div>
                <div className="absolute inset-10 h-10 w-10 mx-auto rounded-full bg-blue-500"></div>
                <h2 className="absolute inset-[85px] text-center font-normal text-xs text-white">JARVIS mini</h2>
            </div>    
        </div>
    )
}

export default PhoneFrame;