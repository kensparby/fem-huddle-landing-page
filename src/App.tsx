import "./App.scss";
import Blocks from "./components/Blocks";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <main className="App">
      <Header />
      <Hero />
      <Blocks />
      <Footer />
    </main>
  );
}

export default App;
