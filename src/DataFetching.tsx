"use client";

import { atom } from "jotai";
import { Product } from "@/interface";
import { client } from "./sanity/lib/client";
import { useAtom } from "jotai";

export const data = atom<Product[]>([]);

const DataFetching = () => {
  const [, setProducts] = useAtom(data);

  const dataFetching = async () => {
    try {
      const query = `*[_type == "product"][5..16] {
        _id,
        name,
        "pricePerDay": pricePerDay,
        "image": image.asset->url,
        type,
        "fuelCapacity": fuelCapacity,
        transmission,
        "seatingCapacity": seatingCapacity
      }`;

      const fetchedProducts: Product[] = await client.fetch(query);
      setProducts(fetchedProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Fetch data when component mounts
  dataFetching();

  return null;
};

export default DataFetching;


















// "use client";

// import { atom } from "jotai";
// import { Product } from "@/interface"; // Aapke car data ki interface
// import { client } from "./sanity/lib/client";
// import { useAtom } from "jotai";

// // Data atom jo car data ko store karega
// export const data = atom<Product[]>([]);

// const DataFetching = () => {
//   const [, setProducts] = useAtom(data);

//   const dataFetching = async () => {
//     try {
//       // Aapki car data ki query ko yahan replace karna
//       const query = `*[_type == "product"][5..16] {
//         _id,
//         name,
//         "pricePerDay": pricePerDay,
//         "image": image.asset->url,
//         type,
//         "fuelCapacity": fuelCapacity,
//         transmission,
//         "seatingCapacity": seatingCapacity
//       }`;

//       // Sanity se data fetch karna
//       const fetchedProducts: Product[] = await client.fetch(query);
//       setProducts(fetchedProducts); // Data ko atom mein set karna
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   // Component mount hone par data fetch karna
//   dataFetching();

//   return null;
// };

// export default DataFetching;
