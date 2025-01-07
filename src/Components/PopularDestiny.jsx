import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const PopularDestiny = () => {
  const [visas, setVisas] = useState([]);

  useEffect(() => {
    fetch("https://visa-navigator-backend-swart.vercel.app/visa") 
      .then((res) => res.json())
      .then((data) => {
        const trending = data.slice(0, 3);
        setVisas(trending);
      })
      .catch((error) => console.error("Error fetching visas:", error));
  }, []);

  return (
    <section className="py-12 mt-16  w-11/12 mx-auto">
      <motion.h2
        className="text-4xl font-bold text-center mb-12 text-blue-600"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Trending Visas
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {visas.map((visa, index) => (
          <motion.div
            key={visa.id || index}
            className="p-6 bg-white rounded-xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              delay: index * 0.2,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{
              scale: 1.05,
              rotate: 3,
              transition: { duration: 0.3 },
            }}
          >
            <motion.img
              src={visa.countryImage}
              alt={visa.country}
              className="w-full h-40 object-cover rounded-lg mb-4"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            />
            <h3 className="text-3xl font-semibold text-blue-800">{visa.countryName}</h3>
            <p className="text-xl text-gray-600 mt-1">{visa.visaType}</p>
            <p className="mt-4 text-gray-700">Validity: {visa.validity}</p>
            <motion.button
              className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply Now
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PopularDestiny;
