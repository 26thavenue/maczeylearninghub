import Button from "./Buttons"
import BannerImg from  "/home/banner.png"
import { motion } from "framer-motion"

const Banner = () => {
  return (
    <div className="relative overflow-hidden lg:mb-24 lg:w-[90dvw] lg:rounded-xl mx-auto text-white p-8 lg:p-12 flex items-center justify-center bg-gradient-to-br from-black to-[#1A1A2E]">
      {/* Fine Line Texture */}
      <div className="absolute inset-0 opacity-15" style={{ backgroundImage: `repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 10px), repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 10px)` }}></div>
      
      {/* Decorative Elements */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      {/* Vignette Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/30 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 pointer-events-none"></div>
      
      <div className="relative w-full lg:w-[90%] flex-col-reverse lg:flex-row mx-auto flex items-center justify-between py-12 z-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4 text-lg w-full lg:w-1/2"
        >
          <motion.h3 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl lg:text-5xl font-medium leading-tight tracking-[-1px] mt-4 lg:mt-0 w-full lg:w-3/4 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-blue-200"
          >
            Join Our Community
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg mb-4 text-white/90"
          >
            Take the first step towards achieving your academic goals with Maczeylearninghub. Browse our website to learn more about our programs and services, and get in touch with us to discuss your academic aspirations.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex gap-4"
          >
            <Button 
              variant="secondary" 
              className="w-fit rounded-md   border-none"
            >
              View Our Courses
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-30"></div>
            <motion.img 
              src={BannerImg} 
              className="relative w-[300px] h-[300px] object-contain rounded-xl z-10" 
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}



export default Banner