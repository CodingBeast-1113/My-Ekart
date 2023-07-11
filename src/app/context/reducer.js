
const reducer = (state,action) => {
    switch (action.type){
        case "All_Product":{
            return {...state,product:[...state.product,action.payload]}
        }
        case "ADD_TO_CART":{
            return {...state,cart:[...state.cart,action.payload]}
        }
    }
}

export default reducer
