const Header = () => {
    return (
        <header className='h-[110px] w-full bg-gray-500/95'>
            <div className="h-6 w-40 mx-auto bg-black rounded-b-3xl opacity-100"></div>
            <img className="mt-[15px] mx-auto object-cover w-10 h-10 rounded-full"
            src="https://cdn.pixabay.com/photo/2017/03/31/23/11/robot-2192617_960_720.png" alt="username" />
            <span className="absolute w-3 h-3 sm:bg-blue-500 bg-transparent rounded-full left-[270px] top-10"></span>
            <h2 className="mt-1 text-center font-normal text-xs text-white">J.A.R.V.I.S. mini</h2>
        </header>
    )
}

export default Header;