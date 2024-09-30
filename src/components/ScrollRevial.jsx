import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// eslint-disable-next-line react/prop-types
const ScrollReveal = ({ children, direction = 'bottom' }) => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView]);

    // Define animation variants based on the direction prop
    const variants = {
        hidden: {
            opacity: 0,
            x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
            y: direction === 'top' ? -50 : direction === 'bottom' ? 50 : 0,
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
