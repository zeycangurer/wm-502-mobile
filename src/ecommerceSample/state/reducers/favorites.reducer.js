const FavoriteReducer = (state = [], action) => {

    const { type, payload } = action;
    
    
    if(type == 'ADD_FAVORITES'){
        state = [...state, payload];
        return state;
    }
    else if(type == 'REMOVE_FAVORITES'){
        const data = state.filter(q => q.id != payload.id);
        return data;
    }
    else if(type == 'FAVORITES'){
        return state
    }
    else{
        return state;
    }
}

export default FavoriteReducer