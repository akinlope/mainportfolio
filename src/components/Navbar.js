import { Link, Outlet, useLocation } from "react-router-dom"


const Navbar = () => {
    const loc = useLocation();
    const active = loc.pathname.split("/")[1];



    return (
        <div className=" relative">
            <div className=" fixed gap-y-5 w-[100px] px-5 h-screen flex flex-col justify-between items-center">
                <div className=" h-full w-1  flex-1 bg-[#c5c6c7]"></div>
                <div className=" flex-[2]  flex flex-col space-y-12 justify-center  text-mainTxt font-semibold">
                    <Link to={"/contact"} className="nav -rotate-90">
                        <div className={` ${active === "contact" ? " text-brightTxt" : ""}`}>
                            Contact
                        </div>
                    </Link>

                    <Link to={"/about"} className="nav -rotate-90">
                        <div className={`  ${active === "about" ? "text-brightTxt" : ""}`}>
                            About
                        </div>
                    </Link>

                    <Link to={"/project"} className="nav -rotate-90">
                        <div className={` ${active === "project" ? " text-brightTxt" : ""}`}>
                            Project
                        </div>
                    </Link>

                    <Link to={"/"} className="nav -rotate-90">
                        <div className={`  ${active === "" ? "text-brightTxt" : ""}`}>
                            Home
                        </div>
                    </Link>
                </div>
                <div className=" flex-1 h-full w-1 bg-[#c5c6c7]"></div>
            </div>
            <Outlet />
        </div>
    );

}
export default Navbar;
