import React from 'react';

const ServiceCard = ({ image, title }) => {
  return (
    <div className="service-card p-4">
      <div className="icon text-center mb-2">
      <img src={image} alt={title} className="mx-auto" style={{ width: '48px', height: '48px' }} />
      </div>
      <h3 className="title text-center text-lg font-medium">{title}</h3>
    </div>
  );
};

export default ServiceCard;
