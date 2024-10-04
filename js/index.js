const today = new Date();
const currentHour = today.getHours();
let message = "Hello";


// If it's morning show "Good Morning" message
if (currentHour <= 12) {
    message = "Good Morning World!";
}
//If it's mid day show "Hello" message
//else if(currentHour >12 && currentHour <=17) {
else if (currentHour <=17) {
    message = "Hello World!";
}
//If it's evening, show "Good evening" message
//else if(currentHour >17) {
else {
    message = "Good Evening World!";
}

const handleClick = () => {
    alert(message);
}