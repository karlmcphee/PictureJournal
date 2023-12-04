import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';

const PictureForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState();
  const navigate = useNavigate();
  const uploadFile = async (e) => {
    e.preventDefault();
    console.log('hi')
    if (selectedFile) {
      console.log("Uploading file...");
  
      const formData = new FormData();
      formData.append("photo", selectedFile); 
      formData.append('name', 'ABC');
      console.log(selectedFile, 'ABC');
  
      try {
        const result = await fetch("http://localhost:9000/pictures/upload", {
          method: "POST",
          body: formData,
        });
  
        const data = await result.json();
  
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
  }
  return (
<div><Container><div style={{color: 'purple'}}><h1>Upload a picture</h1></div><br/><Form>
    <Form.Group className="mb-3" controlId="formBasicFileID">
      <Form.Label>Select an image</Form.Label>
      <Form.Control type="file" placeholder="File to upload" onChange={(e) => setSelectedFile(e.target.files[0])}/>
    </Form.Group>
    
    <Form.Group className="mb-3" controlId="formFileName">
      <Form.Label>Picture Name</Form.Label>
      <Form.Control type="text" placeholder="Picture name" onChange={(e) => setFileName(e.target.value)}/>
    </Form.Group>
    <Button variant="danger" onClick={() => navigate('/home')}>Cancel</Button>{'    '}
    <Button onClick={uploadFile} variant="primary" type="submit">
      Submit </Button>
    </Form></Container></div>
  )
}

export default PictureForm
