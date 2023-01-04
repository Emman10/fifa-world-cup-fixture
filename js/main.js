const pais=[
    {id: 1, nombre: "Qatar", grup: "A", puntos: 0, pJ: 0, pG: 0, pE: 0, pP: 0},
    {id: 2, nombre: "Ecuador", grup: "A", puntos: 0, pJ: 0, pG: 0, pE: 0, pP: 0},
    {id: 3, nombre: "Senegal", grup: "A", puntos: 0, pJ: 0, pG: 0, pE: 0, pP: 0},
    {id: 4, nombre: "Paices Bajos", grup: "A", puntos: 0, pJ: 0, pG: 0, pE: 0, pP: 0},

    {id: 5, nombre: "Inglaterra", grup: "B", puntos: 0, pJ: 0, pG: 0, pE: 0, pP: 0},
    {id: 6, nombre: "Iran", grup: "B", puntos: 0, pJ: 0, pG: 0, pE: 0, pP: 0},
    {id: 7, nombre: "Estados Unidos", grup: "B", puntos: 0, pJ: 0, pG: 0, pE: 0, pP: 0},
    {id: 8, nombre: "Gales", grup: "B", puntos: 0, pJ: 0, pG: 0, pE: 0, pP: 0},

    {id: 9, nombre: "Argentina", grup: "C", puntos: 0, pJ: 0, pG: 0, pE: 0, pP: 0},
    {id: 10, nombre: "Arabia Saudita", grup: "C", puntos: 0, pJ: 0, pG: 0, pE: 0, pP: 0},
    {id: 11, nombre: "Mexico", grup: "C", puntos: 0, pJ: 0, pG: 0, pE: 0, pP: 0},
    {id: 12, nombre: "Polonia", grup: "C", puntos: 0, pJ: 0, pG: 0, pE: 0, pP: 0},

    {id: 13, nombre: "Francia", grup: "D", puntos: 0, pJ: 0, pG: 0, pE: 0, pP: 0},
    {id: 14, nombre: "Australia", grup: "D", puntos: 0, pJ: 0, pG: 0, pE: 0, pP: 0},
    {id: 15, nombre: "Dinamarca", grup: "D", puntos: 0, pJ: 0, pG: 0, pE: 0, pP: 0},
    {id: 16, nombre: "Tunez", grup: "D", puntos: 0, pJ: 0, pG: 0, pE: 0, pP: 0},

    {id: 17, nombre: "España", grup: "E", puntos: 0, pJ: 0, pG: 0, pE: 0, pP: 0},
    {id: 18, nombre: "Costa Rica", grup: "E", puntos: 0, pJ: 0, pG: 0, pE: 0, pP: 0},
    {id: 19, nombre: "Alemania", grup: "E", puntos: 0, pJ: 0, pG: 0, pE: 0, pP: 0},
    {id: 20, nombre: "Japón", grup: "E", puntos: 0, pJ: 0, pG: 0, pE: 0, pP: 0},

    {id: 21, nombre: "Bélgica", grup: "F", puntos: 0, pJ: 0, pG: 0, pE: 0, pP: 0},
    {id: 22, nombre: "Canadá", grup: "F", puntos: 0, pJ: 0, pG: 0, pE: 0, pP: 0},
    {id: 23, nombre: "Marruecos", grup: "F", puntos: 0, pJ: 0, pG: 0, pE: 0, pP: 0},
    {id: 24, nombre: "Croacia", grup: "F", puntos: 0, pJ: 0, pG: 0, pE: 0, pP: 0},

    {id: 25, nombre: "Brasil", grup: "G", puntos: 0, pJ: 0, pG: 0, pE: 0, pP: 0},
    {id: 26, nombre: "Serbia", grup: "G", puntos: 0, pJ: 0, pG: 0, pE: 0, pP: 0},
    {id: 27, nombre: "Suiza", grup: "G", puntos: 0, pJ: 0, pG: 0, pE: 0, pP: 0},
    {id: 28, nombre: "Camerun", grup: "G", puntos: 0, pJ: 0, pG: 0, pE: 0, pP: 0},

    {id: 29, nombre: "Portugal", grup: "H", puntos: 0, pJ: 0, pG: 0, pE: 0, pP: 0},
    {id: 30, nombre: "Ghana", grup: "H", puntos: 0, pJ: 0, pG: 0, pE: 0, pP: 0},
    {id: 31, nombre: "Uruguay", grup: "H", puntos: 0, pJ: 0, pG: 0, pE: 0, pP: 0},
    {id: 32, nombre: "Republica de Corea", grup: "H", puntos: 0, pJ: 0, pG: 0, pE: 0, pP: 0},
    ];

