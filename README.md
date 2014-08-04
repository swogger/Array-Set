Arrays as Sets
========
#### Micro-implementation of the basic operations in Set Theory applied on Javascript arrays.

Using arrays as logical sets, or as groups of similar elements, is extremely common and often requires the use of set operations. Unfortunately such operations have not found yet place in the current version of ECMAScript (ES5).

Luckily their implementation requires just a few lines of code, not nearly enough to make it worth creating a library or a module.  

If you need to use the operations for more than two arrays the following rules apply: 

A ∪ B ∪ C = A ∪ (B ∪ C) = (A ∪ B) ∪ C

A ∩ B ∩ C =  A ∩ (B ∩ C) = (A ∩ B) ∩ C


<br/>Live demo at: <a href='http://jsfiddle.net/swogger/4gpDB/3/' target='_blank'>jsfiddle.net/swogger/4gpDB/3/</a>

-------


Union
--------


<img src='http://upload.wikimedia.org/wikipedia/commons/3/30/Venn0111.svg'/>

##### Merging two arrays/sets into one without duplicating elements.

Often merging two or more arrays into one is required. Unfortunately the native implementation Array.prototype.concat() preserves the duplicate values both arrays have in common, which requires more code to be resolved. Union takes care of that. 
#####Code:
```javascript
var fruit = ['apple', 'banana', 'lemon', 'lime', 'pear'];
var sweet = ['icecream', 'banana', 'honey', 'pear', 'sugar', 'apple'];
var result = union(fruit, sweet);
```
#####Preview:
```
Fruit Set: apple, banana, lemon, lime, pear
Sweet Set: icecream, banana, honey, pear, sugar, apple
Result Set: apple, banana, lemon, lime, pear, icecream, honey, sugar
```


Difference (Relative Complement)
--------


<img src='http://upload.wikimedia.org/wikipedia/commons/e/e6/Venn0100.svg'/>

##### Remove all elements from array/set 1 that have equivalent in array/set 2.
#####Code:
```javascript
var fruit = ['apple', 'banana', 'lemon', 'lime', 'pear'];
var sweet = ['icecream', 'banana', 'honey', 'pear', 'sugar', 'apple'];
var result = difference(fruit, sweet);
```
#####Preview:
```
Fruit Set: apple, banana, lemon, lime, pear
Sweet Set: icecream, banana, honey, pear, sugar, apple
Result Set: lemon, lime
```




Intersection
--------


<img src='http://upload.wikimedia.org/wikipedia/commons/9/99/Venn0001.svg'/>

##### Returns only the elements both arrays/sets have in common.
#####Code:
```javascript
var fruit = ['apple', 'banana', 'lemon', 'lime', 'pear'];
var sweet = ['icecream', 'banana', 'honey', 'pear', 'sugar', 'apple'];
var result = intersection(fruit, sweet);
```
#####Preview:
```
Fruit Set: apple, banana, lemon, lime, pear
Sweet Set: icecream, banana, honey, pear, sugar, apple
Result Set: apple, banana, pear
```




Exclusion (Symmetric Difference)
-------- 


<img src='http://upload.wikimedia.org/wikipedia/commons/4/46/Venn0110.svg'/>

##### Returns the elements from both arrays that they did NOT have in common.
#####Code:
```javascript
var fruit = ['apple', 'banana', 'lemon', 'lime', 'pear'];
var sweet = ['icecream', 'banana', 'honey', 'pear', 'sugar', 'apple'];
var result = exclusion(fruit, sweet);
```
#####Preview:
```
Fruit Set: apple, banana, lemon, lime, pear
Sweet Set: icecream, banana, honey, pear, sugar, apple
Result Set: lemon, lime, icecream, honey, sugar
```

<br/>

###Thanks for reading! 
*Feedback always welcome.*
dimitar.kazakov@gmail.com
