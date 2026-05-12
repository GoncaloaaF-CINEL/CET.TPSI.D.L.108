
import AccordionCard from "./Acord/AccordionCard.jsx";

function Acord() {
    return (
        <>
            <div className="accordion" id="accordionExample">


                <AccordionCard id="item1" title={ "Item 1" } content="Conteudo do card"  />

                <AccordionCard id="item2" title={ "Item 2" } content="Conteudo do card"  />


                <AccordionCard id="item3" title={ "titulo item 3" } content="Conteudo do card"  />
            </div>


        </>
    );
}

export default Acord;
