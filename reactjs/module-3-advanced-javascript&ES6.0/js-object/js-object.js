/* 
what is js object ?
js object is an entity stored with {} property with values

examples :  

   var emp={
   
        id:1,
        name:"brijesh",
        age:32
   
   }

   console.log(emp);



*/

var emp = {
  id: 1,
  name: 'brijesh',
  age: 32,
};

console.log(emp);
console.log(emp.name);
console.log(emp.id);
console.log(emp.age);

// modify in object
// emp.name = 'jay';
// console.log(emp.name);

// delete data from object
delete emp.name;
console.log(emp.name);
