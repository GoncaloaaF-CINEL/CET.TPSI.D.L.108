import Btn from "./Btn.jsx";


function Card({lista, icon, title, descricao}) {
    return (
        <>

                <svg className="icon" role="presentation" aria-hidden="true">
                    <use href={`/icons.svg#${icon}`}></use>
                </svg>
                <h2>{ title }</h2>
                <p>{ descricao }</p>
                <ul>

                    <div className="ticks"></div>
                    { lista.map((item) => (
                        <Btn key={item.link}
                             item={item}  />
                    ))
                    }

                    <div className="ticks"></div>

                </ul>

        </>
    );
}

export default Card;