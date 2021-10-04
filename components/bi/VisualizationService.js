import React from 'react';
import Slide from 'react-reveal/Slide';

const VisualizationService = () => {
  return (
    <div className='how-its-work ptb-100'>
      <div className='container'>
        <div className='section-title'>
          <h2>The business value your data hides</h2>
          <p>
            Handled expertly, transforming your data into a resonating story
            enables fast analysis and winning business decisions. Unlock the
            value of your data with our data visualization services to:
          </p>
        </div>

        <div className='row align-items-center'>
          <div className='col-lg-6'>
            <Slide left>
              <div className='how-its-work-content'>
                <div className='content-wrap'>
                  <h3>
                    Improve the visibility of your day-to-day business
                    operations
                  </h3>
                </div>

                <div className='content-wrap'>
                  <h3>Identify failing business processes</h3>
                </div>

                <div className='content-wrap'>
                  <h3>Prioritize improvement efforts</h3>
                </div>
                <div className='content-wrap'>
                  <h3>Shorten business meetings</h3>
                </div>
                <div className='content-wrap'>
                  <h3>Unburden IT teams for value-added activities</h3>
                </div>
              </div>
            </Slide>
          </div>

          <div className='col-lg-6'>
            <Slide right>
              <div className='how-its-work-content'>
                <div className='content-wrap'>
                  <h3>Discover new market opportunities</h3>
                </div>

                <div className='content-wrap'>
                  <h3>Predict and act on changing customer behavior</h3>
                </div>

                <div className='content-wrap'>
                  <h3>Uncover underperforming products or areas</h3>
                </div>
                <div className='content-wrap'>
                  <h3>
                    Understand the source of problems to prevent them from
                    reoccurring
                  </h3>
                </div>
                <div className='content-wrap'>
                  <h3>Price your products better</h3>
                </div>
              </div>
            </Slide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisualizationService;
