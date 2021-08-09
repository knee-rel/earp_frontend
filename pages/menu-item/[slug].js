import React, { useState } from "react";
import { useRouter } from "next/router";

import axios from "axios";

import Footer from "../../components/footer";
import Header from "../../components/header";
import ProductDetails from "../../components/productDetails";

const MenuItem = ({ post, categories }) => {
  const router = useRouter();
  // const [items, setItems] = useState([]);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  // useEffect(() => {
  //   axios
  //     .get("http://127.0.0.1:8000/api/", { params: { slug: "pork-tacos" } })
  //     .then((res) => {
  //       console.log(res);
  //       setItems(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // });

  return (
    <div>
      <Header />
      <div className="m-10 flex flex-row">
        <ProductDetails
          product_title={post.title}
          category={categories.name}
          description={post.description}
          regular_price={post.regular_price}
          image={post.product_image[0].image}
        />
      </div>
      <Footer />
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: "beef_tacos" } }],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://127.0.0.1:8000/api/${params.slug}`);
  const post = await res.json();

  const ress = await fetch("http://127.0.0.1:8000/api/category/");
  const categories = await ress.json();

  return {
    props: {
      post,
      categories,
    },
  };
}

export default MenuItem;
