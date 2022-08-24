import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productsActions";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("error", err);
      });
    dispatch(setProducts(response.data));
  };
  console.log("products:", products);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="ui grid container" style={{ paddingTop: "80px" }}>
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
