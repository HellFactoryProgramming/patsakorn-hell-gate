import React, { useEffect, useState } from 'react';
import { AddPlayer1, AddPlayer2, AddPlayer3 } from '../components/addPlayer';
import CardCommunity from '../components/cardCommunity';
import CardPlayer from '../components/cardPlayer';

const Home: React.FC = () => {
    const suits = ["♠", "♥", "♦", "♣"];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const [playersGroup1, setPlayersGroup1] = useState<string>("");
    const [playersGroup2, setPlayersGroup2] = useState<string>("");
    const [playersGroup3, setPlayersGroup3] = useState<string>("");
    const [newPlayerNameGroup1, setNewPlayerNameGroup1] = useState<string>("");
    const [newPlayerNameGroup2, setNewPlayerNameGroup2] = useState<string>("");
    const [newPlayerNameGroup3, setNewPlayerNameGroup3] = useState<string>("");
    const [showAddPlayerInputGroup1, setShowAddPlayerInputGroup1] = useState<boolean>(false);
    const [showAddPlayerInputGroup2, setShowAddPlayerInputGroup2] = useState<boolean>(false);
    const [showAddPlayerInputGroup3, setShowAddPlayerInputGroup3] = useState<boolean>(false);
    const [player1Cards, setPlayer1Cards] = useState<{ value: string; suit: string; }[]>([]);
    const [player2Cards, setPlayer2Cards] = useState<{ value: string; suit: string; }[]>([]);
    const [player3Cards, setPlayer3Cards] = useState<{ value: string; suit: string; }[]>([]);
    const [deck, setDeck] = useState<{ value: string; suit: string; }[]>([]);
    const [round, setRound] = useState<number>(0);
    const [communityCards, setCommunityCards] = useState<{ value: string; suit: string; }[]>([]);


    useEffect(() => {
        if (round === 1) {
            const flopTimer = setTimeout(() => {
                openFlop();
            }, 1000);
            return () => clearTimeout(flopTimer);
        } else if (round === 2) {
            const turnTimer = setTimeout(() => {
                openTurn();
            }, 1000);
            return () => clearTimeout(turnTimer);
        } else if (round === 3) {
            const riverTimer = setTimeout(() => {
                openRiver();
            }, 1000);
            return () => clearTimeout(riverTimer);
        } else if (round === 4) {
            const showdown = setTimeout(() => {
                openShowdown();
            }, 1000);
            return () => clearTimeout(showdown);
        } 
}, [round]);






const toggleAddPlayerInput = (groupNumber: number) => {
    switch (groupNumber) {
        case 1:
            setShowAddPlayerInputGroup1(!showAddPlayerInputGroup1);
            break;
        case 2:
            setShowAddPlayerInputGroup2(!showAddPlayerInputGroup2);
            break;
        case 3:
            setShowAddPlayerInputGroup3(!showAddPlayerInputGroup3);
            break;
        default:
            break;
    }
};


const addPlayerToGroup = (groupNumber: number, playerName: string) => {
    if (playerName.trim() !== "") {
        switch (groupNumber) {
            case 1:
                setPlayersGroup1(playerName);
                setNewPlayerNameGroup1("");
                setShowAddPlayerInputGroup1(!showAddPlayerInputGroup1)
                break;
            case 2:
                setPlayersGroup2(playerName);
                setNewPlayerNameGroup2("");
                setShowAddPlayerInputGroup2(!showAddPlayerInputGroup2)

                break;
            case 3:
                setPlayersGroup3(playerName);
                setNewPlayerNameGroup3("");
                setShowAddPlayerInputGroup3(!showAddPlayerInputGroup3)
                break;
            default:
                break;
        }
    }
};

// Function to create a deck of 52 cards
const createDeck = () => {
    const newDeck: { suit: string; value: string; }[] = [];
    for (const suit of suits) {
        for (const value of values) {
            newDeck.push({ suit, value });
        }
    }
    return newDeck;
};

const shuffleDeck = (deck: { suit: string; value: string; }[]) => {
    const shuffledDeck = [...deck];
    for (let i = shuffledDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
    }
    return shuffledDeck;
};




const dealCards = () => {
    const newDeck = createDeck();
    const shuffledDeck = shuffleDeck(newDeck);
    setDeck(shuffledDeck);

  
    if (playersGroup1 !== "" || playersGroup2 !== "" || playersGroup3 !== "") {
        if (playersGroup1 !== "") {
            const player1Cards = shuffledDeck.slice(0, 2);
            setPlayer1Cards(player1Cards);
        }

        if (playersGroup2 !== "") {
            const player2Cards = shuffledDeck.slice(2, 4);
            setPlayer2Cards(player2Cards);
        }

        if (playersGroup3 !== "") {
            const player3Cards = shuffledDeck.slice(4, 6);
            setPlayer3Cards(player3Cards);
        }
        const remainingDeck = shuffledDeck.slice(6);
        setDeck(remainingDeck);
        setRound(1);
    }
};

const openFlop = () => {
    const flopCards = deck.slice(0, 3);
    const remainingDeck = deck.slice(3);
    setDeck(remainingDeck);
    setCommunityCards(flopCards);
};

const openTurn = () => {
    const randomIndex = Math.floor(Math.random() * deck.length);
    const turnCard = deck[randomIndex];
    const remainingDeck = deck.slice(1);
    setDeck(remainingDeck);
    setRound(3);
    setCommunityCards((prevCommunityCards) => [...prevCommunityCards, turnCard]);
};

const openRiver = () => {
    const randomIndex = Math.floor(Math.random() * deck.length);
    const riverCard = deck[randomIndex];
    const remainingDeck = deck.slice(1);
    setDeck(remainingDeck);
    setRound(4);
    setCommunityCards((prevCommunityCards) => [...prevCommunityCards, riverCard]);
};

const openShowdown = () => {
    setRound(5);
};


const resetGame = () => {
    
    setDeck([]); 
    setPlayer1Cards([]); 
    setPlayer2Cards([]); 
    setPlayer3Cards([]);
    setCommunityCards([]); 
    setRound(0); 
    setPlayersGroup1("")
    setPlayersGroup2("")
    setPlayersGroup3("")
    const newDeck = createDeck();
    const shuffledDeck = shuffleDeck(newDeck);
    setDeck(shuffledDeck);
};

return (
    <div className='flex h-screen items-center justify-center '>
        <div className='grid grid-cols-3'>
            <div className='col-span-3 flex justify-between mb-5'>
                <p className='text-2xl uppercase tracking-wide font-medium'>
                    {round === 0 && "start game"}
                    {round === 1 && "deal cards"}
                    {round === 2 && "The flop"}
                    {round === 3 && "the turn"}
                    {round === 4 && "the river"}
                    {round === 5 && "showdown"}
                </p>
                {round === 0 && (
                    <button className='bg-blue-500 py-1 px-2 rounded w-56 text-white' onClick={dealCards}>
                        Start Game
                    </button>
                )}
                {round === 2 && (
                    <button className=' hidden' onClick={openFlop}>
                        Open Flop
                    </button>
                )}
                {round === 3 && (
                    <button className=' hidden' onClick={openTurn}>
                        Open Turn
                    </button>
                )}
                {round === 4 && (
                    <button className=' hidden' onClick={openRiver}>
                        Open River
                    </button>
                )}
                {round === 5 && (
                    <button className='bg-blue-500 py-1 px-2 rounded w-56 text-white' onClick={resetGame}>
                        Reset
                    </button>
                )}

            </div>
            <div className='col-span-1 t'>
                <h1>DECK : {deck.length === 0 ? "52" : deck.length}</h1>

                <div className='h-[150px] w-[100px] bg-[#1E1520] rounded-lg drop-shadow'></div>
            </div>
            <div className='col-span-2  flex space-x-2 items-end'>
                <CardCommunity cards={communityCards} />
            </div>
            <div className='col-span-3 mt-10'>
                <div className='grid grid-cols-3 '>
                    <div className='grid grid-col-1 '>
                        <div className='w-60'>
                            <CardPlayer cards={player1Cards} />
                        </div>

                        <div className=' col-span-1 flex justify-center mt-4'>
                            <AddPlayer1 showAddPlayerInputGroup1={showAddPlayerInputGroup1} newPlayerNameGroup1={newPlayerNameGroup1} setNewPlayerNameGroup1={setNewPlayerNameGroup1} toggleAddPlayerInput={toggleAddPlayerInput} addPlayerToGroup={addPlayerToGroup} playersGroup1={playersGroup1} />

                        </div>
                    </div>
                    <div className='grid grid-col-2 place-content-evenly'>
                        {round === 5 && (
                            <div className=' col-span-1 w-60'>
                                <CardPlayer cards={player2Cards} />
                            </div>
                        )}
                        <div className=' col-span-2 flex justify-center mt-4'>
                            <AddPlayer2 showAddPlayerInputGroup2={showAddPlayerInputGroup2} newPlayerNameGroup2={newPlayerNameGroup2} setNewPlayerNameGroup2={setNewPlayerNameGroup2} toggleAddPlayerInput={toggleAddPlayerInput} addPlayerToGroup={addPlayerToGroup} playersGroup2={playersGroup2} />
                        </div>
                    </div>
                    <div className='grid grid-col-1 place-content-evenly'>

                        {round === 5 && (
                            <div className=' col-span-1 w-60'>
                                <CardPlayer cards={player3Cards} />
                            </div>
                        )}

                        <div className=' col-span-1 flex justify-center mt-4'>
                            <AddPlayer3 showAddPlayerInputGroup3={showAddPlayerInputGroup3} newPlayerNameGroup3={newPlayerNameGroup3} setNewPlayerNameGroup3={setNewPlayerNameGroup3} toggleAddPlayerInput={toggleAddPlayerInput} addPlayerToGroup={addPlayerToGroup} playersGroup3={playersGroup3} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
};

export default Home;
