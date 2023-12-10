import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import LoginSignUp from './Components/LoginSignUp/LoginSignUp'; // LoginSignUp.jsx'in bulunduğu dosya
import Register from './Components/Register/Register'; // Register.jsx'in bulunduğu dosya
import { Link } from 'react-router-dom';
import ForgetPassword from './Components/ForgetPassword/ForgetPassword';
import CodePage from './Components/CodePage/CodePage';
import NewPassword from './Components/NewPassword/NewPassword';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginSignUp/>}> </Route>
        <Route path="/Register" element={<Register/>}> </Route>
        <Route path="/ForgetPassword" element={<ForgetPassword/>}> </Route>
        <Route path="/CodePage" element={<CodePage/>}> </Route>
        <Route path="/NewPassword" element={<NewPassword/>}> </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
