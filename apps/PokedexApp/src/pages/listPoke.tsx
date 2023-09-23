import { useContext } from "react";
import { PokeContext } from "../context/pokeContext";
import Card from "../components/card";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


export const ListPoke = () => {
    const { searchResult, pokemonData, handleNextPage, handlePrevPage, nextPage, prevPage } = useContext(PokeContext)

    return (
        <div>
            {searchResult.length > 0 ? (
                <div className="flex flex-wrap justify-center p-2 my-5 gap-2">
                    {searchResult.map((poke: any,index:number) => (
                        <Card key={index} name={poke.name} url={poke.id} />
                    ))}
                </div>
            ) : (
                <div >
                    <div className='flex flex-wrap justify-center p-2 my-5 gap-2'>
                        {pokemonData?.map((poke: any,index:number) => (
                            <Card key={index} name={poke.name} url={poke.url} />
                        ))}
                    </div>

                    <div className='justify-center flex my-2 gap-4 w-full'>
                        <button onClick={handlePrevPage} disabled={!prevPage}>
                        <IoIosArrowBack className="w-10 h-10 drop-shadow-xl text-neutral-700 hover:text-neutral-800"/>
                        </button>
                        <button onClick={handleNextPage} disabled={!nextPage}>
                        <IoIosArrowForward className="w-10 h-10 drop-shadow-xl text-neutral-700 hover:text-neutral-800"/>
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
