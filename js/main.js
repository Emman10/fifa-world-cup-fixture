alert("Bienvenido al fixture de la \nCopa Mundial FIFA \nQatar 2022")

let grupo = prompt("Elegí un grupo entre A-H \no presioná X para salir");

let puntosEquipo1 = 0;
let puntosEquipo2 = 0;
let puntosEquipo3 = 0;
let puntosEquipo4 = 0;

function puntos(){
    puntosEquipo1 = 0;
    puntosEquipo2 = 0;
    puntosEquipo3 = 0;
    puntosEquipo4 = 0;
}

while (grupo != "X" && grupo != "x"){
    
    switch (grupo) {

        case "A" && "a":
        
            puntos()

            equipo1= "Qatar";
            equipo2= "Ecuador";
            equipo3= "Senegal";
            equipo4= "Países Bajos";

            equipos();
            funcionFixture(equipo1,equipo2,equipo3,equipo4)
            puntajes()
            
            break;
        case "B" && "b":
            
            puntos()

            equipo1= "Inglaterra";
            equipo2= "Iran";
            equipo3= "Estados Unidos";
            equipo4= "Gales";

            equipos()
            funcionFixture(equipo1,equipo2,equipo3,equipo4)
            puntajes()
            
            break;
        case "C" && "c":

            puntos()

            equipo1= "Argentina";
            equipo2= "Arabia Saudita";
            equipo3= "México";
            equipo4= "Polonia";

            equipos()
            funcionFixture(equipo1,equipo2,equipo3,equipo4)
            puntajes()

            break;
        case "D" && "d":

            puntos()

            equipo1= "Dinamarca";
            equipo2= "Túnez";
            equipo3= "Francia";
            equipo4= "Australia";

            equipos()
            funcionFixture(equipo1,equipo2,equipo3,equipo4)
            puntajes() 

            break;
        case "E" && "e":

            puntos()

            equipo1= "Alemania";
            equipo2= "Japón";
            equipo3= "España";
            equipo4= "Costa Rica";

            equipos()
            funcionFixture(equipo1,equipo2,equipo3,equipo4)
            puntajes() 

            break;
        case "F" && "f":

            puntos()

            equipo1= "Marruecos";
            equipo2= "Croacia";
            equipo3= "Bélgica";
            equipo4= "Canadá";

            equipos()
            funcionFixture(equipo1,equipo2,equipo3,equipo4)
            puntajes() 

            break;
        case "G" && "g":

            puntos()

            equipo1= "Suiza";
            equipo2= "Camerún";
            equipo3= "Brasil";
            equipo4= "Serbia";

            equipos()
            funcionFixture(equipo1,equipo2,equipo3,equipo4)
            puntajes()

            break;
        case "H" && "h":

            puntos()

            equipo1= "Uruguay";
            equipo2= "Rep. de Corea";
            equipo3= "Portugal";
            equipo4= "Ghana";

            equipos()
            funcionFixture(equipo1,equipo2,equipo3,equipo4)
            puntajes()

            break;
        default:
        
            alert("El grupo no existe")
        
    }
        grupo= prompt("Quieres ver otro grupo? \nS  o  N")

    switch(grupo){
        case "S" && "s":
            
            grupo= prompt("Elegí un grupo entre A-H \no presioná X para salir");
            
        break;
        case "N" && "n":
            
            grupo= "X";
            
        break;
        default:
            
            alert("Entrada incorrecta")
            grupo= prompt("Quieres ver otro grupo? \nS  o  N");
    }
}

alert("Gracias por usar la app!");

function equipos(){
    alert("Grupo " + grupo.toUpperCase() + "\n \n" + equipo1 + "\n" + equipo2 + "\n" + equipo3 + "\n" + equipo4 );
}

