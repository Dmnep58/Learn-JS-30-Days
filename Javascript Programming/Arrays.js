
// arrays learning and its functions



// 1.  arrays declaration


// example.1
            var arr = [1,2,3,4,5];
            console.log(arr);


//  exapmle.2
            var arr1 = new Array();
            arr1.push(1);

            console.log(arr1);





//2. methods
            /*

            1. push -- add element on n-1 th index
            2. pop  --- delete n-1th element
            3. shift  -- delete oth element
            4. unshift -- add element on 0th index
            5. splice  -- goes upto that index include like 1 to 3 and manipulates the original array
            6. slice  --- goes upto end - 1 indexes  it does not manipulates the original array
            7. subarray
            8. subarr
            9. includes
            10 . indexOf
            11. join  --> add all element of an array into a string

            */




//3.  adding 2 arrays together 
            const heros = ["thor","Ironman", "spiderman"]
            const dc_heros = ["flash","batman"]

            heros.push(dc_heros)

            console.log(heros);



// now 3rd index is a array like

            console.log("third index is: "+heros[3]);



/*4. if i want ot access the name batman then it will be acting like 2 d array like 
heros 3 index 1 index*/

            console.log("accessing the batman from heros array: "+heros[3][1]);



/*5. but it is not an good pratice .
so we need to concat the array so that all the elements of the array dc_heros becomes the element of array heros
like: */

            console.log("concating the arrays :")

            const all_heros = heros.concat(dc_heros)   // concat returns new array so it should be stored
            console.log(all_heros);


/*6.  we can do this same using the spread operator  we can spread more then 2 array at same time
            which mitimize the  limitation of concat operator*/

            console.log("spread operator: ")

            const all_spread_heors = [...heros,...dc_heros]
            console.log(all_spread_heors);



/*7. suppose we have arrays inside an array so we can handle this situation using flat operator based on dept */

                    const flatting_Array = [ 1, 2,[3, 4, 5] , [6, [7, 8]], 9] // having an arrays of array with dept of 3 

                    const new_flat_array = flatting_Array.flat(3);  // converting into 1d array
                    console.log(new_flat_array);




/*8. check if the element is an array or not  --> isArray(value)
    if not array then convert it to array 
    
    from() method can be used to convert the string object number to an array like
    */

        let name = "Devi"
                        //  check it is  array or not
                            console.log(Array.isArray(name));

                        // if not  convert it to an array

                            let name_array = Array.from(name);
                            console.log(name_array);

                    // lets say we need to change an object ot an array then
                        console.log(Array.from({names:"Devi"}));
                        // we need to specify that we need the array from the keys or form the values like now its from value
                        // otherswise it will return an empty array



/*9. of() method
 lets say we have some variables and we need to conver them into an array then we can use the of method */

                var num = 100
                var num1 = 200
                var num2 = 300

                console.log(Array.of(num,num1,num2));

