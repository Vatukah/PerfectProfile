export default function MobilePreview({active,activeHandler}){

    return(
        <div id="mobilePreviewDialog " className="flex-col justify-center gap-8 w-[100vw] h-[100vh]  fixed top-0 left-0 bg-black bg-opacity-[0.5] lg:hidden md:hidden" style={{display:`${active?'flex':'none'}`,zIndex:'999'}}>
        <img src="preview.jpg" alt="resumePreview" />
        <button onClick={()=>activeHandler(false)}>Close</button>
      </div>
    )
}