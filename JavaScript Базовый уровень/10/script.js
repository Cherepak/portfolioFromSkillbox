
let students = [
    {
        sourName: "Рыльский",
        name: "Василий",
        fatherName: "Джекович",
        birthday: new Date(1943,4,15),
        yearBeginedStudy: new Date(2020, 09,01),
        facultet: "История"
    }, 
    {
            sourName: "Попов",
            name: "Джек",
            fatherName: "Васильевич",
            birthday: new Date(1953,11,15),
            yearBeginedStudy: new Date(2019, 09,01),
            facultet: "География"
        }, 
        {
            sourName: "Васильевич",
            name: "Поп",
            fatherName: "Джеков",
            birthday: new Date(1968,7,16),
            yearBeginedStudy: new Date(2010,09,01),
            facultet: "Физика"
        }, 
    
    ]


if (!localStorage.getItem("listStudents")) {//если в локал стор нет списка то загрузить его туда

    localStorage.setItem("listStudents", JSON.stringify(students));
} else { //если есть, то обновить
    students = JSON.parse(localStorage.getItem("listStudents"));
}

function createTodoList () {//создаем таблицу
    
    let table = document.createElement("table");
    table.setAttribute("id", "list")
    table.classList.add("table");

    return {
        table,
    }
}

function createFilter() {//создаем форму для фильтра 
    let form = document.createElement("div");
    form.setAttribute("class", "filterForm");
    let title = document.createElement("h2");
    title.textContent = "Найти по фильтру";
    form.prepend(title);

    let wrapperSearchFromSourName = document.createElement("div");
    let labelTitleSourName = document.createElement("label");
    labelTitleSourName.textContent = "Фамилия";
    labelTitleSourName.setAttribute("class", "form-label");
    let inputForSourName = document.createElement("input");
    inputForSourName.setAttribute("type", "text");
    inputForSourName.setAttribute("class", "form-control");
    inputForSourName.setAttribute("id", "filterSourName__filter");
   

    wrapperSearchFromSourName.append(labelTitleSourName);
    wrapperSearchFromSourName.append(inputForSourName);


    let wrapperSearchFromName = document.createElement("div");
    let labelTitleName = document.createElement("label");
    labelTitleName.setAttribute("class", "form-label");
    labelTitleName.textContent = "Имя";
    let inputForFromName = document.createElement("input");
    inputForFromName.setAttribute("type", "text");
    inputForFromName.setAttribute("class", "form-control");
    inputForFromName.setAttribute("id", "filterName__filter");
    
    wrapperSearchFromName.append(labelTitleName);
    wrapperSearchFromName.append(inputForFromName);


    let wrapperSearchFromFatherName = document.createElement("div");
    let labelTitleFatherName = document.createElement("label");
    labelTitleFatherName.setAttribute("class", "form-label");
    labelTitleFatherName.textContent = "Отчество";
    let inputForFatherName = document.createElement("input");
    inputForFatherName.setAttribute("type", "text");
    inputForFatherName.setAttribute("class", "form-control");
    inputForFatherName.setAttribute("id", "filterFatherName__filter");


    wrapperSearchFromFatherName.append(labelTitleFatherName);
    wrapperSearchFromFatherName.append(inputForFatherName);
  

    let wrapperSearchFromBirthday = document.createElement("div");
    let labelTitleBirthday = document.createElement("label");
    labelTitleBirthday.setAttribute("class", "form-label");
    labelTitleBirthday.textContent = "День рождения";
    let inputForFromBirthday = document.createElement("input");
    inputForFromBirthday.setAttribute("type", "date");
    inputForFromBirthday.setAttribute("class", "form-control");
    inputForFromBirthday.setAttribute("id", "filterBirthday__filter");
    

    wrapperSearchFromBirthday.append(labelTitleBirthday);
    wrapperSearchFromBirthday.append(inputForFromBirthday);


    let wrapperSearchFromYearBeginedStudy = document.createElement("div");
    let labelTitleBeginedStudy = document.createElement("label");
    labelTitleBeginedStudy.setAttribute("class", "form-label");
    labelTitleBeginedStudy.textContent = "Год поступления";
    let inputForYearBeginedStudy = document.createElement("input");
    inputForYearBeginedStudy.setAttribute("type", "number");
    inputForYearBeginedStudy.setAttribute("class", "form-control");
    inputForYearBeginedStudy.setAttribute("id", "filterYearBeginedStudy__filter");

    wrapperSearchFromYearBeginedStudy.append(labelTitleBeginedStudy);
    wrapperSearchFromYearBeginedStudy.append(inputForYearBeginedStudy);


    let wrapperSearchFromFacultet = document.createElement("div");
    let labelTitleFacultet = document.createElement("label");
    labelTitleFacultet.setAttribute("class", "form-label");
    labelTitleFacultet.textContent = "Факультет";
    let inputForFromFacultet = document.createElement("input");
    inputForFromFacultet.setAttribute("type", "text");
    inputForFromFacultet.setAttribute("class", "form-control");
    inputForFromFacultet.setAttribute("id", "filterFacultet__filter");

    
    wrapperSearchFromFacultet.append(labelTitleFacultet);
    wrapperSearchFromFacultet.append(inputForFromFacultet);


    form.append(wrapperSearchFromSourName);
    form.append(wrapperSearchFromName);
    form.append(wrapperSearchFromFatherName);
    form.append(wrapperSearchFromBirthday);
    form.append(wrapperSearchFromYearBeginedStudy);
    form.append(wrapperSearchFromFacultet);

    return form;

    
}

