import { motion } from 'framer-motion';

const brands = [
    'Dashboard', 'App Design', 'UX Design', 'Wireframe', 'User Research',
];

const LogoSlider = () => {
    const scrollSpeed = 5; // Adjust speed

    const marqueeVariants = {
        animate: {
            x: [0, -1000], // Adjust to cover the total width of the content
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: scrollSpeed,
                    ease: 'linear',
                },
            },
        },
    };

    return (
        <div className="logo-slider mt-20">
            <motion.div
                className="brands-container"
                variants={marqueeVariants}
                animate="animate"
            >
                {[...brands, ...brands, ...brands].map((brand, index) => (
                    <div key={index} className="brand-item">
                        <span className="brand-name">{brand}</span>
                        <img
                            src="/slider-star.svg" // Replace with your actual logo path
                            alt={`${brand} logo`}
                            className="brand-logo"
                        />
                    </div>
                ))}
                {[...brands, ...brands, ...brands].map((brand, index) => (
                    <div key={index} className="brand-item">
                        <span className="brand-name">{brand}</span>
                        <img
                            src="/slider-star.svg" // Replace with your actual logo path
                            alt={`${brand} logo`}
                            className="brand-logo"
                        />
                    </div>
                ))}

            </motion.div>


        </div>
    );
};

export default LogoSlider;
