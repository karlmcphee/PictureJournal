import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import PictureList from './PictureList'
import { useNavigate } from "react-router-dom";
import './PictureList.css';

const ViewPictures = () => {
    const [imageURLs, setImageURLs] = useState([]);
    const navigate = useNavigate();
    const loadImages = async () => {
    const n = await fetch("http://localhost:9000/pictures/getphotos");
    const n2 = await n.json()
    setImageURLs(n2)
    }

  return (
    <div className='title1'><h1>Picture book</h1><br/>
        <Button varient='Primary' onClick={() => navigate('/PictureForm')}>Add New Picture</Button> <Button varient='Primary' onClick={loadImages}>Load Pictures</Button>
        <br/><br/><hr className='hr1'/>
    <PictureList imageURLs={imageURLs}/>
    </div>
  )
}

export default ViewPictures