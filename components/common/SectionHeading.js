import React from 'react';

const SectionHeading = ({ sectionTitle, sectionText }) => {
  return (
    <div className='section-title white-title'>
      <h2>{sectionTitle}</h2>
      <p>{sectionText}</p>
    </div>
  );
};

export default SectionHeading;
