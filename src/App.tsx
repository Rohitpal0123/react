import Navbar from "./components/Navbar";
import Content from "./components/Content/Content";
import Footer from "./components/Footer";
function App() {
  //javascript
  return (
    <div className=" flex flex-col">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
