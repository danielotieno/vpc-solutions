import React from 'react';
import PageBanner from '../components/common/PageBanner';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';

const ContactUs = () => {
  return (
    <>
      <PageBanner
        pageTitle='Contact'
        homePageUrl='/'
        homePageText='Home'
        activePageText='Contact'
        imgClass='contact-us-bg'
      />
      <ContactInfo />
      <ContactForm />
    </>
  );
};

export default ContactUs;
