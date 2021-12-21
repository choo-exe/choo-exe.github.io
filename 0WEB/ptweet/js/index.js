window.onload = () => {
  let usuario = JSON.parse(localStorage.getItem("usuario"));
  document.getElementById("imgUser").src = "./img/" + usuario.imagen;
  let arrayTw = [];
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open("GET", "./js/tweets.json", true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      arrayTw = JSON.parse(xobj.responseText);
      console.log(arrayTw);
    }
  };
  xobj.send(null);
  //console.log(usuario);
  //document.getElementById("usuario").innerHTML = "Hola "+ usuario.nombre;
  let txtTweet = document.getElementById("txtTweet");
  let btnTweet = document.getElementById("btnTweet");
  btnTweet.addEventListener("click", (evt) => {
    if (txtTweet.value.trim() != "") {
      let obj = {
        img: usuario.imagen,
        nombre: usuario.nombre,
        tweet: txtTweet.value,
        username: usuario.username,
        likes: 0,
        retweets: 0,
        comentarios: [],
      };
      arrayTw.push(obj);
      crearPost();
      txtTweet.value = "";
    }
  });
  txtTweet.addEventListener("keyup", (evt) => {});
  function crearPost() {
    var todo = "";
    arrayTw.forEach((el) => {
      //console.log(arrayTw);
      todo += `
        <div class="post">
        <div>
            <img src="img/${el.img}" alt="" class="imgUser">
        </div>
        <div>
            <h2> 
                <span>${el.nombre}</span>
                <span>${el.username}</span>
            </h2>
            <div class="textTweet">
                ${el.tweet}
            </div>
            <div class="ic">
                    <div>
                    <i class = "fa fa-heart"></i> ${el.likes}
                    <i class = "fa fa-share" style="padding-left:500px;"></i> ${el.retweets}
                    </div>
                    
            </div>
            `;
      el.comentarios.forEach((el2) => {
        //console.log(arrayTw);
        todo += `
                <div class="tweet">
                    <div>
                        <img src="img/${el2.img}" alt="" class="imgUser">
                    </div>
                    <div>
                        <h2> 
                            <span>${el2.nombre}</span>
                            <span>${el2.username}</span>
                        </h2>
                        <div class="textTweet">
                         ${el2.comentario}
                         </div>
                    
                    </div>
                    </div>`;
      });
      todo += `
                    </div>
                    
                </div>`;
    });

    document.getElementById("posts").innerHTML = todo;
  }
};
