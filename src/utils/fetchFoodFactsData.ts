import axios from 'axios';

const API_URL = 'https://world.openfoodfacts.org/api/v0/product/';

export const fetchProductData = async (barcode: string): Promise<{ data: any; error?: string }> => {
  try {
    const response = await axios.get(`${API_URL}${barcode}.json`);
    return { data: response.data };
  } catch (error) {
    console.error('Error fetching product data:', error);
    return { data: null, error: 'Error fetching product data' };
  }
};
