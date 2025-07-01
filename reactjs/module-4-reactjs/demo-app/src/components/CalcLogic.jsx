import React from 'react';
import Swal from 'sweetalert2';
function ad() {
  const a = parseInt(prompt('Enter a values :'));
  const b = parseInt(prompt('Enter b values :'));
  const c = a + b;
  //pass a messages

  Swal.fire({
    title: 'yes output is get',
    text: 'The additions of numbers is :' + c,
    icon: 'success',
  });
}

function subs() {
  const a = parseInt(prompt('Enter a values :'));
  const b = parseInt(prompt('Enter b values :'));
  const c = a - b;
  //pass a messages

  Swal.fire({
    title: 'yes output is get',
    text: 'The substractions of numbers is :' + c,
    icon: 'success',
  });
}

function dv() {
  const a = parseInt(prompt('Enter a values :'));
  const b = parseInt(prompt('Enter b values :'));
  const c = a / b;
  //pass a messages

  Swal.fire({
    title: 'yes output is get',
    text: 'The divisions of numbers is :' + c,
    icon: 'success',
  });
}

export { ad, subs, dv };
