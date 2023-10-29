import React, { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Menu from "./components/Menu/Menu";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <Header />
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
