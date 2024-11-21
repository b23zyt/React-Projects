import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Main from "./components/Main"
import Sidebar from "./components/Sidebar"

const App = () => {

  const [data, setData] = useState(null)
  //const [loading, setLoading] = useState(false)

  const [show, setShow] = useState(false);

  const handleToggleModel = () => {
    setShow(!show)
    console.log("hello")
  }

  console.log(import.meta.env.VITE_NASA_API_KEY)

  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
      const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}`


      const today = (new Date()).toDateString()
      const localKey = `NASA-${today}`
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey))
        setData(apiData)
        console.log('Fetched from cache today')
        return
      }
      localStorage.clear()

      try {
        const res = await fetch(url)
        const apiData = await res.json()
        localStorage.setItem(localKey, JSON.stringify(apiData))
        setData(apiData)
        console.log('Fetched from API today')
      } catch (err) {
        console.log(err.message)
      }
    }
    fetchAPIData()
  }, [])



  return (
    <>
      <div className="side">
        {data ? (<Main className="mainClass" data={data}/>) : (<div className="loadingState"><i className="fa-solid fa-gear"></i></div>)}
        {show && (<Sidebar className="bar" handleToggle={handleToggleModel} data={data}/>)}
      </div>
      <Footer handleToggle={handleToggleModel} data={data} />
    </>
  )
}

export default App
