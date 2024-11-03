import { useEffect,useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import './index.css'
import Template from "./template";
import { useSupa } from "../../Auth/authProvider";
import Loader from "../../components/loader";
export default function Templates(){
  const {fecth_templates,contentLoading}=useSupa();
  const [searchText,setSearchText]=useState('');
  // const [templates,setTemplates]=useState(['single column','double column','colored','modern',"classic"]);
  const [filteredTemp,setFilteredTemp]= useState(['single page'])
 const navigate =useNavigate();
 let debouncing;
  const handleChooseTemplate=(id)=>{
      navigate(`/build/${id}` )
  }

   
    const eleTem=filteredTemp.map((tem,index)=> <Template key={index} tem_info={{name:tem,des:'Eye catching and job seeking '}}/>)
  
    // const handleSearch=(e)=>{
    //   let text=e.target.value;
    //     setSearchText(text);
    //     clearTimeout(debouncing);
    //     debouncing=setTimeout(()=>{
    //     const filterTemp= templates.filter((temp)=>temp.includes(text));
    //     setFilteredTemp(filterTemp);
    //     },500)
    // }
   
    const handleFetch=()=>{
      const{templates,error} =  fecth_templates();
      if(templates){
       console.log(templates)
      }else{
       console.error(error)
      }
    }
   
    useEffect(() => {
     handleFetch();
      }, []);
      
    return(
        <>
        <div id="searchBar" className="w-full flex justify-center py-3 mt-3">
          <div className="h-[4rem] w-[95vw] relative border border-primaryBlue rounded-full bg-white overflow-hidden">
            <input type="text" name="template_search" id="template_search" className="h-full w-[80%]  focus:outline-0  px-6 text-lg" placeholder="Search templates..." value={searchText} onInput={(e)=>handleSearch(e)} onChange={(e)=>handleSearch(e)}/>
            <button className="absolute top-[50%] right-2 translate-y-[-50%] w-[20%] h-[80%] rounded-full hover:bg-gray-100 text-xl text-center ">search</button>
          </div>
          <div id="suggestions">
            <div onClick={(e)=>setSearchText(e.target.innerText)} className="p2 rounded-full bg-primaryBlue text-white fornt-semibold">double</div>
          </div>
        </div>
       <div className="w-full flex justify-center">
        <div className="grid grid-cols-2 gap-6 p-6  md:grid-cols-3 lg:grid-cols-4w-[90vw] ">
        {contentLoading && <Loader/>}
        {!contentLoading && eleTem}
      
        </div> </div> 
      </>)
}