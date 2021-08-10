import { Route } from "react-router-dom";
import { Header } from "./components";
import { Cart, Home } from "./pages";
import { useEffect, useState } from "react";

function App() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/fake-server.json")
      .then((response) => response.json())
      .then((json) => {
        setPizzas(json.pizzas);
      });
  }, []);

  console.log(pizzas);

  return (
    <div className="wrapper">
      <Header />
      <div className="content"></div>
      <Route path="/" render={() => <Home items={pizzas}/>} exact />
      <Route path="/cart" component={Cart} exact />
    </div>
  );
}

export default App;
