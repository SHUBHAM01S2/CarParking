const container = document.querySelector(".container");

const seats = document.querySelectorAll(".row .seats:not(.booked)");

const count = document.getElementById("count");
const total = document.getElementById("total");

const parkingSelect = document.getElementById("parking");

let parkingPrice = +parkingSelect.value;
console.log(parkingPrice);

parkingSelect.addEventListener("change", (e) => {
  // update parking price
  parkingPrice = +e.target.value;
  console.log(parkingPrice);
});

// Event Listener for Slots Click
container.addEventListener("click", (e) => {
  // check if a slot is clicked and not booked
  if (
    e.target.classList.contains("slot") &&
    !e.target.classList.contains("booked")
  )
    // toggle book selection
    e.target.classList.toggle("selected");
    // update displayed count and total
    updateSelectedCount();
});


function updateSelectedCount(){
    
}