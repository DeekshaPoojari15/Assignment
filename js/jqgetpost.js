// GET method -jquery ajax
function getEmployeeList(){
	$.get('http://localhost:3000/employee',function(response){
		employeesList=response;
		displayEmployees();
	})
}

//POST method -jquery ajax
function addEmployee(){
	var name=$("#name").val();
	var email=$("#email").val();
	var employee={name:name, email:email, active:true }
	$.post('http://localhost:3000/employee',employee)
}

//display method for Get
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