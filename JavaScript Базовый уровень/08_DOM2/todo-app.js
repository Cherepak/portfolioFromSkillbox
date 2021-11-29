(function(){
    //разделить код на список дел мамы, мой и папы, сделать так что бы ывполненные задачи подсвечивались зеленым при перезагрузки страницы  
    let arrLocalStore = [];

    if(localStorage.getItem("myTodoList")) {// если список уже существует, то обновляет внутренний массив котором храним старые и добавляем новые объекты
        let elem = JSON.parse(localStorage.getItem("myTodoList"))
        arrLocalStore = elem 
    }

    function createAppTitle(title) {
        let appTitle = document.createElement("h2")
        appTitle.innerHTML = title;
        return appTitle
    }

    function createTodoItemFom () {
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
    
        let todoAppTitle = createAppTitle(title);
        let todoItemForm = createTodoItemFom();
        let todoList = createTodoList();

        container.append(todoAppTitle);
        container.append(todoItemForm.form);
        container.append(todoList);

        if(localStorage.getItem("myTodoList")) { //если есть данные в локал стор, то загрузим его на страницу
            let elem = JSON.parse(localStorage.getItem("myTodoList"));//

            for(let key of elem){
                console.log(key)
                let todoItem = createTodoItem(key["name"],key["done"]);
                todoList.append(todoItem.item)
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
            localStorage.setItem("myTodoList", JSON.stringify(arrLocalStore));// закидываю ее в локалстор

            todoItemForm.input.value = "";
        })
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
      localStorage.setItem("myTodoList",JSON.stringify(arrLocalStore))
    }

    function deleteButton(elem){
        arrLocalStore.filter(function(item){
            if (item.name === elem.parentNode.parentNode.childNodes[0].textContent) {//нашли совпадение с текстом
                if(confirm("Вы уверены")) {
                    elem.parentNode.parentNode.remove()//удалил элемент сразу на страничке
                    arrLocalStore.splice(arrLocalStore.indexOf(item),1)//нашел совпадающий индекс в массиве и удалил его из массива 
                }
                
            }
            return arrLocalStore
        })
        localStorage.setItem("myTodoList",JSON.stringify(arrLocalStore))
    }
   
    window.createTodoApp = createTodoApp;
    window.doneButton = doneButton;
    window.deleteButton = deleteButton;
})()