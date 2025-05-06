import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Header from "./components/Header"
import MovieSection from "./components/MovieSection"
import NewsLetter from "./components/NewsLetter"

function App() {

  return (
    <>
      <Header />
      <Banner 
        src="./Images/Banner Desktop.png" 
        alt="Banner" 
        text={
          <>
            Where Reality and <br />
            Fantasy <br />
          </>
        }
        em="is the same thing!" 
      />
      <MovieSection />
      <Banner
        src="./Images/Banner Combo Desktop.png"
        alt="Banner"
        text={
          <>
            Combo
            Deal <br />
          </>
        }
        em="Dragon's Ascent!"
      />
      <NewsLetter />
      <Footer />
    </>
  )
}

export default App
