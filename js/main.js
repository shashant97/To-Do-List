// Form toggle

function itemFormToggle(){
    let selectForm = document.getElementById('item-form');

    if(selectForm.style.display === 'none'){
      
        selectForm.style.display = 'block';
     }

     else{
         selectForm.style.display = 'none';
     }
    
}

// Get Index on click



// Fetching View from Local Storage

var fetchedItemsarray = JSON.parse(localStorage.getItem('item'));

for(let i=0; i<fetchedItemsarray.length; i++){
  
  let unorderedList = document.getElementById('item-list');
  let listItems = document.createElement('li');
  listItems.appendChild(document.createTextNode(fetchedItemsarray[i].name + ' ' + fetchedItemsarray[i].description + ' ' + fetchedItemsarray[i].date));
  listItems.innerHTML =   
  `
  <div class="container">
  <div id="listItem" class="row">
      <div id="storedItemName" class="col-md-3">
        ${fetchedItemsarray[i].name}
      </div>
      <div id="storedItemDescription" class="col-md-3">
        ${fetchedItemsarray[i].description}
      </div>
      <div id="storedItemDate" class="col-md-3">
        ${fetchedItemsarray[i].date}
      </div>
      <div class="col-md-3">
      <!-- Button trigger modal -->
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter" onclick = "appendItemsToFormFields(${i})">
      <i class="fas fa-edit"></i>
      </button>

      <!-- Modal -->
      <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Edit Changes</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <input type="text" class="form-control mb-2" placeholder="Item Name">
              <input type="text" class="form-control mb-2" placeholder="Item Description  (If Any)">
              <input type="date" class="form-control mb-2" placeholder="Item Name">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" onclick = "saveEditedItems()">Save changes</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Button trigger modal -->
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter1">
      <i class="far fa-eye"></i>
      </button>

      <!-- Modal -->
      <div class="modal fade" id="exampleModalCenter1" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Description</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
             ${fetchedItemsarray[i].description};
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Button trigger modal -->
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter2">
      <i class="fas fa-trash"></i>
      </button>

      <!-- Modal -->
      <div class="modal fade" id="exampleModalCenter2" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Do you wish to delete the selected Item?</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" onclick = "deleteListItem(${i})">Delete</button>

            </div>
          </div>
        </div>
      </div>

      </div>
  </div>
</div>`
 


  ;
  unorderedList.appendChild(listItems);
}

function appendItemsToFormFields(index){

  localStorage.setItem('index', index);
  let storedItemsArray = JSON.parse(localStorage.getItem('item'));
  let divs = document.getElementsByClassName('form-control');
  divs[3].value = storedItemsArray[index].name;
  divs[4].value = storedItemsArray[index].description;
  divs[5].value = storedItemsArray[index].date;
}

function saveEditedItems(){
  let getIndex = localStorage.getItem('index');
}



function deleteListItem(i){
  let storedItemsArray = JSON.parse(localStorage.getItem('item'));
  document.getElementById('storedItemName').innerText = '';
}



// function saveEditedItems(i){

//   let modalFormFieldValues = document.getElementsByClassName('form-control');

//   let storedItemsArray = JSON.parse(localStorage.getItem('item'));


//   storedItemsArray[i].name = modalFormFieldValues[3].value;
//   storedItemsArray[i].description = modalFormFieldValues[4].value;
//   storedItemsArray[i].date = modalFormFieldValues[5].value;




//   // let editedName = modalFormFieldValues[3].value;
//   // let editedDescription = modalFormFieldValues[4].value;
//   // let editedDate = modalFormFieldValues[5].value;

  
// }






function saveDataToLocalStorage(){



// Appending To list and Saving to Local Storage

    let item_id = Math.floor((Math.random() * 100 + 1));
    let item_name   = document.getElementById('itemName').value;
    let item_description = document.getElementById('itemDescription').value;
    let item_date = document.getElementById('itemDate').value;

    if(item_name === '' || item_description === '' || item_date === ''){

        alert("Field's Can't be Empty!")
    }

    else{

        let outputDatatoList = document.getElementById('item-list');
        let listItems = document.createElement('li');
        listItems.appendChild(document.createTextNode(item_name + ' ' + item_date));
        listItems.innerHTML = 
        `
        <div class="container">
  <div class="row">
      <div id="storedItemName" class="col-md-3">
        ${item_name}
      </div>
      <div id="storedItemDate" class="col-md-3">
        ${item_description}
      </div>
      <div id="storedItemDescription" class="col-md-3">
        ${item_date}
      </div>
      <div class="col-md-3">
      <!-- Button trigger modal -->
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter" onclick = "onclick = "appendItemsToFormFields()">
      <i class="fas fa-edit"></i>
      </button>

      <!-- Modal -->
      <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Edit Changes</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <input type="text" class="form-control mb-2" placeholder="Item Name">
              <input type="text" class="form-control mb-2" placeholder="Item Description  (If Any)">
              <input type="date" class="form-control mb-2" placeholder="Item Name">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Button trigger modal -->
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter1">
      <i class="far fa-eye"></i>
      </button>

      <!-- Modal -->
      <div class="modal fade" id="exampleModalCenter1" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Description</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
             ${item_description};
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Button trigger modal -->
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter2">
      <i class="fas fa-trash"></i>
      </button>

      <!-- Modal -->
      <div class="modal fade" id="exampleModalCenter2" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Do you wish to delete the selected Item?</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Delete</button>

            </div>
          </div>
        </div>
      </div>

      </div>
  </div>
</div>`;
        

        
        
        outputDatatoList.appendChild(listItems);

        let itemsArray = [];
        let localItemsArray = JSON.parse(localStorage.getItem('item'));

        if(localItemsArray != null){
          itemsArray = localItemsArray;
        }


        let itemObj = {
            "id" : item_id,
            "name" : item_name,
            "description" : item_description,
            "date" : item_date
        }

        itemsArray.push(itemObj);
        localStorage.setItem("item", JSON.stringify(itemsArray));

        document.getElementById('itemName').value = '';
        document.getElementById('itemDescription').value = '';
        document.getElementById('itemDate').value = '';


    }

}


// Fetching data from JSON
// fetch('data.json')
// .then(function(response){
//     return response.json();
// })
// .then(function(data){
//     displayData(data);
// })

// function displayData(data){
 
//     let output = document.getElementById('list-items');
//     for(let i=0; i<data.length; i++){

//         let listItems = document.createElement('li');
//         listItems.appendChild(document.createTextNode(data[i].id + ' ' + data[i].name + ' ' + data[i].description + ' ' + data[i].date));
//         output.appendChild(listItems);
//     }
    
// }






