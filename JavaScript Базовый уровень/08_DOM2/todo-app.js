(function(){
 
    let arrLocalStore = [];

    function createAppTitle(title) {
        let appTitle = document.createElement("h2")
        appTitle.setAttribute("id", "titleh2")
        appTitle.innerHTML = title;
        return appTitle
    }
    
    function createTodoItemForm () {
        let form  = document.createElement("form");
        let input = document.createElement("input");
        let buttonWrapper  = document.createElement("div");
        let button = document.createElement("button");

        form.classList.add("input-group", "mb-3");
        input.classList.add("form-control");
        input.placeholder = "Введите название нового дела";
        input.setAttribute("id", "input")
        input.setAttribute("oninput", `dasibleOn()`)
        buttonWrapper.classList.add("input-group-append");
        button.classList.add("btn", "btn-primary");
        button.textContent = "Добавить дело";
        button.setAttribute("id","buttonForm")
        button.setAttribute("disabled", "true") 

        buttonWrapper.append(button);
        form.append(input);
        form.append(buttonWrapper);


        
        return{
            form,
            input,
            button
        }
    }

    function createTodoList (){
        let list = document.createElement("ul");
        list.classList.add("list-group");
        return list;
    }
    
    function createTodoItem (name,status) { 
        
        let item = document.createElement("li");

        let buttonGroup = document.createElement("div");
        let doneButton = document.createElement("button");
        let deleteButton = document.createElement("button");

        if(status) { // если задача готова и done === true, то отмечает элемент списка зеленым
            item.classList.add("list-group-item-success", "d-flex", "justify-content-between", "aling-items-center");
        }
        
        item.classList.add("list-group-item", "d-flex", "justify-content-between", "aling-items-center");
        item.textContent = name;

        

        buttonGroup.classList.add("btn-group", "btn-group-sm")
        doneButton.classList.add("btn", "btn-success")
        doneButton.textContent = "Готово";
        deleteButton.classList.add("btn", "btn-danger")
        deleteButton.textContent = "Удалить";

        doneButton.setAttribute("onclick","return doneButton(this)")
        deleteButton.setAttribute("onclick","deleteButton(this)")

        buttonGroup.append(doneButton);
        buttonGroup.append(deleteButton);
        item.append(buttonGroup);



        return {
            item,
            doneButton,
            deleteButton,
        };
    }

    function createTodoApp(container, title ="Список дел") {
    
        document.title = title; //Делаем title страницыв head равным заголовку

        if(title === "мои дела") {
            if(localStorage.getItem("myTodoList")) {// если список уже существует, то обновляет внутренний массив котором храним старые и добавляем новые объекты
                let elem = JSON.parse(localStorage.getItem("myTodoList"))
                arrLocalStore = elem 
            }
            
        } else if (title === "дела мамы"){
            if(localStorage.getItem("momTodoList")) {// если список уже существует, то обновляет внутренний массив котором храним старые и добавляем новые объекты
                let elem = JSON.parse(localStorage.getItem("momTodoList"))
                arrLocalStore = elem 
            }
        } else if(title === "дела папы") {
            if(localStorage.getItem("dadTodoList")) {// если список уже существует, то обновляет внутренний массив котором храним старые и добавляем новые объекты
                let elem = JSON.parse(localStorage.getItem("dadTodoList"))
                arrLocalStore = elem 
            }
        }

        let todoAppTitle = createAppTitle(title);
        let todoItemForm = createTodoItemForm();
        let todoList = createTodoList();

        if(document.getElementById("todo-app").childNodes.length === 3) {// если элементы уже есть на странице, то обновляем их 
            document.getElementById("todo-app").childNodes[0].replaceWith(todoAppTitle);
            document.getElementById("todo-app").childNodes[1].replaceWith(todoItemForm.form) ;
            document.getElementById("todo-app").childNodes[2].replaceWith(todoList);
        } else {
            container.append(todoAppTitle);
            container.append(todoItemForm.form);
            container.append(todoList);
        }
       

        

        if(title === "мои дела") {
            if(localStorage.getItem("myTodoList")) { //если есть данные в локал стор, то загрузим его на страницу
                let elem = JSON.parse(localStorage.getItem("myTodoList"));//
    
                for(let key of elem){
                    let todoItem = createTodoItem(key["name"],key["done"]);
                    todoList.append(todoItem.item)
                }
                
            } 
        } 
        if(title === "дела мамы"){
            if(localStorage.getItem("momTodoList")) { //если есть данные в локал стор, то загрузим его на страницу
                let elem = JSON.parse(localStorage.getItem("momTodoList"));//
    
                for(let key of elem){
                    let todoItem = createTodoItem(key["name"],key["done"]);
                    todoList.append(todoItem.item)
                }
                
            } 
        }

        if(title === "дела папы"){
            if(localStorage.getItem("dadTodoList")) { //если есть данные в локал стор, то загрузим его на страницу
                let elem = JSON.parse(localStorage.getItem("dadTodoList"));//
    
                for(let key of elem){
                    let todoItem = createTodoItem(key["name"],key["done"]);
                    todoList.append(todoItem.item)
                }  
            } 
        }
        

        todoItemForm.form.addEventListener("submit", function(e) {
            e.preventDefault();
            document.getElementById("buttonForm").setAttribute("disabled", "true");
            
            
            if(!todoItemForm.input.value) {
                return;
            }

            let todoItem = createTodoItem(todoItemForm.input.value);
 
    
            todoList.append(todoItem.item);

            elem = todoItem.item.childNodes[0].textContent;
            let obj = {name: elem, done: false}// создаем объект с задачей
            arrLocalStore.push(obj)

            if(title === "мои дела") {
                localStorage.setItem("myTodoList", JSON.stringify(arrLocalStore));// закидываю ее в локалстор
            }

            if(title === "дела мамы") {
                localStorage.setItem("momTodoList", JSON.stringify(arrLocalStore));// закидываю ее в локалстор

            }

            if(title === "дела папы") {
                localStorage.setItem("dadTodoList", JSON.stringify(arrLocalStore));// закидываю ее в локалстор

            }


            todoItemForm.input.value = "";
        })

        return container
    }
    
    function doneButton(elem){

        
        elem.parentNode.parentNode.classList.toggle("list-group-item-success");//получил содержимое в задаче через его дочернюю кнопку в li, затем повесил на него событие изменения цвета
    
        arrLocalStore.filter(function(item){ //получаем задачи из локального массива, в котором сохранены данные из локал стор и изменяем состояние задани, после чего отправляем его в локал стор
            if (item.name === elem.parentNode.parentNode.childNodes[0].textContent) {
                
                if(item.done === false) {
                    item.done = true
                } else {
                    item.done = false 
                } 
            }
            return arrLocalStore
        })
        
        if(document.title === "мои дела"){
            localStorage.setItem("myTodoList",JSON.stringify(arrLocalStore))
        } else if (document.title === "дела мамы") {
            localStorage.setItem("momTodoList",JSON.stringify(arrLocalStore))
        } else if (document.title === "дела папы") {
            localStorage.setItem("dadTodoList",JSON.stringify(arrLocalStore))
        }
        

    }

    function deleteButton(elem){

        if (document.title === "мои дела") {
            arrLocalStore.filter(function(item){
                if (item.name === elem.parentNode.parentNode.childNodes[0].textContent) {//нашли совпадение с текстом
                    if(confirm("Вы уверены")) {
                        arrLocalStore.splice(arrLocalStore.indexOf(item),1);//нашел совпадающий индекс в массиве и удалил его из массива     
                    }
                    
                }
                return arrLocalStore;
            })
            localStorage.setItem("myTodoList",JSON.stringify(arrLocalStore));

            let result = createTodoApp(document.getElementById("todo-app"),"мои дела"); 
            document.getElementById("todo-app").replaceWith(result);//заменяем контейнер новым отрисованным результатом

        } else if (document.title === "дела мамы") {
            arrLocalStore.filter(function(item){
                if (item.name === elem.parentNode.parentNode.childNodes[0].textContent) {//нашли совпадение с текстом
                    if(confirm("Вы уверены")) {
                        arrLocalStore.splice(arrLocalStore.indexOf(item),1);//нашел совпадающий индекс в массиве и удалил его из массива 
                    }
                    
                }
                return arrLocalStore;
            })
            localStorage.setItem("momTodoList",JSON.stringify(arrLocalStore));

            let result = createTodoApp(document.getElementById("todo-app"),"дела мамы");
            document.getElementById("todo-app").replaceWith(result);//заменяем контейнер новым отрисованным результатом

        } else if (document.title === "дела папы") {
            arrLocalStore.filter(function(item){
                if (item.name === elem.parentNode.parentNode.childNodes[0].textContent) {//нашли совпадение с текстом
                    if(confirm("Вы уверены")) {
                        arrLocalStore.splice(arrLocalStore.indexOf(item),1);//нашел совпадающий индекс в массиве и удалил его из массива 
                    }
                    
                }
                return arrLocalStore;
            })
            localStorage.setItem("dadTodoList",JSON.stringify(arrLocalStore));

            let result = createTodoApp(document.getElementById("todo-app"),"дела папы");  
            document.getElementById("todo-app").replaceWith(result);//заменяем контейнер новым отрисованным результатом
        }

    
        
        
    }
   
 
    window.createTodoApp = createTodoApp;
    window.doneButton = doneButton;
    window.deleteButton = deleteButton;
})()
