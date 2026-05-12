

function AccordionCard({id, title, content}) {
    return (
        <>

            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#${id}`}
                            aria-expanded="true"
                            aria-controls={ id }>
                        { title }
                    </button>
                </h2>

                <div id={ id } className="accordion-collapse collapse"
                     data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        { content }
                    </div>
                </div>
            </div>


        </>
    );
}

export default AccordionCard;