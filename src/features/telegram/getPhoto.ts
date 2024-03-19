import axios from 'axios';

const token = '6901623540:AAFHqjl42KxoY_VU9RppOIaSg1lNeHz6Byk';

export async function getUserAvatarURL(userId: number | undefined) {
  try {
    const response = await axios.get(`https://api.telegram.org/bot${token}/getUserProfilePhotos?user_id=${userId}`);

    if (response.data.ok) {
      const photos = response.data.result.photos;
      if (photos.length > 0) {
        const fileId = photos[0][0].file_id; // Первое фото пользователя
        const fileResponse = await axios.get(`https://api.telegram.org/bot${token}/getFile?file_id=${fileId}`);
        return `https://api.telegram.org/file/bot${token}/${fileResponse.data.result.file_path}`;
      }
    }
  } catch (error) {
    console.error('Произошла ошибка:', error);
  }

  return null;
}


