function getUrlParameterValue(url, parameter) {
  const paramValue = new URL(url).searchParams.get(parameter);
  return paramValue;
}

var url = prompt("Enter the url") ;
var parameter = prompt("Enter the parameter") ;

console.log(getUrlParameterValue(url , parameter));
