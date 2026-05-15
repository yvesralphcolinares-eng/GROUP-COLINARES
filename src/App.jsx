import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Activity1 from "./Activities/Activity1/actapp1.jsx"
import Activity2 from "./Activities/Activity2/actapp2.jsx";
import Activity3 from "./Activities/Activity3/actapp3.jsx";
import Activity4 from "./Activities/Activity4/actapp4.jsx";
const Home = () => <h1>Home Page</h1>;

const App = () => {
  return (
    <BrowserRouter>
      <br />
      <Routes>
        <Route path="/" element={<Activity4/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;