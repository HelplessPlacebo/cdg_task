import { combineReducers, createStore} from "redux"
import TilesReducer from "./TilesReducer";


let reducers = combineReducers({
    TilesData : TilesReducer
})

type Treducers = typeof reducers

export type GlobalState = ReturnType<Treducers>

const store = createStore(reducers)



//@ts-ignore
window.store = store
export default store
