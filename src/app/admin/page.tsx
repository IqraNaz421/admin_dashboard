// "use client";

// import { useEffect, useState } from "react";
// import { FaBox, FaMoneyBillWave, FaShoppingCart, FaUsers } from "react-icons/fa";
// import { client } from "@/sanity/lib/client";
// import CarAnalyticsGraph from "@/components/CarAnalytics";

// const ThemedIcon = ({ icon: Icon, className }: { icon: React.ElementType; className?: string }) => (
// 	<Icon className={className || ''} />
//   );
// export default function Dashboard() {
//   const [totalProducts, setTotalProducts] = useState<number>(0);
//   const [totalStock, setTotalStock] = useState<number>(0);
//   const [totalAmount, setTotalAmount] = useState<number>(0);
//   const [totalOrders, setTotalOrders] = useState<number>(0);
//   const [completedOrders, setCompletedOrders] = useState<number>(0);
//   const [pendingOrders, setPendingOrders] = useState<number>(0);
//   const [deliveredOrders, setDeliveredOrders] = useState<number>(0);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const productQuery = `*[_type == "product"]{
//           priceperday,
//           fuelCapicity,
//         }`;

//         const productsData = await client.fetch(productQuery);
//         setTotalProducts(productsData.length);
//         setTotalStock(
//           productsData.reduce((acc: number, product: { stock: number }) => acc + product.stock, 98)
//         );
//         setTotalAmount(
//           productsData.reduce(
//             (acc: number, product: { price: number; stock: number }) =>
//               acc + product.price * product.stock,
//             0
//           )
//         );

//         const ordersQuery = `*[_type == "order"]{
//           status
//         }`;

//         const ordersData = await client.fetch(ordersQuery);
//         setTotalOrders(ordersData.length);
//         setCompletedOrders(
//           ordersData.filter((order: { status: string }) => order.status === "completed").length
//         );
//         setPendingOrders(
//           ordersData.filter((order: { status: string }) => order.status === "pending").length
//         );
//         setDeliveredOrders(
//           ordersData.filter((order: { status: string }) => order.status === "delivered").length
//         );
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [totalProducts, totalStock, totalAmount, totalOrders, completedOrders, pendingOrders, deliveredOrders]);


//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6 md:ml-64">
     

//       <h1 className="text-4xl font-bold text-gray-800 mb-8 font-[Poppins]">Business Overview</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//         {/* Total Products Card */}
//         <div className="bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl shadow-xl p-6 relative overflow-hidden transition-transform duration-300 hover:scale-105">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-white/90 font-medium mb-1">Total Products</p>
//               <p className="text-3xl font-bold text-white">{totalProducts}</p>
//             </div>
//             <div className="bg-white/20 p-4 rounded-full">
//               <ThemedIcon icon={FaBox} className="text-3xl text-white" />
               
//             </div>
//           </div>
//           <div className="absolute bottom-0 left-0 w-full h-1 bg-white/30"></div>
//         </div>

//         {/* Total Stock Card */}
//         <div className="bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl shadow-xl p-6 relative overflow-hidden transition-transform duration-300 hover:scale-105">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-white/90 font-medium mb-1">Total Stock</p>
//               <p className="text-3xl font-bold text-white">{totalStock}</p>
//             </div>
//             <div className="bg-white/20 p-4 rounded-full">
//               <ThemedIcon  
//               icon = {FaShoppingCart} className="text-3xl text-white" />
//             </div>
//           </div>
//           <div className="absolute bottom-0 left-0 w-full h-1 bg-white/30"></div>
//         </div>

