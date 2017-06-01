function scopes() {
  
if (true) {
    var fromVarInIf = 'Hello I am visible in the whole function'
  }
  
  console.log('Var in if statement: ' + fromVarInIf)
  
  if (true) {
    let fromLetInInf = 'Hello, I am not visible outside this if statement'
  }
  
  //console.log('Let in if statement: ' + fromLetInIf)
}

scopes();

//console.log('Var in function body: ' + fromVarInIf)
 const b = 4
 b = 3