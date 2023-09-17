const form = document.querySelector("form");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results");

    if(height==='' || height<=0 || isNaN(height) ){
        results.innerHTML = `Please give a valid height ${height}`
    }else if(weight==='' || height<=0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`
    }else{
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        let tag;
        if(bmi<18.6){
            tag ="(Under Wight)"
        }else if(bmi>=18.6 && bmi<24.9){
            tag="(Normal)"
        }
        else {
            tag= "(Over Weight)";
        }
        results.innerHTML = `<span>${bmi} ${tag}</span>`;
    }
});