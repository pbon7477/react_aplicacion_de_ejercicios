import styled from 'styled-components';

export const Row=styled.div`

display: grid;
grid-template-columns: repeat(3,1fr);
gap:10px;
max-width: 800px;
margin: auto;
img{
    width: 100%;
    height:150px;
    object-fit: fill;
    object-fit: contain;
    transition: transform 0.3s;
    border:blue 2px solid;
    border-radius: 6px;
    background:#fff;
    scale: calc(80%);
    
    
}

img:hover{
    transition: transform 0.3s;
    transform: scale(1.1);
    cursor: pointer;
}


`;


export const ImagenSeleccionada = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top:20px;

img{
    background: #fff;
    border:blue 2px solid;
    border-radius: 6px;
    width: 400px;
    height: 200px;
    object-fit: contain;
    
}

.info-descripcion{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:0;

    

}

.info-descripcion h3 {    
    
    
}

.info-descripcion p {    
    color:#999;
    font-style: italic;

}

`;