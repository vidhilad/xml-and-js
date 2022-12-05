const fun = async function (value1, value2, value3) {
    new Promise((resolve, reject) => {
    if(value1!= undefined && value2!=undefined && value3!=undefined)
    {
    resolve (value1, value2, value3);
    console.log(value1);
    console.log(value2);
    console.log(value3);
    }
    else{
    reject("Error has been detected!");
    }
    });
    }
    main = (async () => {
    console.log("await fun(1,2,3) =", await fun({}, 3, 15));
    })
    
    main();