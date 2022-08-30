export default(state,action)=>{
    switch(action.type){
        case 'CHANGE_TOGGLE':
            return{...state, toggled: !state.toggled}
        case 'ADD':
            const newList=[...state.list , action.item]
            return{...state , list:newList}
        case 'DELETE':
            const afterDeletedList = state.list.filter((l)=> l.id !== action.id)
            return{...state, list:afterDeletedList}
        default:
            return{...state}
    }
}