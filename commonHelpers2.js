import"./assets/styles-4fd2d310.js";let e={email:"",message:""};localStorage.getItem("feedback-form-state")&&(e=JSON.parse(localStorage.getItem("feedback-form-state")),document.querySelector('input[name="email"]').value=e.email,document.querySelector('textarea[name="message"]').value=e.message);document.querySelector(".feedback-form").addEventListener("input",t=>{e[t.target.name]=t.target.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(e))});document.querySelector(".feedback-form").addEventListener("submit",t=>{if(t.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log(e),localStorage.removeItem("feedback-form-state"),e={email:"",message:""},document.querySelector(".feedback-form").reset()});
//# sourceMappingURL=commonHelpers2.js.map
