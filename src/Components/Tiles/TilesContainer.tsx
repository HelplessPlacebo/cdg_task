import React from 'react'
import {connect} from "react-redux"
import {GlobalState} from "../../data/redux-store"
import Tiles from "./TIles";
import {ResetTiles, TTile} from "../../data/TilesReducer";
import {SetClickedTiles} from "../../data/TilesReducer";
import {DeleteTile} from "../../data/TilesReducer";

type T_MSTP_TilesContainer ={
    TilesData : Array<TTile>
    ClickedTiles : Array<number>
}
export type TSetClickedTiles = typeof SetClickedTiles
export type TResetTiles = typeof ResetTiles
export type TDeleteTile = typeof DeleteTile

type T_MDTP_TilesContainer = {
    SetClickedTiles : TSetClickedTiles
    ResetTiles : TResetTiles
    DeleteTile : TDeleteTile
}

type TTilesContainerOwnProps ={

}

export type TTilesContainerProps = T_MSTP_TilesContainer & T_MDTP_TilesContainer & TTilesContainerOwnProps

class TilesContainer extends React.Component<TTilesContainerProps> {


    render() {

        return (
            <Tiles TilesData={this.props.TilesData}
                   ClickedTiles={this.props.ClickedTiles}
                   SetClickedTiles={this.props.SetClickedTiles}
                   ResetTiles={this.props.ResetTiles}
                   DeleteTile={this.props.DeleteTile}
            />
        )
    }
}

let MapStateToProps = (state : GlobalState) : T_MSTP_TilesContainer  => ({
    TilesData : state.TilesData.TilesData,
    ClickedTiles : state.TilesData.ClickedTiles
})

export default connect<T_MSTP_TilesContainer,T_MDTP_TilesContainer,TTilesContainerOwnProps, GlobalState>(MapStateToProps,
    {SetClickedTiles,ResetTiles,DeleteTile}) (TilesContainer);
