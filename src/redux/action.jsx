export const changeToggle=()=>({
    type:'CHANGE_TOGGLE'
})

export const add=(item)=>({
    type:'ADD',
    item
})

export const deletItem=(id)=>({
    type:'DELETE',
    id
})