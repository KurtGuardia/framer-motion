import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';

const Modal = ({ showModal, setShowModal }) => {
  const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const modal = {
    hidden: {
      y: '-100vw',
      opacity: 0,
    },
    visible: {
      y: 200,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
        type: 'spring',
      },
    },
  };

  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className='backdrop'
          variants={backdrop}
          animate='visible'
          initial='hidden'
          exit='hidden'
        >
          <motion.div className='modal' variants={modal}>
            <p>Want to make another pizza?</p>
            <Link to='/'>
              <button>Start Again</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
