import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayout from './components/AppLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import MovieList from './pages/MovieList.jsx'
import GlobalContext from './Contetx/GlobalContext.js'
import axios from 'axios'
import { useEffect, useState } from 'react'
import SinglePage from './pages/SinglePage.jsx'


function App() {
  let [movies, setMovies] = useState([])
  const apiUrl = "http://localhost:3300"


  useEffect(() => {
    axios.get(`${apiUrl}/movies`).then((resp) => {
      console.log(resp.data.data)
      setMovies(resp.data.data)
    });
  }, [])

  const GlobalProviderValue = {
    movies,
    apiUrl
  }


  return (
    <>
      <GlobalContext.Provider value={GlobalProviderValue}>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/movies" >
                <Route index element={<MovieList />} />
                <Route path=":id" element={<SinglePage />}/>
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>

    </>
  )
}

export default App