function funcionFixture(var1,var2,var3,var4){

    alert(var1 + " vs " + var2);
        let resultEquipo1= prompt("Goles de " + var1)
        let resultEquipo2= prompt("Goles de " + var2)
    alert(var1 + " " + resultEquipo1 + " - " + resultEquipo2 + " " + var2);

        funcionEquipo1(resultEquipo1,resultEquipo2)
        funcionEquipo2(resultEquipo2,resultEquipo1)

    alert(var3 + " vs " + var4);
        let resultEquipo3= prompt("Goles de " + var3)
        let resultEquipo4= prompt("Goles de " + var4)
    alert(var3 + " " + resultEquipo3 + " - " + resultEquipo4 + " " + var4);

        funcionEquipo3(resultEquipo3,resultEquipo4)
        funcionEquipo4(resultEquipo4,resultEquipo3)

    alert(var1 + " vs " + var3);
        resultEquipo1= prompt("Goles de " + var1)
        resultEquipo3= prompt("Goles de " + var3)
    alert(var1 + " " + resultEquipo1 + " - " + resultEquipo3 + " " + var3);

        funcionEquipo1(resultEquipo1, resultEquipo3)
        funcionEquipo3(resultEquipo3, resultEquipo1)

    alert(var2 + " vs " + var4);
        resultEquipo2= prompt("Goles de " + var2)
        resultEquipo4= prompt("Goles de " + var4)
    alert(var2 + " " + resultEquipo2 + " - " + resultEquipo4 + " " + var4);

        funcionEquipo2(resultEquipo2, resultEquipo4)
        funcionEquipo4(resultEquipo4, resultEquipo2)

    alert(var1 + " vs " + var4);
        resultEquipo1= prompt("Goles de " + var1)
        resultEquipo4= prompt("Goles de " + var4)
    alert(var1 + " " + resultEquipo1 + " - " + resultEquipo4 + " " + var4);

        funcionEquipo1(resultEquipo1, resultEquipo4)
        funcionEquipo4(resultEquipo4, resultEquipo1)

    alert(var2 + " vs " + var3);
        resultEquipo2= prompt("Goles de " + var2)
        resultEquipo3= prompt("Goles de " + var3)
    alert(var2 + " " + resultEquipo2 + " - " + resultEquipo3 + " " + var3);

        funcionEquipo2(resultEquipo2, resultEquipo3)
        funcionEquipo3(resultEquipo3, resultEquipo2)

}
function funcionEquipo1(var1,var2){
    if (var1 > var2){
        puntosEquipo1 = puntosEquipo1 + 3}
    else if (var1 == var2){
        puntosEquipo1 = puntosEquipo1 + 1 
    }
    else {
        puntosEquipo1 = puntosEquipo1 + 0
    }
}

function funcionEquipo2(var1,var2){
    if (var1 > var2){
        puntosEquipo2 = puntosEquipo2 + 3}
    else if (var1 == var2){
        puntosEquipo2 = puntosEquipo2 + 1 
    }
    else {
        puntosEquipo2 = puntosEquipo2 + 0
    }
}

function funcionEquipo3(var1,var2){
    if (var1 > var2){
        puntosEquipo3 = puntosEquipo3 + 3}
    else if (var1 == var2){
        puntosEquipo3 = puntosEquipo3 + 1 
    }
    else {
        puntosEquipo3 = puntosEquipo3 + 0
    }
}

function funcionEquipo4(var1,var2){
    if (var1 > var2){
        puntosEquipo4 = puntosEquipo4 + 3}
    else if (var1 == var2){
        puntosEquipo4 = puntosEquipo4 + 1 
    }
    else {
        puntosEquipo4 = puntosEquipo4 + 0
    }
}

