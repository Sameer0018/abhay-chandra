import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai"
import { motion } from 'framer-motion'

export default function SocialSection() {
    return (
        <div className='flex space-x-4'>

            <motion.button 
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.2 }}
            onClick={() => window.open("https://github.com/abhayChandra01", '_blank', 'noopener,noreferrer')}>
                <AiFillGithub size={25} color='white'/>
            </motion.button>
            <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.2 }} 
            onClick={() => window.open("https://www.linkedin.com/in/abhay-chandra", '_blank', 'noopener,noreferrer')}>
                <AiFillLinkedin size={25} color='white' />
            </motion.button>
            <motion.button 
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.2 }}
            onClick={() => window.open("https://twitter.com/deckard_abhay", '_blank', 'noopener,noreferrer')}>
                <AiFillTwitterCircle size={25} color='white' />
            </motion.button>
        </div>
    )
}