function createTodoItem (arr) {//создаем список
    
    let wrapper = createTodoList()
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");

    let tdSourName = document.createElement('th');
    tdSourName.setAttribute("scope", "col");
    tdSourName.textContent = "Фамилия";
    tdSourName.setAttribute("id", "titleListSourName");
    tdSourName.setAttribute("onclick", "sortSourName()");

    let tdName = document.createElement('th');
    tdName.setAttribute("scope", "col");
    tdName.textContent = "Имя";
    tdName.setAttribute("id", "titleListName");
    tdName.setAttribute("onclick", "sortName()");

    let tdFatherName = document.createElement('th');
    tdFatherName.setAttribute("scope", "col");
    tdFatherName.textContent = "Отчество";
    tdFatherName.setAttribute("id", "titleListFatherName");
    tdFatherName.setAttribute("onclick", "sortFatherName()");

    let tdBirthday = document.createElement('th');
    tdBirthday.setAttribute("scope", "col");
    tdBirthday.textContent = "День рождения";
    tdBirthday.setAttribute("id", "titleListBirthday");
    tdBirthday.setAttribute("onclick", "sortBirthday()");

    let tdYearBeginedStudy = document.createElement('th');
    tdYearBeginedStudy.setAttribute("scope", "col");
    tdYearBeginedStudy.textContent = "Дата поступления";
    tdYearBeginedStudy.setAttribute("id", "titleListBeginedStudy");
    tdYearBeginedStudy.setAttribute("onclick", "sortYearBeginedStudy()");

    let tdFacultet = document.createElement('th');
    tdFacultet.setAttribute("scope", "col");
    tdFacultet.textContent = "Факультет";
    tdFacultet.setAttribute("id", "titleListFacultet");
    tdFacultet.setAttribute("onclick", "sortFacultet()");
    
    thead.append(tdSourName);
    thead.append(tdName);
    thead.append(tdFatherName);
    thead.append(tdBirthday);
    thead.append(tdYearBeginedStudy);
    thead.append(tdFacultet);



    let tr ;
    
    for (let key of arr) {

        tr = document.createElement("tr");//строка

        let th = document.createElement("th");


        let pSourName = document.createElement('td');
        let pName = document.createElement('td');
        let pFatherName = document.createElement('td');
        let pBirthday = document.createElement('td');
        let pYearBeginedStudy = document.createElement('td');
        let pFacultet = document.createElement('td');
        
        pName.textContent = `${key['name']}`
        pSourName.textContent = ` ${key['sourName']}`
        pFatherName.textContent = ` ${key['fatherName']}`
        pBirthday.textContent = ` 
        ${new Date(key['birthday']).getDate()}.
        ${new Date(key['birthday']).getMonth() + 1}.
        ${new Date(key['birthday']).getFullYear()} 
        (${new Date().getFullYear() - new Date(key['birthday']).getFullYear()} лет)`
        pYearBeginedStudy.textContent = `${new Date(key["yearBeginedStudy"]).getDay()}.${new Date(key["yearBeginedStudy"]).getMonth()}.${new Date(key["yearBeginedStudy"]).getFullYear()} гг. 
        (${(function() {
            let result = new Date().getFullYear() - new Date(key['yearBeginedStudy']).getFullYear();
            if( result < 4 ) {
                if (result == 0) {
                    return result + 1 + " курс"
                }
                return result + " курс";
            } 
            else { 
                return `поступал ${new Date().getFullYear() - new Date(key['yearBeginedStudy']).getFullYear()} лет назад` 
            }
        })()})`
        pFacultet.textContent = `${key['facultet']}`

        tr.append(pSourName);
        tr.append(pName);
        tr.append(pFatherName);
        tr.append(pBirthday);
        tr.append(pYearBeginedStudy);
        tr.append(pFacultet);

        tbody.append(tr)

        wrapper.table.append(thead);
        wrapper.table.append(tbody);
    }   

    let filter = createFilter();

    if (document.getElementById("list") === null) { // если нет списка
        document.getElementById("todo-list").append(wrapper.table); // то добавляем список
        document.getElementById("todo-list").prepend(filter);// и ставим перед списком строки для фильтрации
        
    } else { // если список есть 
        document.getElementById("list").replaceWith(wrapper.table);// то заменяем список 
    }
    
}


