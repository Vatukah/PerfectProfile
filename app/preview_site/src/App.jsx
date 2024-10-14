import { useEffect, useState, useCallback, useRef } from "react";
import { useParams } from "react-router-dom";
import QuickPinchZoom, { make3dTransformValue } from "react-quick-pinch-zoom";
import Temp1 from "./temp1/temp1";
import Temp2 from "./temp2/temp2";
import Temp3 from "./temp3/temp3";
function Template1() {
  let templateId = useParams();
  templateId = parseInt(templateId.id);
  const container = useRef(null);
  // This is the child component
  const [data, setData] = useState({});
  const [temp, setTemp] = useState(templateId);
  const handle = (event) => {  
    if (event.origin !== "http://localhost:5173") return;
    setData(event.data);
  };
  const onUpdate = useCallback(({ x, y, scale }) => {
    const { current: cont } = container;

    if (cont) {
      const value = make3dTransformValue({ x, y, scale });

      cont.style.setProperty("transform", value);
    }
  }, []);

  const handleTemp_via_param=(param,target)=>{
    if(param==1){
      target.setAttribute('href','./src/temp1/temp1.css')
    }else if(param==2){
      target.setAttribute('href','./src/temp2/temp2.css');
    }else{
      target.setAttribute('href','./src/temp3/temp3.css');
    }
    setTemp(param);
  }
  function printElement(elementId) {
    var contentToPrint = document.getElementById(elementId).outerHTML;
    var newWindow = window.open("", "", "width=600,height=400");
    newWindow.document.write("<html><head><title>Print</title>");
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "./index.css";
    newWindow.document.head.appendChild(link);
    newWindow.document.write("</head><body>");
    newWindow.document.write(contentToPrint);
    newWindow.document.write("</body></html>");
    newWindow.document.close();
    newWindow.focus();
    newWindow.print();
    newWindow.close();
  }

  useEffect(() => {
    const link = document.getElementById("resumeStyles");
    handleTemp_via_param(templateId,link);
    // Add message event listener
    window.addEventListener("message", handle);
    window.addEventListener("beforeprint", () =>
      printElement("resume-container")
    );

    // Cleanup function to remove event listener on component unmount
    return () => {
      window.removeEventListener("message", handle);
      window.removeEventListener("beforeprint", () =>
        printElement("resume-container")
      );
    };
  }, []);

  return (
    <>
      <QuickPinchZoom
        onUpdate={onUpdate}
        centerContained={true}
        enforceBoundsDuringZoom={true}
        wheelScaleFactor={500}
      >
        <div className="wrapper" ref={container}>
          {temp == 1 && <Temp1 data={data} />}
          {temp == 2 && <Temp2 data={data} />}
          {temp == 3 && <Temp3 data={data} />}
        </div>
      </QuickPinchZoom>
    </>
  );
}

export default Template1;
