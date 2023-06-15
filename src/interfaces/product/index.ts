import { CartItemInterface } from 'interfaces/cart-item';
import { OrderItemInterface } from 'interfaces/order-item';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface ProductInterface {
  id?: string;
  name: string;
  description?: string;
  image?: string;
  price: number;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  cart_item?: CartItemInterface[];
  order_item?: OrderItemInterface[];
  organization?: OrganizationInterface;
  _count?: {
    cart_item?: number;
    order_item?: number;
  };
}

export interface ProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  image?: string;
  organization_id?: string;
}
