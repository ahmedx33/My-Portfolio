import "./styles/index.css"
import DynmicLi from "./components/DynmicLi"
import { Outlet } from "react-router-dom"

export default function RootLayout() {
    const links = ["projects", "about", "concat"]
    return (
        <div>
            <div className="flex items-center justify-between py-5 px-20 text-[1.8rem] h-fit relative">
                <div className="text-white">
                    <DynmicLi title="Ahmed Hany" path="/" />
                </div>

                <ul className={`flex items-center gap-5 text-white`}>
                    {links.map((link) => <DynmicLi title={link} path={link} />)}
                </ul>
            </div>
            <Outlet />
        </div>
    )
}
