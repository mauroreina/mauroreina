import { motion } from 'framer-motion';

export default function SitemarkIcon() {
  return (
    <motion.h4
        style={{ fontSize: 15 }}
        animate={{
          color: ["#000", "#ff2323", "#000"]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        MAURICIO REINA {'</>'}
    </motion.h4>
  );
}