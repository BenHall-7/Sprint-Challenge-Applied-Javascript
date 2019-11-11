// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function createHeader(data) {
    let header = document.createElement("div");
    header.classList.add("header");

    let date = document.createElement("span");
    let h1 = document.createElement("h1");
    let temp = document.createElement("span");
    date.classList.add("date");
    temp.classList.add("temp");
    date.textContent = data.date;
    h1.textContent = data.title;
    temp.textContent = data.temp;
    
    header.append(date, h1, temp);
    return header;
}

document.querySelector(".header-container").append(createHeader({
    date: "SMARCH 28, 2019",
    title: "Lambda Times",
    temp: "98°",
}));