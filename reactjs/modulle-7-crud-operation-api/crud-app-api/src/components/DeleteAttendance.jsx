import React,{useEffect} from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate,useParams } from 'react-router-dom'
export default function DeleteAttendance() {
const navigate=useNavigate();
const{id}=useParams();
// create a delete api 
useEffect(()=>{
try 
{
Swal.fire({
title: "Are you sure to delete data ?",
showDenyButton: true,
confirmButtonText: "yes",
denyButtonText: `No`
}).then((result) => {
/* Read more about isConfirmed, isDenied below */
if (result.isConfirmed) {
axios.delete(`http://localhost:4000/add-attendance/${id}`).then(()=>{
Swal.fire({
title: "Congratulations!",
text: "Your attendance addded succefully!",
icon: "success"
});    
});
} 
else if (result.isDenied) {
Swal.fire("something went wrong", "", "error");
}
});    
navigate('/');
}
catch(error)
{
console.log('error while deleteing',error); 
}
})
return (
<div>DeleteAttendance</div>
)
}
