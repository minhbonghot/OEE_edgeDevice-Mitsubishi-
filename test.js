// First "arbitrary code" execution is synchronous, subsequent executions happen
// every ~1000ms.
(function loopy(){
  console.log(new Date()); // run some arbitrary code
  setTimeout( loopy, 1000 );
})();

// First "arbitrary code" execution happens after ~1000ms, subsequent executions
// follow suit.
(function loopy(){
  setTimeout(function(){
    console.log(new Date()); // run some arbitrary code
    loopy();
  }, 1000 );
})();