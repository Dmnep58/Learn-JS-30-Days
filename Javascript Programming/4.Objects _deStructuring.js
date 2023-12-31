/*
Destructring the data got from the api 
*/

const course = {
    courseName : " Java" ,
    course_Price: 999,
    course_Instructor : "Devi"
}

// course.course_Instructors --> simple way to call the course instructor


/* 1.  DeStructuring the object */

            /*
            unique idea to print the name or other data of the course where the course_instructor is referenced as 
            instructor which makes the code readability.

            */
            const {course_Instructor : instructor} = course  
            // console.log(instructor);





/* 3. Json data handling got from the api 
            json data format
                            {
                                "login" : "Devi",
                                "id" : "1234",
                                "followes" : "12341"
                            }

            some times we can get the arrays as response having objects in it.

            we can get combination of arrays and object as response we need to handle it
*/









