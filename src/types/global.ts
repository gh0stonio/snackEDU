export type Product = {
  name: string;
  brand: string;
  serving_size: string;
  nutrient_levels: string;
  nutriscore: string;
  nova_group: string;
  description: string;
  categories: string;
};

export type Vote = {
  barcode: string;
  vote: boolean;
  user: string;
};
