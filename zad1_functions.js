var list = [1,2,3,4,5,6,7,8,9,10,11,12];
console.log(
    list
      .map(x => x*x)
      .filter(x => x%2===0)
      .reduce((x,y) => x+y)
  )
  
//zadanie dla Karolci

var names = ['Andrzej', 'Armand', 'Michał', 'Karol', 'Aberald', 'Arystoteles', 'Grzegorz']

// stwórz zmienną typu string która zawiera wszystkie imiona zaczynające się na 'a', oddzielone przecinkiem i spacją tj: Andrzej, Armand, .... itd :)

console.log (
    names
      .filter(name => name.charAt(0) === 'A')
      .reduce((name1,name2) => name1 + ", " + name2)
  )
  
  var obj = {
    names:[{name:'Karola', surname:'Jedrychowska'},
      {name:'Mateusz', surname:'Jedrek'}],
    cats:['Ira', 'Filemon'],
    someNumber: 123
  }
  
  console.log(obj.names[1].surname)
  obj.someNumber