/* eslint-disable @typescript-eslint/no-explicit-any */
import { IoMdClose } from "react-icons/io";
import { IoSearch } from "react-icons/io5";


const SearchItem = () => {
    return (
        <div className="flex px-8 bg-theme/20 py-2 mb-2">
            <div className="w-10">
                <img className="w-full" src="/public/image.jpg" alt="" />
            </div>
            <div className="pl-5">
                <h4 className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h4>
                <span className="text-xs block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure reprehenderit </span>
                <strong>BDT: 200 TK</strong>
            </div>
        </div>
    );
}


function Search({isSearch}: {isSearch: any}) {
    return ( 
        <div className="w-full h-screen fixed top-0 left-0 bg-white/30 backdrop-blur-md z-10 flex
         justify-center items-start">
            <div className="w-1/2 bg-white pb-5 rounded-md mt-20">
                <div className="relative py-2 border-b border-gray-400">
                    <IoSearch  className="absolute top-1/2 left-[15px] -translate-y-1/2"/>
                    <input className="w-full pl-7 focus:outline-0" type="text" />
                    <IoMdClose onClick={() => isSearch()} className="absolute top-1 right-1 text-2xl cursor-pointer"/>              
                </div>
                <div className="h-20 flex items-center justify-center">
                    <p>No data found</p>
                </div>
                <div className="h-[400px] overflow-y-scroll no-scrollbar mt-3">
                    <SearchItem />
                    <SearchItem />
                    <SearchItem />
                    <SearchItem />
                    <SearchItem />
                    <SearchItem />
                </div>
            </div>
        </div>
     );
}

export default Search;
