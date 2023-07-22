import {useRecoilState, useRecoilValue} from "recoil";
import {playerColorsState, playerDataState} from "./gameState.ts";
import {Simulate} from "react-dom/test-utils";
import play = Simulate.play;
import {useState} from "react";


export const Vote = () => {
    const voteButtonIconStyle = (color: string) => {
        return ({
                width: "16px",
                height: "16px",
                backgroundColor: color,
                borderRadius: "8px",
                display: "inline-block",
                margin: "0px 10px"
            }
        )
    }
    const [playerData, setPlayerData] = useRecoilState(playerDataState)
const [voteCount, setVoteCount] = useState(0)
    return (
        <>
            <h1>投票</h1>
            {
                playerData.map((data, index) =>
                    <button key={index.toString()} onClick={() => {
                        setPlayerData((prevState) =>
                            prevState.map((value, stateIndex) => (stateIndex === index ? {
                                color: prevState[index].color,
                                votesCount: prevState[index].votesCount + 1
                            } : value)))
                        setVoteCount(voteCount+1)

                    }}>
                        <div style={voteButtonIconStyle(data.color)}></div>
                        {data.color}
                        {data.votesCount}

                    </button>
                )
            }
        </>
    )
}