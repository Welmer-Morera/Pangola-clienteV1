const ls = () => ({
    contenedor:{
        backgroundColor: '#CEE0DC',
       
        height: "100vh",
     
        display: 'flex',
        alignItems: 'top',
        justifyContent: 'center',
       
    

    },
    formUsuario: {
        backgroundColor: '#CEE0DC',
       
        height: "100vh",
      
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    contenedorForm: {
       alignItems: 'center',
     justifyContent: 'center',
        margin:'50px'

          
      },
      boxUser:{
        backgroundColor: '#fff',
        borderRadius: "16px",
       
       margin:'5px'
        
      },

      boxlog:{
        display: 'flex',
        //justifyContent: 'center',
        alignItems: 'center'
      },
      h1:{color:"#1877F2"},

      
      campoForm: {
        display: "flex",
        
        margin:'15px',

       
    },
    campoFormRegister: {
      display: "flex",
      marginBottom: "10px",
      alignItems: "center",
      variant:"outlined",
      width:"100%",
  },
    textField:{
        marginTop:'20px',
        width:"100%",
        borderRadius: "16px",
        color: "#99A3A4",
        border:'100px',
        '& label.Mui-focused': {
            color: "#99A3A4",
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: 'yellow',
          },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: "#6EB5FF",
                
              },
            '&:hover fieldset': {
              borderColor: "#85E3FF",
            },
            '&.Mui-focused fieldset': {
              borderColor: "#6EB5FF",
              
            },
          },
        
        
    },
    text:{
        fontSize: "20px",
        labelWidth:"100",
        color: "#17202A"
        
    },
    btn: {
        marginTop: "5px",
        padding: "5px",
        fontSize: "20px",
        fontWeight: 400,
        borderRadius: "5px",
        border: "none",
        backgroundColor: "#1877F2" ,
        color: "#ffff" ,
        marginLeft:"10%",
        textTransform: 'none',
        display: "block",
        width: "80%",
        '&:hover': { 
            background: "#1665CB",
            fontWeight: 900
          }
      },
      btnU:{
        marginTop:"10px",
        margin:'10px',
        fontSize: "15px",
        borderRadius: "5px",
        backgroundColor: "#1E8449 " ,
        border: "none",
        color: "#ffff" ,
        display: "block",
        
          width: "50%",
          marginLeft:"25%",
          '&:hover': {
            background: "#16cb4c",
            fontWeight: 900
          }
  
      },
      div:{margin:'10px'}
,      textL:{color: "#ffff", textTransform: 'none', },
      btnRegister:{
        marginTop: "10px",
          padding: "10px",
          fontSize: "20px",
          fontWeight: 400,
          borderRadius: "10px",
          border: "none",
          backgroundColor: "#42b72a" ,
          color: "#ffff" ,
          display: "block",
          width: "50%",
          marginLeft:"20%",
          textTransform: 'none',
          '&:hover': {
              background: "#16cb4c",
              fontWeight: 900
            }
  
      },
      contenedorFormRegister: {
        alignItems: 'center',
        justifyContent: 'center',
          padding: "20px",
          maxWidth: "400px",
          width: "90%",
          backgroundColor: "#ffff" ,
          borderRadius: "16px",
          
      },
      logo:{
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: 100,
      margin: 'auto',
      borderRadius: 12,
      padding: 0,
      }, 
     
   
})
 
export default ls;