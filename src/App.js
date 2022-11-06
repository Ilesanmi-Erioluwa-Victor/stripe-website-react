import { Submenu } from "./Submenu";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { Sidebar } from "./Sidebar";
import { useGlobalContext } from "./context";
function App() {
  const data = useGlobalContext();
  console.log(data);
  return (
    <>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </>
  );
}

export default App;
