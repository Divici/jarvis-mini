import Header from './Header';
import InputField from './InputField';
import Messages from './Messages';

const PhoneFrame = () => {
    
    return (
        <div className="relative h-[712px] sm:w-[550px] bg-gray-900 mx-2 sm:mx-auto rounded-[60px] shadow-xl overflow-hidden border-[14px] border-gray-900">
            <div className="absolute inset-0 h-auto w-full bg-black">
                <Header />
                <Messages />
                <InputField />
            </div>    
        </div>
    )
}


export default PhoneFrame;