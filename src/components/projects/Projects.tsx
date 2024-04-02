import Project from "./components/Project";
import "./styles/index.css";

export default function Projects() {
    return (
        <div className="py-14 px-24 w-full h-fit flex justify-center items-start relative">
            <div className="absolute z-50 w-[80%] h-1/2">
                <div className="absolute w-10 h-10 bg-red-500 right-0 translate-y-1/2 top-1/2 cursor-pointer">
                    
                </div>
                <div className="absolute w-10 h-10 bg-red-500 left-0 translate-y-1/2 top-1/2 cursor-pointer"></div>
            </div>
            <div className="w-[1000px] overflow-y-hidden overflow-x-hidden flex items-center justify-center gap-5 ">
                <Project />
                <Project />
                <Project />
                <Project />
            </div>
        </div>
    );
}
