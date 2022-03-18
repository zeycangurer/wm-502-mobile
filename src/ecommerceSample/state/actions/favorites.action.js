export const addFavorites = (data = {}) => {
    return {
        type: 'ADD_FAVORITES',
        payload: data
    }
}

export const removeFavorites = (data = {}) => {

    return {
        type: 'REMOVE_FAVORITES',
        payload: data
    }
}

export const getFavorites = (data = []) => {

    return {
        type: 'FAVORITES',
        payload: data
    }
}
