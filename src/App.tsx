import { Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Homepage from './pages/Home';
import EditPage from './pages/Edit';
function App() {
  return(
    <div className="App">
      <h1>Meme generator</h1>
      <Routes>
        <Route path="/" element = {<Homepage/>}></Route>
        <Route path="/edit" element = {<EditPage/>}></Route>
      </Routes>
    </div>
  );
}
export default App
