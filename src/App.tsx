import Banner from "./components/Banner"

function App() {

  return (
    <>
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
