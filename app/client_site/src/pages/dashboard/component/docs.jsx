import { useState } from "react";
import "../index.css";
export default function Docs({ color }) {
  const [commandDialog, setCommandDialog] = useState(false);
  return (
    <>
      <div className="w-auto relative rounded-lg">
        <div
          className="w-[10rem]  aspect-[3/4] shadow-md shrink-0 rounded-lg overflow-hidden "
          style={{ backgroundColor: `${color}` }}
          onClick={() => setCommandDialog(!commandDialog)}
         
        ></div>{" "}
        <div
          id="commandDialog"
          className={`${
            commandDialog ? "absolute" : "hidden"
          } top-0 left-0 w-full h-full bg-black bg-opacity-[.5]`}
        >
          <button
            name="close"
            className="w-[2rem] text-lg border border-white rounded-full aspect-square hover:bg-opacity-[.6] text-white"
                onClick={() => setCommandDialog(!commandDialog)}
          >
            X
          </button>
        

         
          <button
            name="edit"
            className="w-[2rem] text-lg bg-primaryBlue rounded-full aspect-square hover:bg-opacity-[.6] text-white"
          >
            E
          </button>
          <button
            name="download"
            className="w-[2rem] text-lg bg-primaryBlue rounded-full aspect-square hover:bg-opacity-[.6] text-white"
          >
            D
          </button>
          <button
            name="share"
            className="w-[2rem] text-lg bg-primaryBlue rounded-full aspect-square hover:bg-opacity-[.6] text-white"
          >
            S
          </button> </div>
      
      </div>
    </>
  );
}
