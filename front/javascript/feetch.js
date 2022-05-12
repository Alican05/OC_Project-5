fetch("http://localhost:3000/api/products")
    .then(function (response) {
        return response.json()
    }).then(function (data){
       // console.log(products[7]["description"]);
    })
    