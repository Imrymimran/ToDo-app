var item = document.getElementById("list");
function addTodo(){
    var input = document.getElementById("input")
    var li = document.createElement('li')
    var liText = document.createTextNode(input.value)
    li.appendChild(liText)

     var delBtn = document.createElement("button")
     var delText =document.createTextNode("DELETE")
     delBtn.setAttribute("class","btn")
     delBtn.setAttribute("onclick","deleteItem(this)")

     delBtn.appendChild(delText)
    
     var editBtn = document.createElement("button");
     var editText =document.createTextNode("EDIT");
     editBtn.setAttribute("class","btn")
     editBtn.appendChild(editText)
     editBtn.setAttribute("onclick","editItem(this)")

    li.appendChild(delBtn)
    li.appendChild(editBtn)
    item.appendChild(li);
    


    input.value = ""
}
function deleteItem(e){
  e.parentNode.remove()
}
function editItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter Edit Value", val);
    e.parentNode.firstChild.nodeValue = editValue;
}
function deleteAll(){
    list.innerHTML = ""
}