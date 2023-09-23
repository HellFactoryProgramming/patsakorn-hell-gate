
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { IoMdArrowBack, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { LiaWeightHangingSolid } from "react-icons/lia";
import { CiLineHeight } from "react-icons/ci";



interface Pokemon {
    abilities: Array<{ ability: { name: string } }>;
    types: Array<{ type: { name: string, slot: number } }>;
    moves: Array<{ move: { name: string } }>;
    stats: Array<{ base_stat: number, stat: { name: string } }>;
    name: string;
    height: number;
    weight: number
}

export const DetailPoke: React.FC = () => {
    const { id } = useParams();

    const [detailPoke, setDetailPoke] = useState<Pokemon | undefined>();;

    const getTypeClass = (typeName: string) => {
        switch (typeName) {
            case "grass":
                return "text-[#74CB48]";
            case "poison":
                return "text-[#A43E9E]";
            case "bug":
                return "text-[#A7B723]";
            case "dark":
                return "text-[#75574C]";
            case "dragon":
                return "text-[#7037FF]";
            case "electric":
                return "text-[#F9CF30]";
            case "fairy":
                return "text-[#E69EAC]";
            case "fighting":
                return "text-[#A43E9E]";
            case "fire":
                return "text-[#F57D31]";
            case "flying":
                return "text-[#A891EC]";
            case "ghost":
                return "text-[#70559B]";
            case "normal":
                return "text-[#AAA67F]";
            case "ground":
                return "text-[#DEC16B]";
            case "ice":
                return "text-[#9AD6DF]";
            case "psychic":
                return "text-[#FB5584]";
            case "rock":
                return "text-[#B69E31]";
            case "steel":
                return "text-[#B7B9D0]";
            case "water":
                return "text-[#6493EB]";
            default:
                return "text-gray-500";
        }
    }

    const getTypeClassBg = (typeName: string) => {
        switch (typeName) {
            case "grass":
                return "bg-[#74CB48]";
            case "poison":
                return "bg-[#A43E9E]";
            case "bug":
                return "bg-[#A7B723]";
            case "dark":
                return "bg-[#75574C]";
            case "dragon":
                return "bg-[#7037FF]";
            case "electric":
                return "bg-[#F9CF30]";
            case "fairy":
                return "bg-[#E69EAC]";
            case "fighting":
                return "bg-[#A43E9E]";
            case "fire":
                return "bg-[#F57D31]";
            case "flying":
                return "bg-[#A891EC]";
            case "ghost":
                return "bg-[#70559B]";
            case "normal":
                return "bg-[#AAA67F]";
            case "ground":
                return "bg-[#DEC16B]";
            case "ice":
                return "bg-[#9AD6DF]";
            case "psychic":
                return "bg-[#FB5584]";
            case "rock":
                return "bg-[#B69E31]";
            case "steel":
                return "bg-[#B7B9D0]";
            case "water":
                return "bg-[#6493EB]";
            default:
                return "bg-gray-500";
        }
    }


    useEffect(() => {
        const getDetailPoke = async () => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
                const pokemonData = response.data;
                setDetailPoke(pokemonData);

            } catch (error) {
                console.error(error);
            }
        };
        getDetailPoke()
    }, [id])

    if (id === undefined || parseInt(id) <= 0) {
        return id
    }

    const prevId = parseInt(id) - 1;
    const nextId = parseInt(id) + 1;

  const formattedNumber = `#${String(id).padStart(3, '0')}`;
    
    return (
        <div className='flex  h-screen items-center justify-center w-full '>
            {detailPoke?.types.slice(0, 1).map((poke) => (
                <div className={`relative ${getTypeClassBg(poke.type.name)} h-screen w-full  flex flex-col`}>
                    <div className=" right-5 top-5 absolute">

                        <div className="flex  h-52 w-52 items-center justify-center opacity-10">
                            <svg
                                width="206"
                                height="208"
                                viewBox="0 0 206 208"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="shrink-0">
                                <path
                                    d="M127.762 104C127.762 117.676 116.676 128.762 103 128.762C89.3244 128.762 78.2381 117.676 78.2381 104C78.2381 90.3244 89.3244 79.2381 103 79.2381C116.676 79.2381 127.762 90.3244 127.762 104Z"
                                    fill="white"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M103 208C155.393 208 198.738 169.257 205.947 118.857H145.035C138.917 136.169 122.407 148.571 103 148.571C83.5933 148.571 67.0835 136.169 60.9648 118.857H0.0532227C7.26235 169.257 50.6067 208 103 208ZM60.9648 89.1429H0.0532227C7.26235 38.7431 50.6067 0 103 0C155.393 0 198.738 38.7431 205.947 89.1429H145.035C138.917 71.8314 122.407 59.4286 103 59.4286C83.5933 59.4286 67.0835 71.8314 60.9648 89.1429ZM127.762 104C127.762 117.676 116.676 128.762 103 128.762C89.3244 128.762 78.2381 117.676 78.2381 104C78.2381 90.3244 89.3244 79.2381 103 79.2381C116.676 79.2381 127.762 90.3244 127.762 104Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="flex gap-2 m-3 items-center text-white">
                        <Link to={'/'}>
                            <IoMdArrowBack className="h-6 w-6 md:h-8 md:w-8 drop-shadow-xl" />
                        </Link>
                        <p className=" capitalize font-bold text-2xl md:text-4xl drop-shadow-xl tracking-wide">{detailPoke.name}</p>
                        <p className="ml-auto font-bold text-lg drop-shadow-xl">{formattedNumber}</p>
                    </div>


                    <div className=" relative bg-white w-fit md:w-1/2 m-2 rounded-lg mt-auto md:h-full">

                        <div className=" bottom-[26rem] md:top-[50%] md:left-[98%]  flex   absolute items-center  w-full justify-evenly">
                            <Link to={`/detail/${prevId}`}>
                                <IoIosArrowBack className={`drop-shadow-2xl md:h-8 md:w-8 h-6 w-6 text-white ${parseInt(id) === 1 ? 'hidden' : ''}`} />

                            </Link>

                            <img
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                                alt=""
                                className=' drop-shadow-2xl w-[250px] h-[250px] md:w-[300px] md:h-[300px] xl:w-[500px] xl:h-[500px]'
                            />
                            <Link to={`/detail/${nextId}`}>
                                <IoIosArrowForward className="drop-shadow-2xl md:h-8 md:w-8 h-6 w-6 text-white" />
                            </Link>
                        </div>
                        <div className="flex flex-col items-center ">
                            <div className="flex mt-20 xl:mt-5 justify-center gap-4">
                                {detailPoke?.types.map((poke) => (
                                    <p key={poke.type.slot} className={`py-1 px-2 text-xs md:text-xl capitalize text-white font-bold rounded-xl ${getTypeClassBg(poke.type.name)}`}>
                                        {poke.type.name}
                                    </p>
                                ))}
                            </div>
                            <div className="flex mt-5 md:mt-10 justify-center ">
                                <p className={` text-lg capitalize  font-bold md:text-2xl ${getTypeClass(poke.type.name)}`}>About</p>
                            </div>

                            <div className="divide-x  w-full  flex md:flex-col xl:flex-row space-y-0 md:space-y-4 xl:space-y-0 h-full items-center mt-5 md:mt-10">

                                <div className="flex-col justify-between flex  h-[4rem] md:h-[5rem]  w-full">
                                    <div className="flex gap-2 justify-center items-center mt-4 ">
                                        <LiaWeightHangingSolid className="h-4 w-4 md:h-6 md:w-6 text-neutral-700" />
                                        <p className="text-neutral-700 text-sm md:text-xl"> {detailPoke.weight / 10} kg</p>
                                    </div>
                                    <p className="text-neutral-500 text-xs text-center">Weight</p>
                                </div>


                                <div className=" flex-col justify-between flex  h-[4rem] md:h-[5rem]  w-full">
                                    <div className="flex gap-2 justify-center items-center mt-4 ">
                                        <CiLineHeight className="h-4 w-4 md:h-6 md:w-6 text-neutral-700" />
                                        <p className="text-neutral-700 text-sm md:text-xl"> {detailPoke.height / 10} m</p>
                                    </div>
                                    <p className="text-neutral-500 text-xs text-center">Height</p>
                                </div>



                                <div className="flex-col justify-between items-center flex  h-[4rem] w-full">

                                    {detailPoke?.moves.slice(0, 2).map((poke) => (
                                        <p className="text-neutral-700 text-sm capitalize md:text-xl">{poke.move.name}</p>

                                    ))}

                                    <p className="text-neutral-500 text-xs text-center ">Moves</p>
                                </div>


                            </div>

                            <div className="mt-5 mx-5 md:mt-14 xl:mt-5">
                                <p className=" text-neutral-700 text-sm md:text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, obcaecati.</p>
                            </div>

                            <div className="flex my-5 md:my-6 justify-center ">
                                <p className={` text-lg capitalize md:text-2xl  font-bold ${getTypeClass(poke.type.name)}`}>Base Stats</p>
                            </div>




                            <div className="flex  w-3/4 my-2 ">
                                <div className={`text-end  space-y-0  md:space-y-4 text-xs md:text-lg font-bold ${getTypeClass(poke.type.name)}`}>
                                    <p >HP</p>
                                    <p >ATK</p>
                                    <p >DEF</p>
                                    <p>SATK</p>
                                    <p >SDEF</p>
                                    <p >SPD</p>
                                </div>
                                <div className="mx-2 w-px bg-gray-200 h-auto"></div>
                                <div className="flex-grow text-end text-xs  md:text-lg font-bold text-neutral-700 space-y-0 md:space-y-4">
                                    {detailPoke.stats?.map((pokee, index) => (
                                        <div key={index} className="flex justify-start items-center space-x-2">
                                            <p className=" w-8 text-start">{pokee.base_stat}</p>
                                            <div className={`  w-full  h-1.5 md:h-2.5 rounded-full overflow-hidden bg-gray-100 ${getTypeClassBg(poke.type.name)}`}>
                                                 <div className={`  h-1.5 md:h-2.5 ${getTypeClassBg(poke.type.name)}`} style={{ width: `${pokee.base_stat}px` }}></div>
                                            </div>
                                           

                                        </div>

                                    ))}
                                </div>

                            </div>


                        </div>
                    </div>


                </div>
            ))
            }
        </div >
    )
}
