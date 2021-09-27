import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import * as Yup from 'yup';
import baseUrl from '../../utils/baseUrl';

const MySwal = withReactContent(Swal);

const alertContent = () => {
  MySwal.fire({
    title: 'Congratulations!',
    text: 'Your message has been successfully submitted',
    icon: 'success',
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

const ContactForm = () => {
  // form validation rules
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const schema = Yup.object().shape({
    fullName: Yup.string().required('FullName is required'),
    phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    email: Yup.string().required('Email is required').email('Email is invalid'),
    subject: Yup.string().required('Subject is required'),
    text: Yup.string().required('Message is required'),
  });

  const formOptions = { resolver: yupResolver(schema) };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm(formOptions);

  const onSubmitHandler = async (data) => {
    try {
      const url = `${baseUrl}/api/contact`;
      const { fullName, phoneNumber, email, subject, text } = data;
      const payload = { fullName, phoneNumber, email, subject, text };
      await axios.post(url, payload);
      reset();
      alertContent();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='main-contact-area contact ptb-100'>
      <div className='container'>
        <div className='section-title'>
          <span className='top-title'>Contact Us</span>
          <h2>Get In Touch</h2>
          <p>
            Want to get in touch? We would love to hear from you. Here is how
            you can reach us.
          </p>
        </div>

        <div className='contact-wrap contact-pages mb-0'>
          <div className='contact-form'>
            <form id='contactForm' onSubmit={handleSubmit(onSubmitHandler)}>
              <div className='row'>
                <div className='col-lg-6 col-md-6'>
                  <div className='form-group'>
                    <label>Full Name</label>
                    <input
                      type='text'
                      name='fullName'
                      className={`form-control ${
                        errors.fullName ? 'is-invalid' : ''
                      }`}
                      placeholder='Your Full Name'
                      {...register('fullName')}
                    />
                    <div
                      className='invalid-feedback'
                      style={{ display: 'block' }}>
                      {errors.fullName?.message}
                    </div>
                  </div>
                </div>

                <div className='col-lg-6 col-md-6'>
                  <div className='form-group'>
                    <label>Phone Number</label>
                    <input
                      type='text'
                      name='phoneNumber'
                      className={`form-control ${
                        errors.phoneNumber ? 'is-invalid' : ''
                      }`}
                      placeholder='Your Phone Number(Optional)'
                      {...register('phoneNumber')}
                    />
                    <div
                      className='invalid-feedback'
                      style={{ display: 'block' }}>
                      {errors.phoneNumber?.message}
                    </div>
                  </div>
                </div>

                <div className='col-lg-6 col-md-6'>
                  <div className='form-group'>
                    <label>Email</label>
                    <input
                      type='text'
                      name='email'
                      className={`form-control ${
                        errors.email ? 'is-invalid' : ''
                      }`}
                      placeholder='Your Email'
                      {...register('email')}
                    />
                    <div
                      className='invalid-feedback'
                      style={{ display: 'block' }}>
                      {errors.email?.message}
                    </div>
                  </div>
                </div>

                <div className='col-lg-6 col-md-6'>
                  <div className='form-group'>
                    <label>Subject</label>
                    <input
                      type='text'
                      name='subject'
                      className={`form-control ${
                        errors.subject ? 'is-invalid' : ''
                      }`}
                      placeholder='Your Subject'
                      {...register('subject')}
                    />
                    <div
                      className='invalid-feedback'
                      style={{ display: 'block' }}>
                      {errors.subject?.message}
                    </div>
                  </div>
                </div>

                <div className='col-lg-12 col-md-12'>
                  <div className='form-group'>
                    <label>Message</label>
                    <textarea
                      name='text'
                      className={`form-control ${
                        errors.text ? 'is-invalid' : ''
                      }`}
                      cols='30'
                      rows='5'
                      placeholder='Your Message'
                      {...register('text')}
                    />
                    <div
                      className='invalid-feedback'
                      style={{ display: 'block' }}>
                      {errors.text?.message}
                    </div>
                  </div>
                </div>

                <div className='col-lg-6 col-sm-6'>
                  <div className='contact-num'></div>
                </div>

                <div className='col-lg-6 col-sm-6'>
                  <button type='submit' className='default-btn btn-two'>
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