document.getElementById("form").addEventListener("submit", (e) => {// форма
    e.preventDefault();

    let students = [];

    if (!localStorage.getItem("listStudents")) {//если в локал стор нет списка то загрузить его туда

        localStorage.setItem("listStudents", JSON.stringify(students));
    } else { //если есть, то обновить
        students = JSON.parse(localStorage.getItem("listStudents"));
    }

    let nameForm = document.getElementById('name').value;
    let sourNameFrom = document.getElementById('sourName').value;
    let fatherNameForm = document.getElementById('fatherName').value;
    let birthdayFrom /* = document.getElementById('birthday').value;*/
    let yearBeginedStudyForm /*document.getElementById('yearBeginedStudy').value;*/
    let facultetForm = document.getElementById('facultet').value;


    if(new Date(document.getElementById('birthday').value) > new Date(1900, 1, 1)) {
        birthdayFrom = document.getElementById('birthday').value;
    } else {
        birthdayFrom = new Date(1900, 1, 1);
    }

    if( new Date(document.getElementById('yearBeginedStudy').value) > new Date (2000, 1, 1)) {
        yearBeginedStudyForm = document.getElementById('yearBeginedStudy').value
    } else {
        yearBeginedStudyForm = new Date (2000, 1, 1);
    }

    students.push({
        name: nameForm.trim(),
        sourName: sourNameFrom.trim(),
        fatherName: fatherNameForm.trim(),
        birthday: new Date(birthdayFrom),
        yearBeginedStudy: new Date(yearBeginedStudyForm),
        facultet: facultetForm.trim()
    })

    localStorage.setItem("listStudents", JSON.stringify(students));

    
    createTodoItem(students); // сделать так что бы ul зменялся новым содержимым 

    document.getElementById('name').value = "";
    document.getElementById('sourName').value = "";
    document.getElementById('fatherName').value = "";
    document.getElementById('birthday').value = "";
    document.getElementById('yearBeginedStudy').value = "";
    document.getElementById('facultet').value = "";
})



createTodoItem((()=>{
    if (!localStorage.getItem("listStudents")) {//если в локал стор нет списка то загрузить его туда
        return localStorage.setItem("listStudents", JSON.stringify(students));
    } else { //если есть, то обновить
        return JSON.parse(localStorage.getItem("listStudents"));
    }
})())



