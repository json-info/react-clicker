import { useState } from 'react';

export default function MyApp() {
  const [count, setCount] = useState(0);

  function incrementButton() {
    setCount(count + 1);
  }

   function decrementButton()
  {
    setCount(count - 1);
  }




  return (
    <div>
      <h1>Counters that update together</h1>

      <h1>Button Clicked! {count}</h1>
      <button  onClick={incrementButton} > click me to add </button>
      <button  onClick={decrementButton} > click me to minus</button>
    </div>
  );
}



/*
  this function is returning a button with named AddButton and MinusButton
  to use this button add this on return function

  <AddButton onClick={incrementButton}/>

*/





// function AddButton({  onClick }) {
//   return (
//     <button onClick={onClick}>
//       Clicked  times
//     </button>
//   );
// }

// function MinusButton({onClick})
// {
//   return(
//     <button onClick={onClick}>
//       Clicked  times
//     </button>
//   );
// }
