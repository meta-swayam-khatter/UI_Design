let empIndex = 0;
let empForm = document.querySelectorAll("#emp-form>div");
let empNext = document.getElementById("emp-next")

let empFormData = {
}

let ticketNumber = 0;

let empEnt = document.querySelectorAll("#emp-form input")


const employeeFormHandler = (e)=>{
    e.preventDefault();
    if(empIndex+1 == empForm.length){
        empEnt.forEach(inp => {
            if(inp.type === "radio"){
                if(inp.checked){
                    localStorage.setItem(inp.getAttribute('name'), inp.value);
                    console.log(inp.value);
                }
            }else{
                localStorage.setItem(inp.getAttribute('name'), inp.value);
                console.log(inp.value);
            }

        })

        let elem = document.getElementById("emp-confirmation");
        ticketNumber++;
        document.getElementById("emp-form").classList.add("d-none")
        localStorage.setItem("ticketNumber", ticketNumber);
        // elem.innerText = `Employee Registered Successfully !`;
        elem.classList.remove("d-none")
    }else{
        empForm[empIndex].classList.add("d-none");
        empForm[++empIndex].classList.remove("d-none");
    }
}

empNext.addEventListener("click", employeeFormHandler)


empEnt.forEach(e => (
    e.addEventListener("keypress",()=>{
        if(e.key === "Enter"){
            employeeFormHandler;
        }
    })
))


let vehicleIndex = 0;
let vehicleForm = document.querySelectorAll("#vehicle-form>div");
let vehicleNext = document.getElementById("vehicle-next")
let vehicleEnt = document.querySelectorAll("#vehicle-form input")


const vehicleFormHandler = (e)=>{
    e.preventDefault();
    if(vehicleIndex+1 == vehicleForm.length){
        vehicleEnt.forEach(inp => {
            if(inp.type === "radio"){
                if(inp.checked){
                    localStorage.setItem(inp.getAttribute('name'), inp.value);
                    console.log(inp.value);
                }
            }else{
                localStorage.setItem(inp.getAttribute('name'), inp.value);
                console.log(inp.value);
            }

        })
        let elem = document.getElementById("vehicle-confirmation");
        document.getElementById("vehicle-form").classList.add("d-none")
        // elem.innerText = "Vehicle Added Successfully !";
        elem.classList.remove("d-none")
    }else{
        vehicleForm[vehicleIndex].classList.add("d-none");
        vehicleForm[++vehicleIndex].classList.remove("d-none");
    }
}

vehicleNext.addEventListener("click", vehicleFormHandler)


vehicleEnt.forEach(e => (
    e.addEventListener("keypress",()=>{
        if(e.key === "Enter"){
            vehicleFormHandler;
        }
    })
))

const cyclePurchaseButton = document.querySelector("#cycle-pricing");
const twoWheelerPurchaseButton = document.querySelector("#two-wheeler-pricing");
const fourWheelerPurchaseButton = document.querySelector("#four-wheeler-pricing");

(function () {
    const vehicleType = localStorage.getItem("vehicle-type");

    if (vehicleType) {
        document.querySelector(`#${vehicleType}-pricing`)?.removeAttribute("disabled");
    }

    console.log("Vehicle type checked:", vehicleType);
})();