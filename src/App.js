import React, { useState } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import ProductDetails from "./ProductDetails";
import ProductList from "./ProductList";

function App() {
  const [products, setProducts] = useState([]);

  return (
    <div>
      <Router>
        <Route
          path="/"
          exact
          render={(routeProps) => (
            <ProductList {...routeProps} products={products} />
          )}
        />
        <Route path="/product/:id" component={ProductDetails} />
      </Router>
    </div>
  );
}

export default App;
