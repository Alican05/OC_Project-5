Object.defineProperty(exports, "__esModule", { value: true });

   /* Charge le scripte une fois que la page est charger */

  window.addEventListener('DOMContentLoaded', function () {

    /* -- Page Index.html -- */

      /* Condition pour que la boucle donctionne ( unniquement pour la page index) */

      if(window.location.href === "file:///C:/Users/aliic/OneDrive/Bureau/Developpement/opcours/p5/P5-Dev-Web-Kanap-master/front/html/index.html"){
        
      /* Création de la boucle for */
        for(i = 0; i < products.length; i++){


          /* Création de la Balise a */

          let node = document.createElement("a");
          let textnode = document.createTextNode("");

          node.appendChild(textnode);
          document.getElementById("items").appendChild(node);

          let newHref = "./product.html?id=" + products[i]["_id"];

          node.className = "aClass";
          node.href = newHref;
        
        
            /* Création Balise article dans la balise a  */

          let balisage = document.createElement("article");
          let baliseArt = document.createTextNode("");

          balisage.appendChild(baliseArt);
          document.getElementsByClassName("aClass")[i].appendChild(balisage);

          balisage.className = "articleClassName";
            

            /* Création Balisess img dans la balise article */

          let baliseImg = document.createElement("img");
          let baliseImg2 = document.createTextNode("");

          baliseImg.appendChild(baliseImg2);
          document.getElementsByClassName("articleClassName")[i].appendChild(baliseImg);

          let newImg = "../../back/images/" + products[i]["imageUrl"];
          let newAlt = products[i]["altTxt"];

          baliseImg.src = newImg;
          baliseImg.alt = newAlt;

            /* Création Balise h3 dans la balise article */

          let baliseH3 = document.createElement("h3");
          let baliseH3_2 = document.createTextNode(products[i]["name"]);

          baliseH3.appendChild(baliseH3_2);
          document.getElementsByClassName("articleClassName")[i].appendChild(baliseH3);

            /* Création Balise P dans la balise article */

          let baliseP = document.createElement("p");
          let baliseP_2 = document.createTextNode(products[i]["description"]);

          baliseP.appendChild(baliseP_2);
          document.getElementsByClassName("articleClassName")[i].appendChild(baliseP);
        }
      }

  });
      
  window.addEventListener('DOMContentLoaded', function (){

    for(j = 0; j < products.length; j++){

      /* Condition pour que la boucle fonctionne (fonctionnera pour tous les produits en page product.html) */

    if(window.location.href === "file:///C:/Users/aliic/OneDrive/Bureau/Developpement/opcours/p5/P5-Dev-Web-Kanap-master/front/html/product.html?id=" + products[j]["_id"]){

      /* Delete la decription afin de pouvoir ajouté la nouvelle */

      var element = document.getElementById("description");
      while (element.firstChild) {
      element.removeChild(element.firstChild);
      }

      /* Ajouts des differents elements dans la page */

      let name1 = document.createTextNode(products[j]["name"]);
      document.getElementById("title").appendChild(name1);

      let price1 = document.createTextNode(products[j]["price"]);
      document.getElementById("price").appendChild(price1);

      let description1 = document.createTextNode(products[j]["description"]);
      document.getElementById("description").appendChild(description1);

      /* Delete balises enfants de la balise select */
     
      var element = document.getElementById("colors");
      while (element.firstChild) {
      element.removeChild(element.firstChild);
      }

      /* Ajout de la value SVP, choisissez une couleur */

      let value1 = document.createElement("option");
      let value2 = document.createTextNode("--SVP, choisissez une couleur--");

      value1.appendChild(value2);
      document.getElementById("colors").appendChild(value1);

      /* Boucle for qui permet de prendre les elements du tableau "colors" séparément */

      for(k = 0; k < products[j]["colors"].length; k++){
        
        let colors1 = document.createElement("option");
        let colors1_5 = document.createTextNode(products[j]["colors"][k]);
        colors1.appendChild(colors1_5);
        document.getElementById("colors").appendChild(colors1);
      }

      /* Delete logo canapé sur la page produit pour laisser seuleument la photo du produit en question */

      var element = document.getElementsByClassName("item__img")[0];
      while (element.firstChild) {
      element.removeChild(element.firstChild);
      }

      /* Ajout de la photo du canapé en question */

      let baliseImg = document.createElement("img");
      let baliseImg2 = document.createTextNode("");

      baliseImg.appendChild(baliseImg2);
      document.getElementsByClassName("item__img")[0].appendChild(baliseImg);

      let newImg = "../../back/images/" + products[j]["imageUrl"];
      let newAlt = products[j]["altTxt"];

      baliseImg.src = newImg;
      baliseImg.alt = newAlt;

    }
  }
});

    /* Button ajouter au panier */


    //tableau pour stocker des valeurs
var stores = Array();

//text pour saisir le champ

var imgBal1 = document.getElementsByClassName('item__img')[0];
var imgBal = imgBal1.getElementsByTagName("img");
var inputField1 = imgBal.item(0).src;
var inputField2 = document.getElementById('title');
var inputField3 = document.getElementById('colors');
var inputField4 = document.getElementById('price');
var inputField5 = document.getElementsByName('itemQuantity')[0];

//function pour nettoyer le storage
function clearStorage() {
    //clear the storage
    stores = Array();
    localStorage.clear("azer");
    //permet d'ecrire storage cleared dans la div
    document.getElementById('write').innerHTML = "storage cleared.";
}

// save the string
function saveStatusLocally() {
    //si le input est vide le message nothing to store apparait
    var stringToSave = inputField1 + " " + inputField2.innerText + " " + inputField3.value + " " + inputField4.innerText + " " + inputField5.value;
    if ((stringToSave == null) || (stringToSave == "")) {
        document.getElementById('write').innerHTML = "nothing to store.";
    } else {
        //envoi la valeur en fin de tableu
        stores.push(stringToSave);
        //change la valeur de inpute en chaine de caractere vide donc ca clear
        inputField1.value = "";
        //il met le truck que t'ecrit dans input dans la database et les sépar par un espace
        window.localStorage.setItem("azer", stores.join(" "));

    }
    console.log(stringToSave);
}

    // ecoute la function ci dessus lors du click sur le button "ajouter au panier"
  const addToPanier = document.querySelector("#addToCart");
  addToPanier.addEventListener("click", saveStatusLocally);


// read the string
function readStatus() {
    //si le champ de texte est vide alor le message ecrit sera "nothing stored" sinon il renvoi ce qui est ecrit dans la database c'est caré
    if (window.localStorage.getItem("azer") == null) {
        document.getElementById('write').innerHTML = "nothing stored.";
    } else {
        document.getElementById('write').innerHTML = window.localStorage.getItem("azer");
    }
}
readStatus();


    

 



  