
let elemOne;// переменная куда будет записываться значение 
let elemTwo;//переменная куда будет записываться значение 

let schetchik = 0;

function oneList (e) {
    

    if(elemOne  == undefined ) { // если значение еще не присвоено,то присваиваем его, это нужно что бы при открытой карточке из одного столбца не открывались другие карточки из этого же столбца
        elemOne = e.getAttribute("data-get");//получаем атрибут карточки для записи его в карточку 
        e.setAttribute("disabled", true); //делаем так, что бы копку нельзя было трогать после
        e.textContent = elemOne;//записываем в карточку цифру 
    } else {
        return 
    }

    if (elemOne !== undefined && elemTwo !== undefined) {//если елементы не пустые то
        if(elemOne !== elemTwo) {//сравниваем элементы
            //это если элементы не равны, то
            alert("Не получилось =(. Попробуй снова");
            location.reload();
        } else {//элементы равны
            elemOne = undefined;// приравниваю флажки к нулевымдля следующей операции 
            elemTwo = undefined;// приравниваю флажки к нулевымдля следующей операции 
            schetchik ++;
        }
    } else {return}
     
    if (schetchik === 4 ) {
        alert("Вы выиграли =)")
    }

}

function dubleList (e) {
    if(elemTwo  == undefined ) { // если значение еще не присвоено,то присваиваем его, это нужно что бы при открытой карточке из одного столбца не открывались другие карточки из этого же столбца
        elemTwo = e.getAttribute("data-get");//получаем атрибут карточки для записи его в карточку 
        e.setAttribute("disabled", true); //делаем так, что бы копку нельзя было трогать после
        e.textContent = elemTwo;//записываем в карточку цифру 
    } else {
        return 
    }

    if (elemOne !== undefined && elemTwo !== undefined) {// если елементы не пустые то
        if(elemOne !== elemTwo) {//сравниваем элементы
            //это если элементы не равны, то
            alert("Не получилось =(. Попробуй снова");
            location.reload();
        } else {// элементы равны
            elemOne = undefined;// приравниваю флажки к нулевымдля следующей операции 
            elemTwo = undefined;// приравниваю флажки к нулевымдля следующей операции 
            schetchik ++;
        }
    } else {return}
    
    if (schetchik === 4 ) {
        alert("Вы выиграли =) ")
    }
}

