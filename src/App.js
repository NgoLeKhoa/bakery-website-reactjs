import React from "react"
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetail";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/shop" component={Shop} />
				<Route path="/cart" component={Cart} />
				<Route path="/checkout" component={Checkout} />
				<Route path="/contact" component={Contact} />
				<Route path="/product-detail/:id" component={ProductDetail} />
				<Route path="/shop/product-category/:cateId" component={Shop} />
			</Switch>
			<Footer />
		</Router>
	)
};

export default App;
