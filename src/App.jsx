import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
 
import Index from "./router/Index";

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="row">
          <Index />
        </div>
      </div>
    </div>
  );
}

export default App;
