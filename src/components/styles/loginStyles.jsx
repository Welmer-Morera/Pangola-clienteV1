const loginStyles = () => ({


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
        padding: "50px",
        maxWidth: "400px",
        width: "95%",
        backgroundColor: "#ffff" ,
        borderRadius: "16px",
        boxShadow:3
        
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
    campoForm: {
        display: "flex",
        marginBottom: "10px",
        alignItems: "center",
        variant:"outlined",
        width:"100%",
    },
    campoFormRegister: {
      display: "flex",
      marginBottom: "10px",
      alignItems: "center",
      variant:"outlined",
      width:"100%",
  },
    textField:{
        
        width:"100%",
        borderRadius: "16px",
        color: "#0AB32A",
        '& label.Mui-focused': {
            color: "#0AB32A",
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: 'yellow',
          },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: "#80DE92",
              },
            '&:hover fieldset': {
              borderColor: "#32DC53",
            },
            '&.Mui-focused fieldset': {
              borderColor: "#0AB32A",
              
            },
          },
        
        
    },
    text:{
        fontSize: "15px",
        labelWidth:"100",
        color: "#0AB32A"
        
    },
    btn: {
        marginTop: "5px",
        padding: "5px",
        fontSize: "20px",
        fontWeight: 400,
        borderRadius: "10px",
        border: "none",
        backgroundColor: "#1877F2" ,
        color: "#ffff" ,
        marginLeft:"10%",
        display: "block",
        width: "80%",
        '&:hover': { 
            background: "#1665CB",
            fontWeight: 900
          }
      },
    btnU:{
      marginTop:"20px",
      fontSize: "15px",
      borderRadius: "10px",
      backgroundColor: "#6CEA55" ,
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
    textL:{color: "#ffff" },
    btnRegister:{
      marginTop: "10px",
        padding: "10px",
        fontSize: "20px",
        fontWeight: 400,
        borderRadius: "10px",
        border: "none",
        backgroundColor: "#6CEA55" ,
        color: "#ffff" ,
        display: "block",
        width: "50%",
        marginLeft:"20%",
        '&:hover': {
            background: "#16cb4c",
            fontWeight: 900
          }

    }, 
    logo:{
      alignItems: 'center',
      justifyContent: 'center',
      maxWidth: 100,
    margin: 'auto',
    borderRadius: 12,
    padding: 0,
    }
})
 
export default loginStyles