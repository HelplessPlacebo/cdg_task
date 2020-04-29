import React from "react"
import TW from "./st.module.css"

import Tile from "./Tile";
import {TTile} from "../../data/TilesReducer";
import {TDeleteTile, TResetTiles, TSetClickedTiles} from "./TilesContainer";


type TTilesProps = {
    TilesData : Array<TTile>
    ClickedTiles : Array<number>
    SetClickedTiles : TSetClickedTiles
    ResetTiles : TResetTiles
    DeleteTile : TDeleteTile
}
type TObjsToCompare = Array<{
    id : number
    color : string
}>

const Tiles : React.FC<TTilesProps> = (props) => {

    let ObjsToCompare : TObjsToCompare = []

if(props.ClickedTiles.length >= 2){

props.ClickedTiles.map(el => {
       props.TilesData.map(tile=>{
           tile.id === el && ObjsToCompare.push(tile)
       })
    })

    if(ObjsToCompare.length > 1 && ObjsToCompare[0].color === ObjsToCompare[1].color){

        setTimeout(()=> {
                props.DeleteTile(ObjsToCompare[0].id)
                props.DeleteTile(ObjsToCompare[1].id)
        },400)

    }
    else {
        setTimeout(()=> {
            props.ResetTiles()
        },500)
    }

}
    return <div>

            <div className={TW.TilesWrapper}>
                { props.TilesData && props.TilesData.map(tile =>  <Tile
                    key={tile.id}
                    CurrentColor={tile.color}
                    CurrentID={tile.id}
                    SetClickedTiles={props.SetClickedTiles}
                    ClickedTiles={props.ClickedTiles}
                />)
                }
            </div>

    </div>

}
export default Tiles