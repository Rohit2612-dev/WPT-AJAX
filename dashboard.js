
function getData(){
    
    // step1 : create Object of XMLHttpRequest
    let xmlObj = new XMLHttpRequest();
    //step2: write callback function 
    xmlObj.onload = function (){
        // console.log(this.responseText);
        let prodObj = JSON.parse(this.responseText);
        // console.log(prodObj);
      let parentEl = document.getElementById("d1");
      for(let p of prodObj){
            let newRow = document.createElement("tr");
            newRow.innerHTML=`<td>${p.id}</td><td>${p.pname}</td><td>${p.pprice}</td><td>${p.company}</td><td>${p.quantity}</td>`;
        parentEl.appendChild(newRow);
      }
      

    };
    // step3: create requests 
    xmlObj.open("GET","http://localhost:8888/products");
    //step4: send request 
    xmlObj.send();
}

function deleteProduct(){
  let id = document.getElementById("pid").value;
  // console.log(id);
 
  if(window.confirm(`Are you Sure to delete product with id :${id}`)){
    // step1 : create Object of XMLHttpRequest
    let xmlObj = new XMLHttpRequest();

    xmlObj.onload = function (){
      window.alert("Product Deleted Successfully");
    }
  
    xmlObj.open("DELETE",`http://localhost:8888/products/${id}`);
    xmlObj.send();
  }

}

function addProduct(){
  let prod = {
    pname:document.getElementById("txtname").value,
    pprice:document.getElementById("txtprice").value,
    company:document.getElementById("txtcompany").value,
    quantity:document.getElementById("txtquantity").value
  }
  let prodJson = JSON.stringify(prod);

  let xmlObj = new XMLHttpRequest();
  xmlObj.onload = function (){
    window.alert("Product Added Successfully");
  
    document.getElementById("txtname").value="";
    document.getElementById("txtprice").value="";
    document.getElementById("txtcompany").value="";
    document.getElementById("txtquantity").value="";

  };
  xmlObj.open("POST","http://localhost:8888/products");
  xmlObj.send(prodJson);
}

let id;
function getSingleProduct(){
   id = document.getElementById("upid").value;
    // step1 : create Object of XMLHttpRequest
    let xmlObj = new XMLHttpRequest();

    //step2: write callback function 
    xmlObj.onload = function (){
        // console.log(this.responseText);
        let prodObj = JSON.parse(this.responseText);
        console.log(prodObj);
         document.getElementById("utxtname").value=prodObj.pname,
    document.getElementById("utxtprice").value=prodObj.pprice,
    document.getElementById("utxtcompany").value=prodObj.company,
    document.getElementById("utxtquantity").value=prodObj.quantity
    };
    // step3: create requests 
    xmlObj.open("GET",`http://localhost:8888/products/${id}`);
    //step4: send request 
    xmlObj.send();
}

function updateProduct(){

 let prod = {
    pname:document.getElementById("utxtname").value,
    pprice:document.getElementById("utxtprice").value,
    company:document.getElementById("utxtcompany").value,
    quantity:document.getElementById("utxtquantity").value
  }
  let prodJson = JSON.stringify(prod);

  let xmlObj = new XMLHttpRequest();
  xmlObj.onload = function (){
    window.alert("Product Updated Successfully");
  
    document.getElementById("utxtname").value="";
    document.getElementById("utxtprice").value="";
    document.getElementById("utxtcompany").value="";
    document.getElementById("utxtquantity").value="";

  };
  xmlObj.open("PUT",`http://localhost:8888/products/${id}`);
  xmlObj.send(prodJson);

}