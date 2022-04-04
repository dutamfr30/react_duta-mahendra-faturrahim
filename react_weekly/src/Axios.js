import { useState, useEffect } from "react";
import axios from "axios";

function Axios () {
    const [data, setData] = useState("")

    useEffect(() => {

        axios
            .get("https://pokeapi.co/api/v2/pokemon/ditto")
            .then ((res) => {
                console.log(res.data)
                setData(res.data.abilities[0].ability.name)
            })
            .catch ((err) => {
                setData("Gabisa")
            })
    }, []);

    return (
        <div>
            <h3>{data}</h3>
        </div>
    )
}

export default Axios;