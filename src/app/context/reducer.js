
const reducer = (state,action) => {
    switch (action.type){
        case "All_Product":{
            return {...state,product:[...state.product,action.payload]}
        }
    }
}

export default reducer
