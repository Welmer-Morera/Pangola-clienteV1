const datosStyles = () => ({
    contenedor:{
        
        padding:'20px'
    },
    form:{
        display: 'flex',
        justifyContent: 'center'
    },
    div:{
padding: '12px',
  margin: '10px'
    },
    formulario:{
        backgroundColor: '#5CCF74',
        padding: '30px',
        borderRadius:'16px',
        boxShadow: 'none'
        
    },
     contenedorDivInput:{
        display: 'flex',
        margin:'10px',
        
     },
     contenedorDivInputbutton:{
        display: 'flex',
        margin:'10px',
        
        //width:'100%'
        
        
     },
     btn:{
        backgroundColor:'#55B8EA'
     },
     p:{
         marginTop:'10px'
     },
     btnAccionesEditar:{ 
         fontSize:'20px',
         margin: '5px',
         textTransform: 'none',
         color: '#fff',
         backgroundColor: '#1665CB',
         '&:hover': {
            background: "#1877F2",
     
          }
        

    },
    btnAccionesEliminar:{ 
        fontSize:'20px',
        margin: '5px', 
        textTransform: 'none',
        color: '#fff',
         backgroundColor: '#ED2410',
         '&:hover': {
            background: "#FF3420",
     
          }
        
   },

   btnCompleto:{
    fontSize:'30px',
    color: '#1a202d',
    textTransform: 'none',
    backgroundColor:'#79F288',
    '&:hover': {
        background: '#79F288',
 
      }
    
    
   },
   btnIncompleto:{
    fontSize:'30px',
    color: '#1a202d',
    textTransform: 'none',
    backgroundColor:'#FFB2B2',
    '&:hover': {
        background: '#FFB2B2',
 
      }
    
   },
   h2:{margin:'2px',
    fontSize:'20px'},
     inputText: {
        padding: '5px',
        border: 'none',
        borderRadius: '8px',
        //flex: '1',
        //width:'100%',
        fontSize:20
      }
       
})
 
export default datosStyles;