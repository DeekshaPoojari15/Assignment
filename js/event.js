//GET 
var employeesList;
function getEmployeeList(){
   var xhttp = new XMLHttpRequest();
   var obj = this;
   xhttp.onreadystatechange = function(){
        if(xhttp.readyState === 4 && xhttp.status === 200){
            employeesList = JSON.parse(xhttp.response);
            obj.displayEmployees();
        }
    };
    xhttp.open('GET', 'http://localhost:3000/employee');
    xhttp.send();
}

//POST
function addEmployee(){
   const params = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            active:true
        }
        const http = new XMLHttpRequest()
        http.open('POST', 'http://localhost:3000/employee')
        http.setRequestHeader('Content-type', 'application/json')
        http.send(JSON.stringify(params)) // Make sure to stringify      
}

//PUT
function putEmployee(){
   const params = {
            name: document.getElementById("name1").value,
            email: document.getElementById("email1").value,
            active:false
        }
        var id=document.getElementById("id1").value;
        var url='http://localhost:3000/employee/'.concat(id);
        const http = new XMLHttpRequest()
        http.open('PUT', url)
        http.setRequestHeader('Content-type', 'application/json')
        http.send(JSON.stringify(params)) // Make sure to stringify      
}

//DELETE
function deleteEmployee(){
        var id=document.getElementById("id").value;
        var url='http://localhost:3000/employee/'.concat(id);
        const http = new XMLHttpRequest()
        http.open('DELETE', url)
        http.setRequestHeader('Content-type', 'application/json')
        http.send(JSON.stringify())      
}

//display function
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

