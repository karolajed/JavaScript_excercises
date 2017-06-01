
function Foo() {
  var privateThing = 0;

  var privateFunction = function() {
    console.log('Hi! I am a private function')
  }

  this.logPrivate = function() {
    console.log(privateThing)
  }
  
  this.incrementPrivate = function() {
    privateThing++
  }
  
  this.usePrivateFunction = function() {
    console.log('POZOR! I will use private function')
    privateFunction()
  }
}

var foo = new Foo()

foo.logPrivate()

console.log(foo.privateThing)

foo.logPrivate()

foo.incrementPrivate()

foo.logPrivate()

foo.usePrivateFunction()