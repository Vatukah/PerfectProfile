import { useParams } from "react-router-dom";
import img from './assets/react.svg';
import Docs from "./component/docs";
export default function Dashboard(){

    const userId= useParams();
    
    const name = parseInt(userId.id) == 1?"Anupam":"Vatukah";
    const color =['#ff6a88','#fa9d80fd','#b09bfffd']
    const myDocs= [1,2].map((doc,index)=>{
           const n =Math.floor(Math.random(0)*3);
        return(
            <Docs key={index} color={color[n]}/>
        )
    })
    return(
        <section id="dashboard" className="min-h-[100vh] py-6 px-3">
        <div className="user ">
          <div className=" flex gap-3 items-center">
            <img src={img} alt="user's profilePic" className="w-[3rem] aspect-square  object-fit rounded-full p-2 bg-white" />
            <p className="text-3xl font-semibold">{name}</p>
          </div>
        </div>

        <div id="docs" className="bg-white border border-gray-50 my-3 px-3 rounded-xl ">
            <h3 className="text-primaryBlue text-2xl  pt-6 pb-2 font-semibold  border-b-4 border-gray-100">My Documents</h3>
            <div className="flex gap-3 px-3  py-6 overflow-auto lg:overflow-hidden lg:flex-wrap">
             {myDocs}
             <div id="buildBtn" className="w-[10rem] aspect-[3/4] border-2 border-dashed border-primaryBlue rounded-lg shrink-0 flex justify-center items-center bg-gray-100">
               <div className="text-xl text-primaryBlue text-center shrink-0">
                <p className="text-4xl">+</p>
                <p>create new</p>
               </div>
             </div>
            </div>
        </div>


        
        </section>
    )
}