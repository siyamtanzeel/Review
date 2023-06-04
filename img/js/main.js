//npx tailwindcss -i css/input.css -o css/output.css --watch
function Person(name,photo,review) {
  this.Name = name;
  this.Photo = photo;
  this.Review = review;
}
const Name = document.getElementById("name");
const Photo = document.getElementById("photo");
const Review = document.getElementById("review");
const Left = document.getElementById("left");
const Right = document.getElementById("right");

const Tasfiq = new Person(
  "Tasfiqul Islam",
  "img/Tasfiq.jpg",
  "Tanzeel is an incredible individual who radiates positivity and kindness wherever he goes.He is a great listener, always there to support and uplift others. A true gem of a person!"
);
const Asif = new Person(
  "Mohammad Asiful Islam",
  "img/Asif.jpg",
  "When I think of Tanzeel, the first word that comes to mind is genuine.He is sincere, authentic, and has a heart of gold. It's a privilege to have such a compassionate friend in my life."
);
const Joy = new Person(
  "Ahmed Joy",
  "img/Joy.jpg",
  "I can always count on Tanzeel to bring laughter and joy to any gathering.His sense of humor is infectious, and his charismatic personality lights up the room. A true joy to be around!"
);
const Upom = new Person(
  "Upom Dey",
  "img/Upom.jpg",
  "Intelligent, driven, and determined, Tanzeel is a force to be reckoned with. Their dedication to personal growth and success is inspiring, and they motivate others to strive for greatness. A remarkable individual!"
);
console.log("hello")

const persons = [Tasfiq,Asif,Joy,Upom]
let n = 0;

function updatePerson(){
  Name.innerHTML = persons[n].Name; 
  Photo.src = persons[n].Photo;
  Review.innerHTML = persons[n].Review;
}
updatePerson();
Left.addEventListener("click",decrement);
Right.addEventListener("click",increment);
function increment(){
  n++;
  if(n>persons.length-1){
    n = 0;
  }
  updatePerson()
}
function decrement(){
  n--;
  if(n<0){
    n=persons.length-1;
  }
  updatePerson()
}
setInterval(increment, 6000);
/* REVIEWS

1)"[Your Name] is an incredible individual who radiates positivity and kindness wherever they go. They are a great listener, always there to support and uplift others. A true gem of a person!"
2)"When I think of [Your Name], the first word that comes to mind is 'genuine.' They are sincere, authentic, and have a heart of gold. It's a privilege to have such a compassionate friend in my life."
3)"I can always count on [Your Name] to bring laughter and joy to any gathering. Their sense of humor is infectious, and their charismatic personality lights up the room. A true joy to be around!"
4)"Intelligent, driven, and determined, [Your Name] is a force to be reckoned with. Their dedication to personal growth and success is inspiring, and they motivate others to strive for greatness. A remarkable individual!" */