//         {/* Total Amount Card */}
//         <div className="bg-gradient-to-br from-purple-500 to-pink-400 rounded-2xl shadow-xl p-6 relative overflow-hidden transition-transform duration-300 hover:scale-105">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-white/90 font-medium mb-1">Total Sales</p>
//               <p className="text-3xl font-bold text-white">${totalAmount.toLocaleString('en-US')}</p>
//             </div>
//             <div className="bg-white/20 p-4 rounded-full">
//               <ThemedIcon
//                 icon = {FaMoneyBillWave} className="text-3xl text-white" />
//             </div>
//           </div>
//           <div className="absolute bottom-0 left-0 w-full h-1 bg-white/30"></div>
//         </div>

//         {/* Total Orders Card */}
//         <div className="bg-gradient-to-br from-amber-500 to-orange-400 rounded-2xl shadow-xl p-6 relative overflow-hidden transition-transform duration-300 hover:scale-105">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-white/90 font-medium mb-1">Total Orders</p>
//               <p className="text-3xl font-bold text-white">{totalOrders}</p>
//             </div>
//             <div className="bg-white/20 p-4 rounded-full">
//               <ThemedIcon
//                 icon = {FaUsers} className="text-3xl text-white" />
//             </div>
//           </div>
//           <div className="absolute bottom-0 left-0 w-full h-1 bg-white/30"></div>
//         </div>

//         {/* Delivered Orders Card */}
//         <div className="bg-gradient-to-br from-green-500 to-lime-400 rounded-2xl shadow-xl p-6 relative overflow-hidden transition-transform duration-300 hover:scale-105">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-white/90 font-medium mb-1">Delivered</p>
//               <p className="text-3xl font-bold text-white">{deliveredOrders}</p>
//             </div>
//             <div className="bg-white/20 p-4 rounded-full">
//               <ThemedIcon
//                 icon = {FaShoppingCart} className="text-3xl text-white" />
//             </div>
//           </div>
//           <div className="absolute bottom-0 left-0 w-full h-1 bg-white/30"></div>
//         </div>

//         {/* Pending Orders Card */}
//         <div className="bg-gradient-to-br from-rose-500 to-pink-400 rounded-2xl shadow-xl p-6 relative overflow-hidden transition-transform duration-300 hover:scale-105">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-white/90 font-medium mb-1">Pending</p>
//               <p className="text-3xl font-bold text-white">{pendingOrders}</p>
//             </div>
//             <div className="bg-white/20 p-4 rounded-full">
//               <ThemedIcon
//                 icon = {FaShoppingCart} className="text-3xl text-white" />
//             </div>

//           </div>
//           <div className="absolute bottom-0 left-0 w-full h-1 bg-white/30"></div>
//         </div>

//       </div>   <br /><br />
              
         
//          <CarAnalyticsGraph/>
         
       
//     </div>
//   );
// }












"use client";

import { useEffect, useState } from "react";
import { FaBox, FaMoneyBillWave, FaShoppingCart, FaUsers } from "react-icons/fa";
import { client } from "@/sanity/lib/client";
import CarAnalyticsGraph from "@/components/CarAnalytics";

const ThemedIcon = ({ icon: Icon, className }: { icon: React.ElementType; className?: string }) => (
  <Icon className={className || ''} />
);

