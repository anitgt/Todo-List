let input = prompt("What Would You Like to do?")
const todos = ['Collect Eggs', 'clear litter box']
while(input !== 'quit' && input !== 'q') {
    if(input === 'List') {
        console.log('**********');
        for(let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`)
        }
        console.log('**********');
    } else if (input === 'New') {
      const newTodo = prompt("What's Your New Todo?");
      todos.push(newTodo);
      console.log(`${newTodo} was added to the list`)
    } else if(input === "Delete") {
        const delprompt = prompt('What index do you like to delete?');
        todos.splice(delprompt)
    }
    input = prompt("What Would You Like to do?");
} 

console.log("Okay Quitting!")