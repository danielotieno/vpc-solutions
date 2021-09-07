import React from 'react';

const SectionHeading = ({ sectionSubTitle, sectionTitle, sectionText }) => {
  return (
    <div className='section-title'>
      <span className='top-title'>{sectionSubTitle}</span>
      <h2>{sectionTitle}</h2>
      <p>{sectionText}</p>
    </div>
  );
};

export default SectionHeading;
