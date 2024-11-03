
export default function AccountCenter({user,handlers}){

    return (
        <div className="w-full overflow-hidden absolute bottom-0 left-0 p-4 bg-gray-50">
            <div className="flex gap-4 items-center mb-2">
                <img src='/ppLogo.png' alt="avatar"className="w-8 aspect-square  bg-gray-200 rounded-full"/>
                <p className="text-sm font-bold text-gray-600 overflow-hidden " style={{textOverflow:'ellipsis'}}>{user}</p>
            </div>
            <div className="flex flex-col gap-4">
                <button className="p-2 bg-gray-200 rounded-lg" onClick={()=> handlers?.signOut()}>Sign Out</button>
                <button className="p-2 bg-red-200 text-red-500  rounded-lg" onClick={()=>handlers?.delete()}>Delete Account</button>

            </div>
        </div>
    )
}