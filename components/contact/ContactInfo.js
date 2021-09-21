import React from 'react';

const ContactInfo = () => {
  return (
    <div className='contact-info-area'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-3 p-0'>
            <div className='single-contact-info'>
              <i className='bx bx-location-plus'></i>
              <h3>Ireland</h3>
              <p>Teach An Rua Kells Road Collon Co. Louth A92 P2N7, Ireland</p>
              <span>Email: info@vpc-solutions.com</span>
            </div>
          </div>

          <div className='col-lg-3 p-0'>
            <div className='single-contact-map'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32527.280555481004!2d-6.560286303284741!3d53.77848405501802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4867484d39514335%3A0xd4e9238fca9db5d!2sTeach%20an%20Rua%2C%20Kells%20Rd%2C%20Collon%2C%20Co.%20Louth%2C%20Ireland!5e0!3m2!1sen!2ske!4v1631023865971!5m2!1sen!2ske'
                loading='lazy'></iframe>
            </div>
          </div>

          <div className='col-lg-3 p-0'>
            <div className='single-contact-info'>
              <i className='bx bx-location-plus'></i>
              <h3>United Kingdom</h3>
              <p>3rd floor 116 Dundas St Edinburgh EH3 5DQ, United Kingdom</p>
              <span>Email: info@vpc-solutions.com</span>
            </div>
          </div>

          <div className='col-lg-3 p-0'>
            <div className='single-contact-map'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2233.413844699709!2d-3.2031658842047954!3d55.959530683496425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887c794999d1f0f%3A0x4a0b40f9fcf016fd!2s3rd%20floor%2C%20116%20Dundas%20St%2C%20Edinburgh%20EH3%205DQ%2C%20UK!5e0!3m2!1sen!2ske!4v1631024227057!5m2!1sen!2ske'
                loading='lazy'></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
