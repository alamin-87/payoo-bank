document.getElementById('btn-login').addEventListener('click',function(event){
    event.preventDefault();
    const accInput=document.getElementById('acc-input').value;
    const passInput=document.getElementById('pass-input').value;
    if(accInput.length===11){
        if(passInput==='1234'){
             window.location.href="./main.html"
        }
        else{
            alert('Enter valid pin')
        }
    }
    else{
      alert('Enter valid number')
    }
})