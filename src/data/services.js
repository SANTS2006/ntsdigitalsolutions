import { FaCode, FaMobileAlt, FaPaintBrush, FaLaptopCode, FaTools   } from "react-icons/fa";
import { MdOutlineSettingsSuggest } from "react-icons/md";

const services = [

    {
        title: "Web Development",

        icon : FaCode,

        description:
            "We build modern, responsive, and scalable websites that help businesses establish a strong digital presence and connect with their customers.",

        features: [
            "Business websites",
            "Corporate platforms",
            "Web applications",
            "E-commerce solutions"
        ]
    },


    {
        title: "Mobile Application Development",

        icon: FaMobileAlt,

        description:
            "We develop mobile applications that help businesses deliver services, improve engagement, and reach customers on mobile devices.",

        features: [
            "Android applications",
            "iOS applications",
            "Business mobile apps",
            "Mobile-first experiences"
        ]
    },


    {
        title: "UI/UX Design",

        icon: FaPaintBrush,

        description:
            "We design intuitive and engaging digital experiences focused on usability, accessibility, and customer satisfaction.",

        features: [
            "User research",
            "Interface design",
            "Prototype creation",
            "Design systems"
        ]
    },


    {
        title: "Custom Software Solutions",

        icon: FaLaptopCode,

        description:
            "We create tailored software systems designed around specific business processes, workflows, and operational needs.",

        features: [
            "Business management systems",
            "Internal tools",
            "Database solutions",
            "Custom platforms"
        ]
    },


    {
        title: "Maintenance & Support",

        icon: FaTools,

        description:
            "We provide ongoing technical support, improvements, and maintenance to keep digital solutions secure and reliable.",

        features: [
            "Bug fixes",
            "Performance improvements",
            "Updates",
            "Technical support"
        ]
    }

];


export default services;