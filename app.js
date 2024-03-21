window.onload = () => {
    let button = document.querySelector("#btn");
    button.addEventListener("click", calculateBMI);
};

function calculateBMI(){
   let height = parseInt(document.querySelector("#height").value);
   
   let weight = parseInt(document.querySelector("#weight").value);
   
   let result = document.querySelector("#result");

   if(height === "" || isNaN(height)){
    result.innerHTML = "<span class='text-danger text-center'>Isi terlebih dahulu tingginya</span>";
   }else if(weight === "" || isNaN(weight)){
    result.innerHTML = "<span class='text-danger text-center'>Isi terlebih dahulu beratnya</span>"
   }else{
    let bmi = (weight / ((height / 100) ** 2)).toFixed(2);
    // console.log(bmi);
    if(bmi < 18.6){
        console.log(`kurang gizi: ${bmi}`);
        result.innerHTML = `<span class='text-center text-center badge text-bg-warning'>Under Weigth</span> <span class='text-primary text-center'>${bmi}</span>`;
    }else if(bmi >= 18.6 && bmi < 24.9){
        result.innerHTML = `<span class='text-center badge text-bg-success'>Normal:</span><span class='text-success text-center'>${bmi}</span>`;
    }else{
        result.innerHTML = `<span class='text-center badge text-bg-danger'>Over Weight</span> <span class='text-danger text-center'>${bmi}</span>`;
    }
   }
}