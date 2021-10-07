import SEO from '@bradgarropy/next-seo';
import React from 'react';
import PageBanner from '../components/common/PageBanner';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';

const ContactUs = () => {
  return (
    <>
      <SEO
        title='Contact Us'
        description='We are a software development and consulting company that creates and transforms products and enterprises to drive growth.'
      />
      <PageBanner
        pageTitle='Contact Us'
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
