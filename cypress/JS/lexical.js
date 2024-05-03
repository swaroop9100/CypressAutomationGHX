/* var x=10;
function a(){
 
  function b(){

    console.log(x)
  }
  b();
}
a();  */


function a(){
  var x=10
  function b(){
    var y=20
     function c(){
      console.log(y)
     }
     c();
  }
  b();
}
a();