const btn = document.querySelectorAll("button")
btn.forEach(function (button, index) {
    button.addEventListener("click", function (event) {
        {
            var btnItem = event.target
            var product = btnItem.parentElement
            var productImg = product.querySelector("img").scr
            var productName = product.querySelector("H1").innerText
            var productPrice = product.querySelector("span").innerText
            addcart(productPrice, productImg, productName)
        }
    })

})
function addcart(productPrice, productImg, productName) {
    var addtr = document.createElement("tr")
    var trcontent = '<tr><td style="display: flex;"><img style="width:70px" src="' + productImg + '" alt="">' + productName + '</td><td><p><span>' + productPrice + '</span><sup>$</sup></p></td><td><input style="width: 30px;outline: none; " type="number" value="1" min="0"></td><td style="cursor: pointer;">xóa</td></tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")
    //console.log(cartTable)
    cartTable.append(addtr)

    carttotal()
}

function carttotal() {
    var cartItem = document.querySelectorAll("tbody tr")
    var totalC = 0
    for (var i = 0; i < cartItem.length; i++) {
        var inputValue = cartItem[i].querySelector("input").value
        //    console.log(inputValue)
        var productPrice = cartItem[i].querySelector("span").innerHTML
        //    console.log(inputPrice)
        totalA = inputValue * productPrice * 1000
        //    totalB = totalA.toLocaleSTring('de-DE')
        //    console.log(totalB)
        totalC = totalC + totalA
        //        console.log(totalC)
        totalD = totalC.toLocaleString('de-DE')
    }
    var cartTotalA = document.querySelector("price-total span")
    cartTotalA.innerHTML = totalC
    // console.log(cartTotalA)
}
