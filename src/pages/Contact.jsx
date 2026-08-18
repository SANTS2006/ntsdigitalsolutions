import ContactHero from "../components/sections/ContactHero";
import ContactInfo from "../components/sections/ContactInfo";
import ContactForm from "../components/sections/ContactForm";
import ContactCTA from "../components/sections/ContactCTA";
import SEO from "../components/common/SEO";

function Contact() {
    return <>
        <SEO title="Start a Project | NTS Digital Solutions" description="Tell NTS Digital Solutions about your website, software, mobile application, or digital transformation project." />
        <ContactHero />
        <ContactInfo />
        <ContactForm />
        <ContactCTA />
    </>;
}

export default Contact;
