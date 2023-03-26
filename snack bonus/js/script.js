const numbersArray = [23, 14, 6, 8, 10, 15, 7, 45, 4];

function getSubArray(array, firstPosition, lastPosition){
     let newArray = [];
    let i = 0;
    array.forEach(element => {
        if(i >= firstPosition && i <= lastPosition){
            newArray.push(element);

        }
        i++;
    });

    console.log(newArray);
 }

 getSubArray(numbersArray, 3, 6);