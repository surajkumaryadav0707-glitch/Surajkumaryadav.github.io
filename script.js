function showMessage(){

alert("Thank You for Visiting My Portfolio!");

}

const skills=document.querySelectorAll(".skill");

skills.forEach(skill=>{

skill.addEventListener("mouseover",function(){

this.style.background="#38bdf8";

});

skill.addEventListener("mouseout",function(){

this.style.background="#2563eb";

});

});
