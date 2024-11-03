
import { useEffect, useRef } from "react";
import { useResume } from "./resumeContext";


const  ResumeTemplate = ({tempId})=>{
 const{resumeData,course} =useResume()
  const iframeRef =useRef(null);
  
  const handleSendData=()=>{
    if(iframeRef.current){
         iframeRef.current.contentWindow.postMessage({type:'form-data',data:resumeData},'*');
    }
   
  }
  const handleDownloadAsImg=(id)=>{
     
    if(iframeRef.current){
      iframeRef.current.contentWindow.postMessage({type:'download',format:'jpeg'},'*');
 }
  }

  useEffect(()=>{
    handleSendData();
    console.log("rendered")
  },[resumeData])
    return(
        <>
   <iframe src={`http://localhost:5174/${tempId}`}  ref={iframeRef} className="w-full h-full"></iframe>
   <div className="absolute right-0 top-0 side_toolBar flex flex-col gap-2  bg-primaryBlue">
     <button  className="bg-primaryBlue text-white font-semibold  rounded-full shadow-md hover:bg-blue-300 transition w-[2rem] aspect-square" onClick={handleDownloadAsImg} >de</button>
  
   </div>
   </>)}
export default ResumeTemplate;