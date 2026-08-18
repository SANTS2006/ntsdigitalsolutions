import { FaHospital } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FaStore } from "react-icons/fa"; 
const industries = [

    {
        id: "healthcare",

        title: "Healthcare",

        icon: FaHospital,

        description:
        "Digital solutions that help healthcare organizations improve patient management, record keeping, and administrative workflows.",

        solutions: [
            "Hospital Management Systems",
            "Patient Records Management",
            "Appointment Platforms"
        ]

    },


    {
        id: "education",

        title: "Education",

        icon: FaSchool,

        description:
        "Technology solutions that simplify student management, accommodation systems, and institutional operations.",

        solutions: [
            "Student Management Systems",
            "Hostel Management Systems",
            "Learning Platforms"
        ]

    },


    {
        id: "real-estate",

        title: "Real Estate",

        icon: FaBuilding,

        description:
        "Digital platforms that help property businesses manage properties, tenants, and rental operations efficiently.",

        solutions: [
            "Property Management Systems",
            "Rental Platforms",
            "Tenant Management"
        ]

    },


    {
        id: "business",

        title: "Small & Medium Businesses",

        icon: FaStore,

        description:
        "Custom software and digital solutions designed to help businesses improve productivity and growth.",

        solutions: [
            "Business Websites",
            "Custom Applications",
            "Automation Tools"
        ]

    }

];


export default industries;