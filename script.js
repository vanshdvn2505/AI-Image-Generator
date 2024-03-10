const apiKey = "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";

let btn = document.querySelector('.btn');
let output = document.querySelector('.image');
const getImage = async ()=>{
    
    let input = document.querySelector('.inputs').value;
    let prom = input;
    if(prom == ""){
        alert("Enter some text");
        return;
    }
    console.log(prom);

    const options = {
        method: "POST",
		headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        },
		body: JSON.stringify({
            "inputs": prom
        }),
    }

    btn.innerHTML = "Generating..."
    let getImg = await fetch(`https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5`,options);
    let jsonData = await getImg.blob();
    const imgUrl = URL.createObjectURL(jsonData);
    const img = document.createElement("img");
    img.src = imgUrl;
    img.style.backgroundSize = "cover";
    img.style.backgroundRepeat = "no-repeat";
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.borderRadius = "3rem";
    output.innerHTML = "";
    output.appendChild(img);
    btn.innerHTML = "GENERATE";
}
btn.addEventListener('click',getImage);
