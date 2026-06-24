function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function Bookticket() {
    await wait(8000);
    console.log("Open book mys show");
    await wait(3000);
    console.log("Search movie");
    await wait(2000);
    console.log("Select seat");
    await wait(1000);
    console.log("Make payment");
    await wait(2000);
    console.log("Ticket Booked");
}

Bookticket();