function puntajes(){
    if (puntosEquipo1 >= puntosEquipo2 && puntosEquipo1 >= puntosEquipo3 && puntosEquipo1 >= puntosEquipo4){
        if(puntosEquipo2 >= puntosEquipo3 && puntosEquipo2 >= puntosEquipo4){
            if(puntosEquipo3 >= puntosEquipo4){
                alert("Puntajes: \n \n" + equipo1 + ": " + puntosEquipo1 + " puntos \n" + equipo2 + ": " + puntosEquipo2 + " puntos \n" 
                + equipo3 + ": " + puntosEquipo3 + " puntos \n" + equipo4 + ": " + puntosEquipo4 + " puntos \n")
            }else{
                alert("Puntajes: \n \n" + equipo1 + ": " + puntosEquipo1 + " puntos \n" + equipo2 + ": " + puntosEquipo2 + " puntos \n" 
                + equipo4 + ": " + puntosEquipo4 + " puntos \n" + equipo3 + ": " + puntosEquipo3 + " puntos \n")
            }
        }else if(puntosEquipo3 >= puntosEquipo2 && puntosEquipo3 >= puntosEquipo4){
            if(puntosEquipo2 >= puntosEquipo4){
                alert("Puntajes: \n \n" + equipo1 + ": " + puntosEquipo1 + " puntos \n" + equipo3 + ": " + puntosEquipo3 + " puntos \n" 
                + equipo2 + ": " + puntosEquipo2 + " puntos \n" + equipo4 + ": " + puntosEquipo4 + " puntos \n")
            }else{
                alert("Puntajes: \n \n" + equipo1 + ": " + puntosEquipo1 + " puntos \n" + equipo3 + ": " + puntosEquipo3 + " puntos \n" 
                + equipo4 + ": " + puntosEquipo4 + " puntos \n" + equipo2 + ": " + puntosEquipo2 + " puntos \n")
            }
        }else if(puntosEquipo4 >= puntosEquipo2 && puntosEquipo4 >= puntosEquipo3){
            if(puntosEquipo2 >= puntosEquipo3){
                alert("Puntajes: \n \n" + equipo1 + ": " + puntosEquipo1 + " puntos \n" + equipo4 + ": " + puntosEquipo4 + " puntos \n" 
                + equipo2 + ": " + puntosEquipo2 + " puntos \n" + equipo3 + ": " + puntosEquipo3 + " puntos \n")
            }else{
                alert("Puntajes: \n \n" + equipo1 + ": " + puntosEquipo1 + " puntos \n" + equipo4 + ": " + puntosEquipo4 + " puntos \n" 
                + equipo3 + ": " + puntosEquipo3 + " puntos \n" + equipo2 + ": " + puntosEquipo2 + " puntos \n")
            }
        }

    }else if(puntosEquipo2 >= puntosEquipo1 && puntosEquipo2 >= puntosEquipo3 && puntosEquipo2 >= puntosEquipo4){
        if(puntosEquipo1 >= puntosEquipo3 && puntosEquipo1 >= puntosEquipo4){
            if(puntosEquipo3 >= puntosEquipo4){
                alert("Puntajes: \n \n" + equipo2 + ": " + puntosEquipo2 + " puntos \n" + equipo1 + ": " + puntosEquipo1 + " puntos \n" 
                + equipo3 + ": " + puntosEquipo3 + " puntos \n" + equipo4 + ": " + puntosEquipo4 + " puntos \n")
            }else{
                alert("Puntajes: \n \n" + equipo2 + ": " + puntosEquipo2 + " puntos \n" + equipo1 + ": " + puntosEquipo1 + " puntos \n" 
                + equipo4 + ": " + puntosEquipo4 + " puntos \n" + equipo3 + ": " + puntosEquipo3 + " puntos \n")
            }
        }else if(puntosEquipo3 >= puntosEquipo2 && puntosEquipo3 >= puntosEquipo4){
            if(puntosEquipo2 >= puntosEquipo4){
                alert("Puntajes: \n \n" + equipo2 + ": " + puntosEquipo2 + " puntos \n" + equipo3 + ": " + puntosEquipo3 + " puntos \n" 
                + equipo1 + ": " + puntosEquipo1 + " puntos \n" + equipo4 + ": " + puntosEquipo4 + " puntos \n")
            }else{
                alert("Puntajes: \n \n" + equipo2 + ": " + puntosEquipo2 + " puntos \n" + equipo3 + ": " + puntosEquipo3 + " puntos \n" 
                + equipo4 + ": " + puntosEquipo4 + " puntos \n" + equipo1 + ": " + puntosEquipo1 + " puntos \n")
            }
        }else if(puntosEquipo4 >= puntosEquipo2 && puntosEquipo4 >= puntosEquipo3){
            if(puntosEquipo2 >= puntosEquipo3){
                alert("Puntajes: \n \n" + equipo2 + ": " + puntosEquipo2 + " puntos \n" + equipo4 + ": " + puntosEquipo4 + " puntos \n" 
                + equipo1 + ": " + puntosEquipo1 + " puntos \n" + equipo3 + ": " + puntosEquipo3 + " puntos \n")
            }else{
                alert("Puntajes: \n \n" + equipo2 + ": " + puntosEquipo2 + " puntos \n" + equipo4 + ": " + puntosEquipo4 + " puntos \n" 
                + equipo3 + ": " + puntosEquipo3 + " puntos \n" + equipo1 + ": " + puntosEquipo1 + " puntos \n")
            }
        }
    }else if (puntosEquipo3 >= puntosEquipo2 && puntosEquipo3 >= puntosEquipo1 && puntosEquipo3 >= puntosEquipo4){
        if(puntosEquipo2 >= puntosEquipo1 && puntosEquipo2 >= puntosEquipo4){
            if(puntosEquipo1 >= puntosEquipo4){
                alert("Puntajes: \n \n" + equipo3 + ": " + puntosEquipo3 + " puntos \n" + equipo2 + ": " + puntosEquipo2 + " puntos \n" 
                + equipo1 + ": " + puntosEquipo1 + " puntos \n" + equipo4 + ": " + puntosEquipo4 + " puntos \n")
            }else{
                alert("Puntajes: \n \n" + equipo3 + ": " + puntosEquipo3 + " puntos \n" + equipo2 + ": " + puntosEquipo2 + " puntos \n" 
                + equipo4 + ": " + puntosEquipo4 + " puntos \n" + equipo1 + ": " + puntosEquipo1 + " puntos \n")
            }
        }else if(puntosEquipo1 >= puntosEquipo2 && puntosEquipo1 >= puntosEquipo4){
            if(puntosEquipo2 >= puntosEquipo4){
                alert("Puntajes: \n \n" + equipo3 + ": " + puntosEquipo3 + " puntos \n" + equipo1 + ": " + puntosEquipo1 + " puntos \n" 
                + equipo2 + ": " + puntosEquipo2 + " puntos \n" + equipo4 + ": " + puntosEquipo4 + " puntos \n")
            }else{
                alert("Puntajes: \n \n" + equipo3 + ": " + puntosEquipo3 + " puntos \n" + equipo1 + ": " + puntosEquipo1 + " puntos \n" 
                + equipo4 + ": " + puntosEquipo4 + " puntos \n" + equipo2 + ": " + puntosEquipo2 + " puntos \n")
            }
        }else if(puntosEquipo4 >= puntosEquipo2 && puntosEquipo4 >= puntosEquipo1){
            if(puntosEquipo2 >= puntosEquipo1){
                alert("Puntajes: \n \n" + equipo3 + ": " + puntosEquipo3 + " puntos \n" + equipo4 + ": " + puntosEquipo4 + " puntos \n" 
                + equipo2 + ": " + puntosEquipo2 + " puntos \n" + equipo1 + ": " + puntosEquipo1 + " puntos \n")
            }else{
                alert("Puntajes: \n \n" + equipo3 + ": " + puntosEquipo3 + " puntos \n" + equipo4 + ": " + puntosEquipo4 + " puntos \n" 
                + equipo1 + ": " + puntosEquipo1 + " puntos \n" + equipo2 + ": " + puntosEquipo2 + " puntos \n")
            }
        }
    }else if (puntosEquipo4 >= puntosEquipo2 && puntosEquipo4 >= puntosEquipo3 && puntosEquipo4 >= puntosEquipo1){
        if(puntosEquipo2 >= puntosEquipo3 && puntosEquipo2 >= puntosEquipo1){
            if(puntosEquipo3 >= puntosEquipo1){
                alert("Puntajes: \n \n" + equipo4 + ": " + puntosEquipo4 + " puntos \n" + equipo2 + ": " + puntosEquipo2 + " puntos \n" 
                + equipo3 + ": " + puntosEquipo3 + " puntos \n" + equipo1 + ": " + puntosEquipo1 + " puntos \n")
            }else{
                alert("Puntajes: \n \n" + equipo4 + ": " + puntosEquipo4 + " puntos \n" + equipo2 + ": " + puntosEquipo2 + " puntos \n" 
                + equipo1 + ": " + puntosEquipo1 + " puntos \n" + equipo3 + ": " + puntosEquipo3 + " puntos \n")
            }
        }else if(puntosEquipo3 >= puntosEquipo2 && puntosEquipo3 >= puntosEquipo1){
            if(puntosEquipo2 >= puntosEquipo1){
                alert("Puntajes: \n \n" + equipo4 + ": " + puntosEquipo4 + " puntos \n" + equipo3 + ": " + puntosEquipo3 + " puntos \n" 
                + equipo2 + ": " + puntosEquipo2 + " puntos \n" + equipo1 + ": " + puntosEquipo1 + " puntos \n")
            }else{
                alert("Puntajes: \n \n" + equipo4 + ": " + puntosEquipo4 + " puntos \n" + equipo3 + ": " + puntosEquipo3 + " puntos \n" 
                + equipo1 + ": " + puntosEquipo1 + " puntos \n" + equipo2 + ": " + puntosEquipo2 + " puntos \n")
            }
        }else if(puntosEquipo1 >= puntosEquipo2 && puntosEquipo1 >= puntosEquipo3){
            if(puntosEquipo2 >= puntosEquipo3){
                alert("Puntajes: \n \n" + equipo4 + ": " + puntosEquipo4 + " puntos \n" + equipo1 + ": " + puntosEquipo1 + " puntos \n" 
                + equipo2 + ": " + puntosEquipo2 + " puntos \n" + equipo3 + ": " + puntosEquipo3 + " puntos \n")
            }else{
                alert("Puntajes: \n \n" + equipo4 + ": " + puntosEquipo4 + " puntos \n" + equipo1 + ": " + puntosEquipo1 + " puntos \n" 
                + equipo3 + ": " + puntosEquipo3 + " puntos \n" + equipo2 + ": " + puntosEquipo2 + " puntos \n")
            }
        }
}}