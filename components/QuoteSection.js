import Image from 'next/image';
import React from 'react';
import Zoom from 'react-reveal/Zoom';

const QuoteSection = () => {
  return (
    <div className='counter-area pt-100 pb-70'>
      <Zoom bottom>
        <div className='container'>
          <div className='row'>
            <div className='fun-quote text-center'>
              <h1>
                As the world becomes smarter and smarter, data becomes the key
                to competitive advantage, meaning a company ability to compete
                will increasingly be driven by how well it can leverage data,
                apply analytics, and implement new technologies.
              </h1>
            </div>
          </div>
        </div>
      </Zoom>

      <div className='shape-wrap'>
        <div className='shape-1'>
          <Image
            src='/img/shape/counter-shape.png'
            width={477}
            height={337}
            alt='Counter Shape'
          />
        </div>
        <div className='shape-2'>
          <Image
            src='/img/shape/counter-shape.png'
            width={477}
            height={337}
            alt='Counter Shape'
          />
        </div>
      </div>
    </div>
  );
};

export default QuoteSection;
