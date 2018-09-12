module.exports = function check(str, bracketsConfig) {
    var strArr=str.split('');
    var bc=bracketsConfig;
    for(var i=0;i<strArr.length;i++){
      
      for(var j=0;j<bc.length;j++){
        if(strArr[i]===bc[j][0] && strArr[i+1]===bc[j][1]){
          strArr.splice(i,2);
          if (strArr.length==0){

              return true;
          }
          i=-1;
        }
      }
    }
    return false;
  }
