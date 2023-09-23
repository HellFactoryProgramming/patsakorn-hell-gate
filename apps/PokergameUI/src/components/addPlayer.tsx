interface Player1 {
    newPlayerNameGroup1: string;
    showAddPlayerInputGroup1:boolean;
    setNewPlayerNameGroup1:any;
    playersGroup1:string;
    addPlayerToGroup:any
    toggleAddPlayerInput:any; 
  }

  interface Player2 {
    newPlayerNameGroup2: string;
    showAddPlayerInputGroup2:boolean;
    setNewPlayerNameGroup2:any;
    playersGroup2:string;
    addPlayerToGroup:any
    toggleAddPlayerInput:any; 
  }

  interface Player3 {
    newPlayerNameGroup3: string;
    showAddPlayerInputGroup3:boolean;
    setNewPlayerNameGroup3:any;
    playersGroup3:string;
    addPlayerToGroup:any
    toggleAddPlayerInput:any; 
  }

const AddPlayer1: React.FC<Player1>  = ({showAddPlayerInputGroup1,newPlayerNameGroup1,setNewPlayerNameGroup1,toggleAddPlayerInput,addPlayerToGroup,playersGroup1}) => {

  
  return (
    <div >
      {showAddPlayerInputGroup1 ? (
        <>
        
          <input
            type="text"
            className='border border-blue-500 rounded px-2 py-1 mr-2'
            placeholder='Enter player name'
            value={newPlayerNameGroup1}
            onChange={(e) => setNewPlayerNameGroup1(e.target.value)}
          />
          <button
            className='text-blue-500 py-1 px-2 rounded border-dotted border border-blue-500'
            onClick={() => addPlayerToGroup(1, newPlayerNameGroup1)}
          >
            +
          </button>
        </>
      ) : (
        <div>

                <button
                className='text-blue-500 py-1 px-2 rounded border-dotted border border-blue-500'
                onClick={() => toggleAddPlayerInput(1)}
              >
                         {playersGroup1.length > 0 ? playersGroup1 : '+ Add Player'}

               
              </button>
   
        </div>

      )}
    </div>
  
  )
}

const AddPlayer2: React.FC<Player2>  = ({showAddPlayerInputGroup2,newPlayerNameGroup2,setNewPlayerNameGroup2,toggleAddPlayerInput,addPlayerToGroup,playersGroup2}) => {
  return (
    <div >
      {showAddPlayerInputGroup2 ? (
        <>
        
          <input
            type="text"
            className='border border-blue-500 rounded px-2 py-1 mr-2'
            placeholder='Enter player name'
            value={newPlayerNameGroup2}
            onChange={(e) => setNewPlayerNameGroup2(e.target.value)}
          />
          <button
            className='text-blue-500 py-1 px-2 rounded border-dotted border border-blue-500'
            onClick={() => addPlayerToGroup(2, newPlayerNameGroup2)}
          >
            +
          </button>
        </>
      ) : (
        <div>
                <button
                className='text-blue-500 py-1 px-2 rounded border-dotted border border-blue-500'
                onClick={() => toggleAddPlayerInput(2)}
              >
                         {playersGroup2.length > 0 ? playersGroup2 : '+ Add Player'}
              </button>
   
        </div>

      )}
    </div>
  
  )
}

const AddPlayer3: React.FC<Player3>  = ({showAddPlayerInputGroup3,newPlayerNameGroup3,setNewPlayerNameGroup3,toggleAddPlayerInput,addPlayerToGroup,playersGroup3}) => {
  return (
    <div >
      {showAddPlayerInputGroup3 ? (
        <>
        
          <input
            type="text"
            className='border border-blue-500 rounded px-2 py-1 mr-2'
            placeholder='Enter player name'
            value={newPlayerNameGroup3}
            onChange={(e) => setNewPlayerNameGroup3(e.target.value)}
          />
          <button
            className='text-blue-500 py-1 px-2 rounded border-dotted border border-blue-500'
            onClick={() => addPlayerToGroup(3, newPlayerNameGroup3)}
          >
            +
          </button>
        </>
      ) : (
        <div>
                <button
                className='text-blue-500 py-1 px-2 rounded border-dotted border border-blue-500'
                onClick={() => toggleAddPlayerInput(3)}
              >
                         {playersGroup3.length > 0 ? playersGroup3 : '+ Add Player'}
              </button>
        </div>

      )}
    </div>
  
  )
}

export  {AddPlayer1,AddPlayer2,AddPlayer3}


