
import Tabela from "./Tabela/Tabela.jsx";
import Acord from "./acord.jsx";

const data = [
    {
        id: 1,
        First:'Mark',
        last: 'Otto',
        Handle: '@mdo'
    },
    {
        id: 2,
        First:'Jacob',
        last: 'Thornton',
        Handle: '@fat'
    },
    {
        id: 3,
        First:'John',
        last: 'Doe',
        Handle: '@social'
    }



]


function Conteudo() {
    return (
        <>

            <div className="grid text-center">
                <div className="g-col-6"><Tabela data={data} /> </div>
                <div className="g-col-6"><Acord /></div>
            </div>





        </>
    );
}

export default Conteudo;