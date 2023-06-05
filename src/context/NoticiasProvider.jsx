/* eslint-disable react/prop-types */
import axios from "axios";
import { useState, useEffect, createContext } from "react";

const NoticiasContext = createContext()

const NoticiasProvider = ({children}) => {

    const [categoria, setCategoria] = useState('general')
    const [noticias, setNoticias] = useState([])

    useEffect(()=> {

        const consultarAPI = async () => {

            const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=86a53694ab94479aa0f408ce32e17e06`

            const {data} = await axios(url)
            setNoticias(data.articles)
        }

        consultarAPI();
    }, [categoria])

    const handleChangeCategoria = e => {
        setCategoria(e.target.value)
    }
    
    return (
        <NoticiasContext.Provider
            value={{
                categoria,
                handleChangeCategoria,
                noticias
            }}
        >
            {children}
        </NoticiasContext.Provider>
    )
}

export {
    NoticiasProvider
}

export default NoticiasContext
