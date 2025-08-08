const date = new Date();
const hours = date.getHours();

if(hours >= 10 || hours < 1){
    document.getElementById('statusImage').src = 'images/open_status.png';
}
else{
    document.getElementById('statusImage').src = 'images/close_status.png';
}