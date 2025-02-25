function getInputValueByID(id){
  const value=document.getElementById(id).value;
  const convertvalue=parseFloat(value);
  return convertvalue;
}
function getTextValueByID(id){
    const value = document.getElementById(id).innerText;
    const convertValue = parseFloat(value);
    return convertValue;
}
function setInnerText(id,value){
   document.getElementById(id).innerText=value;
}