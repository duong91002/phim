var d=1;
function bars_menu(){
    if(d%2==1){
        document.getElementById('bars').style.display='block';
    }else{
        document.getElementById('bars').style.display='none';
    }
    d++;
}