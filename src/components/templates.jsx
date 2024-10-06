export default function Templates(){

    const templates=[1,2,3,4,5];
    const eleTem=templates.map((tem,index)=>{
        return(
            <div key={index} className="w-[100px] aspect-[3/4] bg-gray-400 border border-gray-700 lg:w-[250px]">

            </div>
        )
    })
    return(
        <div className="grid grid-cols-2 gap-6 p-6 lg:grid-cols-4">
        {eleTem}
        </div>
    )
}