

export default function TabButton({children}) {
    function clickHandler() {
        console.log("Hello world!");
     }
  return(
    <li>
    <button onClick={clickHandler}>{children}</button>
  </li>
  )
}
