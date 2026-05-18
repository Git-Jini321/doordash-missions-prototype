export type MissionType = "dinner-party" | "sick-day" | "45-min-dinner" | "other";

export interface Product {
  id: string;
  merchantId: string;
  name: string;
  price: number;
  image: string;
  description?: string;
}

export interface Merchant {
  id: string;
  name: string;
  distance: string;
  deliveryWindow: string;
  image?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  reasoning: string;
}

export interface Template {
  id: string;
  name: string;
  vibe: string;
  summary: string;
  estimatedTotal: number;
  merchantCount: number;
  defaultItems: CartItem[];
}

export interface Mission {
  id: string;
  title: string;
  type: MissionType;
  date: string;
  guestCount: number;
  status: "in-progress" | "completed";
  rating?: "up" | "down";
  items: CartItem[];
}
