import { motion } from "framer-motion";

const AdvantageCard = ({ title, description, icon: Icon }) => {
  return (
      <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }} className="border border-slate-200 rounded-xl p-6 bg-slate-50">
          <Icon className="text-blue-600 text-2xl" />
          <h3 className="text-xl font-demibold text-slate-900 mb-3">
              {title}
          </h3>
          <p className="text-slate-600 leading-relaxed">
              {description}
          </p>
      </motion.div>
  )
}

export default AdvantageCard
