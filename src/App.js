import React, { useState} from 'react';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import Navbar from './comps/Navigation/Navbar';
import { Route } from 'react-router-dom';
import {LikedShots} from './comps/LikedShots/LikedShots';

function App() {

  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div className="App">
      <Navbar />
      <Route path='/' exact component={UploadForm} />
      <Route path='/' exact render={()=><ImageGrid  setSelectedImage={setSelectedImage}/>} />
      <Route path='/react-gallery' exact render={()=><ImageGrid  setSelectedImage={setSelectedImage}/>} />
      {selectedImage && <Modal selectedImage={selectedImage}
      setSelectedImage={setSelectedImage}/>}
      
      <Route path='/liked-shots' component={LikedShots}/>
    </div>
  );
}

export default App;
