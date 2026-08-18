import { Link } from "react-router-dom";
import Button from "../ui/Button";

function IndustryCTA() {

    return (

        <section className=" py-20 bg-slate-50 ">
            <div className="max-w-5xl mx-auto px-6  text-center ">
                <h2 className=" text-3xl md:text-5xl font-bold" >
                    Need a Solution For Your Industry?
                </h2>

                <p className=" mt-6  text-lg ">
                    NTS Digital Solutions works with organizations
                    to design and develop custom digital solutions
                    that address their unique challenges.
                </p>

                <div className=" mt-8 flex justify-center">

                    <Link to="/contact">
                        <Button>
                            Discuss Your Project
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}


export default IndustryCTA;