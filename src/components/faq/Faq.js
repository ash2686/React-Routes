import React from 'react'
import './Faq.css'

const Faq = () => {
    return (
        <div className='faq-main container-fluid pt-5'>
            <div className="faq-header container p-4 bg-dark text-success fw-bolder fs-3 rounded">
                FAQ's
            </div>
           
             {/* **************** start of accordion *********************** */}
            <div className='faq-accordion container text-light bg-dark rounded mt-2 p-2' id='faqa'>
                
                {/* *************************** item ***************************** */}
                <div className="accordion-item bg-dark text-success mt-3">
                    <h2 className='accordion-header bg-danger' id='h1'>
                        <button className="accordion-button text-success bg-dark border border-success" type="button" data-bs-toggle="collapse" data-bs-target="#c1" aria-expanded="true" aria-controls="c1">
                            Accordion Item #1
                        </button>
                    </h2>

                    <div id="c1" className="accordion-collapse collapse" aria-labelledby="h1" data-bs-parent="#faqa">
                        <div className="accordion-body text-start">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the though the transition does limit overflow.
                        </div>
                    </div>
                </div> {/* end of accordion item */}

                 {/* *************************** end of item ***************************** */}
                <div className="accordion-item bg-dark text-success mt-3">
                    <h2 className='accordion-header' id='h2'>
                        <button className="accordion-button bg-dark text-success border border-success" type="button" data-bs-toggle="collapse" data-bs-target="#c2" aria-expanded="true" aria-controls="c2">
                            Accordion Item #1
                        </button>
                    </h2>

                    <div id="c2" className="accordion-collapse collapse" aria-labelledby="h2" data-bs-parent="#faqa">
                        <div className="accordion-body text-start">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the though the transition does limit overflow.
                        </div>
                    </div>
                </div>

                <div className="accordion-item bg-dark text-success mt-3">
                    <h2 className='accordion-header' id='h3'>
                        <button className="accordion-button bg-dark text-success border border-success" type="button" data-bs-toggle="collapse" data-bs-target="#c3" aria-expanded="true" aria-controls="c3">
                            Accordion Item #1
                        </button>
                    </h2>

                    <div id="c3" className="accordion-collapse collapse" aria-labelledby="h3" data-bs-parent="#faqa">
                        <div className="accordion-body text-start">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the though the transition does limit overflow.
                        </div>
                    </div>
                </div>

                <div className="accordion-item bg-dark text-success mt-3">
                    <h2 className='accordion-header' id='h4'>
                        <button className="accordion-button bg-dark text-success border border-success" type="button" data-bs-toggle="collapse" data-bs-target="#c4" aria-expanded="true" aria-controls="c4">
                            Accordion Item #1
                        </button>
                    </h2>

                    <div id="c4" className="accordion-collapse collapse" aria-labelledby="h4" data-bs-parent="#faqa">
                        <div className="accordion-body text-start">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the though the transition does limit overflow.
                        </div>
                    </div>
                </div>

                <div className="accordion-item bg-dark text-success mt-3">
                    <h2 className='accordion-header' id='h5'>
                        <button className="accordion-button bg-dark text-success border border-success" type="button" data-bs-toggle="collapse" data-bs-target="#c5" aria-expanded="true" aria-controls="c5">
                            Accordion Item #1
                        </button>
                    </h2>

                    <div id="c5" className="accordion-collapse collapse" aria-labelledby="h5" data-bs-parent="#faqa">
                        <div className="accordion-body text-start">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the though the transition does limit overflow.
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Faq
