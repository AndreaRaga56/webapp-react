import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayout from './components/AppLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import MovieList from './pages/MovieList.jsx'
import GlobalContext from './Contetx/GlobalContext.js'
import axios from 'axios'


function App() {

  const apiUrl = "http://localhost:3300/movies"

  axios.get()

  const GlobalProviderValue={
    x:1
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
