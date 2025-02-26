import { AnimatePresence, motion } from "framer-motion";
import { CiShare1 } from "react-icons/ci";
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
            <div className="relative z-10">
              <div
                className="absolute top-2 text-lg right-2 cursor-pointer text-red-500 hover:text-white hover:bg-red-500 p-3 rounded-full"
                onClick={onClose}
              >
                <IoMdClose />
              </div>
              <img
                src={modalData.imageSrc}
                alt="Project Screenshot"
                className="w-full h-52 object-cover mb-4 rounded-t-lg"
              />
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
              <div
                className="flex gap-2 pt-3 px-4 md:px-6 w-fit items-center pb-6 cursor-pointer hover:text-indigo-500 group"
                onClick={() => window.open(modalData.demoLink, "_blank")}
              >
                <CiShare1 className="text-white text-lg group-hover:text-indigo-500" />
                <span className="text-white group-hover:text-indigo-500 text-sm">
                  View Project
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SpringModal;
