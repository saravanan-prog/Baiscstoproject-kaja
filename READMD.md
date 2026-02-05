 => Es6 Features
 => let var const
 => Data Type : String,Number,Boolean,null,undefined
 => Operators: ternary operator, spread operator, typeof
 => Arrow functions
 => high order functions 
       map
       filter
       reduce
       some
       every

=> callback
      -> callback
      -> first-callback
      -> callback-hells
=>How to avoid callback hells
      -> promise
      -> async & await
=> spread operator
=>  Ternary opeartor


Interview Questions
====================
Day1

  1. Es6 Features
  2. let var const
  3. what is hoisting
  4. useStict
  5. null vs undefined
  6. what is mean by closure
  7. high order function
  8. callback
  9. what is first callback?
  10. what is callback-hell?
  11. how to avoid callback-hells? -> promise / async await
  12. How to handle error in nodeJS?
          => first-callback
          => try-catch
          => throw 
  13. Promise various types
      => promise.all()  
            ---> wait for all Promise resolve -> then otherwise catch.

      => promise.allSetteled() 
            --> waits for all promise + resolve or failure state.

      => promise.race() 
            ---> Resolves/rejects with the first completed promise

      => promise.any() 
            -->  Resolves with the first successful promise, Rejects only if all fail


promise summary: 



| Type               | Purpose          |
| ------------------ | ---------------- |
| Pending            | Initial state    |
| Fulfilled          | Success          |
| Rejected           | Failure          |
| Promise.all        | All must succeed |
| Promise.allSettled | Get all results  |
| Promise.race       | First completed  |
| Promise.any        | First success    |

   

   14. flatten Array [1,2,3,[4,6,[5,8,[0,10]]],8,6]
                  => [1,2,3,4,6,5,8,0,10,8,6]
   
   15. "hello world" count word frequency
            {h:1,e:1,l:3,o:2,w:1,r:1,d:1}

   16. [1,2,3,4,6,5,8,0,10,8,6] remove duplicate elements

   17. [1,2,3,4,6,5,8,0,10,8,6] -> find minimum and max value


   18. what is expect output?.

   19. "hello world" vowels count.

   20. Anagram program (or) palindrome.

   21. find zeroth nearest number [8,2,6,-2-1,0,1,6]

   22. find common value for all array [1,2,3,4,5] [2,3,4,5,6,7] [8,9,1,2,3]

   23. [5,3,2,1,2,5,6] find add 10 give me a sub array