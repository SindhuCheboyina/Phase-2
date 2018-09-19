function loadJSON(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState ===4 && xhr.status== "200"){
       callback(xhr.responseText);
    }
  };
  xhr.send();
}
loadJSON("data.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  football(data.fb);
  cricket(data.ct);
  hockey(data.hk);
  athletics(data.at);
})

var fball=document.querySelector(".d1");
function football(fb1){
  var h2=document.createElement("h2");
  h2.textContent="FOOTBALL";
  fball.appendChild(h2);

  var p=document.createElement("p");
  p.textContent=fb1.i;
  fball.appendChild(p);

 var ul=document.createElement("ul");
 for(var i in fb1.info){
   var li=document.createElement("li");
   li.textContent=fb1.info[i];
   ul.appendChild(li);
   fball.appendChild(ul);
 }
}

var ct=document.querySelector(".d2");
function cricket(ct1){
  var h2=document.createElement("h2");
  h2.textContent="CRICKET";
  ct.appendChild(h2);

  var p=document.createElement("p");
  p.textContent=ct1.i;
  ct.appendChild(p);

  var ul=document.createElement("ul");
  for(var i in ct1.info){
    var li=document.createElement("li");
    li.textContent=ct1.info[i];
    ul.appendChild(li);
    ct.appendChild(ul);
  }
}

var hk=document.querySelector(".d3");
function hockey(hk1){
  var h2=document.createElement("h2");
  h2.textContent="HOCKEY INDIA";
  hk.appendChild(h2);

  var p=document.createElement("p");
  p.textContent=hk1.i;
  hk.appendChild(p);

  var ul=document.createElement("ul");
  for(var i in hk1.info){
    var li=document.createElement("li");
    li.textContent=hk1.info[i];
    ul.appendChild(li);
    hk.appendChild(ul);
  }
}

var at=document.querySelector(".d4");
function athletics(at1){
  var h2=document.createElement("h2");
  h2.textContent="ATHLETICS";
  at.appendChild(h2);

  var p=document.createElement("p");
  p.textContent=at1.i;
  at.appendChild(p);

  var ul=document.createElement("ul");
  for(var i in at1.info){
    var li=document.createElement("li");
    li.textContent=at1.info[i];
    ul.appendChild(li);
    at.appendChild(ul);
  }
}
