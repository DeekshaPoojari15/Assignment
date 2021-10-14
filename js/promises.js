// GET request
function getEmployeeList(){
   fetch('http://localhost:3000/employee')
   .then((res)=>{
       res.json()
       .then((data)=>{
            employeesList = data;
            displayEmployees();
       });
   })
   .catch((err)=>{
       console.log(err)
   });
}

// POST request
function addEmployee(){
    console.log("In POST request");
    var name1=document.getElementById("name").value;
    var email1=document.getElementById("email").value;
    let employee = {name:name1, email:email1, active:true};
    fetch('http://localhost:3000/employee',{
        method: 'POST',
        headers:{'Content-type': 'application/json'},
        body:  JSON.stringify(employee)
    }).then((res)=>console.log(res)).catch((err)=>console.log(err))
    .catch((err)=>{
      console.log(error);
    });

};

// PUT request
function putEmployee(){
  console.log("In PUT request")
  var id=document.getElementById("id1").value;
  var name2=document.getElementById("name1").value;
  var email2=document.getElementById("email1").value;
  var url='http://localhost:3000/employee/'.concat(id); 
  //console.log(url);
  let employee={id:id,name:name2, email:email2, active:false}
  fetch(url,{
  method: 'PUT',
  headers:{'Content-type': 'application/json'},
  body: JSON.stringify(employee)
  })
  .then(response => response.json())
  .then(json => console.log(json));
}

// DELETE request
function deleteEmployee(){
  console.log("In DELETE request")
  var id=document.getElementById("id").value;
  var url='http://localhost:3000/employee/'.concat(id);
  //console.log(url);
  fetch(url,{
        method: 'DELETE',
        headers:{'Content-type': 'application/json'}
});
}

// Display Function
function displayEmployees(){
   let employeesDispCont = employeesList.map((employee)=>`<li>${employee.name}(${employee.active?'Y':'N'})-${employee.email}</li>`);
   console.log(employeesDispCont);
   let element = document.getElementById('employeeList');
   let innerHTML = "";
   for(let index = 0; index<employeesDispCont.length; index++){
    innerHTML = innerHTML.concat(employeesDispCont[index]);
   }
   element.innerHTML = innerHTML;
}
