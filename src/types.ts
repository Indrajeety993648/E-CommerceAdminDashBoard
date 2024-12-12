// src/types.ts

export interface OrderItemType {
    name: string;
    photo: string;
    _id: string;
    quantity: number;
    price: number;
  }
  
  export interface OrderType {
    name: string;
    address: string;
    city: string;
    state: string;
    country: string;
    pinCode: number;
    status: "Processing" | "Shipped" | "Delivered"; 
    subtotal: number;
    discount: number;
    shippingCharges: number;
    tax: number;
    total: number;
    orderItems: OrderItemType[];
    _id: string;
  }