
import { Link } from "react-router-dom";

import { useState } from "react";

export default function DynmicLi({ title, path }: { title: string, path: string }) {

    const [moving, setMoving] = useState<MovingInterface>()
    const speed = 1.5
    return (
        <div>

            <li style={{ transform: `translate3d(${moving?.x}px, ${moving?.y}px, ${moving?.z}px)` }} className="transition-[1s] p-5 hover:cursor-pointer" onMouseMove={(e) => {
                setMoving({
                    x: e.movementX * speed,
                    y: e.movementY * speed,
                    z: (e.movementX - e.movementY) * speed
                })
            }} onMouseLeave={() => {
                setMoving({
                    x: 0,
                    y: 0,
                    z: 0
                })
            }}><Link to={`${path}`} className="capitalize">{title}</Link></li>

        </div>
    )
}
