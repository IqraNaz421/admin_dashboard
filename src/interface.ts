// interface Dimensions {
//     height: number;
//     depth: number;
//     width: number;
//   }
  
//   interface Rating {
//     rate: number;
//     count: number;
//   }
  
//  export interface Product {
//     tags: string[];
//     dimensions: Dimensions;
//     description: string;
//     slug: string;
//     rating: Rating;
//     originalPrice: number;
//     categoryName: string;
//     imageUrl: string;
//     name: string;
//     price: number;
//     stock: number;
//     id: number;
//     discount: number;
//   }
  





interface Dimensions {
  height: number;
  depth: number;
  width: number;
}

interface Rating {
  rate: number;
  count: number;
}

export interface Product {
  tags: string[];
  dimensions: Dimensions;
  description: string;
  slug: string;
  rating: Rating;
  originalPrice: number;
  categoryName: string;
  imageUrl: string;
  name: string;
  price: number;
  stock: number;
  id: string; // Changed to string because Sanity usually returns an ID as string
  discount: number;
}
