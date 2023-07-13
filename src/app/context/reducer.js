
const reducer = (state,action) => {
    switch (action.type){
        case "All_Product":{
            return {...state,product:[...state.product,action.payload]}
        }
        case "ADD_TO_CART":{
            return {...state,cart:[...state.cart,action.payload]}
        }
        case "Remove_Item":{
            const newCart= state.cart.findIndex(i=>i.id===action.payload)
            if (newCart>-1){
                state.cart.splice(newCart,1)
            }
            return {...state,cart:state.cart}
        }
        case "FILTER_CATEGORY":{
           return {...state,filter:action.payload}
        }
        case "Clear_Filter":{
            return {...state,filter:""}
        }
        case "Search_Items" :{
            return {...state,srchquery:action.payload}
        }
    }
}

export default reducer
