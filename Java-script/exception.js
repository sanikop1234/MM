console.log("Program started");
try {
    let a = 10/b;
    throw new error("b is not defined")
    console.log(a);
}
catch(error) {
    console.log("error occured and handles", error.message);
}
finally {
    console.log("program ended");
}