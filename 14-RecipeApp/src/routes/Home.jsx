import ContainerSSS from "./styles/ContainerHomeSSS";
import InputHomeSSS from "./styles/InputHomeSSS";
export default function Home() {
  return (
    <ContainerSSS>
      <div className="wrapper">
        <h1>Recipe Search</h1>
        <div className="search-wrapper">
          <InputHomeSSS placeholder="Write here..." type='text' name="text" className="input"/>
          <button>Search</button>
          <select name="food type" id="">
            <option value="">Food Type</option>
            <option value="">Breakfast</option>
            <option value="">Brunch</option>
            <option value="">Lunch</option>
            <option value="">Dinner</option>
            <option value="">Snack</option>
            <option value="">Tea Time</option>
          </select>
        </div>
      </div>
    </ContainerSSS>
  );
}
