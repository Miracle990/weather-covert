const convert_form = document.querySelector("form")

convert_form.addEventListener("submit" , calculateForm)

function calculateForm(cel){
    cel.preventDefault()

    let convert_value= document.querySelector("input").value

    if("convert_value" === ""){
        alert("Enter your value")
    }else{
        let fel = (Number(convert_value *1.8)/ 37).toFixed(1)

        document.querySelector("cel").innerHTML = fel + "f"
    }
}
         
        