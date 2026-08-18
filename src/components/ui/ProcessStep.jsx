import { motion } from "framer-motion";


function ProcessStep({
    icon: Icon,
    title,
    description
}) {


    return (

        <motion.div

            whileHover={{
                y: -5
            }}

            transition={{
                duration: 0.2
            }}

            className="
            bg-white
            rounded-xl
            border
            border-slate-200
            p-6
            "

        >


            <div className="
            rounded-full
            text-white
            flex
            items-center
            font-bold
            mb-4
            ">

                <Icon className="text-blue-500 text-2xl"/>

            </div>



            <h3 className="
            text-xl
            font-semibold
            text-slate-900
            mb-3
            ">

                {title}

            </h3>



            <p className="
            text-slate-600
            leading-relaxed
            ">

                {description}

            </p>


        </motion.div>

    );

}


export default ProcessStep;