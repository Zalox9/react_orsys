import { combineReducers, createStore } from 'redux';

//etat initial pour reprise par les composants pour calque des etats initiaux locaux
export const initialState = { messages: [], users: [], lastMessageId:-1 };
// actions diffusable
export const ACTIONS = Object.freeze({
    SET_MESSAGES:'SET_MESSAGES',
    SET_USERS:'SET_USERS',
    SAVE_MSG:'SAVE_MSG'
});
// actions privees au doc
const PRIVATE_ACTIONS = Object.freeze({
    INIT:'INIT'
});

//definition des actions et leurs traitements sur l'état du magasin
function reducers(state = initialState, action) {
    console.error(action.type)
    switch (action.type) {
        case PRIVATE_ACTIONS.INIT:
            setInterval(() => {
                fetch('http://localhost:5679/users', { method: 'GET' })
                    .then(flux => flux.json())
                    .then(arr => {
                        store.dispatch({ type: ACTIONS.SET_USERS, values: arr })
                        return arr;
                    })
            }, 1000)
            setInterval(() => {
                fetch('http://localhost:5679/messages?id_gte=' + (store.getState().tchat.lastMessageId + 1),
                { method: 'GET' })
                    .then(flux => flux.json())
                    .then(arr => {
                        let lastId = store.getState().tchat.lastMessageId;
                        arr.map(element => {
                            if (lastId < element.id) lastId = element.id
                            return null;
                        });

                        store.dispatch({ type: ACTIONS.SET_MESSAGES, values: arr,
                        maxId:lastId })
                        return arr;
                    })
            }, 1000)
            return state;
        case ACTIONS.SET_MESSAGES: return {
            ...state,
            messages: [...state.messages, ...action.values],
            lastMessageId:action.maxId
        }
        case ACTIONS.SET_USERS: return {...state, users: action.values} 
        case ACTIONS.SAVE_MSG:
            fetch('http://localhost:5679/messages', { method: 'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(action.value) });
            return state;
        default: return state;

    }
}
// etat initial pour la modal
const modalInitialState = {
    isShown:false,
    content:null
}

const modalReducer = (state = modalInitialState, action) => {
    switch (action.type) {

    case 'SHOW':
        return { ...state, isShown:true, content:action.value }
    case 'HIDE':
         return { ...state, isShown:false, content:null }
    default:
        return state
    }
}


// let state=reducers(undefined, {type:PRIVATE_ACTIONS.INIT});
// console.log(state);

// state=reducers(state,{type:ACTIONS.SET_MESSAGES, values:[{id:0},{id:1}]})
// console.log(state);

// state=reducers(state,{type:ACTIONS.SET_USERS, values:[{id:2},{id:3}]})
// console.log(state);

export const store=createStore(combineReducers({tchat:reducers, modal:modalReducer}));
//des qu'il a un chngt
store.subscribe(()=>{
    console.warn(store.getState())
})

store.dispatch({type:PRIVATE_ACTIONS.INIT});

export default store;