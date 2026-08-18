import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

function IndustryCard({
    industry
}) {
    const Icon = industry.icon;

    return (

        <motion.div

            whileHover={{
                y: -8
            }}

            transition={{
                duration: 0.2
            }}

            className="
            bg-white
            rounded-2xl
            p-8
            border
            border-slate-200
            shadow-sm
            "

        >

            {/* Icon */}

            <div className="
            text-4xl
            mb-6
            ">
                <Icon className="text-blue-500" />

            </div>


            {/* Title */}

            <h3 className="
            text-2xl
            font-bold
            text-slate-900
            ">

                {industry.title}

            </h3>


            {/* Description */}

            <p className="
            mt-4
            text-slate-600
            leading-relaxed
            ">

                {industry.description}

            </p>



            {/* Solutions */}

            <ul className="
            mt-6
            space-y-3
            ">


                {
                    industry.solutions.map((solution) => (

                        <li

                            key={solution}

                            className="
                            flex items-center gap-1
                            text-slate-700
                            "

                        >
                            <FaCheckCircle className="text-blue-500" />
                            {solution}


                        </li>

                    ))
                }


            </ul>


        </motion.div>

    );

}


export default IndustryCard;