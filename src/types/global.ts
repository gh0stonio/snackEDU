export type Product = {
  brand: string;
  serving_size: string;
  nutriscore: string;
  description: string;
};

export type Vote = {
  barcode: string;
  vote: 'yes' | 'no';
  user: string;
};