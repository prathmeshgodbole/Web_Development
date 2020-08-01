var myCar = new Array();
myCar[0] = "Audi";
myCar[1] = 200;
console.log(myCar);
document.write(myCar);

var myCar1 = new Object();
myCar1.speed = 100;
myCar1.name = "Dzire";
myCar1.drive = function() { console.log("This is my old car...."); };
myCar1.drive();
console.log("myCar1 Name is : " + myCar1.name);
console.log(myCar1);

//Converting integer into string
var myCar2 = { name: "MG", speed: 150, brand: "Hector" };
console.log("myCar2 Name is : " + myCar2.name);
console.log("Integer converted in to String : " +
    myCar2.speed.toString());


//Seting property value
myCar1.Company = "Suzuki";
console.log(myCar1);