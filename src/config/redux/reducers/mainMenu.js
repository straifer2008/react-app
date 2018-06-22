const initialState = {
    menu: [
        {id: 0, name: 'Головна', icon: 'home', page: 'main'},
        {id: 1, name: 'Продукти', icon: 'shopping-basket', page: 'products'},
        {id: 2, name: 'Категорії', icon: 'folder-o', page: 'categories'},
        {id: 3, name: 'Пошук', icon: 'search', page: 'search'},
    ]
};

// REDUCERS
export const mainMenuReducer = (state = initialState) => {
    return {...state};
};
