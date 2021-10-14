//ajax GET method
function getEmployeeList(){
	$.ajax({
		url:'http://localhost:3000/employee',
		type:'GET',
		success:function(response){
			employeesList=response;
			displayEmployees();
		}
	})
}

//ajax POST method
function addEmployee(){
	var name=$("#name").val();
	var email=$("#email").val();
	let data = {name: name,email: email,active:true}
	$.ajax({
		url:'http://localhost:3000/employee',
		type:'POST',
		data:data,
		success:function(response){
			console.log(response);
		},
		//dataType:json
	})
}

//ajax PUT method
function putEmployee(){
	var id=$("#id1").val();
	var name=$("#name1").val();
	var email=$("#email1").val();
	var url='http://localhost:3000/employee/'.concat(id);
	let data = {name: name,email: email,active:false};
	$.ajax({
		url:url,
		type:'PUT',
		data:data,
		success:function(response){
			console.log(response);
		},
		dataType:"json"
	})
}

//ajax DELETE method
function deleteEmployee(){
		var id=$("#id").val();
		var url='http://localhost:3000/employee/'.concat(id);
		$.ajax({
		url:url,
		type:'DELETE',
		success:function(response){
			console.log(response);
		}
	})
}

//display methos for GET
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