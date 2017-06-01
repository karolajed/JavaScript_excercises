var incrementor = 0;

function logUsages() {
  incrementor++;
  console.log('Used :' + incrementor + ' times');
}

logUsages();
logUsages();
logUsages();
incrementor = 0;
logUsages();