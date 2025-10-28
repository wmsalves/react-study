import "./App.css";
import BarraDePesquisa from "./componentes/BarraDePesquisa";
import Filtro from "./componentes/Filtro";
import Sidebar from "./componentes/Sidebar";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <div>
        <BarraDePesquisa />
        <Filtro />
      </div>
    </div>
  );
}

export default App;
