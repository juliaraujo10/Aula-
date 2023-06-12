function Calcula(){
  let n1 = document.getElementById('n1').value;
  let n2 = document.getElementById('n2').value;

  let operacao=document.getElementById('operacao').SelectedIndex;
  
  switch (operacao) {
    case 1:
        r=parseInt(n1)+parseInt(n2);
        break;  
    case 2:
        r=parseInt(n1)*parseInt(n2); 
        break;
    case 3:
        r=parseInt(n1)-parseInt(n2);
        break;
    case 4:
        r=parseInt(n1)/parseInt(n2);
      break;
  
    default:
      r=0;
      break;
  }

}