import SectionTitle from "../ui/SectionTitle";

import ServiceAdvantageCard from "../ui/ServiceAdvantageCard";

import serviceAdvantages from "../../data/serviceAdvantages";


function WhyWorkWithNTS() {


    return (

        <section className="
        py-20
        bg-white
        ">


            <div className="
            max-w-7xl
            mx-auto
            px-6
            ">


                <SectionTitle

                    subtitle="Why NTS"

                    title="A technology partner you can trust"

                    description="
                    We combine technical expertise with a client-focused
                    approach to deliver successful digital solutions.
                    "

                />



                <div className="
                grid
                md:grid-cols-2
                gap-8
                ">


                    {
                        serviceAdvantages.map((item, index) => (

                            <ServiceAdvantageCard

                                key={index}

                                title={item.title}

                                description={item.description}

                                icon={item.icon}

                            />

                        ))
                    }


                </div>


            </div>


        </section>

    );

}


export default WhyWorkWithNTS;