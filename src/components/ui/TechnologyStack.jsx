function TechnologyStack({
    technology
}) {


    return (

        <div className="
        space-y-8
        ">


            {
                Object.entries(technology).map(
                    ([category, items]) => (

                        <div key={category}>


                            <h3 className="
                        text-lg
                        font-semibold
                        text-slate-900
                        capitalize
                        mb-3
                        ">

                                {category}

                            </h3>


                            <div className="
                        flex
                        flex-wrap
                        gap-3
                        ">


                                {
                                    items.map((item) => (

                                        <span

                                            key={item}

                                            className="
                                    px-4
                                    py-2
                                    bg-blue-50
                                    text-blue-700
                                    rounded-full
                                    text-sm
                                    "

                                        >

                                            {item}

                                        </span>

                                    ))
                                }


                            </div>


                        </div>

                    ))

            }


        </div>

    );

}


export default TechnologyStack;