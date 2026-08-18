import { motion } from "framer-motion";


function SolutionGallery({
    images
}) {


    return (

        <div className="
        grid
        md:grid-cols-2
        gap-6
        ">

            {
                images.map((image, index) => (

                    <motion.div

                        key={index}

                        initial={{
                            opacity: 0,
                            y: 20
                        }}

                        whileInView={{
                            opacity: 1,
                            y: 0
                        }}

                        viewport={{
                            once: true
                        }}

                        transition={{
                            duration: 0.5,
                            delay: index * 0.1
                        }}

                        className="
                        rounded-xl
                        overflow-hidden
                        border
                        border-slate-200
                        shadow-sm
                        "

                    >

                        <img

                            src={image}

                            loading="lazy"

                            alt="Solution screenshot"

                            className="
                            w-full
                            h-auto
                            object-cover
                            "

                        />


                    </motion.div>

                ))
            }

        </div>

    );

}


export default SolutionGallery;