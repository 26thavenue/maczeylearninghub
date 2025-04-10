import { useState } from 'react';
import { motion } from 'framer-motion';
import {  GraduationCap, Clock, DollarSign, BookOpen, Users, BriefcaseBusiness, Network } from 'lucide-react';

const features = [
  {
    title: "High School Diplomas",
    description: "Accredited institutions in the UK, Canada, and US",
    icon: <GraduationCap className="w-10 h-10" />,
    color: "from-purple-500 to-indigo-600",
    hoverColor: "from-purple-600 to-indigo-700"
  },
  {
    title: "College and University Diplomas",
    description: "Recognized institutions in the UK, US, Canada, and Germany",
    icon: <BookOpen className="w-10 h-10" />,
    color: "from-pink-500 to-rose-600",
    hoverColor: "from-pink-600 to-rose-700"
  },
  {
    title: "Flexible Learning Options",
    description: "Study at your own pace with our adaptive learning platform",
    icon: <Clock className="w-10 h-10" />,
    color: "from-amber-400 to-orange-500",
    hoverColor: "from-amber-500 to-orange-600"
  },
  {
    title: "Affordable Tuition",
    description: "Flexible payment plans to fit your budget",
    icon: <DollarSign className="w-10 h-10" />,
    color: "from-emerald-400 to-teal-500",
    hoverColor: "from-emerald-500 to-teal-600"
  },
  {
    title: "Dedicated Tutor Support",
    description: "Professional guidance from enrollment to graduation",
    icon: <Users className="w-10 h-10" />,
    color: "from-blue-400 to-cyan-500",
    hoverColor: "from-blue-500 to-cyan-600"
  },
  {
    title: "Global Learning Community",
    description: "Connect with learners and professionals worldwide",
    icon: <Network className="w-10 h-10" />,
    color: "from-violet-400 to-purple-500",
    hoverColor: "from-violet-500 to-purple-600"
  },
  {
    title: "Career Advancement",
    description: "Networking opportunities and career development resources",
    icon: <BriefcaseBusiness className="w-10 h-10" />,
    color: "from-red-400 to-rose-500",
    hoverColor: "from-red-500 to-rose-600"
  },
];

const WhatWeOffer = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 px-4 overflow-hidden bg-gradient-to-b from-[#FFFFFF] to-[#F4F6FA]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="container mx-auto"
      >
        <motion.div variants={titleVariants} className="text-center mb-16">
          <h2 className="inline-block text-5xl font-medium mb-4 text-black">
            What We Offer
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
            At Maczey Learning hub, we offer a wide range of academic programs from top-tier institutions in the UK, Canada, US, and Germany.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className={`h-full p-8 rounded-xl shadow-lg bg-gradient-to-br ${feature.color} text-white overflow-hidden`}
              >
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: hoveredIndex === index ? [1, 1.05, 1] : 1 }}
                  transition={{ duration: 0.5 }}
                  className="mb-5"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-white/80 mb-4">{feature.description}</p>
                
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-full"></div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        
      </motion.div>
    </section>
  );
};

export default WhatWeOffer;