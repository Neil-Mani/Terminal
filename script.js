let dragon = `
               ______________
       ,===:'.,            \`-._
            \`:.\\---.__         \`-._
              \`:.     \`--.         \`.
                \\.        \`.         \`.
        (,,(,    \\.         \`.   ____,-\`.,
     (,'     \`/   \\.   ,--.___\`.'
 ,  ,'  ,--.  \`,   \\.;'         \`
  \`{D, {    \\  :    \\;
    V,,'    /  /    //
    j;;    /  ,' ,-//.    ,---.      ,
    \\;'   /  ,' /  _  \\  /  _  \\   ,'/ 
          \\   \`'  / \\  \`'  / \\  \`.' /
           \`.___,'   \`.__,'   \`.__,'  
`;

$('body').terminal({
//    hello: function(what) {
//        this.echo('Hello, ' + what +
//                 '. Wellcome to this terminal.');
//   }

    
}, {
    greetings: 'Hello, thank you for taking intrest in my website but it is currently under construction.' + '\n'
    + dragon
});