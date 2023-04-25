'use client'
import { User } from "@prisma/client";
import Container from "../container";
import Logo from "./logo";
import Search from "./search";
import UserMenu from "./userMenu";
interface NavbarProps{
    currentUser?:User|null;
}

const Navbar:React.FC<NavbarProps>=({currentUser})=>{
    console.log({currentUser});
    return(
        <div className="fixed w-full bg-white z-10 shadow-sm">
            <div className="py-4 border-b-[1px]">
                <Container>
                    <div className="
                    flex
                    flex-row
                    items-center
                    justify-between
                    gap-3
                    md:gap-0
                    ">
                        <Logo/>
                        <Search/>
                        <UserMenu/>
                    </div>
                </Container>
            </div>
        </div>
        // <nav className="fixed w-full bg-white z-10 shadow-sm">
        //     navbar
        // </nav>
    );
}
export default Navbar;