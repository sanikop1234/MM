function order(callprepare, callserve) {
    console.log("1. order Food");
    callprepare();
    callserve();
}

function prepare() {
    console.log("2. Preparation started");
}

function servecustomer() {
    console.log("3. enjoy your food");
}

order(prepare, servecustomer);

function greet(name) {
    console.log(`hello, ${name}!`);
}

function processUser(name, callback) {
    callback(name);
}

processUser("Alice", greet);