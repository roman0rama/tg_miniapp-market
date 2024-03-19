import axios from 'axios';

export const validateUser = async ({id, fullName}: { id: number, fullName: string }) => {
  const url = 'https://127.0.0.1:80/api/users/isValid'
  try {
    console.log(id)

    const response = await axios.post(url, {
      "userId": id,
      "fullName": fullName
    });
    const data = response?.data;
    console.log(data)
    return(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}