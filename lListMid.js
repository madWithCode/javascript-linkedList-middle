const lList = {data:5, next:{data:4, next:{data:3,next:{data:2, next:{data:1, next:{data:0, next:null}}}}}};

let double = Object.create(lList);
let mid = Object.create(lList);
  
function iterator() {
  if(double.next && double.next.next && double.next.next !== null){
    double = double.next.next;
    mid = mid.next;
    iterator();
  }else if(double.next && double.next !== null){
    mid = mid.next;
    console.log(mid.data);
  }else{
    console.log(mid.data);
  }
};

iterator();
