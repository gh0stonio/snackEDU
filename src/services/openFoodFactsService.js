// src/services/openFoodFactsService.js
import axios from 'axios';

const API_URL = 'https://world.openfoodfacts.org/api/v0/product/';

export const fetchProductData = async (barcode) => {
  try {
    const response = await axios.get(`${API_URL}${barcode}.json`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product data:', error);
    throw error;
  }
};