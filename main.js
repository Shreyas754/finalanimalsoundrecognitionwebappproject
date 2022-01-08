function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/F7rl4TOJW/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results)
        random_number_r = Math.floor(Math.random() * 255) + 1
        random_number_g = Math.floor(Math.random() * 255) + 1
        random_number_b = Math.floor(Math.random() * 255) + 1

        document.getElementById("result_label").innerHTML = 'I can hear - '+results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+(results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")"
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")"

        img = document.getElementById('bird');
        img2 = document.getElementById('dog');
        img3 = document.getElementById('cat');
        img4 = document.getElementById('cow');

        

        if (results[0].label == "Chirping") {
            img.src = 'bird.jpg';
            img2.src = '';
            img3.src = '';
            img4.src = '';
        } else if(results[0].label == "Barking") {
            img.src = '';
            img2.src = 'dog.jpg';
            img3.src = '';
            img4.src = '';
        } else if(results[0].label == "Meowing"){
            img.src = '';
            img2.src = '';
            img3.src = 'cat.jpg';
            img4.src = '';
        }else{
            img.src = '';
            img1.src = '';
            img2.src = '';
            img3.src = 'cow.jpg';
        }

    }
}

document.getElementById('ichans').innerHTML = results[0].label
document.getElementById('accans').innerHTML = results[0].confidence
