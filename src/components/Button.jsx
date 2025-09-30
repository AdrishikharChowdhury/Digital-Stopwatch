import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStop, faBookmark, faArrowRotateLeft, faTrash } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion"

const Button = ({onClick, icon, color}) => {
  return (
    <motion.button 
    onClick={onClick} 
    className={`rounded-full flex justify-center items-center border-2 text-center sm:size-15 size-10 sm:p-5 p-4 cursor-pointer ${color}`}
    whileHover={{
        y:-5,
        transition:{
            duration: 0.3,
        }
    }}
    whileTap={{
        scale:0.8
    }}
    >
        <FontAwesomeIcon icon={icon} />
    </motion.button>
  )
}

export default Button