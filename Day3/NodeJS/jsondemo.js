var stud={
    name:'Shweta',
    empId:25,
    hobbies:['music','sports'],
    address:{
        city:'Mumbai',state:'Maharashtra'
    }
}
var jsonstring= JSON.stringify(stud);
console.log(jsonstring);
var jsobj=JSON.parse(jsonstring);
console.log(jsobj);