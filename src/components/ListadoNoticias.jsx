import { Grid, Typography} from "@mui/material"
import useNoticias from "../hooks/useNoticias"
import Noticia from "./Noticia"


const ListadoNoticias = () => {

    const {noticias} = useNoticias()

    console.log(noticias)

  return (
    <>
        <Typography
            textAlign={'center'}
            marginY={5}
            variant='h4'
            component={'h2'}
        >
            Últimas Noticias
        </Typography>
        <Grid
            container
        >
            {noticias.map( noticia =>(

                <Noticia
                    noticia={noticia}
                    key={noticia.url}                    
                />
            ))}
        </Grid>
    
    </>
  )
}

export default ListadoNoticias