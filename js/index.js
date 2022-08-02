function reducer(state = 0, action) {
    switch (action.type) {
        case "I":
            state = state+=1
            return state;
        case "D":
            state = state-=1
            return state;
        default:
            return state;
    }
}

const store = Redux.createStore(reducer);

const buttons = [...document.querySelectorAll('button')];
buttons.forEach( button => {
    const count = document.querySelector('.counter');
    count.textContent = store.getState();
    button.addEventListener('click', ({ target }) => {
        store.dispatch({ type: target.id});
        count.textContent = store.getState();
    })
})