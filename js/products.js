var productsArray = [];

function showProducts(array) {
    let listado = "";
    for (let i = 0; i < array.length; i++){

        let product = array[i];
        
        
        listado += ` 
        <hr>
        <div class="row">
        <div class="col-3">
        <img src="` + product.imgSrc +  `" class="img-thumbnail">
        </div>
        <div class="col">
        <div class="d-flex w-100 justify-content-between">
        <h4 class="mb-1">`+ product.name + `</h4>
        <small class="text-muted">`+ product.soldCount + ` vendidos</small> 
        </div>
        <p class="mb-1">` + product.description + `</p>
        <p class="mb-1" id="precio">` + product.currency + " " + product.cost +  `</p>
        <br><br><br><hr><br><br>
        </div>
        </div>
        
        `
        
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
