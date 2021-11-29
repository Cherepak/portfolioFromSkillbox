let objects = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' }
    ]

function filter (obj, key, name) {
    
    let arr = [];
    
    for(let i of obj) {
        if(i[key] === name) arr.push(i)
    }
    
    return arr;  
}

