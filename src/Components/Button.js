import { motion } from "framer-motion";
import Link from "next/link";

const Button = () => {
  return (
    <motion.button
      className="bg-[#14b8a6] hover:bg-teal-600 text-light font-light py-2 px-4 rounded transition-all duration-300 shadow-md"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
    <Link href="mailto:gupta.rish2501@gmail.com" target={"_blank"}>
      Get in touch
      </Link>
    </motion.button>
  );
};

export default Button;
