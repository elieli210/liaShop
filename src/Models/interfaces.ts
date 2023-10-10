export interface I_Category {
  children: I_Category[];
  description: string;
  id: string;
  image: null | string;
  name: string;
}

export interface I_ProductItemsResponse {
  list: List[];
  page: number;
  pagecount: number;
  totalcount: number;
}

export interface List {
  arch_list: any[];
  arch_summary: string;
  arranged_categories: ArrangedCategories;
  categories: Category[];
  id: number;
  inventories: Inventory[];
  isNew: boolean;
  is_available: boolean;
  is_package: boolean;
  is_voteable: boolean;
  large_pic: string;
  maxcount: number;
  medium_pic: string;
  price: Price;
  size: null;
  small_pic: string;
  title: string;
  volume: string;
  voteable_order_id: string;
  weight: string;
}

export interface ArrangedCategories {
  child: Child;
  id: string;
  name: string;
}

export interface Child {
  id: string;
  name: string;
}

export interface Category {
  id: number;
  name: string;
  parent_id: string;
}

export interface Inventory {
  product_count: number;
  warehouse_name: string;
}

export interface Price {
  final_price: number;
  price: string;
  production_price: string;
}
