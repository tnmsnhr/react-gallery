import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({selectedImage, setSelectedImage})=>{

    const handleClick =(e)=>{
        if(e.target.classList.contains('backdrop')){
            console.log(e.target.classList)
            setSelectedImage(null)
        }
    }

    return (
        <motion.div className='backdrop'
        initial={{opacity:0}}
        animate={{opacity:1}}
        onClick={handleClick}>
            < motion.img initial={{y:'-100vh'}} animate={{y:0}} src={selectedImage} alt='Enlarged Pic' />
        </motion.div>
    )
}

export default Modal;