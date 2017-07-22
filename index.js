function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  var lis = document.querySelectorAll('.ranked-list li')
  for (var i = 0;i<lis.length;i++){
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
  }
}

function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  var lis = document.querySelectorAll('.ranked-list li')
  for (var i = 0;i<lis.length;i++){
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
  }
}

function deepestChild(){
  var gn = document.querySelector('#grand-node');
  var deepest = gn;
  var q = [];
  while(deepest){
    for (var i=0;i<deepest.children.length;i++){
      q.push(deepest.children[i]);
    }
    if (q.length === 0){
      return deepest;
    }
    deepest = q.shift();
  }
}
