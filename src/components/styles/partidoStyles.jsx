const partidoStyles = () => ({

    formularioNuevoProyecto: {
        marginTop: '10px',
        alignItems: 'center',
        justifyContent: 'center',
        padding: "10px",
      },
      btnNew:{
        fontSize: "15px",
        color:'#ffff',
        textTransform: 'none',
        backgroundColor:"#1877F2",
        '&:hover': {
            background: "#1877F2",
     
          }
      },
      btnRegister:{
        marginTop:'20px',
        fontSize: "15px",
        marginLeft:"10%",
        marginRight:'10%',
        color:'#ffff',
        textTransform: 'none',
        backgroundColor: "#0AB32A",
        '&:hover': {
            background: "#16cb4c",
            
          }
      },
      input:{
        marginTop:'10px',
        width:'90%',
        fontSize: "30px",
      },


      
      fecha:{
        margin:'10px',
        fontSize: "20px",
        width:'40%',
        
      },
      textField:{
        marginTop: '12px',
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
    textFieldTime:{
      marginTop: '12px',
      width:'42%',
      margin: '3px',
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
  textFieldDate:{
    marginTop: '12px',
    width:'56%',
    //margin: '5px',
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
        fontSize: "20px",
        labelWidth:"100",
        color: "#0AB32A"
        
    },

    h3:{
      fontSize: "20px",
    }
})
 
export default partidoStyles;