export const saveInLoca  =  store =>{
    if(localStorage.state) store.replaceState(JSON.parse(localStorage.state))
    console.log(1)
    store.subscribe((mutation, state) => {
        localStorage.state = JSON.stringify(state)
    })
}