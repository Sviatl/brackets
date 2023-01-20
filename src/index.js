module.exports = function check(str, bracketsConfig) {
  return checkB(str, bracketsConfig);
}

const checkB = (str, bracketsConfig) => {
  let v = 1;
  let nn = 0;
  let i = 0;
  for (mm in bracketsConfig) {
    if (bracketsConfig[mm][0] == bracketsConfig[mm][1]) {
      nn == 0;
      even = false;
      for (i in str) {
        if (str[i] == bracketsConfig[mm][0]) {
          if (even) {
            even = false;
            nn = nn + 1;
          }
          else {
            even = true;
            nn = nn - 1;
          }
        }
      }
      if (nn != 0) return false;
      str = str.split(bracketsConfig[mm][0]).join(0 + '$');
      continue;
    }
    str = str.split(bracketsConfig[mm][0]).join(-1 * v + '$');
    str = str.split(bracketsConfig[mm][1]).join(1 * v + '$');
    v = v * 10;
  }
  let arr = str.split('$');
  let sum = 0;
  let ind;
  let arr2 = [];
  let arr3 = [];
  i = 0;
  was = false;
  while ( i < arr.length-1) {
    sum = sum + 1 * arr[i];
    // // if (arr[i] < 0) {ind = 0}
    // // else (ind = ind + 2);
    // // // if (sum > 0) return false;
    // // if (arr[i]>0 && arr[i] != -1*arr[i-ind+1]) return false;
    // if (arr[i] == -1*arr[i-1]) ind = 0;
    // else {
    //   ind = ind + 1;
    //   if (arr[i]> 0 && arr[i] != -1*arr[i-ind]) return false;
    // }
    let ii = 0;
    if (arr[i]==-1*arr[i-1]) {
      was = true;
      for (j in arr2) {
        ii = arr2.length - 1 - j;
        if (arr2[ii] != -1*arr[i] || arr2[ii]>0) return false;
        i = i + 1; 
        arr3.push(arr2[ii]);
        sum = sum + 1 * arr[i];
         
      }
      if (arr2.length != arr3.length) return false;
      arr2 = [];
      arr3 = [];
      arr2.push(arr[i]);
      // sum = sum + 1 * arr[i];
    }
    else {
      arr2.push(arr[i]);
    }
    // if (was == false) {
      i = i + 1;
    //  }
    
  }
  if (was == false) return false;
  if (sum == 0) return true;
  else return false;

}
const config1 = [['(', ')']];
const config2 = [['(', ')'], ['[', ']']];
const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
const config5 = [['(', ')'], ['|', '|']];
const config4 = [['|', '|']];
// console.log(checkB('[(])', config2));
// console.log(checkB('([{}])', config3));
//console.log(checkB('|()|(||)||', config5));//11
//console.log(checkB('((()))()', config1));//2
//console.log(checkB('())(', config1));//3
 //console.log(checkB('[(])', config2));//5
 //console.log(checkB('||', config4));//8
 console.log(checkB('111115611111111222288888822225577877778775555666677777777776622222', config6)); //12
