import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";


function SolutionsCard({
    solution
}) {


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
            overflow-hidden
            border
            border-slate-200
            shadow-sm
            "

        >


            {/* Image */}

            <div className="
            h-56
            overflow-hidden
            ">

                <img

                    src={solution.images[0]}

                    alt={solution.title}

                    loading="lazy"

                    className="
                    w-full
                    h-full
                    object-cover
                    "

                />

            </div>



            {/* Content */}

            <div className="
            p-6
            ">


                <p className="
                text-sm
                font-semibold
                text-blue-600
                uppercase
                tracking-wide
                ">

                    {solution.category}

                </p>



                <h3 className="
                mt-2
                text-2xl
                font-bold
                text-slate-900
                ">

                    {solution.title}

                </h3>



                <p className="
                mt-4
                text-slate-600
                leading-relaxed
                ">

                    {solution.description}

                </p>



                <ul className="
                mt-5
                space-y-2
                ">


                    {
                        solution.features.map((feature) => (
                            <li

                                key={feature}

                                className="
                                text-slate-600
                                flex items-center
                                gap-2
                                "

                            >

                                <FaCheckCircle className="text-blue-500" />


                                {feature}


                            </li>
                        ))
                    }


                </ul>



                <div className="
                mt-6
                flex
                flex-wrap
                gap-2
                ">


                    {
    Object.values(solution.technology)
    .flat()
    .map((tech) => (

        <span

            key={tech}

            className="
            bg-slate-100
            px-3
            py-1
            rounded-full
            text-sm
            text-slate-700
            "

        >

            {tech}

        </span>

    ))
}


                </div>



                <Link

                    to={`/solutions/${solution.id}`}

                    className="
                    inline-block
                    mt-6
                    text-blue-600
                    font-semibold
                    hover:text-blue-700
                    "

                >

                    View Solution →

                </Link>


            </div>


        </motion.div>

    );

}


export default SolutionsCard;