import React from 'react';
import tenantpal from '../assets/tenantpal.png';
import topApp from '../assets/Top Application Award.jpeg';

const Awards = () => {
  return (
    <section id="awards" className="py-5 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <h2 className="text-center mb-4">Awards</h2>
            <div className="card border-0 rounded-0 shadow-lg p-4" >
              <div className="row align-items-center">
                <div className="col-md-6">
                  <img src={tenantpal} alt="Project Screenshot" className="project-image mb-3 img-fluid rounded" style={{ maxWidth: '500px' }} />
                </div>
                <div className="col-md-6">
                  <div className="award-details">
                    <h3 className="mb-3">Tenantpal</h3>
                    <p className="text-muted mb-3">Awarded as the top application at eMobilis Institute of Technology</p>
                    <p className="award-description">Tenantpal is a rental collection platform meticulously developed using Kotlin and CSS. This standout project goes beyond traditional rent management by integrating various payment options, including mobile money and card payments. The platform excels in streamlining the process of managing rent payments, ensuring unparalleled efficiency and accuracy. Tenantpal is celebrated for its innovative approach, offering a comprehensive solution with diverse payment capabilities.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-4">
            <img src={topApp} alt="Trophy" className="trophy-image img-fluid rounded" style={{ maxWidth: '400px', maxHeight: '600px' }} />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Awards;








