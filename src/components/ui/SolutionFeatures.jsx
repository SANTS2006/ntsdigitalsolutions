function SolutionFeatures({
    features
}) {

    return (

        <div className="
        grid
        md:grid-cols-2
        gap-6
        ">

            {
                features.map((feature, index) => (

                    <div

                        key={index}

                        className="
                        flex
                        gap-3
                        items-start
                        bg-slate-50
                        rounded-xl
                        p-5
                        border
                        border-slate-200
                        "

                    >

                        <span className="
                        text-emerald-500
                        text-xl
                        ">

                            ✓

                        </span>


                        <p className="
                        text-slate-700
                        ">

                            {feature}

                        </p>


                    </div>

                ))
            }

        </div>

    );

}


export default SolutionFeatures;