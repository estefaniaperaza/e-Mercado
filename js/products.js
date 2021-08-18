var productsArray = [];

function showProducts(array) {
    let listado = "<hr>";
    for (let i = 0; i < array.length; i++){

        let product = array[i];
        let imgSrc = "";

               array[0].imgSrc = '<img height="200" src="img/prod1.jpg">'
               array[1].imgSrc = '<img height="200" src="img/prod2.jpg">'
               array[2].imgSrc = '<img height="200" src="img/prod3.jpg">'
               array[3].imgSrc = '<img height="200" src="img/prod4.jpg">'
        

        listado += "Nombre: " + product.name + "<br>";
        listado += "Descripción: " + product.description + "<br>";
        listado += "Precio: " + product.cost + "<br>";
        listado += "Moneda: " + product.currency + "<br>";
        listado += "Imagen: "  + "<br>";
        listado += product.imgSrc + "<br>";
        listado += "Vendidos: " + product.soldCount + "<br>";
        listado += "<br><hr><br>"
    }

    
    document.getElementById("mostrar").innerHTML = listado;
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok") {
            productsArray = resultObj.data;

            showProducts(productsArray);
        }
    });
});
