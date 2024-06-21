//Correct Pin Value
let correctPin = "1234";
let btns = document.getElementsByClassName("pinpad-btn");
let pinInput = document.getElementById("pinpad-input");
for (let i=0; i<btns.length; i++) {
    let btn = btns.item(i);
    if (btn.id && (btn.id === "submit-btn" || btn.id === "delete-btn")) {
	continue;
    }
    //Add onclick event listener to everybutton from 0 to 9 
    btn.addEventListener("click", (e) => {
	pinInput.value += e.target.value;
    });	
}

let submitBtn = document.getElementById("submit-btn");
let delBtn = document.getElementById("delete-btn");
submitBtn.addEventListener("click", () => {
    if (!pinInput || !pinInput.value || pinInput.value === "") {
	alert("Please enter a pin first");
    }
    else if (pinInput.value === correctPin) {
	alert("Correct PIN");
    }
    else {
	alert("Incorrect PIN");
    }
    //Reset the input
    pinInput.value = "";
});

delBtn.addEventListener("click", () => {
    if (pinInput.value){
	pinInput.value = pinInput.value.substr( 0, pinInput.value.length - 1);
    }
});
