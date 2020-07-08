var a = 4;
var b = 6;

function addTogether(one,two){
    return one + two;
}

console.log(addTogether(a,b));

var c = 3;
var d = 5;
var e = 7;

function addThrice(alpha,bravo,charlie){
    return alpha + bravo + charlie;
}

console.log(addThrice(c,d,e));

var f = 2;
var g = 4;
var h = 6;
var i = 8;

function weDidThisYesterday(uno,dos,tres,quatro){
    return uno + dos + tres + quatro;
}

console.log(weDidThisYesterday(f,g,h,i));

var car = {
    "make": "chevy",
    "model": "equinox",
    "wheels": 4
};

var house = {
    "material": "brick",
    "windows": 6,
    "fence": "picket"
};

var family = {
    "members": ["Dad", "Mom", "Daughter"],
    "last name": "Twele",
    "bedtime": 10
};

var carModel = car.model
console.log(carModel);

var houseMaterial = house.material
console.log(houseMaterial);

var familyBedtime = family.bedtime
console.log(familyBedtime);

var carWheels = car["wheels"]
console.log(carWheels);

var houseFence = house["fence"]
console.log(houseFence);

var familyMembers = family["members"]
console.log(familyMembers)


car.color = "gold";

console.log(car);

house["style"] = "townhouse";

console.log(house);

family.size = 3;

console.log(family)

car["color"] = "tan";
console.log(car);

house.windows = 4;
console.log (house);

family["bedtime"] = 9;
console.log(family);