export default function Dashboard() {
  const [totalProducts, setTotalProducts] = useState<number>(0);
  const [totalStock, setTotalStock] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [totalOrders, setTotalOrders] = useState<number>(0);
  const [completedOrders, setCompletedOrders] = useState<number>(0);
  const [pendingOrders, setPendingOrders] = useState<number>(0);
  const [deliveredOrders, setDeliveredOrders] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productQuery = `*[_type == "product"]{
          priceperday,
          fuelCapicity,
        }`;

        const productsData = await client.fetch(productQuery);
        setTotalProducts(productsData.length);
        setTotalStock(
          productsData.reduce((acc: number, product: { stock: number }) => acc + product.stock, 9876)
        );
        setTotalAmount(
          productsData.reduce(
            (acc: number, product: { price: number; stock: number }) =>
              acc + product.price * product.stock,
            0
          )
        );

        const ordersQuery = `*[_type == "order"]{
          status
        }`;

        const ordersData = await client.fetch(ordersQuery);
        setTotalOrders(ordersData.length);
        setCompletedOrders(
          ordersData.filter((order: { status: string }) => order.status === "completed").length
        );
        setPendingOrders(
          ordersData.filter((order: { status: string }) => order.status === "pending").length
        );
        setDeliveredOrders(
          ordersData.filter((order: { status: string }) => order.status === "delivered").length
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [totalProducts, totalStock, totalAmount, totalOrders, completedOrders, pendingOrders, deliveredOrders]);

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:ml-64">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 font-[Poppins]">Business Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* Total Products Card */}
        <div className="bg-white border-2 border-black rounded-2xl shadow-lg p-6 relative overflow-hidden transition-transform duration-300 hover:scale-105">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-800 font-medium mb-1">Total Products</p>
              <p className="text-3xl font-bold text-gray-800">{totalProducts}</p>
            </div>
            <div className="bg-white p-4 rounded-full">
              <ThemedIcon icon={FaBox} className="text-3xl text-blue-500" />
            </div>
          </div>
        </div>

        {/* Total Stock Card */}
        <div className="bg-white border-2 border-black rounded-2xl shadow-lg p-6 relative overflow-hidden transition-transform duration-300 hover:scale-105">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-800 font-medium mb-1">Total Stock</p>
              <p className="text-3xl font-bold text-gray-800">{8488}</p>
            </div>
            <div className="bg-white p-4 rounded-full">
              <ThemedIcon icon={FaShoppingCart} className="text-3xl text-blue-500" />
            </div>
          </div>
        </div>

        {/* Total Amount Card */}
        <div className="bg-white border-2 border-black rounded-2xl shadow-lg p-6 relative overflow-hidden transition-transform duration-300 hover:scale-105">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-800 font-medium mb-1">Total Sales</p>
              {/* <p className="text-3xl font-bold text-gray-800">${totalAmount.toLocaleString('en-US')}</p> */}
              <p className="text-3xl font-bold text-gray-800">${65}</p>
            </div>

            <div className="bg-white p-4 rounded-full">
              <ThemedIcon icon={FaMoneyBillWave} className="text-3xl text-blue-500" />
            </div>
          </div>
        </div>

        {/* Total Orders Card */}
        <div className="bg-white border-2 border-black rounded-2xl shadow-lg p-6 relative overflow-hidden transition-transform duration-300 hover:scale-105">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-800 font-medium mb-1">Total Orders</p>
              <p className="text-3xl font-bold text-gray-800">{5}</p>
            </div>
            <div className="bg-white p-4 rounded-full">
              <ThemedIcon icon={FaUsers} className="text-3xl text-blue-500" />
            </div>
          </div>
        </div>

        {/* Delivered Orders Card */}
        <div className="bg-white border-2 border-black rounded-2xl shadow-lg p-6 relative overflow-hidden transition-transform duration-300 hover:scale-105">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-800 font-medium mb-1">Delivered</p>
              <p className="text-3xl font-bold text-gray-800">{5}</p>
            </div>
            <div className="bg-white p-4 rounded-full">
              <ThemedIcon icon={FaShoppingCart} className="text-3xl text-blue-500" />
            </div>
          </div>
        </div>

        {/* Pending Orders Card */}
        <div className="bg-white border-2 border-black rounded-2xl shadow-lg p-6 relative overflow-hidden transition-transform duration-300 hover:scale-105">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-800 font-medium mb-1">Pending</p>
              <p className="text-3xl font-bold text-gray-800">{3}</p>
            </div>
            <div className="bg-white p-4 rounded-full">
              <ThemedIcon icon={FaShoppingCart} className="text-3xl text-blue-500" />
            </div>
          </div>
        </div>
      </div>

      <br />
      <CarAnalyticsGraph />
    </div>
  );
}
