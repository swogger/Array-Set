ArraySet
========
##### Micro-implementation of the basic operations in Set Theory applied on Javascript arrays.

Array are often used as logical sets, groups of elements. 
Operations on groups are commonsituation
No native implementation
No library needed due to very small implementation 
To apply to more than two arrayloop

<br/>Live demo at: <a href='http://jsfiddle.net/swogger/4gpDB/2/' target='_blank'>jsfiddle.net/swogger/4gpDB/2/</a>

-------


Union
--------


<img src='http://upload.wikimedia.org/wikipedia/commons/3/30/Venn0111.svg'/>

##### Merging two arrays/sets into one without duplicating elements.

By far one of the most common operations on arrays is merging two into one. Unfortunately the native implementation Array.prototype.concat() preserves duplicate values both arrays share, which requires further attention to be dealt with. Union takes care of that. 
#####Code:
```javascript
var fruit = ['apple', 'banana', 'lemon', 'lime', 'pear'];
var sweet = ['icecream', 'banana', 'honey', 'pear', 'sugar', 'apple'];
var result = union(sweet, fruit);
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

##### Remove all elements from array/set 1 that have equivalent in array/set 2
#####Code:
```javascript
var fruit = ['apple', 'banana', 'lemon', 'lime', 'pear'];
var sweet = ['icecream', 'banana', 'honey', 'pear', 'sugar', 'apple'];
var result = difference(sweet, fruit);
```
#####Preview:
```
Fruit Set: apple, banana, lemon, lime, pear
Sweet Set: icecream, banana, honey, pear, sugar, apple
Result Set: lemon, lime
```




Intersection
--------
Merging two arrays/sets into one that does not contain the elements that the first two arrays had in common.

<img src='http://upload.wikimedia.org/wikipedia/commons/9/99/Venn0001.svg'/>

Exclusion (Symmetric Difference)
--------
what is union

<img src='http://upload.wikimedia.org/wikipedia/commons/4/46/Venn0110.svg'/>