function sortSourName () {
    function SortArray(x,y){
    
        if (x.sourName < y.sourName) {return -1;}
        if (x.sourName > y.sourName) {return 1;}
        return 0;
    }

    let s = students.sort(SortArray);
    
    createTodoItem(s);
} 


function sortName () {
    function SortArray(x,y){
    
        if (x.name < y.name) {return -1;}
        if (x.name > y.name) {return 1;}
        return 0;
    }

    let s = students.sort(SortArray);
    
    createTodoItem(s);
}

function sortFatherName () {
    function SortArray(x,y){
        
        if (x.fatherName < y.fatherName) {return -1;}
        if (x.fatherName > y.fatherName) {return 1;}
        return 0;
    }

    let s = students.sort(SortArray);
    
    createTodoItem(s);
}


function sortBirthday () {
    function SortArray(x,y){
        
        if (x.birthday < y.birthday) {return -1;}
        if (x.birthday > y.birthday) {return 1;}
        return 0;
    }

    let s = students.sort(SortArray);
    
    createTodoItem(s);
}


function sortYearBeginedStudy () {
    function SortArray(x,y){
        
        if (x.yearBeginedStudy < y.yearBeginedStudy) {return -1;}
        if (x.yearBeginedStudy > y.yearBeginedStudy) {return 1;}
        return 0;
    }

    let s = students.sort(SortArray);
    
    createTodoItem(s);
}


function sortFacultet () {
    function SortArray(x,y){
        
        if (x.facultet < y.facultet) {return -1;}
        if (x.facultet > y.facultet) {return 1;}
        return 0;
    }

    let s = students.sort(SortArray);
    
    createTodoItem(s);
}





const inputFilterSourName = document.getElementById("filterSourName__filter");
const inputFilterName = document.getElementById("filterName__filter");
const inputFilterFatherName = document.getElementById("filterFatherName__filter");
const inputForFromBirthday = document.getElementById("filterBirthday__filter");
const inputFilterYearBeginedStudy = document.getElementById("filterYearBeginedStudy__filter");
const inputFilterFacultet = document.getElementById("filterFacultet__filter");

inputFilterSourName.addEventListener("keyup", function () {
    let students = JSON.parse(localStorage.getItem("listStudents"));

    let val = this.value;
    let arr = students.filter(el =>  el["sourName"].includes(val));
    createTodoItem(arr);
});

inputFilterName.addEventListener("keyup", function () {
    let students = JSON.parse(localStorage.getItem("listStudents"));

    let val = this.value;
    let arr = students.filter(el => el["name"].includes(val));
    createTodoItem(arr);
});

inputFilterFatherName.addEventListener("keyup", function () {
    let students = JSON.parse(localStorage.getItem("listStudents"));

    let val = this.value;
    let arr = students.filter(el => el["fatherName"].includes(val));
    createTodoItem(arr);    
});

inputForFromBirthday.addEventListener("keyup", function () {
    let val = this.value;
    let students = JSON.parse(localStorage.getItem("listStudents"));
    let ar = val.split("-");

    let y = ar[0];
    let m = ar[1];
    let d = ar[2];
    --d;
    let elem = `${y}-${m}-${d}`;
 
    let arr = students.filter(el =>  {
    return el["birthday"].includes(elem)
    });
    createTodoItem(arr);
});

inputFilterYearBeginedStudy.addEventListener("keyup", function () {
    let students = JSON.parse(localStorage.getItem("listStudents"));
    let val = +this.value;
    let arr = students.filter(el => {
      
        console.log(val);
        return el["yearBeginedStudy"].includes(val)
    });
    createTodoItem(arr);
});

inputFilterFacultet.addEventListener("keyup", function () {
    let students = JSON.parse(localStorage.getItem("listStudents"));

    let val = this.value;
    let arr = students.filter(el => el["facultet"].includes(val));
    createTodoItem(arr);
});
