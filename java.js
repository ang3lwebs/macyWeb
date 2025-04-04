let numeroAleatorio = 0;
let  yearA = 0;

document.addEventListener('DOMContentLoaded', function () {
    // Fecha y hora de referencia (4 de julio de 2023 a las 2:51 PM)
    const referenceDate = new Date('2023-07-04T14:51:00');

    function updateClock() {
        const currentTime = new Date();
        const elapsedTime = currentTime - referenceDate;

        const seconds = Math.floor((elapsedTime + 500)/ 1000) % 60;
        const minutes = Math.floor(elapsedTime / (1000 * 60)) % 60;
        const hours = Math.floor(elapsedTime / (1000 * 60 * 60)) % 24;
        const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));

        numeroAleatorio = parseInt(localStorage.getItem('numeroA'));
        if (hours == 9 && minutes == 9 && seconds == 0) {
            while(true){
                numeroAleatorioTemporal = Math.floor(Math.random() * 13);
                if(numeroAleatorio != numeroAleatorioTemporal){
                    numeroAleatorio = numeroAleatorioTemporal;
                    localStorage.setItem('numeroA', numeroAleatorio);
                    break;
                }
            }
        }

        var apodo = "";

        switch (numeroAleatorio){
            case 0:
                apodo = "Mi Estrellita";
                break;
            case 1:
                apodo = "Mi Niña";
                break;
            case 2:
                apodo = "Mi Princesa";
                break;
            case 3:
                apodo = "Mi Princesita";
                break;
            case 4:
                apodo = "Mi Mujer";
                break;
            case 5:
                apodo = "Mi Amorcito";
                break;
            case 6:
                apodo = "Mi Corazón";
                break;
            case 7:
                apodo = "Mi Amor";
                break;
            case 8:
                apodo = "Mi Reina";
                break;
            case 9:
                apodo = "Mi Cielo";
                break;
            case 10:
                apodo = "Mi Florecita";
                break;
            case 11:
                apodo = "Mi Bebé";
                break;
            case 12:
                apodo = "Mi Bombón";
                break;
            default:
                apodo = "Mi Estrellita";
                break;
        }

        const saludoA = document.getElementById('saludo');
        if(hours < 4){
            saludoA.innerHTML = `Buenas tardes ${apodo}`;
        }else if(hours < 11){
            saludoA.innerHTML = `Buenas noches ${apodo}`;
        }else if(hours < 15){
            saludoA.innerHTML = `¿Qué haces despierta ${apodo}?`;
        }else if(hours < 21 || hours < 22 && minutes < 9){
            saludoA.innerHTML = `Buenos días ${apodo}`;
        }else{
            saludoA.innerHTML = `Buenas tardes ${apodo}`;
        }

        // Calcula la diferencia en meses
        const fechaActual = new Date();

        let mesesPasados = (fechaActual.getFullYear() - referenceDate.getFullYear()) * 12;
        mesesPasados += fechaActual.getMonth() - referenceDate.getMonth();
        mesesPasados -= 1;

        const feliz = document.getElementById('feliz');
        if (fechaActual.getDate() >= 4) {
            mesesPasados++;
            if(fechaActual.getDate() === 4){
                feliz.innerHTML = `Feliz 4 ${apodo}`;
            }else{
                feliz.innerHTML = "";
            }
        }
        
        if((mesesPasados%12) == 0){
            yearA = mesesPasados / 12;
        }else{
            yearA = (mesesPasados / 12).toFixed(2);
        }

        localStorage.setItem('meses', mesesPasados);
        mesesPasados = parseInt(localStorage.getItem('meses'));
        let semanas;
        if((days%7) == 0){
            semanas = days / 7;
        }else{
            semanas = (days / 7).toFixed(2);
        }
        var txtYear;
        if(yearA == 1){
            txtYear = "Año";
        }else{
            txtYear = "Años"
        }
        const datosT = document.getElementById('dateT');
        datosT.innerHTML = `${yearA} ${txtYear}<br>${mesesPasados} Meses<br>${semanas} Semanas`;

        const clockElement = document.getElementById('clock');
        clockElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if(fechaActual.getDate() == 21 && (fechaActual.getMonth() == 2 || fechaActual.getMonth() == 8)){
            document.querySelector('.flower-container').style.display = 'flex';
        }else{
            document.querySelector('.flower-container').style.display = 'none';
        }
    }

    setInterval(updateClock, 1000);
    updateClock();
});

