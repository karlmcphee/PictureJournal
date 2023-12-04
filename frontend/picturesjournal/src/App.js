import './App.css';
import PictureForm from './PictureForm';
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';
import ViewPictures from './ViewPictures'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
      <Route path="/" element={<Navigate replace to="/home"/>} />
        <Route path="/home" element={<ViewPictures />} />
        <Route path="/PictureForm" element={<PictureForm />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
