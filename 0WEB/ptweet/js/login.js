window.onload = function(){
    var boton = document.getElementById("btnAceptar");
    var txtUsuario = document.getElementById("txtUsuario");
    var txtPassword = document.getElementById("txtPassword");

    boton.addEventListener('click',function(){
        let usuario = txtUsuario.value;
        let pass = txtPassword.value;
        if(usuario.trim() == "admin" && pass.trim() == "123"){
            alert("Listo");
        
        }else{
            document.getElementById("error").innerHTML="Credenciales incorrectas";
            txtUsuario.style.backgroundColor= "#FF0000";
            txtPassword.style.backgroundColor= "#FF0000";
        }
    });
    
}
function limpiar (){
    txtUsuario.style.backgroundColor= "#FFF";
    txtPassword.style.backgroundColor= "#FFF";
}
   

      
      /* var x=10;
        //comentar
        /*jsdfksjddfkg*/
       /* for(var y=0;y<x;y++){
            console.log("Hola");
        }
        function alertar(){
            alert("Esta es una alerta");
        }*/
          