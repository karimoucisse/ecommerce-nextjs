import Image from "next/image";
import { FaStar } from "react-icons/fa";

const Product = () => {
  return (
    <div className="py-8 px-4">
      <div className="grid grid-rows-2 gap-4 mb-4">
        <div className="flex justify-between text-[20px]">
          <h3 className="font-semi-bold">Basic Tee</h3>
          <p>35€</p>
        </div>
        <div className="flex gap-8 text-[14px] items-center">
          <div className="flex items-baseline">
            <p>3.9</p>
            <div className="flex ml-2 gap-1 items-center"> 
              <FaStar className="bg-yellow" />
              <FaStar className="bg-yellow" />
              <FaStar className="bg-yellow" />
              <FaStar className="bg-yellow" />
              <FaStar className="bg-yellow" />
            </div>
          </div>
          <p className="text-gray-900">voir les retours</p>
        </div>
      </div>
      <Image
        src="/imageTest.jpg"
        width={400}
        height={200}
        alt="Picture of shoppingr"
        className="rounded-sm w-full h-[auto] object-cover"
      />
    </div>
  );
};

export default Product;
