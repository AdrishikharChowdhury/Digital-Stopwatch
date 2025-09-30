import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStop, faBookmark, faArrowRotateLeft, faTrash } from '@fortawesome/free-solid-svg-icons';
import { motion } from "motion/react"


const Intervals = ({ intervals,formatTime, deleteInterval }) => {
  return (
    <div className={`intervals flex-col w-full sm:gap-6 gap-4 ${intervals.length === 0 ? 'hidden' : 'flex'}`}>
            {intervals.map((elem, idx) => (
                <div className='flex sm:px-4 px-2 w-full justify-between items-center drop-shadow-[0_0_0.9rem_rgba(25,208,29,0.9)]' key={idx}>
                    <p className='sm:text-xl text-md'>{idx+1}.</p>
                    <p className='sm:text-xl text-md'>{formatTime(elem)}</p>
                    <motion.button 
                    className='cursor-pointer sm:size-10 size-5 sm:text-lg text-sm flex justify-center items-center bg-red-600 rounded-full border-2 sm:p-6 p-4'
                    onClick={()=>deleteInterval(idx)}
                    whileTap={{
                        scale:0.8
                    }}
                    >
                        <FontAwesomeIcon icon={faTrash} />
                    </motion.button>
                </div>
            ))}
        </div>
  )
}

export default Intervals