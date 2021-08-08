import React, { useEffect, useState } from "react";

import axios from "axios";

import Footer from "../components/footer";
import Header from "../components/header";
import ProductCard from "../components/productCard";

const MenuPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  });
  return (
    <div>
      <Header />
      {/* {console.log(posts)} */}
      <div className="m-10 flex flex-row">
        {posts.map((post) => (
          <ProductCard
            id={post.id}
            title={post.title}
            image={post.product_image[0].image}
            regular_price={post.regular_price}
            description={post.description}
            slug={post.slug}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default MenuPage;
