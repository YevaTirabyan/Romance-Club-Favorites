function changeImg(anything){
    img = document.getElementById('character');
    img.setAttribute('src','files/images/' + anything);

    if(anything == 'img1.png'){
        const circle = document.querySelector('.circle');
        circle.style.background = '#28635d';
        document.getElementById("name").innerHTML= "Александр";
        document.getElementById("name").style.color = '#28635d';
        document.getElementById("age").innerHTML= "25 года";
        document.getElementById("heigh").innerHTML= "180 см";
        document.getElementById("zodiac").innerHTML= "Лев";
        document.getElementById("love").innerHTML= "- логические загадки <br> - интеллектуальные спорты <br>- ананасы";
        document.getElementById("hate").innerHTML= "- глупость в разговорах <br>- медленный транспорт";
    }

    if(anything == 'img2.png'){
        const circle = document.querySelector('.circle');
        circle.style.background = '#2a1a4b';
        document.getElementById("name").innerHTML= "Сэм";
        document.getElementById("name").style.color = '#2a1a4b';
        document.getElementById("age").innerHTML= "24 года";
        document.getElementById("heigh").innerHTML= "178 см";
        document.getElementById("zodiac").innerHTML= "Дева";
        document.getElementById("love").innerHTML= "- составлять планы <br> - нарушать ПДД";
        document.getElementById("hate").innerHTML= "- гаишников <br>- японскую кухню <br>- Александра";
    }

    if(anything == 'img3.png'){
        const circle = document.querySelector('.circle');
        circle.style.background = '#641e28';
        document.getElementById("name").innerHTML= "Рэйчел";
        document.getElementById("name").style.color = '#641e28';
        document.getElementById("age").innerHTML= "24 года";
        document.getElementById("heigh").innerHTML= "165 см";
        document.getElementById("zodiac").innerHTML= "Весы";
        document.getElementById("love").innerHTML= "- запах бензина <br> - кремовые пирожные <br>- делать прически";
        document.getElementById("hate").innerHTML= "- врачей <br>- ананасы";
    }

    if(anything == 'img4.png'){
        const circle = document.querySelector('.circle');
        circle.style.background = '#37020c';
        document.getElementById("name").innerHTML= "Эллиа";
        document.getElementById("name").style.color = '#37020c';
        document.getElementById("age").innerHTML= "25 года";
        document.getElementById("heigh").innerHTML= "200 см";
        document.getElementById("zodiac").innerHTML= "Водолей";
        document.getElementById("love").innerHTML= "- шахматы <br> - регги <br>- чай с молоком";
        document.getElementById("hate").innerHTML= "- стереотипы <br>- пьяных за рулем";
    }

    if(anything == 'img5.png'){
        const circle = document.querySelector('.circle');
        circle.style.background = '#231b28';
        document.getElementById("name").innerHTML= "Ева";
        document.getElementById("name").style.color = '#231b28';
        document.getElementById("age").innerHTML= "24 года";
        document.getElementById("heigh").innerHTML= "170 см";
        document.getElementById("zodiac").innerHTML= "Овен";
        document.getElementById("love").innerHTML= "- Glock-17 <br> - коньяк <br>- перьевые ручки";
        document.getElementById("hate").innerHTML= "- шведскую погоду <br>- маленьких собачек";
    }
}