for (var i = 1; i <= 100; i++) {
  if ((i % 3 == 0) && (i % 5 == 0)){
    console.log("Bing Bong")
  }
  if (i % 3 == 0) {
    console.log("Bing")
  }
  if (i % 5 == 0) {
    console.log("Bong");
  }else{
    console.log(i);
  }
}
