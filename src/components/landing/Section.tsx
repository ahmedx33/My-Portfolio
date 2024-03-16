import DynmicBall from "../ui/MovingBall";
import "./styles/index.css"

export default function Section() {
    return (
        <div className="w-full h-full py-36 px-24 after-loading flex items-center justify-between">
            <div className="text-white">
                <p className="text-[4rem]"><p>W</p><p>e</p><p>l</p><p>c</p><p>o</p><p>m</p><p>e</p><p>!</p><br /> My Name is Ahmed <br /> I'm a Front End Developer.</p>

            </div>
            <DynmicBall />
        </div>
    )
}
