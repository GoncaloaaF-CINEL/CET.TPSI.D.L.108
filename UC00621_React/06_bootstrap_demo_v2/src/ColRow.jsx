

function ColRow({props}) {
    return (
        <>
            <tr>
                <th scope="row">{ props.id }</th>
                <td>{ props.First }</td>
                <td>{ props.last }</td>
                <td>{ props.Handle }</td>
            </tr>
        </>
    );
}

export default ColRow;