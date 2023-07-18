import ProductCard from "./components/productCard";
import image1 from "./productImages/image-product-1.jpg";
import image2 from "./productImages/image-product-2.jpg";
import image3 from "./productImages/image-product-3.jpg";
import image4 from "./productImages/image-product-4.jpg";

const App = () => {
  const product1 = [
    {
      img: image1,
      title: "Image 1",
    },
    {
      img: image2,
      title: "Image 2",
    },
    {
      img: image3,
      title: "Image 3",
    },
    {
      img: image4,
      title: "Image 4",
    },
  ];
  return (
    <ProductCard
      company="Sneaker Company"
      title="Fall Limited Edition Sneaker"
      description="Introducing the Fall Limited Edition Sneaker, a stylish and
      trendy footwear option designed to elevate your fashion game
      this season. Crafted with meticulous attention to detail, these
      sneakers are a perfect blend of comfort and style."
      salePrice="$125"
      percentOff="50%"
      originalPrice="$250"
      productImages={product1}
    />
  );
};

export default App;
