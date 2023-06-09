// Commons imports
import { useEffect, useState } from 'react';
import axios from 'axios';
// Styles
import './App.css';
// Componenets
import Cards from './components/Cards/Cards';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About'
import Form from './components/Form/Form'
// Router-Dom
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Detail from './components/Detail/Detail';
import Favorites from './components/Favorites/Favorites';

const email = 'gomezignacio86@gmail.com';
const password = 'usuario12';


function App() {
   const [characters, setCharacters] = useState([]);
   const { pathname } = useLocation()
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);


   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   // const onSearch = (id) => {
   //    axios(`http://localhost:3001/rickandmorty/character/${id} `).then(({ data }) => {
   //       if (data.name) {
   //          // setCharacters((oldChars) => [...oldChars, data]);
   //          const exists = characters.some((char) => char.id === data.id);
   //          if (!exists) {
   //             setCharacters((oldChars) => [...oldChars, data]);
   //          } else {
   //             window.alert('¡Este personaje ya está en la lista!');
   //          }
   //       } else {
   //          window.alert('¡No hay personajes con este ID!');
   //       }
   //    });
   // }
   const onSearch = async (id) => {
      try {
         const { data } = await axios.get(`http://localhost:3001/rickandmorty/character/${id}`)
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         }

      } catch (error) {
         window.alert('¡No hay personajes con este ID!');
      }
   }


   const onClose = (id) => {
      setCharacters(characters.filter((char) => char.id !== id))
   }

   // function login(userData) {
   //    if (userData.password === password && userData.email === email) {
   //       setAccess(true);
   //       navigate('/home');
   //    }
   // }

   async function login(userData) {
      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const { data } = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      } catch (error) {
         console.log(error)
      }
   }


   return (
      <div className='App'>
         {
            pathname !== '/' && <NavBar onSearch={onSearch} />
         }

         <Routes>
            <Route path={'/'} element={<Form login={login} />} />
            <Route path={'/home'} element={<Cards characters={characters} onClose={onClose} />} />
            <Route path={'/about'} element={<About />} />
            <Route path={'/detail/:id'} element={<Detail />} />
            <Route path={'/favorites'} element={<Favorites />} />
         </Routes>
      </div>

   );
}

export default App;
