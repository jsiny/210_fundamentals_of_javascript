let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

myObj.qux = 3;

Object.keys(myObj).forEach(function(key) {
  console.log(key);
});

// Only iterates over the object's own keys, ie. `qux`

for (let key in myObj) {
  console.log(key);
}

// Also iterates over the prototype's keys