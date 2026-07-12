import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from './components/Projects';
import Message from "./components/Message";
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Projects />
      <Message />
    </div>
  );
}

export default App
