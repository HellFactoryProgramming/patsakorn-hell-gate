import { useContext, useState } from "react"
import { PokeContext } from "../context/pokeContext";

export const Navbar = () => {
    const { searchQuery, setSearchQuery } = useContext(PokeContext);
    const [isOpenFilter, setisOpenFilter] = useState<boolean>(false)
    const [sortBy, setsortBy] = useState<string>("number")
    return (
        <div className='flex-col gap-2 md:flex-row flex md:justify-between mx-10 my-5 '>
            <div className='flex items-center space-x-4 justify-center md:justify-start'>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.8572 12C14.8572 13.578 13.578 14.8571 12.0001 14.8571C10.4221 14.8571 9.14292 13.578 9.14292 12C9.14292 10.422 10.4221 9.14286 12.0001 9.14286C13.578 9.14286 14.8572 10.422 14.8572 12Z" fill="white" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.0001 24C18.0454 24 23.0467 19.5296 23.8785 13.7143H16.8503C16.1443 15.7118 14.2393 17.1429 12.0001 17.1429C9.76083 17.1429 7.85584 15.7118 7.14984 13.7143H0.121582C0.953404 19.5296 5.95468 24 12.0001 24ZM7.14984 10.2857H0.121582C0.953404 4.47035 5.95468 0 12.0001 0C18.0454 0 23.0467 4.47035 23.8785 10.2857H16.8503C16.1443 8.28824 14.2393 6.85714 12.0001 6.85714C9.76083 6.85714 7.85584 8.28824 7.14984 10.2857ZM14.8572 12C14.8572 13.578 13.578 14.8571 12.0001 14.8571C10.4221 14.8571 9.14292 13.578 9.14292 12C9.14292 10.422 10.4221 9.14286 12.0001 9.14286C13.578 9.14286 14.8572 10.422 14.8572 12Z" fill="white" className="drop-shadow-xl"/>
                </svg>
                <p className='text-2xl md:text-4xl text-white font-bold drop-shadow'>Pokédex</p>
            </div>
            <div className='flex items-center  gap-2'>
                <div className='relative flex items-center '>
                    <svg className='absolute left-2' width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.9 12.6167L6.88333 8.6C6.55 8.88889 6.16111 9.11389 5.71667 9.275C5.27222 9.43612 4.8 9.51667 4.3 9.51667C3.1 9.51667 2.08333 9.1 1.25 8.26667C0.416667 7.43334 0 6.42778 0 5.25C0 4.07223 0.416667 3.06667 1.25 2.23334C2.08333 1.4 3.09444 0.983337 4.28333 0.983337C5.46111 0.983337 6.46389 1.4 7.29167 2.23334C8.11944 3.06667 8.53333 4.07223 8.53333 5.25C8.53333 5.72778 8.45555 6.18889 8.3 6.63334C8.14444 7.07778 7.91111 7.49445 7.6 7.88334L11.65 11.9C11.75 11.9889 11.8 12.1028 11.8 12.2417C11.8 12.3806 11.7444 12.5056 11.6333 12.6167C11.5333 12.7167 11.4111 12.7667 11.2667 12.7667C11.1222 12.7667 11 12.7167 10.9 12.6167ZM4.28333 8.51667C5.18333 8.51667 5.95 8.19723 6.58333 7.55834C7.21667 6.91945 7.53333 6.15 7.53333 5.25C7.53333 4.35 7.21667 3.58056 6.58333 2.94167C5.95 2.30278 5.18333 1.98334 4.28333 1.98334C3.37222 1.98334 2.59722 2.30278 1.95833 2.94167C1.31944 3.58056 1 4.35 1 5.25C1 6.15 1.31944 6.91945 1.95833 7.55834C2.59722 8.19723 3.37222 8.51667 4.28333 8.51667Z" fill="#DC0A2D" />
                    </svg>
                    <input
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        type={sortBy}
                        placeholder='Search'
                        className='p-1 rounded-full focus:outline-none w-full pl-8 shadow-inner'
                    />
                </div>
                <div className=" relative rounded-full bg-white p-2 shadow-inner">
                    <button className="flex h-4 w-4 items-center justify-center" onClick={() => setisOpenFilter(!isOpenFilter)}>
                        {sortBy === "number" ? (
                            <p className=' text-red-600 font-medium'> # </p>) : (<p className=' underline text-red-600 font-medium'> A </p>)}

                    </button>
                    {isOpenFilter ? (
                        <div className=" right-2 top-8 absolute rounded-xl w-[150px] z-50 border-red-600 bg-red-600 px-1 pb-1 border shadow">
                            <div className="flex justify-center text-white text-xs font-bold">
                                <p className="py-4 text-xl">
                                    Sort by :
                                </p>
                            </div>

                            <div className="flex justify-center">
                                <div className=" flex-col flex  w-full space-y-4 rounded-lg bg-white px-5 py-4 shadow-inner">
                                    <div className="flex items-center">
                                        <input type="radio" id="number" name="sort" value="number" onChange={(e) => {setsortBy(e.target.value),setisOpenFilter(false)}} checked={sortBy === "number"} className="accent-red-600 me-2" />
                                        <label htmlFor="number">Number</label>
                                    </div>
                                    <div className="flex items-center">

                                        <input type="radio" id="text" name="sort" value="text" onChange={(e) => {setsortBy(e.target.value),setisOpenFilter(false)}} checked={sortBy === "text"} className="accent-red-600 me-2"/>
                                        <label htmlFor="text">Name</label>
                                    </div>


                                </div>

                            </div>
                        </div>
                    ) :
                        null}
                </div>






            </div>


        </div>
    )
}
