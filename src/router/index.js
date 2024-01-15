import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.js';
import About from '../pages/About.js';
import Contact from '../pages/Contact.js';
import GalleryUser from '../pages/Gallery_user.js';

function MyRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/gallery_user" element={<GalleryUser />} /> 
        </Routes>
    );
}

export default MyRouter;


