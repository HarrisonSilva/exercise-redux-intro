const btnPrevious = document.getElementById('previous') as HTMLButtonElement;
const btnNext = document.getElementById('next') as HTMLButtonElement;
const btnRandom = document.getElementById('random') as HTMLButtonElement;
import { PREVIOUS_COLOR, NEXT_COLOR, RANDOM_COLOR } from "./redux/actions";
import { store } from "./redux/store";

btnPrevious.addEventListener('click', () => {
  // realiza o dispatch da action
  store.dispatch(PREVIOUS_COLOR)
  
});

btnNext.addEventListener('click', () => {
  store.dispatch(NEXT_COLOR)
  // realiza o dispatch da action
});

btnRandom.addEventListener('click', () => {
  store.dispatch(RANDOM_COLOR)
  // realiza o dispatch da action
});

// realiza o subscribe da store
store.subscribe(() => {
  const globalState = store.getState()
 const displaValue = document.querySelector('#value')
 displaValue.innerHTML = globalState.colors[globalState.index]
 displaValue.style.color = globalState.colors[globalState.index]
})