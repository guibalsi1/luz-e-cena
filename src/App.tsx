import Banner from "./components/Banner"
import Header from "./components/Header"

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
    </>
  )
}

export default App
