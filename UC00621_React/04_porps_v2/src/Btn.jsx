

function Btn({ item }) {
    return (
        <>
            <li>
                <a href={item.link} target="_self">

                    {item.iconSvg &&
                        <svg
                            className="button-icon"
                            role="presentation"
                            aria-hidden="true"
                        >
                            <use href={`/icons.svg#${item.iconSvg}`}></use>
                        </svg>
                    }
                    {item.iconImg &&
                        <img className="logo" src={item.iconImg} alt="" />
                    }


                    { item.nome }
                </a>
            </li>
        </>
    );
}

export default Btn;