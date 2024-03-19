import axios from 'axios';

export const getCategories = async () => {
  const url = 'https://127.0.0.1:80/api/category'
  try {
    const response = await axios.get(url);
    const data = response?.data;
    return(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}