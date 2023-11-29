import Image from "next/image";
import { BsTrash } from "react-icons/bs";

const CartProductList = () => {
  const productInfo = [
    {
      name: "product123",
      price: "123",
      quantity: "2",
      size: "large",
      color: "red",
      image: "/imageTest.jpg",
    },
    {
      name: "product123",
      price: "123",
      quantity: "2",
      size: "large",
      color: "red",
      image: "/imageTest.jpg",
    },
    {
      name: "product123",
      price: "123",
      quantity: "2",
      size: "large",
      color: "red",
      image: "/imageTest.jpg",
    },
  ] as const;
  return (
    <div className="md:flex md:flex-col items-center">
      {productInfo.map((product, index) => (
        <div key={index} className="flex w-full mb-8 shadow-md md:w-[700px] lg:max-w-[650px]">
          <Image
            src={product.image}
            width={150}
            height={200}
            alt="Picture of shoppingr"
            className="mr-8 rounded-md md:h-[210px] md:w-[209px] lg:h-[170px] lg:w-[160px]"
          />
          <div className="py-2 relative w-full">
            <p>{product.name}</p>
            <p className="text-red">{product.color}</p>
            <p>{product.price}.OO€</p>
            <select
              name="quantity"
              id="quantity"
              className="mt-4 py-[6px] pl-[12px] pr-[40px] border rounded-lg md:mt-8"
            >
              <option value={product.quantity}>{product.quantity}</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <BsTrash
              className="absolute top-2 right-2 md:top-4 md:right-4"
              size="16px"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartProductList;
