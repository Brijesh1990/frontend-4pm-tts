import React,{useState,useRef} from 'react'
import axios from 'axios';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

/*

what is UseState ?
useState is a Hook that allows you to have state variables in functional components. You can declare a state variable and a function to update it. When the state variable changes, the component re-renders to reflect the new state.

Example:
import React, { useState } from 'react';
const Counter = () => {
const [count, setCount] = useState(0);
return (
<div>
<p>You clicked {count} times</p>
<button onClick={() => setCount(count + 1)}>Click me</button>
</div>
);
}

what is UseRef ?

useRef is a Hook that allows you to create a mutable reference that persists across re-renders. It can be used to access DOM elements directly or to store any mutable value that does not cause a re-render when updated.

Example:
import React, { useRef } from 'react';  
const TextInput = () => {  
const inputRef = useRef(null);
const focusInput = () => {
inputRef.current.focus();
};
return (  
<div>
<input ref={inputRef} type="text" />
<button onClick={focusInput}>Focus the input</button>
</div>  
);  
}

what is api ?
API stands for Application Programming Interface. It is a set of rules and protocols that allows different software applications to communicate with each other. APIs define the methods and data formats that applications can use to request and exchange information.

what is json ?
JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate. It is commonly used for transmitting data between a server and a web application as an alternative to XML.

what is json server ?
JSON Server is a simple and quick way to set up a RESTful API using a JSON file as the database. It allows developers to create a mock backend server for testing and prototyping purposes without the need for a full-fledged backend implementation. JSON Server provides endpoints for CRUD (Create, Read, Update, Delete) operations based on the structure of the JSON file.

how to install json server ?
You can install JSON Server globally using npm (Node Package Manager) by running the following command in your terminal:

npm install -g json-server

Once installed, you can create a JSON file (e.g., db.json) to serve as your database and start the JSON Server with the following command:

json-server --watch db.json --port 4000

This will start the server and make your JSON data accessible via RESTful endpoints at http://localhost:4000 (or the specified port).

what is crud operations ?
CRUD operations refer to the four basic functions of persistent storage in a database or data management system. CRUD stands for Create, Read, Update, and Delete. These operations are fundamental for managing data in applications.

1. Create: This operation involves adding new data or records to a database. It typically corresponds to the SQL INSERT statement.

2. Read: This operation involves retrieving or fetching data from a database. It corresponds to the SQL SELECT statement.

3. Update: This operation involves modifying or changing existing data in a database. It corresponds to the SQL UPDATE statement.

4. Delete: This operation involves removing or deleting data from a database. It corresponds to the SQL DELETE statement.

what is axios ?
Axios is a popular JavaScript library used to make HTTP requests from the browser or Node.js. It is often used in web development to interact with APIs and fetch or send data to a server. Axios provides a simple and intuitive API for making asynchronous requests, handling responses, and managing errors.

how to install axios ?
You can install Axios using npm (Node Package Manager) or yarn. Here are the commands for both:

Using npm:
npm install axios

Using yarn:
yarn add axios


axios methods ?
1. axios.get(url, config): This method is used to make a GET request to the specified URL. It retrieves data from the server.

2. axios.post(url, data, config): This method is used to make a POST request to the specified URL. It sends data to the server to create a new resource.

3. axios.put(url, data, config): This method is used to make a PUT request to the specified URL. It sends data to the server to update an existing resource.

4. axios.delete(url, config): This method is used to make a DELETE request to the specified URL. It deletes a resource from the server.

*/

export default function ContactUs() {
const[data,setData]=useState("");
// create a useRef for form data stored in a varaiables 
const name=useRef("");
const email=useRef("");
const phone=useRef("");
const subject=useRef("");
const message=useRef("");
const navigate=useNavigate();
// handle form submit
const handleSubmit=async(e)=>{
e.preventDefault();
//  create a object for form data
var insert={
name:name.current.value,
email:email.current.value,
phone:phone.current.value,
subject:subject.current.value,
message:message.current.value
}

// create a post request using fetch

try{
axios.post(`http://localhost:8000/contact-us`,insert).then((res)=>{
console.log(res);
setData(res.data);
// print alert
//alert("Form submitted successfully");
//print a sweetalert2
Swal.fire({
title: 'Success!',
text: 'Form submitted successfully',
icon: 'success',
confirmButtonText: 'OK'
})
})

e.target.reset();
navigate("/welcome");

}
catch(err)
{
console.log(err);
alert("Form submission failed");
}

}


// create a post request using axios
// try{
//     const res=await fetch("http://localhost:4000/contact-us",insert)
//     const data=await res.json();
//     setData(data);
//     alert("Form submitted successfully");
// }
// catch(err){
//     console.log(err);
//     alert("Form submission failed");
// }






return (
<>
{/* contact us form using grid in tailwinds */}
<div className="min-h-screen grid grid-cols-2 items-center justify-center p-8 bg-gradient-to-r from-green-400 to-blue-600 gap-8">
<div className='w-full'>
<img src="https://static.vecteezy.com/system/resources/thumbnails/048/089/999/small/call-us-shape-banner-free-png.png" alt="Contact Us" className="w-full h-full object-cover" />
</div>
<div className="bg-white p-8 rounded shadow-md w-full max-w-md">
<h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Us</h2>
<form onSubmit={handleSubmit} className="space-y-4">
<div>
<label className="block text-gray-700">Name</label>
<input type="text" ref={name} className="w-full px-3 py-2 border rounded" placeholder="Your Name" required />
</div>
<div>
<label className="block text-gray-700">Email</label>
<input type="email" ref={email} className="w-full px-3 py-2 border rounded" placeholder="Your Email" required />
</div>
<div>
<label className="block text-gray-700">Phone</label>
<input type="text" ref={phone} className="w-full px-3 py-2 border rounded" placeholder="Your Phone" required />
</div>
<div>
<label className="block text-gray-700">Subject</label>
{/* dropdown */}
<select ref={subject} className="w-full px-3 py-2 border rounded">
<option value="">Select Subject</option>
<option value="general">General Inquiry</option>
<option value="support">Support</option>
<option value="feedback">Feedback</option>
</select>

</div>
<div>
<label className="block text-gray-700">Message</label>
<textarea ref={message} className="w-full px-3 py-2 border rounded" placeholder="Your Message" required></textarea>
</div>
<button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Submit</button>
</form>
</div>
</div>
</>

)
}
