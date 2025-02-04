// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { data } from "@/DataFetching";
// import { useAtom } from "jotai";
// import { Product } from "@/interface";

// export default function AdminPanel() {
//   const [products, setProducts] = useAtom(data);
//   const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
//   const [searchQuery, setSearchQuery] = useState<string>("");
//   const router = useRouter();

//   useEffect(() => {
//     setFilteredProducts(products);
//   }, [products]);

//   const handleSearch = (query: string) => {
//     setSearchQuery(query);
//     const filtered = products.filter((product: any) =>
//       product.name.toLowerCase().includes(query.toLowerCase()) ||
//       (product.categoryName || "").toLowerCase().includes(query.toLowerCase())
//     );
//     setFilteredProducts(filtered);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("isLoggedIn");
//     router.push("/");
//   };

//   return (
//     <div className="relative flex min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
//     {/* Main Content */}
//     <main className="flex-1 p-4 md:p-6 md:ml-64 z-10 overflow-auto">
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className="flex flex-col gap-4 md:flex-row justify-between items-start md:items-center mb-6 md:mb-8 pt-14">
//           <h1 className="text-2xl md:text-4xl font-bold text-gray-800 font-[Poppins] tracking-tight">
//             Product Management
//           </h1>
//           <div className="flex flex-col md:flex-row items-stretch gap-3 w-full md:w-auto">
//             <div className="relative flex-1">
//               <input
//                 type="text"
//                 value={searchQuery}
//                 onChange={(e) => handleSearch(e.target.value)}
//                 placeholder="Search products..."
//                 className="w-full pl-10 md:pl-12 pr-4 py-2 md:py-3 bg-white/90 border border-gray-200 rounded-lg md:rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
//               />
//               <svg
//                 className="absolute left-3 md:left-4 top-2.5 md:top-3.5 h-4 w-4 md:h-5 md:w-5 text-gray-400"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                 />
//               </svg>
//             </div>
//             <button
//               onClick={handleLogout}
//               className="px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-red-500 to-rose-600 text-white rounded-lg md:rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-sm md:text-base flex items-center justify-center gap-1.5 "
//             >
//               <svg
//                 className="w-4 h-4 md:w-5 md:h-5 text-white"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
//                 />
//               </svg>
//               <span className="hidden md:inline">Logout</span>
//             </button>
//           </div>
//         </div>

//         {/* Products Table */}
//         <div className="bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-lg overflow-x-auto border border-gray-100">
//           <table className="w-full min-w-[600px]">
//             <thead className="bg-gradient-to-r from-purple-500 to-blue-400">
//               <tr>
//                 {["Image", "Name", "Category", "Price", "Stock", "Rating"].map((header) => (
//                   <th
//                     key={header}
//                     className="px-4 py-3 md:px-6 md:py-5 text-left text-white font-semibold text-xs md:text-sm uppercase tracking-wider"
//                   >
//                     {header}
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-100">
//               {filteredProducts.length > 0 ? (
//                 filteredProducts.map((product) => (
//                   <tr
//                     key={product.id}
//                     className="hover:bg-gray-50/80 transition-colors duration-200 group"
//                   >
//                     <td className="px-4 py-2 md:px-6 md:py-4">
//                       <div className="h-10 w-10 md:h-14 md:w-14 rounded-lg overflow-hidden border border-white shadow-sm relative">
//                         <Image
//                           src={product.imageUrl || "/placeholder.jpg"}
//                           alt={product.name}
//                           layout="fill"
//                           objectFit="cover"
//                           className="group-hover:scale-105 transition-transform duration-300"
//                         />
//                       </div>
//                     </td>
//                     <td className="px-4 py-2 md:px-6 md:py-4 font-medium text-gray-800 text-sm md:text-base">
//                       {product.name}
//                     </td>
//                     <td className="px-4 py-2 md:px-6 md:py-4">
//                       <span className="px-2 py-1 md:px-3 md:py-1 bg-purple-100 text-purple-800 rounded-full text-xs md:text-sm">
//                         {product.categoryName || "Uncategorized"}
//                       </span>
//                     </td>
//                     <td className="px-4 py-2 md:px-6 md:py-4 font-semibold text-blue-600 text-sm md:text-base">
//                       ${product.price.toFixed(2)}
//                     </td>
//                     <td className="px-4 py-2 md:px-6 md:py-4">
//                       <div className="flex items-center">
//                         <span className="mr-2 text-xs md:text-sm">{product.stock}</span>
//                         <div className="hidden md:block h-2 w-20 bg-gray-200 rounded-full overflow-hidden">
//                           <div
//                             className="h-full bg-green-500"
//                             style={{ width: `${(product.stock / 100) * 100}%` }}
//                           />
//                         </div>
//                       </div>
//                     </td>
//                     <td className="px-4 py-2 md:px-6 md:py-4">
//                       <div className="flex items-center text-sm md:text-base">
//                         <span className="text-yellow-500 mr-1">★</span>
//                         <span className="font-medium">
//                           {product.rating.rate || "N/A"}
//                         </span>
//                         <span className="text-gray-400 ml-1 text-xs md:text-sm">
//                           ({product.rating.count || 0})
//                         </span>
//                       </div>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan={6} className="px-6 py-16 md:py-24 text-center">
//                     <div className="flex flex-col items-center justify-center text-gray-400">
//                       <svg
//                         className="w-12 h-12 md:w-16 md:h-16 mb-3 md:mb-4"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={1.5}
//                           d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                         />
//                       </svg>
//                       <p className="text-lg md:text-xl font-medium">No products found</p>
//                       <p className="mt-1 text-xs md:text-sm">Try adjusting your search criteria</p>
//                     </div>
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </main>
//   </div>
//   );
// }

















































