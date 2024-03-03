const xhr = new XMLHttpRequest();
xhr.open("GET"," ./resume.json");
xhr.sent();
xhr.onload = () => {
   const data = JSON.parse(xhr.responce);
   console.log(data);


};