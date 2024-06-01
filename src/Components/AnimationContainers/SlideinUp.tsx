import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { animProps } from './types';

export default function FadeInOnScrollAnimationContainer(props: animProps) {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 1 }}

        >
            {props.children}
        </motion.div>
    );
}

