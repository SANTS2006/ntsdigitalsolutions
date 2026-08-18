import contactInfo from "../../data/contact";
import ContactInfoCard from "../ui/ContactInfoCard";


function ContactInfo(){

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


                <div className="
                grid
                md:grid-cols-3
                gap-8
                ">


                    {
                        contactInfo.map((info)=>(

                            <ContactInfoCard

                                key={info.id}

                                info={info}

                                icon = {info.icon}

                            />

                        ))
                    }


                </div>


            </div>


        </section>

    );

}


export default ContactInfo;