let input = document.createElement("input");
input.setAttribute("type","text")
let h2 = document.createElement("h2")
let wrap = document.getElementById("wrap")

wrap.append(h2)
wrap.append(input)
 
input.oninput = () =>  {
    setTimeout(()=> {
        h2.textContent = input.value
    },300)
}
