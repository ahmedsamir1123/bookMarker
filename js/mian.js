
// cruds



var websiteName = document.getElementById('websiteName')
var WebSiteUrl = document.getElementById('WebSiteUrl')

var button = document.getElementById('button')


var closeElem = document.querySelector("#closeElement")

var urlPattern = /.+\..+/;


var modelElment = document.querySelector("#modal")



// Add product  



var productList;


if (localStorage.product != null) {
    productList = JSON.parse(localStorage.product)
} else {
    productList = []
}

function addProduct() {
    var productDetails = {
        wName: websiteName.value,
        WUrl: WebSiteUrl.value

    }
    if (websiteName.value.length < 3 || !urlPattern.test(WebSiteUrl.value)) {
        modelElment.classList.replace("d-none", 'd-block')

    }
    else {

        productList.push(productDetails)
        localStorage.setItem('product', JSON.stringify(productList))
        showData()
        clearForm()
    }

}


function clearForm() {
    websiteName.value = ''
    WebSiteUrl.value = ''

}



// read


function showData() {
    var template = ''
    for (var i = 0; i < productList.length; i++) {


        template += `
        
        
       <tr>
          <td>`+ i + `</td>
          <td>`+ productList[i].wName + `</td>
          <td><button class="btn btn-success ">
           
              <a href="https://`+ productList[i].WUrl + `/" target="_blank" class="text-white text-decoration-none">  <i class="fa-solid fa-eye"></i> <span >visit</span>
              </a>
            </button></td>

          <td><button class="btn btn-danger" onclick="deleteProduct( ${i}  )" >
              <i class="fa-solid fa-trash"></i>
              delete
            </button></td>
        </tr>
        
        
        `

    }

    document.getElementById('tbody').innerHTML = template
}


showData()


function deleteProduct(i) {

    productList.splice(i, 1)
    localStorage.product = JSON.stringify(productList)
    showData()
}


closeElem.addEventListener("click", closeModer)

function closeModer() {

    modelElment.classList.replace("d-block", 'd-none')

}
