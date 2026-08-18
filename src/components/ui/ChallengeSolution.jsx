function ChallengeSolution({
    challenge,
    solution
}) {

    return (

        <div className="
        grid
        md:grid-cols-2
        gap-8
        ">


            <div className="
            bg-slate-50
            rounded-xl
            p-8
            border
            border-slate-200
            ">

                <h3 className="
                text-2xl
                font-bold
                text-slate-900
                mb-4
                ">

                    The Challenge

                </h3>


                <p className="
                text-slate-600
                leading-relaxed
                ">

                    {challenge}

                </p>


            </div>



            <div className="
            bg-blue-50
            rounded-xl
            p-8
            border
            border-blue-100
            ">


                <h3 className="
                text-2xl
                font-bold
                text-slate-900
                mb-4
                ">

                    Our Solution

                </h3>


                <p className="
                text-slate-600
                leading-relaxed
                ">

                    {solution}

                </p>


            </div>


        </div>

    );

}


export default ChallengeSolution;