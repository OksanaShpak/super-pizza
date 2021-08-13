import { Route } from "react-router-dom";
import { Header } from "./components";
import { Cart, Home } from "./pages";
import axios from "axios";
import { setPizzas } from "./redux/actions/pizzas";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  

  useEffect(() => {
    axios.get("http://localhost:3001/pizzas").then(({ data }) => {
      dispatch(setPizzas(data));
    });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content"></div>
      <Route path="/" component={Home} exact />
      <Route path="/cart" component={Cart} exact />
    </div>
  );
}

export default App;
