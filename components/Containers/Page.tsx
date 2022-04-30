import SideBar from "../SideBar/SideBar";
import { FaHome, FaGamepad, FaInfoCircle, FaCode, FaCodeBranch, FaDiscord, FaTelegramPlane } from "react-icons/fa";
import Link from "next/link";
import SideBarIcon from "../SideBar/SideBarIcon";
import ProfilePicture from "../Utils/ProfilePicture";
import SideBarSpacer from "../SideBar/SideBarSpacer";

interface PageProps {
  children: React.ReactNode;
  pfp?: boolean;
  title?: string | false;
}

export default function Page({ children, pfp = true, title = "GGORG" }: PageProps){
  return (
    <div className="bg-gray-700 text-white h-screen w-screen">
      <div className="flex">
        <SideBar>
          {/* Debug responsive design indicator */}
          {/* <div className="relative flex h-8 md:h-12 w-8 md:w-12 my-1 md:my-2 mx-auto
                          shadow-lg rounded-3xl hover:rounded-xl transition-all
                          bg-red-800 sm:bg-red-500
                          md:bg-orange-800 lg:bg-orange-500
                          xl:bg-blue-800 2xl:bg-blue-500"/> */}

          <Link href="/"><a><SideBarIcon icon={<FaHome />} text="Home" /></a></Link>
          <Link href="/about"><a><SideBarIcon icon={<FaInfoCircle />} text="About me" /></a></Link>
          <Link href="/projects"><a><SideBarIcon icon={<FaCode />} text="Projects" /></a></Link>

          <SideBarSpacer/>

          <Link href="/clicker"><a><SideBarIcon icon={<FaGamepad />} text="Simple clicker" /></a></Link>

          <SideBarSpacer/>

          <a href="//gh.ggorg.tk/ggorg.tk"><SideBarIcon icon={<FaCodeBranch />} text="Source code" /></a>

          <SideBarSpacer/>

          <a href={`//discord.com/users/${process.env.NEXT_PUBLIC_DISCORD_ID}`}><SideBarIcon icon={<FaDiscord />} text="Discord" /></a>
          <a href={`//t.me/GGORG0`}><SideBarIcon icon={<FaTelegramPlane />} text="Telegram" /></a>
        </SideBar>
        <div className="fixed z-0 flex flex-col items-center justify-center h-full w-full m-auto px-0">
          { pfp && <ProfilePicture /> }
          { title && <p className="flex text-4xl md:text-6xl mb-3 font-bold drop-shadow-lg">{title}</p> }
          {children}
        </div>
      </div>
    </div>
  )
}