import { useState } from 'react';
import './cloud.scss';
import Axios from 'axios';

const Cloud = () => {

    const [image, setImage] = useState("");

    const uploadImage = (files: any) => {
        console.log(files[0]);
        const formData= new FormData();
        formData.append('file', files[0]);
        formData.append('upload_preset', 'mlcdbzcq');
        Axios.post('https://api.cloudinary.com/v1_1/wcv/image/upload', formData).then((response) =>{
            setImage(response.data.url);
        })
    }

  return (
    <div className="main--cloud">
        <input type="file" onChange={(event) => {uploadImage(event.target.files)}} />
        {image != "" ? 
            <img src={image} alt="" /> : null
        }
    </div>
  )
}

export default Cloud;