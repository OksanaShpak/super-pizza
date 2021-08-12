import { Route } from "react-router-dom";
import { Header } from "./components";
import { Cart, Home } from "./pages";
// import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { setPizzas } from "./redux/actions/pizzas";
// function App() {
//   // const [pizzas, setPizzas] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:3000/fake-server.json").then(({ data }) => {
//       setPizzas(data.pizzas);
//     });
//   }, []);

//   return (
//     <div className="wrapper">
//       <Header />
//       <div className="content"></div>
//       <Route path="/" render={() => <Home items={pizzas} />} exact />
//       <Route path="/cart" component={Cart} exact />
//     </div>
//   );
// }

class App extends React.Component {
  componentDidMount() {
    axios.get("http://localhost:3000/fake-server.json").then(({ data }) => {
      this.props.setPizzas(data.pizzas);
    });
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="content"></div>
        <Route
          path="/"
          render={() => <Home items={this.props.items} />}
          exact
        />
        <Route path="/cart" component={Cart} exact />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
    filters: state.filters,
  };
};

const mapDispatchToProps = {
  setPizzas,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
