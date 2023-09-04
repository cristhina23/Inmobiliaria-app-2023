import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/HeroComponent";
function App() {
  return (
    <div className='App'>
      <div>
        <Header />

        <Hero />
        <div className='white-gradient' />
      </div>
    </div>
  );
}

export default App;
