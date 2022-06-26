# Javascript Unit Testing using Vitest

![Vitest page](https://vitest.dev/)


to import vitest to math.test.js file I have to write:


but also in package.json I can change:

```
"test": "vitest --run --reporter verbose",
```

to:

```
"test": "vitest --run --reporter verbose --globals", 
``` 

and then is not necessary to import it. But the other way (import...) give us better auto completion and support in the code editor.


I can use <code>npm test</code> everytime

or <code>npm run test:watch</code> just one and It will keep running 


<img src="/img/arrange-act-assert.png">

