import { Route } from "react-router-dom";
import { Header } from "./components";
import { Cart, Home } from "./pages";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/fake-server.json").then(({ data }) => {
      setPizzas(data.pizzas);
    });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content"></div>
      <Route path="/" render={() => <Home items={pizzas} />} exact />
      <Route path="/cart" component={Cart} exact />
    </div>
  );
}

export default App;
