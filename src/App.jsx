import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayout from './components/AppLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import MovieList from './pages/MovieList.jsx'
import GlobalContext from './Contetx/GlobalContext.js'
import axios from 'axios'
import { useEffect, useState } from 'react'


function App() {
  let [movies, setMovies]=useState([])
  const apiUrl = "http://localhost:3300/movies"
 

  useEffect(()=>{
    axios.get(`${apiUrl}`).then((resp) => {
      console.log(resp.data.data)
      setMovies(resp.data.data)
    });
  }, [])

  const GlobalProviderValue={
    movies
  }


  return (
    <>
      <GlobalContext.Provider value={GlobalProviderValue}>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/movies" element={<MovieList />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>

    </>
  )
}

export default App
