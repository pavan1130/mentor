// import "../style/OurServices.css";
// import React, { useState } from "react";
// import image1 from "../page/img/a.jpg";
// import image2 from "../page/img/b.jpg";
// import image3 from "../page/img/c.jpg";

// const OurServices = () => {
//   const [showAll, setShowAll] = useState(false);
//   const services = [
//     {
//       title: "IOT",
//       description:
//         "Businesses need agility and innovation to navigate the dynamic market landscape. Our IoT solutions enable you to create connected systems for accurate and smart insights that guide your strategic decisions.",
//       image: image1,
//       additionalDescription: "Additional description for Service 1.",
//     },
//     {
//       title: "Cloud Services",
//       description:
//         "Cloud services are the best way to manage and maintain your IT systems at a reduced cost. We accelerate the deploy an entirely managed virtual environment in highly secure public and private clouds.",
//       image: image2,
//       additionalDescription: "Additional description for Service 2.",
//     },
//     {
//       title: "Digital Services",
//       description:
//         "We help you with tailor-made solutions for your complex business requirements and lead to a digital transformation keeping your requirements into consideration.",
//       image: image3,
//       additionalDescription: "Additional description for Service 3.",
//     },
//   ];
//   // const visibleServices = showAll ? services : services.slice(0, 3);

//   const toggleShowAll = () => {
//     setShowAll(!showAll);
//   };

//   return (
//     <section className="our-services">
//       <h2>Our Services</h2>
//       <div className="services-container">
//         {services.map((service, index) => (
//           <div className="service" key={index}>
//             <img src={service.image} alt={service.title} />
//             <div className="service-content">
//               <h3>{service.title}</h3>
//               {showAll ? (
//                 <>
//                   <p>{service.description}</p>
//                   <p className="additional-description">
//                     {service.additionalDescription}
//                   </p>
//                 </>
//               ) : (
//                 <p className="short-description">{service.description}</p>
//               )}
//               {!showAll && (
//                 <button className="view-more-button" onClick={toggleShowAll}>
//                   View More
//                 </button>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default OurServices;

import React, { useState } from "react";
import image1 from "../page/img/a.jpg";
import image2 from "../page/img/b.jpg";
import image3 from "../page/img/c.jpg";
import "../style/OurServices.css";

const OurServices = () => {
  const [showAll, setShowAll] = useState({});

  const services = [
    {
      id: 1,
      title: "IOT",
      description:
        "Businesses need agility and innovation to navigate the dynamic market landscape. Our IoT solutions enable you to create connected systems for accurate and smart insights that guide your strategic decisions.",
      image: image1,
      additionalDescription: "Additional description for Service 1.",
    },
    {
      id: 2,
      title: "Cloud Services",
      description:
        "Cloud services are the best way to manage and maintain your IT systems at a reduced cost. We accelerate the deploy an entirely managed virtual environment in highly secure public and private clouds.",
      image: image2,
      additionalDescription: "Additional description for Service 2.",
    },
    {
      id: 3,
      title: "Digital Services",
      description:
        "We help you with tailor-made solutions for your complex business requirements and lead to a digital transformation keeping your requirements into consideration.",
      image: image3,
      additionalDescription: "Additional description for Service 3.",
    },
  ];

  const toggleShowAll = (serviceId) => {
    setShowAll((prevState) => ({
      ...prevState,
      [serviceId]: !prevState[serviceId],
    }));
  };

  return (
    <section className="our-services">
      <h2>Our Services</h2>
      <div className="services-container">
        {services.map((service) => (
          <div className="service" key={service.id}>
            <img src={service.image} alt={service.title} />
            <div className="service-content">
              <h3>{service.title}</h3>
              {showAll[service.id] ? (
                <>
                  <p>{service.description}</p>
                  <p className="additional-description">
                    {service.additionalDescription}
                  </p>
                </>
              ) : (
                <p className="short-description">{service.description}</p>
              )}
              {!showAll[service.id] && (
                <button
                  className="view-more-button"
                  onClick={() => toggleShowAll(service.id)}
                >
                  View More
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
