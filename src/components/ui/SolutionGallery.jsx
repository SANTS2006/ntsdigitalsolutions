import { motion } from "framer-motion";

function SolutionGallery({ images }) {
    return (
        <div className="grid gap-6 md:grid-cols-2">
            {images.map((image, index) => (
                <motion.div
                    key={`${image}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "120px" }}
                    transition={{ duration: 0.45, delay: Math.min(index * 0.06, 0.3) }}
                    className="aspect-video overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm"
                >
                    <img
                        src={image}
                        loading="lazy"
                        decoding="async"
                        width="1280"
                        height="720"
                        alt={`Solution interface screenshot ${index + 1}`}
                        className="h-full w-full object-contain"
                    />
                </motion.div>
            ))}
        </div>
    );
}

export default SolutionGallery;
