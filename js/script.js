const date = new Date();
const hours = date.getHours();

if(hours >= 10 && hours < 24){
    document.getElementById('statusImage').src = 'images/open_status.webp';
}
else{
    document.getElementById('statusImage').src = 'images/close_status.webp';
}