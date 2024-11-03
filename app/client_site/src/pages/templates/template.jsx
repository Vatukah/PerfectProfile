
export default function Template({tem_info}){

    return(
        <div  className="w-[160px] aspect-[4/3.5] bg-white shadow-lg md:w-[210px] lg:w-[320px] relative template  rounded-lg overflow-hidden box-border"  >
         <img src="/ppLogo.png" alt="resume_img" className="h-[80%] w-full bg-gray-100 object-cover"/>
         <div className="w-full h-[20%] bg-white   px-1 flex flex-col items-center justify-center">
            <h3>{tem_info.name}</h3>
            <p className="text-gray-400 leading-4 text-sm">{tem_info.des}</p>
            </div>
        <div id="tools" className="absolute top-0 left-0 bg-black bg-opacity-[.4] w-full h-full  flex justify-center items-center ">
          <button className="w-[28px] aspect-square bg-white text-primaryBlue rounded-full useTempBtn text-lg" onClick={()=>handleChooseTemplate(tem)}>+</button>
        </div>
        </div>
    )
}