interface Product {
    id: number;
    title: string;
    image: string;
    price: number;
  }
  
  export async function fetchProducts(): Promise<Product[]> {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      return data;
    } catch (error: any) {
      throw new Error('Error fetching products: ' + error.message);
    }
  }