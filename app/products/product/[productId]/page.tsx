import Image from "next/image";
import { FaStar } from "react-icons/fa";

const Product = () => {
  return (
    <div className="py-8 px-4">
      <div className="grid grid-rows-2 gap-2 mb-4">
        <div className="flex justify-between text-[20px]">
          <h3 className="font-semi-bold">Basic Tee</h3>
          <p>35€</p>
        </div>
        <div className="flex gap-10 text-[14px] items-center">
          <div className="flex items-baseline">
            <p>3.9</p>
            <div className="flex ml-2 gap-1 items-center">
              <FaStar className="text-yellow" />
              <FaStar className="text-yellow" />
              <FaStar className="text-yellow" />
              <FaStar className="text-yellow" />
              <FaStar className="text-yellow" />
            </div>
          </div>
          <p className="text-gray-900">Voir les avis</p>
        </div>
      </div>
      <Image
        src="/imageTest.jpg"
        width={400}
        height={200}
        alt="Picture of shoppingr"
        className="rounded-sm w-full h-[auto] object-cover mb-6"
      />
      <div className="mb-6">
        <p className="text-[14px] mb-2">Couleurs</p>
        <div className="flex gap-2">
          <div className="h-8 w-8 border-2 border-transparent rounded-full bg-blue hover:border-gray"></div>
          <div className="h-8 w-8 border-2 border-transparent rounded-full bg-yellow hover:border-gray"></div>
        </div>
      </div>
      <div className="mb-6">
        <p className="text-[14px] mb-2">Tailles</p>
        <div className="grid grid-rows-2 grid-cols-3 gap-2">
          <div className="p-3 shadow-sm border-[0.2px] border-[#d4d5d8] text-center hover:bg-blue hover:text-[#E5E7EB]">
            XSS
          </div>
          <div className="p-3 shadow-sm border-[0.2px] border-[#d4d5d8] text-center hover:bg-blue hover:text-[#d4d5d8]">
            XS
          </div>
          <div className="p-3 shadow-sm border-[0.2px] border-[#d4d5d8] text-center hover:bg-blue hover:text-[#d4d5d8]">
            S
          </div>
          <div className="p-3 shadow-sm border-[0.2px] border-[#d4d5d8] text-center hover:bg-blue hover:text-[#d4d5d8]">
            M
          </div>
          <div className="p-3 shadow-sm border-[0.2px] border-[#d4d5d8] text-center hover:bg-blue hover:text-gray">
            L
          </div>
        </div>
      </div>
      <button className="w-full py-3 bg-blue text-gray rounded-sm mb-6">
        Ajouter au panier
      </button>
      <div className="text-sm flex flex-col gap-2 mb-6">
        <p>Description</p>
        <p className="text-[12px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur
          commodi nihil fuga magni eaque aliquam reprehenderit mollitia
          sapiente. Ex autem itaque blanditiis fugit laboriosam beatae laborum a
          impedit quae reprehenderit?
        </p>
        <p className="text-[12px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
          quisquam eveniet.
        </p>
      </div>
      <div className="text-sm">
        <p>Avis recents</p>
        <div className="flex flex-col gap-3 mt-4 mb-8">
          <div className="flex gap-2">
            <div className="flex gap-1 items-center">
              <FaStar className="text-yellow" />
              <FaStar className="text-yellow" />
              <FaStar className="text-yellow" />
              <FaStar className="text-yellow" />
              <FaStar className="text-yellow" />
            </div>
            <p>5</p>
          </div>
          <h3 className="font-medium">Le top du top du top !</h3>
          <p className="text-[12px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
            adipisci repellat labore consectetur saepe aspernatur, itaque
            nostrum quas, numquam deserunt culpa neque distinctio accusamus
            alias, eaque excepturi. Quo, officia cum.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            quod aliquam amet nobis totam unde.
          </p>
          <div className="flex gap-8">
            <p className="font-medium">Matheo M.</p>
            <p>Avr 16, 2021</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-4 mb-8">
          <div className="flex gap-2">
            <div className="flex gap-1 items-center">
              <FaStar className="text-yellow" />
              <FaStar className="text-yellow" />
              <FaStar className="text-yellow" />
              <FaStar className="text-yellow" />
              <FaStar className="text-yellow" />
            </div>
            <p>5</p>
          </div>
          <h3 className="font-medium">Le top du top du top !</h3>
          <p className="text-[12px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
            adipisci repellat labore consectetur saepe aspernatur, itaque
            nostrum quas, numquam deserunt culpa neque distinctio accusamus
            alias, eaque excepturi. Quo, officia cum.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            quod aliquam amet nobis totam unde.
          </p>
          <div className="flex gap-8">
            <p className="font-medium">Matheo M.</p>
            <p>Avr 16, 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
