const Partners = () => {
  const partners = [
    { name: "Partner One", description: "Leading provider of digital solutions." },
    { name: "Partner Two", description: "Innovating in education and technology." },
    { name: "Partner Three", description: "Supporting global business growth." },
    { name: "Partner Four", description: "Advancing AI and cloud computing." }
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Our Trusted Partners
      </h2>
      <p className="text-center text-gray-600 mb-12">
        We collaborate with industry leaders to provide the best learning experience.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {partners.map((partner, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center text-center p-4 transition transform hover:scale-105"
          >
            {/* Placeholder for Partner Logo */}
            <div className="w-28 h-28 bg-gray-200 rounded-lg mb-4"></div>
            
            {/* Partner Name */}
            <p className="text-lg font-semibold text-gray-700">{partner.name}</p>
            
            {/* Partner Description */}
            <p className="text-sm text-gray-500">{partner.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
