export var setIngredientText = (searchText) => {
    return {
        type: 'SET_INGREDIENT_TEXT',
        searchText
    };
};

export var toggleShowCompleted = () => {
    return {
        type: 'TOGGLE_SHOW_COMPLETED'
    };
};

export var addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        text
    };
};

export var addTodos = (todos) => {
    return {
        type: 'ADD_TODOS',
        todos
    };
};

export var toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    };
};
