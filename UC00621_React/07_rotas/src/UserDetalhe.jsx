import {Link, useParams} from "react-router-dom";

function UserDetalhe() {
    const params = useParams();
    return (
        <>
        <h2>Pagina de Perfil { params.id }</h2>
            <Link to="/utilizadores"> Voltar </Link>
        </>
    );
}
export default UserDetalhe;