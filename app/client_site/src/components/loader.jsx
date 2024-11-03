import logo from '/ppLogo.png'
export default function Loader(){

    return(
        <div className="fixed top-0 left-0 w-full h-[100vh] flex justify-center items-center backdrop-blur z-[999]">
            <div className="w-[6rem] aspect-square rounded-full relative flex justify-center items-center flex-col" >
                <img src={logo} alt="" className='w-[80%] animate-bounce' />
                <p className='text-primaryBlue font-bold text-xl'> Loading...</p>
            </div>
        </div>
    )
}