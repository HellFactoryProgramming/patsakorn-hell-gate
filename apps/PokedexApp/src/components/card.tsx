import React from 'react'
import { Link } from 'react-router-dom';

interface pokemon {
  name: string;
  url: string;
}



const Card: React.FC<pokemon> = ({ name, url }) => {

  let number;

  if (typeof url === 'string') {
    const parts = url.split("/");
    const num = parts[parts.length - 2];
    number = parseInt(num);
  } else   {
    number = url;
  }

  const formattedNumber = `#${String(number).padStart(3, '0')}`;

  return (
    <Link to={`/detail/${number}`}>
     <div className=' relative rounded-xl bg-white shadow-sm shadow-neutral-400 w-[150px] xl:w-[250px] h-[150px] xl:h-[250px]'>
      <div className='flex flex-wrap justify-center items-center'>
        <div className='w-full text-end me-3 mt-1.5 text-neutral-500 text-xs'>
          <p>{formattedNumber}</p>
        </div>
        <div className='mt-3 flex justify-center mx-auto  z-10'>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${number}.png`}
            alt={name}
            className='w-[100px] h-[100px] xl:w-[180px] xl:h-[180px] drop-shadow'
          />
        </div>
        <div className='  bottom-0 absolute rounded-xl w-full bg-zinc-100  pt-6 xl:pt-8 pb-1 text-center text-neutral-700 text-xs'>
          <p className=' text-sm xl:text-lg font-medium tracking-wide capitalize'>{name}</p>
        </div>
      </div>
    </div>
    </Link>
   

  )
}

export default Card