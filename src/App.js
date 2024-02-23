import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import LoginSignUp from './Components/LoginSignUp/LoginSignUp'; // LoginSignUp.jsx'in bulunduğu dosya
import Register from './Components/Register/Register'; // Register.jsx'in bulunduğu dosya
import { Link } from 'react-router-dom';
import ForgetPassword from './Components/ForgetPassword/ForgetPassword';
import CodePage from './Components/CodePage/CodePage';
import NewPassword from './Components/NewPassword/NewPassword';
import LoginPage from './Components/LoginPage/LoginPage';
import Hakkimizda from './Components/Footer/Hakkimizda/Hakkimizda';
import SSS from './Components/Footer/SSS/sss';
import Gizlilik from './Components/Footer/Gizlilik/Gizlilik';
import KullanimKosullari from './Components/Footer/Kullanim/Kullanım';
import Mainpage from './Components/MainPage/Mainpage';
import ErrorPage from './Components/404Page/404Page';
import ProfilSayfasi from './Components/Profile/ProfilePage';
import ProfileSifreyiYenile from './Components/Profile/ProfileSifreyiYenile/ProfileSifreyiYenile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>}> </Route>
        <Route path="/home" element={<LoginPage/>}> </Route>
        <Route path="/login" element={<LoginSignUp/>}> </Route>
        <Route path="/Register" element={<Register/>}> </Route>
        <Route path="/ForgetPassword" element={<ForgetPassword/>}> </Route>
        <Route path="/CodePage" element={<CodePage/>}> </Route>
        <Route path="/NewPassword" element={<NewPassword/>}> </Route>
        <Route path="hakkimizda" element={<Hakkimizda />} />
        <Route path="/sss" element={<SSS />} />
        <Route path="/gizlilik" element={<Gizlilik/>} />
        <Route path="/kullanim-kosullari" element={<KullanimKosullari/>} />
        <Route path="/mainpage" element={<Mainpage />} />
        <Route path="/profil-page" element={<ProfilSayfasi />} />
        <Route path="/sifre-yenile" element={<ProfileSifreyiYenile />}></Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