alert("Bienvenido al fixture de la \nCopa Mundial FIFA \nQatar 2022");

let primerSeleccion = (prompt("Que quieres hacer?\nG - Ver grupos\nS - Buscar una seleccion\nX - Salir").toUpperCase());

while (primerSeleccion != "X" && primerSeleccion != "x"){
    
    switch (primerSeleccion) {

        case "G":

            let grupo = (prompt("Elegí un grupo entre A-H \no presioná X para salir").toUpperCase());

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

                    case "A":
                    
                        puntos()

                        equipo1= pais[0].nombre;
                        equipo2= pais[1].nombre;
                        equipo3= pais[2].nombre;
                        equipo4= pais[3].nombre;

                        equipos();
                        funcionFixture(equipo1,equipo2,equipo3,equipo4);
                        puntajes();
                        
                        break;
                    case "B":
                        
                        puntos();

                        equipo1= pais[4].nombre;
                        equipo2= pais[5].nombre;
                        equipo3= pais[6].nombre;
                        equipo4= pais[7].nombre;

                        equipos(grupo);
                        funcionFixture(equipo1,equipo2,equipo3,equipo4);
                        puntajes();
                        
                        break;
                    case "C":

                        puntos();

                        equipo1= pais[8].nombre;
                        equipo2= pais[9].nombre;
                        equipo3= pais[10].nombre;
                        equipo4= pais[11].nombre;

                        equipos();
                        funcionFixture(equipo1,equipo2,equipo3,equipo4);
                        puntajes();

                        break;
                    case "D":

                        puntos();

                        equipo1= pais[12].nombre;
                        equipo2= pais[13].nombre;
                        equipo3= pais[14].nombre;
                        equipo4= pais[15].nombre;

                        equipos();
                        funcionFixture(equipo1,equipo2,equipo3,equipo4);
                        puntajes() ;

                        break;
                    case "E":

                        puntos();

                        equipo1= pais[16].nombre;
                        equipo2= pais[17].nombre;
                        equipo3= pais[18].nombre;
                        equipo4= pais[19].nombre;

                        equipos();
                        funcionFixture(equipo1,equipo2,equipo3,equipo4);
                        puntajes() ;

                        break;
                    case "F":

                        puntos();

                        equipo1= pais[20].nombre;
                        equipo2= pais[21].nombre;
                        equipo3= pais[22].nombre;
                        equipo4= pais[23].nombre;

                        equipos();
                        funcionFixture(equipo1,equipo2,equipo3,equipo4);
                        puntajes() ;

                        break;
                    case "G":

                        puntos();

                        equipo1= pais[24].nombre;
                        equipo2= pais[25].nombre;
                        equipo3= pais[26].nombre;
                        equipo4= pais[27].nombre;

                        equipos();
                        funcionFixture(equipo1,equipo2,equipo3,equipo4);
                        puntajes();

                        break;
                    case "H":

                        puntos();

                        equipo1= pais[28].nombre;
                        equipo2= pais[29].nombre;
                        equipo3= pais[30].nombre;
                        equipo4= pais[31].nombre;

                        equipos();
                        funcionFixture(equipo1,equipo2,equipo3,equipo4);
                        puntajes();

                        break;
                    default:
                    
                        alert("El grupo no existe");
                        break;
                }

                }

        case "S":
            
            let equipoBuscado = prompt("Escribí el nombre de la seleccion que queres buscar\nCon la primer letra mayuscula y respetando acentos porfis :)");

            let busquedaGrupo = [];
            for (let i = 0; i < pais.length; i++){
                if( pais[i].nombre === equipoBuscado){
                    busquedaGrupo.push(pais[i].grup);
                }
            }
            alert("La seleccion de " + equipoBuscado + "\npertenece al grupo " + busquedaGrupo);
            break;
        
        default:
            alert("Entrada incorrecta");
            break;}

    do{
        grupo= (prompt("Quieres ver otro grupo? \nS  o  N").toUpperCase());

    switch(grupo){
        case "S":
            
            grupo= (prompt("Elegí un grupo entre A-H \no presioná X para salir").toUpperCase());
            condicion= true;

        break;
        case "N":
            
            grupo= "X";
            condicion= false;

        break;
        default:
            
            alert("Entrada incorrecta");
            break;
    }}while(condicion=false)}

alert("Gracias por usar la app!");

function equipos(grupo){
    alert("Grupo " + grupo + "\n \n" + equipo1 + "\n" + equipo2 + "\n" + equipo3 + "\n" + equipo4 );
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