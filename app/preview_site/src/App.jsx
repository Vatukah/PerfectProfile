import { useEffect, useState, useCallback, useRef, createElement } from "react";
import { useParams } from "react-router-dom";
import QuickPinchZoom, { make3dTransformValue } from "react-quick-pinch-zoom";
import Temp1 from "./temp1/temp1";
import Temp2 from "./temp2/temp2";
import Temp3 from "./temp3/temp3";
import html2canvas from "html2canvas";
import { supabase } from "../supabase/supa";
import HandleBars from "handlebars";
function Template1() {
  let templateId = useParams();
  templateId = parseInt(templateId.id);
  const container = useRef(null);
  // This is the child component
  const [data, setData] = useState({});
  const [temp, setTemp] = useState(" ");
  const handleParentRequest = (event) => {
    if (event.origin !== "http://localhost:5173") return;

    if (event.data.type == "form-data") {
      setData(event.data.data);
    }
    if (event.data.type == "download") handleDownload();
  };
  const onUpdate = useCallback(({ x, y, scale }) => {
    const { current: cont } = container;

    if (cont) {
      const value = make3dTransformValue({ x, y, scale });

      cont.style.setProperty("transform", value);
    }
  }, []);

  const handleTemp_via_param = (param, target) => {
    if (param == 1) {
      target.setAttribute("href", "./src/temp1/temp1.css");
    } else if (param == 2) {
      target.setAttribute("href", "./src/temp2/temp2.css");
    } else {
      target.setAttribute("href", "./src/temp3/temp3.css");
    }
 
  };

  const handleDownload = () => {
    const element = document.querySelectorAll(".resume-container")[0];
    html2canvas(element).then((canvas) => {
      const anchor = document.createElement("a");
      anchor.href = canvas.toDataURL("image/jpeg");
      anchor.download = "resume.jpeg";
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
    });
  };
  const Fetch = async () => {
    const { data, error } = await supabase.from("resume_templates").select();
    if (data) {
      setTemp(data[0].template_content);
    } else {
      console.error(error);
    }
  };

  const templating = () => {
    const template = HandleBars.compile(temp);
    const htmlText = template(data);
    container.current.innerHTML = htmlText;
  };
  useEffect(() => {
    const link = document.getElementById("resumeStyles");
    handleTemp_via_param(templateId,link);
    // Add message event listener
    window.addEventListener("message", handleParentRequest);
    window.addEventListener("beforeprint", () =>
      printElement("resume-container")
    );

    Fetch();

    templating();

    // Cleanup function to remove event listener on component unmount
    return () => {
      window.removeEventListener("message", handleParentRequest);
      window.removeEventListener("beforeprint", () =>
        printElement("resume-container")
      );
    };
  }, [temp,data]);

  return (
    <>
      <QuickPinchZoom
        onUpdate={onUpdate}
        centerContained={true}
        enforceBoundsDuringZoom={true}
        wheelScaleFactor={500}
      >
        <div className="wrapper" ref={container}></div>
      </QuickPinchZoom>
    </>
  );
}

export default Template1;
