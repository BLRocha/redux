function reducer(state = getStorage(), action) {
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

function saveStorage(data) {
    window.localStorage.setItem('counter', data);
}

function getStorage() {
    const data = window.localStorage.getItem('counter');
    if (!!data) return JSON.parse(data);
    return null;
}

function getCounter() {
    return document.querySelector('.counter');
}

const store = Redux.createStore(reducer);

const buttons = [...document.querySelectorAll('button')];
buttons.forEach( button => {
    const state = store.getState();
    getCounter().textContent = state;
    
    button.addEventListener('click', ({ target }) => {
        store.dispatch({ type: target.id});
        getCounter().textContent = store.getState();
        saveStorage(store.getState());
    })
})

document.addEventListener('DOMContentLoaded', () => {
    getCounter().textContent = getStorage();
})