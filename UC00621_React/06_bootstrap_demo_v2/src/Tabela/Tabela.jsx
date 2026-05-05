
import ColRow from "../ColRow.jsx";

function Tabela({ data }) {
    return (
        <>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
                </thead>
                <tbody>

                {data.map(
                    (item) => (
                        <ColRow props={item}/>
                    )
                )
                }

                </tbody>
            </table>


        </>
    );
}

export default Tabela;
