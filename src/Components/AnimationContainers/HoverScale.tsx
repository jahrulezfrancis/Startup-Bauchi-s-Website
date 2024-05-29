import { motion } from 'framer-motion';
import { animProps } from './types';

export default function HoverAnimationContainer(props: animProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.06 }}
            transition={{ type: 'spring', stiffness: 300 }}
            style={containerStyle}
        >
            {props.children}
        </motion.div>
    );
}

const containerStyle = {
    // width: '200px',
    // height: '200px',
    backgroundColor: '#f0f0f0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10px',
    cursor: 'pointer',
};

