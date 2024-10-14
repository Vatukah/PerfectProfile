import { useEffect,useRef } from "react";
import { useNavigate } from "react-router-dom";
import './index.css'
export default function Templates(){
 const navigate =useNavigate();
  const handleChooseTemplate=(id)=>{
      navigate(`/build/${id}`)
  }

    const templates=[1,2,3,4,5];
    const eleTem=templates.map((tem,index)=>{
        return(
            <div key={index} className="w-[160px] aspect-[3/4] bg-white shadow-lg md:w-[210px] lg:w-[320px] relative template  rounded-lg overflow-hidden" >
              { index+1 }
            <div id="tools" className="absolute top-0 left-0 bg-black bg-opacity-[.4] w-full h-full  flex justify-center items-center ">
              <button className="w-[28px] aspect-square bg-white text-primaryBlue rounded-full useTempBtn text-lg" onClick={()=>handleChooseTemplate(tem)}>+</button>
            </div>
            </div>
        )
    })
   
    useEffect(() => {
     
      }, []);
      
    return(
        <>
        <div id="searchBar" className="w-full flex justify-center py-3 mt-3">
          <div className="h-[4rem] w-[95vw] relative border border-primaryBlue rounded-full bg-white overflow-hidden">
            <input type="text" name="template_search" id="template_search" className="h-full w-[80%]  focus:outline-0  px-6 text-lg" placeholder="Search templates..." />
            <button className="absolute top-[50%] right-2 translate-y-[-50%] w-[20%] h-[80%] rounded-full hover:bg-gray-100 text-xl text-center ">search</button>
          </div>
        </div>
       <div className="w-full flex justify-center">
        <div className="grid grid-cols-2 gap-6 p-6  md:grid-cols-3 lg:grid-cols-4w-[90vw] ">
       
        {eleTem}
      
        </div> </div> 
      </>)
}