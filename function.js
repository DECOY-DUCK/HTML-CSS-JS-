function clkLogin(){
  var txtidElem = document.getElementById('txtid');
  console.log(txtidElem.value);
  if(txtidElem.value ===''){
      alert('아이디가 없습니다.');
      return;
  }


  var txtpwElem = document.getElementById('txtpw');
  if(txtpwElem.value ===''){
      alert('비밀번호 없습니다.');
      
      return;
  }
  location.href = 'PRACTICE.html';
}

