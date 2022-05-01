newlist = [];
const input = document.querySelector("input");
const btnelement = document.querySelector("button");
const newelements = document.querySelector(".displayingelements");

btnelement.addEventListener("click", addelement);

function addelement(event) {
  event.preventDefault();

  const obj = {
    id: newlist.length,
    task: input.value,
  };
  newlist.push(obj);
  console.log(newlist);

  printobj();
  input.value = "";
}

function printobj() {
  newelements.innerHTML = "";
  for (let i = 0; i < newlist.length; i++) {
    const element = newlist[i];
    newelements.innerHTML += `<p>${element.task}  <button id='removebtn' onclick=deleteitem(${element.id})>X</button></p> `;
  }

  console.log();
}
let listindex ;
function deleteitem(target) {
  for (let i = 0; i < newlist.length; i++) {
    const element = newlist[i];

    if (element.id === target) {
      listindex = i;
      newlist.splice(listindex, 1);
    }
  }
  console.log(newlist);
  printobj();
}

function deleteall(){
    
    newlist.innerHTML=""
    
  console.log('cliked');
}