// 'use client';

// import { useEffect, useState } from 'react';
// import { client } from '@/sanity/lib/client';
// import ConditionalSideBar from '@/components/ConditionalSideBar';

// interface Product {
//   _id: string;
//   name: string;
//   type: string;
//   fuelCapacity: string;
//   transmission: string;
//   seatingCapacity: number;
//   pricePerDay: number;
//   originalprice: number;
//   tags: string[];
//   sizes: string[];
//   imageUrl: string;
// }

// const AdminPanel = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const query = `*[_type == "product"] [5..16]{ 
//           _id, 
//           name, 
//           type, 
//           fuelCapacity, 
//           transmission, 
//           seatingCapacity, 
//           pricePerDay, 
//           originalprice, 
//           tags, 
//           sizes, 
//           "imageUrl": image.asset->url
//         }`;
//         const data = await client.fetch(query);
//         setProducts(data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   // Function to handle editing a product
//   const handleEdit = (product: Product) => {
//     alert(`Edit Product: ${product.name}`);
//     // You can replace this with a modal or form to update product details
//   };

//   // Function to handle removing a product
//   const handleRemove = (productId: string) => {
//     const confirmDelete = window.confirm('Are you sure you want to remove this product?');
//     if (confirmDelete) {
//       setProducts((prevProducts) => prevProducts.filter((product) => product._id !== productId));
//     }
//   };

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <div className={`${sidebarOpen ? 'w-64' : 'w-0'} transition-all`}>
//         <ConditionalSideBar />
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-5">
//         <h1 className="text-2xl font-bold mb-4">Admin Panel - My Cars</h1>

//         {loading ? (
//           <p>Loading products...</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {products.map((product) => (
//               <div key={product._id} className="border rounded-lg shadow-lg p-4 bg-white">
//                 <img
//                   src={product.imageUrl}
//                   alt={product.name}
//                   className="w-full h-20 object-cover rounded-md mb-2"
//                   onError={(e) => (e.currentTarget.src = '/fallback-image.jpg')}
//                 />
//                 <h2 className="text-lg font-bold">{product.name}</h2>
//                 <p className="text-gray-600">{product.type}</p>
//                 <p className="text-blue-500 font-semibold">${product.pricePerDay}/day</p>
//                 <p className="text-gray-600">Fuel: {product.fuelCapacity}</p>
//                 <p className="text-gray-600">Seats: {product.seatingCapacity}</p>
//                 <p className="text-gray-600">Transmission: {product.transmission}</p>
//                 <p className="text-green-500">Original Price: ${product.originalprice}</p>

//                 {/* Buttons */}
//                 <div className="mt-4 flex gap-2">
//                   <button
//                     className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
//                     onClick={() => handleEdit(product)}
//                   >
//                     Edit
//                   </button>
//                   <button
//                     className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//                     onClick={() => handleRemove(product._id)}
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminPanel;








































'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Import router
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import ConditionalSideBar from '@/components/ConditionalSideBar';

interface Product {
  _id: string;
  name: string;
  type: string;
  fuelCapacity: string;
  transmission: string;
  seatingCapacity: number;
  pricePerDay: number;
  originalprice: number;
  tags: string[];
  sizes: string[];
  imageUrl: string;
}

const AdminPanel = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [sidebarOpen] = useState<boolean>(true);
  const router = useRouter(); // Use Next.js router

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "product"] [5..16]{ 
          _id, 
          name, 
          type, 
          fuelCapacity, 
          transmission, 
          seatingCapacity, 
          pricePerDay, 
          originalprice, 
          tags, 
          sizes, 
          "imageUrl": image.asset->url
        }`;
        const data = await client.fetch(query);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Navigate to edit page
  const handleEdit = (productId: string) => {
    router.push(`/edit/${productId}`);
  };

  // Remove product
  const handleRemove = (productId: string) => {
    const confirmDelete = window.confirm('Are you sure you want to remove this product?');
    if (confirmDelete) {
      setProducts((prevProducts) => prevProducts.filter((product) => product._id !== productId));
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-16'} transition-all md:block hidden`}> 
        <ConditionalSideBar />
      </div>
      <div className="flex-1 p-5 w-full">
        <h1 className="text-2xl font-bold mb-4">Admin Panel - My Cars</h1>

        {loading ? (
          <p>Loading products...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product._id} className="border rounded-lg shadow-lg p-4 bg-white">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  height={400}
                  width={300}
                  className="w-full h-24 object-cover rounded-md mb-2"
                  onError={(e) => (e.currentTarget.src = '/fallback-image.jpg')}
                />
                <h2 className="text-lg font-bold">{product.name}</h2>
                <p className="text-gray-600">{product.type}</p>
                <p className="text-blue-500 font-semibold">${product.pricePerDay}/day</p>
                <p className="text-gray-600">Fuel: {product.fuelCapacity}</p>
                <p className="text-gray-600">Seats: {product.seatingCapacity}</p>
                <p className="text-gray-600">Transmission: {product.transmission}</p>
                <p className="text-green-500">Original Price: ${product.originalprice}</p>

                {/* Buttons */}
                <div className="mt-4 flex gap-2">
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    onClick={() => handleEdit(product._id)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    onClick={() => handleRemove(product._id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;

























