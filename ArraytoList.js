//iterative
class Node{
 constructor(value){
  this.value = value;
  this.rest = null;
 }
}
class List{
 constructor(){
  this.head = null;
 }
 arrayToList(a){
  var newnode = new Node(a);
  var navigate;
  if(this.head === null){
     this.head = newnode;
     console.log("list head : " + "from head :" + " " + this.head.value + " " + "from newnode : " + " " + newnode.value);
  }
  else{
      navigate = this.head;
      while(navigate.rest){
        navigate = navigate.rest;
      }
        navigate.rest = newnode;
        console.log("ajoute a la liste : " + " " + navigate.rest.value + " " + "venant de : " + " " + navigate.value);
  }
 }
}
var test = new List();
var tab =[10,20,30,40];
for(var j = 0; j < tab.length; j++)
    test.arrayToList(tab[j]);

// recursive function
class Node{
 constructor(value){
  this.value = value;
  this.rest = null;
 }
}
class List{
 constructor(){
  this.head = null;
 }
 arrayToList(a){
  var newnode = new Node(a);
  var navigate;
  if(this.head === null){
     this.head = newnode;
     console.log("list head : " + "from head :" + " " + this.head.value + " " + "from newnode : " + " " + newnode.value);
  }
  else
     this.addnode(newnode,this.head);
 }
 addnode(newnode,node){
  if(node.rest === null){
     node.rest = newnode;
     console.log("node added : " + " " + node.rest.value + " venant de " + " " + node.value);
  }
  else
     this.addnode(newnode,node.rest);
 }
}
var test = new List();
var tab =[10,20,30,40];
for(var j = 0; j < tab.length; j++)
    test.arrayToList(tab[j]);
