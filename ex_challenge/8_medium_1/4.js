function minilang(program) {
  let register = 0;
  const stack = [];
  const operations = {
    PRINT: () => console.log(register),
    PUSH:  () => stack.push(register),
    POP:   () => register = stack.pop(),
    ADD:   () => register += stack.pop(),
    MULT:  () => register *= stack.pop(),
    SUB:   () => register -= stack.pop(),
    DIV:   () => register = Math.floor(register / stack.pop()),
    MOD:   () => register = Math.floor(register % stack.pop()),
  };

  program.split(' ').forEach((item) => {
    /\d/.test(item) ? (register = Number(item)) : operations[item]();
  });
}

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)
