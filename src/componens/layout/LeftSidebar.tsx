import { useState } from "react";
import { FaFolder, FaRegHeart } from "react-icons/fa";
import { IoIosMegaphone } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { RiFireLine } from "react-icons/ri";
import Search from "../../features/search/Search";




interface ListItemProps{
    title: string;
    icon: React.ReactNode;
}

const ListItem: React.FC<ListItemProps> =({title, icon}) => {
    return(
         <li className="mt-2"><button className="px-3 py-1.5 border border-gray-300 flex items-center w-full rounded-md cursor-pointer hover:bg-theme group"><span className="mr-3 group-hover:text-red-600">{icon}</span>{title}</button></li>
    )
}

function LeftSidebar() {

    const [isSearchShow, setIsSearchShow] = useState(false);
    const isSearchHandler = () => {
        setIsSearchShow(!isSearchShow);
    }

    return (
    <div className="p-2 border-r border-r-gray-300 w-[220px] h-full absolute left-0 top-0">
        <div onClick={() => setIsSearchShow(!isSearchShow)} className="border border-theme rounded-md p-2 relative">
             <IoSearch className="absolute top-1/2 left-[15px] dark:text-white -translate-1/2"/>
             <span className="pl-[40px] dark:text-white text-sm">Search book ...</span>
        </div>

        <ul>
           <ListItem title={"Trending"} icon={<RiFireLine />}/>
           <ListItem title={"New Releases"} icon={<FaFolder/>}/>
           <ListItem title={"Coming Soon"} icon={<IoIosMegaphone/>}/>
           <ListItem title={"Favorites"} icon={<FaRegHeart />}/>
        </ul>
        {isSearchShow && <Search isSearch={isSearchHandler}/>}
    </div>
);
}

export default LeftSidebar;