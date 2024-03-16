import "../styles/index.css"
export default function Project() {

    return (
        <div className="bg-[#48494A] p-8 w-[350px] h-[350px] relative  d-1a " onMouseMove={(e) => {

            console.log(e)
        }}>
            <div className="bg-red-500 w-full h-full transition-all z-10"></div>
            <div>Title</div>
        </div>
    )
}
