
const SET_CLICKED_TILES = 'TILES/SET_CLICKED_TILES'
const RESET_TILES = 'TILES/RESET_TILES'
const DELETE_TILE = 'TILES/DELETE_TILE'

export type TTile = {id : number,color : string}

let DefaultState = {
    TilesData: [
        {id : 0, color : "red"},{id : 1, color : "green"},
        {id : 2, color : "green"},{id : 3, color : "red"},
        {id : 4, color : "red"},{id : 5, color : "green"},
        {id : 6, color : "red"},{id : 7, color : "green"},
        {id : 8, color : "red"},{id : 9, color : "green"},
        {id : 10, color : "green"},{id : 11, color : "red"},
        {id : 12, color : "green"},{id : 13, color : "red"},
        {id : 14, color : "red"},{id : 15, color : "green"}
    ]as Array<TTile>,
    ClickedTiles : [] as Array<number>
}

type  DefaultTilesState = typeof DefaultState


type TTilesReducerActions = ReturnType<typeof SetClickedTiles>
    |  ReturnType<typeof ResetTiles> | ReturnType<typeof DeleteTile>

const TilesReducer = (state = DefaultState, action : TTilesReducerActions): DefaultTilesState => {

    switch (action.type) {
        case SET_CLICKED_TILES : {

            return {
                ...state,
                ClickedTiles : action.IsClicked ?
                    [...state.ClickedTiles, action.CurrentTileId]
                    : state.ClickedTiles.filter(id => id !== action.CurrentTileId)
            }
        }
        case RESET_TILES : {

            return {
                ...state,
                ClickedTiles : []
            }
        }
        case DELETE_TILE : {

            return {
                ...state,
                TilesData : state.TilesData.filter(function( tile ) {
                    return tile.id !== action.TileID;
                })
            }
        }
        default :
            return state
    }
}

export const SetClickedTiles = (CurrentTileId : number,IsClicked : boolean)  =>{
    return   {type: SET_CLICKED_TILES, CurrentTileId,IsClicked} as const
}
export const ResetTiles = ()  => ({type: RESET_TILES} as const)

export const DeleteTile = (TileID : number)  => {
    return {type: DELETE_TILE, TileID} as const
}

export default TilesReducer