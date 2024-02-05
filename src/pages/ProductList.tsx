import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { MagnifyingGlass } from "react-loader-spinner";
interface Product {
  id: number;
  url: string;
  title: string;
  offerprice?: number;
  price: number;
  rating: number;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [initialProducts, setInitialProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [lowToHigh, setLowToHigh] = useState<boolean>(false);
  const [highToLow, setHighToLow] = useState<boolean>(false);

  const handleLowToHigh = () => {
    setLowToHigh(!lowToHigh);
    setHighToLow(false); // Uncheck the other checkbox

    if (lowToHigh) {
      setProducts(initialProducts);
    } else {
      const updatedProducts = [...initialProducts];
      updatedProducts.sort((a, b) => a.price - b.price);
      setProducts(updatedProducts);
    }
  };

  const handleHighToLow = () => {
    setHighToLow(!highToLow);
    setLowToHigh(false); // Uncheck the other checkbox

    if (highToLow) {
      setProducts(initialProducts);
    } else {
      const updatedProducts = [...initialProducts];
      updatedProducts.sort((a, b) => b.price - a.price);
      setProducts(updatedProducts);
    }
  };

  //

  useEffect(() => {
    // Simulate loading delay for 2 seconds (replace with your API call)
    const fetchData = async () => {
      try {
        // Simulating loading delay (replace with your API call)
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Fetch data from the backend
        const response = await fetch(
          "https://bareillybasket.onrender.com/api/products"
        );

        const data = await response.json();

        setProducts(data);
        setInitialProducts(data);
        console.log("local host");
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        // Set loading to false after fetching data
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filterClear = () => {
    console.log("Filter cleared");
    setLowToHigh(false);
    setHighToLow(false);
    setProducts(initialProducts);
  };

  const chunkArray = (arr: Product[], chunkSize: number) => {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunkedArray.push(arr.slice(i, i + chunkSize));
    }
    return chunkedArray;
  };

  const productChunks = chunkArray(products, 3);

  return (
    <>
      {loading ? (
        <div className="flex min-h-dvh w-full justify-center mt-20">
        <MagnifyingGlass  
          visible={true}
          height="80"
          width="80"
          ariaLabel="magnifying-glass-loading"
          wrapperStyle={{}}
          wrapperClass="magnifying-glass-wrapper"
          glassColor="#c0efff"
          color="#e15b64"
        /></div>
      ) : (
        <div className="grid md:grid-cols-4 h-max ">
          <div className="col-span-1 bg-slate-100 h-max pb-10">
            <div className="flex justify-around w-screen lg:w-full lg:mt-10 text-slate-900 pt-2 ">
              <div>
                <p className="text-base ">Filter</p>
              </div>
              <div>
                <p onClick={filterClear} className="text-lg cursor-pointer">
                  Clear
                </p>
              </div>
            </div>
            <div className="filter_input flex  flex-col  justify-center  items-center ">
              <div className="flex items-center p-1">
                <input
                  type="checkbox"
                  id="lowtohigh"
                  className="mr-2"
                  checked={lowToHigh}
                  onChange={handleLowToHigh}
                />
                <label
                  htmlFor="priceSort2"
                  className="text-gray-700 text-xs lg:text-base"
                >
                  Sort by Price Low to High
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="hightolow"
                  className="mr-2"
                  checked={highToLow}
                  onChange={handleHighToLow}
                />
                <label
                  htmlFor="priceSort1"
                  className="text-gray-700 text-xs lg:text-base"
                >
                  Sort by Price High to Low
                </label>
              </div>
            </div>
          </div>

          <section className="col-span-1 md:col-span-3  md:w-full w-dvw bg-slate-900">
            <div className="container mx-auto">
              <h2 className="text-slate-100 pt-10 text-xl lg:text-2xl">
                Products
              </h2>
              {productChunks.map((chunk, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row   md:overflow-x-auto md:overflow-hidden  alai"
                >
                  {chunk.map((product) => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      url={product.url}
                      title={product.title}
                      offerprice={product.offerprice}
                      price={product.price}
                      rating={product.rating}
                    />
                  ))}
                </div>
              ))}
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default ProductList;
