document.addEventListener("DOMContentLoaded", ()=> {
   const dateE1 = document.getElementById("date");
   const minE1 = document.getElementById("min");
   const maxE1 = document.getElementById("max");

   const tbody = document.querySelector("tbody");
   const avg_summary = document.getElementById("avgAll");
   const add_bth = document.querySelector("btn");

   if (!dateE1 || !minE1 || !maxE1 || !tbody || !avg_summary || !add_bth) {
       console.warn("Trūkst obligātais elements.");
       return;
   }
})