import React from 'react';
import '../App.scss';
import Player from "./Player"
import PlayedCard from "./PlayedCard";

class PlayerBoard extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    calcDistance(i){
        return Math.min(i+1, this.props.playerNames.length-i)
    }

    render() {
        return (
            <div className="PlayerBoard">
                {console.log("Player to be displayed")}
                {console.log(this.props.allPlayedCards)}
                {console.log(this.props.playerNames)}
                {this.props.playerNames.map((item, idx) => {
                    if(this.props.deadPlayers[idx]==false) {
                        return <Player
                            name={item}
                            idx={idx}
                            distanceFP={this.calcDistance(idx)}
                            cardsPlayed={this.props.allPlayedCards[idx]}
                            allStats={this.props.allStats[idx] == undefined ? [0, 0] : this.props.allStats[idx]}
                            cowboyId={this.props.cowboysId[idx] == undefined ? [0] : this.props.cowboysId[idx]}
                            target={this.props.targets[idx] == undefined ? false : this.props.targets[idx]}
                            nonPermanent={this.props.nonPermanent[idx] == undefined ? -1 : this.props.nonPermanent[idx]}
                            selectTargetFun={this.props.selectTargetFun}
                        />
                    }
                })}
                {/*<Player name={"Giorgio"}/>*/}
                {/*<Player name={"Luigi"}/>*/}
                {/*<Player name={"Giovanni"}/>*/}
                {/*<Player name={"Marco"}/>*/}
                {/*<Player name={"Federico"}/>*/}
                {/*<Player name={"Eugenio"}/>*/}
            </div>
        );
    }
}

export default PlayerBoard;