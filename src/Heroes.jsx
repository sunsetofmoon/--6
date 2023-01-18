import { useState } from "react";

function Heroes() {

    const [names, setNames] = useState([
        "Шерлок Холмс",
        "Доктор Ватсон",
        "Профессор Мориарти",
        "Миссис Хадсон",
        "Ирен Адлер"
    ])


    return (
        <ul>
            {names.map((item, index) => {
                return (
                    <li key={index}>
                        {item}
                    </li>
                )
            })}
        </ul>
    )
}

export default Heroes;