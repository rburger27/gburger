function run(){
  n =  parseFloat(document.getElementById('amount').value) -1 ;
  var numGen = function (n)
{
  if (n===1)
  {
    return [1, 1];
  }
  else
  {
    var s = numGen(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};
  console.log(numGen(n))
  document.getElementById('output').innerHTML = numGen(n) + "";
}
