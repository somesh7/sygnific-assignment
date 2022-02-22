import './App.css';
import Home from './components/Home';
import Colleges from "./components/Colleges"

const delhiClgCard = (value, index) => {
  return (
    <Home cname={value.college_name} />
  )

}

function App() {
  return (
    <>
      <div className='home_div'>
        {Colleges.map(delhiClgCard)}
      </div>
    </>

  );
}

export default App;
