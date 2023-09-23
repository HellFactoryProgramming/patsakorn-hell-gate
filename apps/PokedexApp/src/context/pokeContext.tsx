import React, { createContext, useState, useEffect, ReactNode } from "react";
import axios from 'axios';



export const PokeContext = createContext<any>(null);

interface PokeProviderProps {
    children: ReactNode;
}


export const PokeContextProvider: React.FC<PokeProviderProps> = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState<string>();
    const [searchResult, setSearchResult] = useState<any[]>([]);
    const [pokemonData, setPokemonData] = useState<any[]>([]);
    const [nextPage, setNextPage] = useState<string | null>(null);
    const [prevPage, setPrevPage] = useState<string | null>(null);

    useEffect(() => {
        const searchPoke = async () => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchQuery}/`);
                const pokemonData = response.data;
                setSearchResult([pokemonData]);

            } catch (error) {
                console.error(error);
                setSearchResult([]);
            }
        };

        searchPoke()

      
    }, [searchQuery])
    

    useEffect(() => {
        fetchPokeData("https://pokeapi.co/api/v2/pokemon/?limit=18&offset=0");
    }, []);

    const fetchPokeData = async (url: string) => {
        try {
            const response = await axios.get(url);
            setPokemonData(response.data.results);
            setNextPage(response.data.next);
            setPrevPage(response.data.previous);
        } catch (error) {
            console.error(error);
        }

    }

    const handleNextPage = () => {
        if(nextPage){
            fetchPokeData(nextPage)
        }
    }

    const handlePrevPage = () => {
        if(prevPage){
            fetchPokeData(prevPage)
        }
    }



    return <PokeContext.Provider value={{ searchQuery, setSearchQuery, searchResult,pokemonData,handleNextPage,handlePrevPage,nextPage,prevPage }}>{children}</PokeContext.Provider>
}
