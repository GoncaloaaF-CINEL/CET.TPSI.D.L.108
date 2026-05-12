import {NavLink, Outlet} from "react-router-dom";


function Utilizadores() {
    const lista = [1, 2, 3, 4, 5];

    return (
        <>
        <h1> Lista de Utilizadores</h1>

            <ul>
                { lista.map((id) => (
                    <li key={id}>
                        <NavLink to={ `/utilizadores/${id}`}
                              style={
                                  ({ isActive }) => ({
                                      color: isActive ? "red" : "black"
                                  })}
                         > Utlizador { id }  </NavLink>
                    </li>

                ))}
            </ul>

            <Outlet />

        </>
    );
}

export default Utilizadores;