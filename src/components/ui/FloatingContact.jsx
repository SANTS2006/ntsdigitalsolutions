import { FiMessageCircle } from "react-icons/fi";

function FloatingContact() {
    const number = "23276784684";
    const message = encodeURIComponent("Hello NTS Digital Solutions, I would like to discuss a project.");
    return <a href={`https://wa.me/${number}?text=${message}`} target="_blank" rel="noreferrer" aria-label="Chat with NTS Digital Solutions on WhatsApp" className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-2xl text-white shadow-2xl shadow-emerald-900/20 transition hover:-translate-y-1 hover:bg-emerald-600">
        <FiMessageCircle />
    </a>;
}

export default FloatingContact;
