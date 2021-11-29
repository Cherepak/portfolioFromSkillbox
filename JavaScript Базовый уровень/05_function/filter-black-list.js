
function filterEmailAdress(listAdress, blackList) {

return listAdress.filter(function(i) {return blackList.indexOf(i)<0})

}


console.log(filterEmailAdress(["123","124","125","126",],["123","124"]))