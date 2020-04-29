import React from "react";
import GrayCard from "../../tools/imgs/gray.jpg"
import RedCard from "../../tools/imgs/red.jpg"
import GreenCard from "../../tools/imgs/green.jpg"

import TW from "./st.module.css"
import { TSetClickedTiles} from "./TilesContainer";


type TTileProps = {
    CurrentColor : string
    CurrentID : number
    SetClickedTiles : TSetClickedTiles
    ClickedTiles : Array<number>
}
const Tile : React.FC<TTileProps> = (props ) => {


    const onCardClick =() =>{
        props.SetClickedTiles(props.CurrentID,true)

    }


    return  <div>
        <div className={TW.TilesWrapper}>
            {
                props.ClickedTiles.indexOf(props.CurrentID) !== -1
                    ?
                    <img  className={TW.Card} src={
                        props.CurrentColor === "red" ?
                            RedCard
                            : props.CurrentColor === "green" ?
                            GreenCard
                            : undefined
                    } alt=""/>
                : <img  onClick={props.ClickedTiles.length < 2 ? onCardClick : undefined} className={TW.Card} src={GrayCard} alt=""/>
            }

        </div>
    </div>

}
export default Tile