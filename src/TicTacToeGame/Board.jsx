import React,{useState} from "react";
import Square from "./Square";

//make a component::

const Board = ()=>{

    const [state,setSate] = useState(Array(9).fill(null));
    const [isXTurn,setIsXTurn]= useState(true);

    const checkWinner = ()=>{
        const winnerLogic = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ];
        for(let logic of winnerLogic){
            const [a,b,c] = logic;
            if(state[a]!==null && state[a] === state[b] && state[a]===state[c]){
                return state[a];
            }
        }
        return false;
    };

    const isWinner = checkWinner();

    // console.log("staet",state);

    const handleclick = (index)=>{
        // console.log("clicked on index :",index)
        if(state[index]!=null){
            return;
        }
        const copyState = [...state];
        copyState[index] = isXTurn ? "X" :"0";
        setSate(copyState);
        setIsXTurn(!isXTurn);
    };

    const handleReset = ()=>{
        setSate(Array(9).fill(null));
    };

    return(
        <div className="board-container">
        { isWinner ? (
            <>
            {isWinner} won the game{" "}
            <button onClick={handleReset}>play again</button>
            </>
        ) :(
            <>
            <h4>Player {isXTurn ? "X" : "0"}please move</h4>
            <div className="board-row">
                <Square onClick={()=>handleclick(0)} value={state[0]}/>
                <Square onClick={()=>handleclick(1)} value={state[1]}/>
                <Square onClick={()=>handleclick(2)} value={state[2]}/>
            </div>

            <div className="board-row">
                <Square onClick={()=>handleclick(3)} value={state[3]}/>
                <Square onClick={()=>handleclick(4)} value={state[4]}/>
                <Square onClick={()=>handleclick(5)} value={state[5]}/>
            </div>

            <div className="board-row">
                <Square onClick={()=>handleclick(6)} value={state[6]}/>
                <Square onClick={()=>handleclick(7)} value={state[7]}/>
                <Square onClick={()=>handleclick(8)} value={state[8]}/>
            </div>

            </>
            )}
        </div>
    );
};

export default Board;