function objectValues(object) {
    var output=[]
    for (the in object) {
        output.push(object[the])
    }
    return output 
}
function keysToString(object) {
    var output=[];
    for (key in object) {
        output.push(key);
    }
  
    return output.join(' ');
}

function valuesToString(ob){
        var output=[];
    for (key in ob) {
        if (typeof ob[key]==='string') {
            output.push(ob[key]);
        }
    }
    return output.join(' ');
}

function arrayOrObject(arg) {
    if (Array.isArray(arg)) {
        return 'array' 
    }
    else {return 'object'
    }
}

function capitalizeWord(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

function capitalizeAllWords(str) {
    var ar=str.split(' ');
    for (let i=0; i<ar.length;i++) {
        ar[i]=ar[i].charAt(0).toUpperCase()+ar[i].slice(1)
        
    }
    return ar.join(' ')
}

function welcomeMessage(obj) {
    return 'Welcome '+ obj.name.charAt(0).toUpperCase()+obj.name.slice(1) +'!';
}

function profileInfo(obj) {
    return obj.name.charAt(0).toUpperCase()+obj.name.slice(1)+" is a "+obj.species.charAt(0).toUpperCase()+obj.species.slice(1)
}

function maybeNoises(obj) {
    console.log(obj)
    if (Array.isArray(obj.noises)===true && obj.noises.length>0) {
        return obj.noises.join(' ');
    }
    else {return 'there are no noises'}
}

function hasWord(str,word) {
    var ar=str.split(' ');
    for (let i=0; i<ar.length; i++) {
        if (ar[i]===word) {
            return true
        }
    }
    return false
}

function addFriend(name, obj) {
    obj.friends.push(name)
    return obj 
}

function isFriend(name, obj) {
    console.log(obj, name)
    if(obj.friends) {
        for (let i=0;i<obj.friends.length;i++){
            if (obj.friends[i]===name) {
                console.log(true)
                return true
            }
        }
    }
    console.log(false)
    return false
}

function nonFriends (name, list) {
    var nonFriends=[];
    console.log(name, list)
    for (let i=0; i<list.length;i++){
        if(list[i].name!=name) {
            list[i]['friendsWith']=false
            for (let j=0; j<list[i].friends.length; j++) {
                if (list[i].friends[j]===name) {
                    console.log(name);
                    console.log(list[i].name)
                    list[i].friendsWith=true
                }
                //console.log(list[i].name)
                //console.log(list[i].friendsWith)    
            }
            if (list[i].friendsWith===false) {
                console.log(list[i])
                console.log('is friends with')
                console.log(list[i].friendsWith)
                nonFriends.push(list[i].name)
            }
        }
    }
    console.log(nonFriends)
    return nonFriends
}


function updateObject(obj,key,value){
    obj[key]=value 
    return obj 
}

function removeProperties(obj, array) {
 for (let i=0;i<array.length;i++){
     delete obj[array[i]]
 }
 return obj 
}

function dedup(array) {
    console.log(array)
    var toRemove=[]
    for (let i=0;i<array.length;i++) {
        for (let j=0;j<array.length;j++) {
            if (i!=j) {
                if (array[i]===array[j]) {
                    array.splice(i,1)
                }
            }
        }
    }
    console.log(array)
    return array
}







