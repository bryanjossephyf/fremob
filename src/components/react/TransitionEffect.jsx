
import { motion } from "framer-motion"

function TransitionEffect() {
    return (
        <>
            <motion.div
                initial={{ x: "100%", width: "100%" }}
                animate={{ x: "0%", width: "0%" }}
                transition={{duration:0.8, ease:"easeInOut"}}
                className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-yellow-300">
            </motion.div>
            <motion.div
                initial={{ x: "100%", width: "100%" }}
                animate={{ x: "0%", width: "0%" }}
                transition={{delay:"0.2", duration:0.8, ease:"easeInOut"}}
                className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-gray-400">
            </motion.div>
                        <motion.div
                initial={{ x: "100%", width: "100%" }}
                animate={{ x: "0%", width: "0%" }}
                transition={{delay:"0.4" ,duration:0.8, ease:"easeInOut"}}
                className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-black">
            </motion.div>
        </>
    )
}

export default TransitionEffect