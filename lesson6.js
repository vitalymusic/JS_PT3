// arrays
let cars = [];
let cars2 = ['BMW', 'Mercedes', 'Ford', 'Opel', 'Mazda'];

// (5) ['BMW', 'Mercedes', 'Ford', 'Opel', 'Mazda']

// while(cars.length<5){
//     cars.push(prompt('Ievadi mašīnas marku'));
// }


cars2.pop()
cars2.shift()
cars2.unshift('Mitsu')

// let cars3 = cars2.concat(cars2)
let cars3 = [...cars2,...cars2]

const sortedArray = cars3.sort()

skaitļi = [1,5,12,50,20,3];
skaitļi.sort((a,b)=>{
    return a-b
});

let filteredCars = cars3.filter((item)=>{
    return item=="Ford"
})
let filteredCars2 = cars3.findIndex((item)=>{
    return item=="Ford"
})













