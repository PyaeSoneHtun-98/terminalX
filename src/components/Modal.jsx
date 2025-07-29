import { AnimatePresence, motion } from "framer-motion";
import { FaFacebook, FaTelegram } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const SpringModal = ({
  isOpen,
  setIsOpen,
  modalData,
}) => {

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className=" text-white bg-[#18181B] rounded-lg w-full max-w-xl shadow-xl cursor-default relative overflow-hidden"
          >
            <div className="relative z-10 py-4">
              {/* <img
                src={modalData.imageSrc}
                alt="Project Screenshot"
                className="w-full h-52 object-cover mb-4 rounded-t-lg"
              /> */}
              <h3 className="text-3xl font-bold text-center mb-2 px-6">
                {modalData.title}
              </h3>
              <div className="flex space-x-2 mb-4 justify-center">
                {modalData.languages.map((language, index) => (
                  <span key={index} className="text-indigo-300">
                    {language}
                  </span>
                ))}
              </div>
              <div className="md:p-6 p-4 text-sm md:text-base">{modalData.description}</div>
              <div className="flex justify-center gap-6 pt-3 px-4 md:px-6 pb-6">
                <motion.a 
                  href="https://www.facebook.com/share/15xC1pXdLY/?mibextid=LQQJ4d" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white hover:text-blue-500 transition-colors duration-300"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <FaFacebook size={24} />
                </motion.a>
                <motion.a 
                  href="https://t.me/terminalxedit" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white hover:text-blue-400 transition-colors duration-300"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <FaTelegram size={24} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SpringModal;
