
var animal={};
animal.species='cheetah';
animal['name']='Speedy';
animal.noises='';
 
var noises=[];
noises[0]='meow';
noises.push('rawr');
noises.unshift('Dont wear fur');
noises[noises.length]='Pave the planet!';

animal['noises']=noises;

var animals=[];
animals.push(animal);
var duck = { species: 'duck', name: "Jerome", noises: ['quack','honk', 'sneeze', 'woosh']}
animals.push(duck);
var kirky = { species: 'coyotes', name: 'Kirky', noises: ['yip', 'howl', 'the roadrunner wins again']};
var pigeon = { species: 'pigeonola pie', name: "Pippy", noises: ['eats trash', 'eats trash']};
animals.push(kirky, pigeon);

var friends=[];
//I chose an array because I want to be able to access my friends through their index.

function randomAnimal() {
    var min=0
    var max = animals.length-1
    return animals[Math.floor(Math.random() * (max - min + 1)) + min];
}
for (let i=0; i<animals.length; i++) {
    animals[i].friends=[]
    animals[i]['friends'].push(randomAnimal()['name'])
}
function search(animalName) {
    for (let i=0; i<animals.length; i++) {
        if (animals[i].name===animalName){
            return animals[i]
        }
    }
}

for (let i=0; i<animals.length; i++) {
    console.log(search(animals[i].name))
}

function edit(animalName, object) {
    for (let i=0; i<animals.length;i++) {
        if (search(animalName)===animals[i]) {
            animals[i]=object 
        }
    }
}

function remove(animalName) {
    for (let i=0; i<animals.length; i++) {
            console.log(i)
        if (animals[i].name===animalName) {
        
            animals.splice(i,1)
        }
    }
}

function create(obj) {
    if (obj.name.length>0 && obj.species.length>0) {
        for (let i=0; i<animals.length; i++) {
            if (animals[i].name===obj.name){
                return
            }
        }
        animals.push(obj)
    }
}

var  roberta= { species: 'rabbit', name: "roberta"}
var  felix = { species: '', name: "felix"}
var  dolph = { species: 'dolphin', name: ""}

create(roberta);
create(felix);
create(dolph);
    
for (let i=0; i<animals.length; i++) {
    console.log(animals[i].name)
            }
            