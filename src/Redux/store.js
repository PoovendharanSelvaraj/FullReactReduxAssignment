import {legacy_createStore, applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducer";


const composeEnhancers = window.__redux_devtools_extension_compose || compose

export const store = legacy_createStore(reducer,composeEnhancers(applyMiddleware(thunk)));


