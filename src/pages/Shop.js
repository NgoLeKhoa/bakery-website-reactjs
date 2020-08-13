import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import ProductList from "../components/ProductList";
import FilterByCategories from "../components/FilterByCategories";
import FilterByPrice from "../components/FilterByPrice";
import SearchBar from "../components/SearchBar";
import DisplayedNumberOfProducts from "../components/DisplayedNumberOfProducts";
import SortDropdown from "../components/SortDropdown";
import PaginationCustom from "../components/PaginationCustom";
import CartPopup from "../components/CartPopup";
import products from "../utils/products";
import {Link} from "react-router-dom";
import TopSaleProducts from "../components/TopSaleProducts";

function Shop() {
	const [isLoading, setIsLoading] = useState(true);
	const [items, setItems] = useState([]);
	const [action, setAction] = useState("");
	const [keyword, setKeyWord] = useState("");
	const [productsArray, setProductsArray] = useState(products);
	const [currentPage, setCurrentPage] = useState(1);
	const [productsPerPage, setProductsPerPage] = useState(7);
	const [price, setPrice] = useState({
		minimumPrice: 0,
		maximumPrice: 0,
	})
	const [sortBy, setSortBy] = useState({
		sortType: "",
		sortValue: 0,
	})
	const [totalQuantity, setTotalQuantity] = useState(0);
	const [totalPrice, setTotalPrice] = useState(0)

	useEffect(() => {
		setIsLoading(true)
		if (localStorage && localStorage.getItem("items")) {
			let sumPrice = 0
			let totalAmount = 0
			const storedItems = JSON.parse(localStorage.getItem("items"))
			storedItems.forEach(storedItem => {
				sumPrice += storedItem.price
				totalAmount += storedItem.quantity
				return (sumPrice, totalAmount)
			})
			setIsLoading(false)
			setTotalPrice(sumPrice)
			setTotalQuantity(totalAmount)
			setItems(storedItems)
			console.log(".....")
		} else {
			setIsLoading(false)
			setTotalPrice(0)
			setTotalQuantity(0)
			setItems([])
		}
	}, [setItems, setTotalPrice, setTotalQuantity])

	const onChangeDisplayedNumberOfProducts = (displayedNumber) => {
		setProductsPerPage(displayedNumber)
	}

	const onSort = (typeOfAction, sortType, sortValue) => {

		const compare = (a, b) => {
			const A = sortType === "name" ? a.name : a.price
			const B = sortType === "name" ? b.name : b.price

			if (A > B) return sortValue;
			else if (A < B) return -sortValue;
			else return 0;
		}
		let productsBySortType = []
		if (sortType === "name") {
			productsBySortType = (action !== typeOfAction) ? productsArray : products
			productsBySortType.sort(compare)
			setAction(typeOfAction)
		} else {
			productsBySortType = (action !== typeOfAction) ? productsArray : products
			productsBySortType.sort(compare)
			setAction(typeOfAction)
		}
		setAction(action)
		setCurrentPage(1);
		setProductsArray(productsBySortType)
		setSortBy({ sortType: sortType, sortValue: sortValue })
	}

	const onSearch = (typeOfAction, value) => {
		let productsByKeyword = [];

		if (value.toLowerCase() === keyword) {
			productsByKeyword = products;
		} else {
			productsByKeyword = products.filter(product => {
				return product.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
			})
		}
		setCurrentPage(1);
		setAction(typeOfAction)
		setProductsArray(productsByKeyword)
		setKeyWord(value)
	}

	const onChangeCategoryID = (typeOfAction, categoryID) => {
		let productsByCateID = [];
		if (categoryID === "cate0") {
			productsByCateID = products;
			setAction("")
		} else {
			productsByCateID = products.filter(
				product => product.category === categoryID
			);
			setAction(typeOfAction)
		}
		setCurrentPage(1);
		setProductsArray(productsByCateID);
	}

	const onChangePrice = (typeOfAction, minPrice, maxPrice) => {
		const compare = (a, b) => {
			const A = a.price
			const B = b.price

			let comparison = 0;
			if (A > B) return comparison = 1;
			else if (A < B) return comparison = -1;
			else return comparison;
		}
		let productsByPrice = [];
		if (minPrice === 0 && maxPrice === 0) {
			productsByPrice = products;
		} else if (minPrice > maxPrice) {
			productsByPrice = []
		} else if (minPrice === maxPrice) {
			productsByPrice = products.filter(
				product => product.price === maxPrice && product.price > 0
			)
			productsByPrice.sort(compare)
		} else {
			productsByPrice = products.filter(
				product => product.price <= maxPrice && product.price >= minPrice
			)
			productsByPrice.sort(compare)
		}
		setCurrentPage(1);
		setAction(typeOfAction)
		setProductsArray(productsByPrice)
		setPrice({ minimumPrice: minPrice, maximumPrice: maxPrice })
	}


	const onChangePageNumber = (typeOfAction, page) => {
		setAction(typeOfAction)
		setCurrentPage(page)
	}

	const indexOfLastProduct = currentPage * productsPerPage;
	const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
	const currentProducts = (
		productsArray.length === products.length
			? products.slice(indexOfFirstProduct, indexOfLastProduct)
			: productsArray.slice(indexOfFirstProduct, indexOfLastProduct)
	)

	const onAddToCart = (anItem) => {
		let index = -1
		let totalAmount = 0
		let sumPrice = 0
		items.forEach((item, idx) => {
			if (item.id === anItem.id) {
				index = idx;
			}
			return index
		});
		if (index !== -1) {
			const item = items[index];
			item.quantity += anItem.quantity
			item.price += anItem.price
		} else {
			items.push(anItem);
		}
		items.forEach(item => {
			sumPrice += item.price
			totalAmount += item.quantity
			return (sumPrice, totalAmount)
		})
		setTotalPrice(sumPrice)
		setTotalQuantity(totalAmount)
		setItems(items)
		localStorage.setItem("items", JSON.stringify(items))
	}
	return (
		<div className="bg-light pt-4 mt-3" >
			<div >
				<Image className="pb-5" src={require("../images/banner/banner-bg.jpg")} alt="banner" />
				<h1 className="text-shop-h1">Shop</h1>
				<Link to="/">
					<h6 className="text-shop-h6" >Home</h6>
				</Link>
			</div>	
			<Container style={{ minHeight: "1500px" }}>
				<Row >
					<Col md={3}>
						<SearchBar onSearch={onSearch} />
						<FilterByCategories onChangeCategoryID={onChangeCategoryID} />
						<FilterByPrice onChangePrice={onChangePrice} />
						<TopSaleProducts />
					</Col>
					<Col md={9}>
						<Row>
							<Col md={6} className="d-flex flex-row">
								<DisplayedNumberOfProducts 
									onChangeDisplayedNumberOfProducts={onChangeDisplayedNumberOfProducts} 
									productsPerPage={productsPerPage}	
									/>
							</Col>
							<Col md={6} className="d-flex flex-row-reverse">
								<SortDropdown onSort={onSort} />
							</Col>
						</Row>
						{isLoading
							? (<div className="mt-5 text-center">
								<h2>Loading ....... Please Wait.</h2>
							</div>)
							: (<>
								<ProductList products={currentProducts} onAddToCart={onAddToCart} />
								<PaginationCustom onChangePageNumber={onChangePageNumber}
									currentPage={currentPage}
									totalProducts={(productsArray.length === products.length) ? products.length : productsArray.length}
									productsPerPage={productsPerPage} />
							</>)
						}
					</Col>
				</Row>
			</Container>
			<CartPopup items={items} totalQuantity={totalQuantity} totalPrice={totalPrice} />
		</div>
	)
}

export default Shop;