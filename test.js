/*
Step 1: Get references to DOM elements
*/
// Get a reference to the main container
const container = document.querySelector(".container");

// Reference of all available slots
const slots = document.querySelectorAll(".row .slot:not(.sold)");

// Reference of the count and total elements
const count = document.getElementById("count");
const total = document.getElementById("total");

// Reference of the parking dropdown
const parkingSelect = document.getElementById("parking");

/*
Step 2: Add event listeners
*/

// Event listner for parking selection change
parkingSelect.addEventListener("change", e => {
  //Update ticket price and store selected parking data
  ticketPrice = +e.target.value;
  setparkingData(e.target.selectedIndex, e.target.value);

  // Update displayed count and total
  updateSelectedCount();
});

// Event listner for slot clicks
container.addEventListener("click", e => {
  // check if a slot is clicked and not sold
  if (
    e.target.classList.contains("slot") &&
    !e.target.classList.contains("sold")
  ) {
    //Toggle slot selection
    e.target.classList.toggle("selected");

    // Update displayed count and total
    updateSelectedCount();
  }
});

/*
Step 3: Define funtion to update selected count and total
*/

function updateSelectedCount() {
  // Get all selected slots
  const selectedslots = document.querySelectorAll(".row .slot.selected");

  // Get an array of selected slots's indexes
  const slotsIndex = [...selectedslots].map(slot => [...slots].indexOf(slot));

  // Store selected slots index into local storage
  localStorage.setItem("selectedslots", JSON.stringify(slotsIndex));

  // Calculate selected slots and count
  const selectedslotsCounts = selectedslots.length;

  // Update UI with selected slots count and total price
  count.innerText = selectedslotsCounts;
  total.innerText = selectedslotsCounts * ticketPrice;

  setparkingData(parkingSelect.selectedIndex, parkingSelect.value);
}

/*
Step 4: Define funtion to set selected parking data, in local storage
*/
function setparkingData(parkingIndex, parkingPrice) {
  localStorage.setItem("selectedparkingIndex", parkingIndex);
  localStorage.setItem("selectedparkingPrice", parkingPrice);
}

/*
Step 5: Define funtion to populate UI with local storage data
*/
// Function to populate UI from local storage data

function populateUI() {
  // Get selected slots from local storage
  const selectedslots = JSON.parse(localStorage.getItem("selectedslots"));

  // If there are selected slots, mark them as selected in the UI
  if (selectedslots != null && selectedslots.length > 0) {
    slots.forEach((slot, index) => {
      if (selectedslots.indexOf(index) > -1) {
        slot.classList.add("selected");
      }
    });
  }

  // Get selected parking data from local storage
  const selectedparkingIndex = localStorage.getItem("selectedparkingIndex");

  // If there's a selected parking index, then set it in the dropdown
  if (selectedparkingIndex !== null) {
    parkingSelect.selectedIndex = selectedparkingIndex;
  }
}

/*
Step 6: Initial setup of count, total and UI based on save data
*/
populateUI();

// Initialize ticket price
let parkingPrice = +parkingSelect.value;

updateSelectedCount();

let book = document.getElementsByClassName("book_btn");
function bookParking() {
  book.style.backgroundColor = rgb(238, 35, 35);
  console.log("done");
  }