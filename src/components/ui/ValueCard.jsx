import { motion } from "framer-motion";

const ValueCard = ({title, description, icon: Icon}) => {
  return (
      <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.2 }} className='bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-lg transition'>
          <div className="w-12 h-12 rounded-lg flex items-center justify-center">

            <Icon className="text-2xl text-blue-500"/>

          </div>
          <h3 className="text-xl font-semibold text-slate-900 mb-3">
              {title}
          </h3>
          <p className="text-slate-600 leading-relaxed">
              {description}
          </p>
      </motion.div>
  )
}

export default ValueCard
