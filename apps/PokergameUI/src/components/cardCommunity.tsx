interface CardCommunityProps {
    cards: { value: string; suit: string; }[];
}

const CardCommunity: React.FC<CardCommunityProps> = ({ cards }) => {
  function getTextColorClass(suit:string) {
    switch (suit) {
      case "♥":
      case "♦":
        return "text-red-500";
      case "♠":
      case "♣":
        return "text-black";
      default:
        return "text-black";
    }
  }

  
  return (
      <div className="flex flex-wrap space-x-2">   
          {cards.map((card, index) => (
            <div key={index} className='h-[150px] w-[100px] bg-[#EBEBEB] relative rounded-lg drop-shadow'>
              <p className={`absolute top-[40%] left-[40%] text-4xl ${getTextColorClass(card.suit)}`}>{card.suit}</p>
              <p className={`px-1 ${getTextColorClass(card.suit)}`}>{card.value}</p>
              <p className={`absolute bottom-0 right-0 px-1 transform scale-x-[-1] scale-y-[-1] ${getTextColorClass(card.suit)}`}>{card.value}</p>
            </div>
          ))}
         
      </div>
  );
};

export default CardCommunity;