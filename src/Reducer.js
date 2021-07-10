export const initialState={
    basket:[],
    user:null,
};
const  Reducer= (state,action)=>{
    console.log(action)
    switch(action.type){
        case 'ADD_TO_BASKET':
            //LOGIV FOR ADDING ITEM TO BASKET
            return {...state,basket:[...state.basket,action.item]};
        case 'REMOVE_FROM_BASKET':
            //logic for Removing item from basket;
            return{state};
            
        default:
                return state;
    }
}
export default Reducer