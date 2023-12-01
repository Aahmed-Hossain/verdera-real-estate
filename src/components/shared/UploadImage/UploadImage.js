import axios from "axios";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

export const  uploadImg = async (image) => {
    const formData = new FormData();
    formData.append('image', image)
    const {data} = await axios.post(image_hosting_api,formData)
    return data;
    
}
