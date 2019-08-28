var variable1="";
var calculadora = {
    init: function() {
  // Inicialización de Números
    var cero = document.getElementById('0')
    var uno = document.getElementById('1')
    var dos = document.getElementById('2')
    var tres = document.getElementById('3')
    var cuatro = document.getElementById('4')
    var cinco = document.getElementById('5')
    var seis = document.getElementById('6')
    var siete = document.getElementById('7')
    var ocho = document.getElementById('8')
    var nueve = document.getElementById('9')
   //Operadores
  var suma = document.getElementById('mas')
  suma.addEventListener('click',function () {
     variable1+=display.innerHTML+"+";
     display.innerHTML=""
     
  })
  var resta = document.getElementById('menos')
  resta.addEventListener('click',function () {
     variable1+=display.innerHTML+"-";
     display.innerHTML=""
     
  })
  var por = document.getElementById('por')
  por.addEventListener('click',function () {
     variable1+=display.innerHTML+"*";
     display.innerHTML=""
     
  })
  var dividido = document.getElementById('dividido')
  dividido.addEventListener('click',function () {
     variable1+=display.innerHTML+"/";
     display.innerHTML=""
     
  })
  ///DEMAS BOTONES
  var on  = document.getElementById('on')
  on.addEventListener('click',function () {
    display.innerHTML="0"
   
  })
  var igual  = document.getElementById('igual')
  igual.addEventListener('click',function () {
    variable1+=display.innerHTML
    calculadora.calcular();
  })
  var punto  = document.getElementById('punto')
  punto.addEventListener('click',function () {
   
    if(!display.innerHTML.includes('.'))
    {
        display.innerHTML+="."
    }
    
  })

  var sign  = document.getElementById('sign')
  sign.addEventListener('click',function () {
   
    if(display.innerHTML==="0" )
    {   
      display.innerHTML= "-";
    }
    if(!display.innerHTML=="0" &&!display.innerHTML.includes("-"))
  
    {
        display.innerHTML= "-" +  display.innerHTML;
    }
  })
    //Eventos
  

    cero.addEventListener('click',function () {
        calculadora.escribir('0')
      })
    uno.addEventListener('click',function () {
        calculadora.escribir('1')
        
      })
      dos.addEventListener('click',function () {
        calculadora.escribir('2')
       
      })
      tres.addEventListener('click',function () {
        calculadora.escribir('3')
      })
      cuatro.addEventListener('click',function () {
        calculadora.escribir('4')
      })
      cinco.addEventListener('click',function () {
        calculadora.escribir('5')
      })
      seis.addEventListener('click',function () {
        calculadora.escribir('6')
      })
      siete.addEventListener('click',function () {
        calculadora.escribir('7')
      })
      ocho.addEventListener('click',function () {
        calculadora.escribir('8')
      })
      nueve.addEventListener('click',function () {
        calculadora.escribir('9')
       })
      // Poner Propiedades a la Teclas
    var teclas = document.getElementsByClassName('tecla');
    for (var i = 0; i < teclas.length; i++) {
    teclas[i].addEventListener('mousedown', function(e) {
    e.target.style.transform = 'scale(0.95,0.95)';
    });
    teclas[i].addEventListener('mouseup', function(e) {
    e.target.style.transform = 'scale(1,1)';
    });

 
    }
    },//Poner Datos en el Display
    escribir: function(valor) {
        if (display.innerHTML.length < 8) {
          if (display.innerHTML === "0") {
            display.innerHTML = valor
          } else {
            display.innerHTML += valor
    
          }
        }
      },
      calcular:function()
      { 
          var resultado_suma =eval(variable1);
     
          var valor = resultado_suma.toString();
          display.innerHTML =valor.substring(0,8);
          variable1= ""
        

         
         
      }
    };

  calculadora.init();

