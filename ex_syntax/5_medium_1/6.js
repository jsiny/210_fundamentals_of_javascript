function debugIt() {
  var status = 'debugging';
  function logger() {
    console.log(status);
  }

  logger();
}

debugIt();

// the status variable is in scope of the nested logger function because a nested function has access to any variables declared in the scope of its parent function.