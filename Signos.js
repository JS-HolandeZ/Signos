// Author: Jose Samuel| Upgrade: 18/07/18

  var dia = 0;
  var mes = 0;
  var normal = 0;
  
  // Elementos
  var fogoT = 'Os signos de fogo tendem-se a serem<br>apaixonados dinâmicos e temperamental,<br>eles se irritam rapidamente, mas também<br>perdoam facilmente, sendo aventureiros<br> com imensa energia. São muito fortes,<br>sendo uma fonte de inspiração para os<br>outros.Signos de incêndio são<br>inteligentes autoconscientes, criativas e<br>idealistas, sempre prontas para a ação.';
  var aguaT ='Os signos de água são excepcionalmente<br>emocionais e ultrassensíveis, eles são<br>altamente intuitivos e podem ser tão<br>misteriosos quanto o próprio oceano.<br>Pessoas de água amam conversas<br>profundas e intimamente, raramente<br>fazem qualquer coisa abertamente estão<br>sempre presentes para sustentar seus<br>entes queridos.';
  var arT = 'Os signos aéreos são relações racionais,<br>sociais, e de amor e relacionamentos<br>com outras pessoas,eles são pensadores,<br>amigáveis, intelectuais,comunicativos e<br>analíticos, adoram discursões filosóficas<br>encontros sociais e bons livros.<br>Gostam de dar conselhos, mas também<br>podem ser muito superficiais.';
  var terraT = 'Os signos da terra são ‘Aterrados’ e os<br>que nos trazem a terra, eles são<br>principalmente conservadores e realistas,<br>mas também podem ser muito<br>emocionais.São conectados a nossa<br>realidade material e podem ser<br>transformados em bens matérias, sendo<br>práticos, leais e estáveis e se apegam em<br>seus povos em tempos difíceis';
  
  // Controladores
  var ElementoAgua = 0;
  var ElementoAr  = 0;
  var ElementoFogo = 0;
  var ElementoTerra = 0;
  
  // De cada signos 
  var textaumAR1 = 'O Aquariano é um ser independente,<br>que preza muito por sua liberdade.<br>Gosta de conhecer coisas e pessoas<br> novas eles clamam por tudo que é<br>novo em sua vida.';
  var textaumTerra1 = 'Os Tauruinos são muito temimosos,<br>ciumentos e protetores.<br>Gostam de dividir comida e são<br>leais, precisam de estabilidade<br>para serem felizes.';
  var textaumAgua1 = 'Peixes é o signo mais romântico do<br>zodíaco, sendo um grande sonhador, e<br> zelador dos sonhos daquelas pessoas<br>que tanto ama, sempre buscando<br>melhorar.';    
  var textaumFogo1 = 'Os Arianos são definidos por sua<br>força, impulsividade e impetuosidade.<br>Não refletem antes de agirem são<br>conhecidos por apresentarem<br>agressividade e violência.<br>Mas possuem um bom coração.'; 
 
  // De cada signos 
  var textaumAR2 = 'Os Geminianos são um dos signos<br>mais imprevisíveis do zodíacos, você<br>nunca sabe o que pode esperar deles.<br>São por muita das vezes pavio curtos,<br>gostam de viver grandes aventuras.';
  var textaumTerra2 = 'O Capricorniano pode até parecer<br>pessoas fechadas e antipáticas, na<br> verdade eles são tímidos e muito<br> trabalhadores.<br> Mas eles se abrem com o tempo, se<br> mostrando amigos leais e confiáveis.';
  var textaumAgua2 = 'Os Cancerianos são muito sensíveis<br>e emotivos, por isso, dão muito valor<br>a intimidade e ao carinho.<br>São caseiros tendo a família como<br>epicentro, fazem amizades com<br>facilidade, porém são instáveis.';    
  var textaumFogo2 = 'Os Leoninos gostam de chamar a<br>atenção mesmo, pois são pessoas<br>diretas e objetivas, são comunicativas <br>e abertas possuem muita insegurança,<br> além de serem amáveis e muito leais.'; 
  
  // De cada signos
  var textaumAR3 = 'Os Librianos evitam conflitos ao<br>máximo que pode, buscando sempre a<br>imparcialidade quando vêem um<br>debate, apresentam dificuldades em<br>fazerem escolhas.<br>Uma coisa desse certa signo é que<br>são atraídos pela harmônia.';
  var textaumTerra3 = 'O Virginiano é um signo que nasceu<br>para o sucesso, fazendo de tudo para<br>conquistar o que deseja.<br>Sempre são muito rígidos com si<br>próprios e com os outros de seu meio,<br>mas ainda assim são tímidos.';
  var textaumAgua3 = 'O Escorpião é o signo mais<br>determinado do zodíaco, indo até as<br>últimas consequêcias para alcançar<br>aquilo que deseja.<br>São românticos preferem está com<br>alguém fixo, do que várias pessoas<br>ao mesmo tempo.';    
  var textaumFogo3 = 'Os Sagitatianos são pessoas que estão<br>sempre com sorriso no rosto, buscam<br>o que a de melhor na vida.<br>São sempre sonhadores buscando<br>conhecer pessoas novas, além de<br>adorarem cultivas os amigos.'; 
    

  function validar(field) { // dia
    str = field.value;
    if (str.length > 1) {
     field.value = str.substring(0, str.length - 1);
    }
   }
 
    function numerico(evt) { // dia

     try{var element = e.target}
     catch(er){};
     try{var element = event.srcElement}
     catch(er){}; 
     try{var ev = e.which }
     catch(er){};
     try{var ev = event.keyCode }
     catch(er){};
     if((ev!=0) && (ev!=8) &&(ev!=13))
     if  (! RegExp(/[0-9]/gi).test(String.fromCharCode(ev))) return false;						
     if(element.value + String.fromCharCode(ev) > 31) return false;
     if(element.value + String.fromCharCode(ev) < 1) return false;	}	
     window.onload = function(){document.getElementById('DIA').onkeypress = limite
    }
 
 
  function limite(e){ // mes
    try{var element = e.target}
    catch(er){};
    try{var element = event.srcElement}
    catch(er){}; 
    try{var ev = e.which }
    catch(er){};
    try{var ev = event.keyCode }
    catch(er){};
    if((ev!=0) && (ev!=8) &&(ev!=13))
    if  (! RegExp(/[0-9]/gi).test(String.fromCharCode(ev))) return false;						
    if(element.value + String.fromCharCode(ev) > 12) return false;
    if(element.value + String.fromCharCode(ev) < 1) return false;	}	
    window.onload = function(){document.getElementById('MES').onkeypress = limite
  }
 

    document.getElementById("tatu").innerHTML = 'Conheça mais sobre<br>Seu Zodiáco.';
    document.getElementById("signercor1").innerHTML = 'Horóscopos';
    document.getElementById("signercor2").innerHTML = 'Horóscopos';
    document.getElementById("signer").innerHTML = 'Horóscopos';
    document.getElementById("gyu00").style.display = 'inline';


    function butaum(){ 
   
      mes = document.getElementById("MES").value
      dia = document.getElementById("DIA").value


      if( dia == ''){ alert('Digite o Dia') 
      }else{ 
      if( mes == ''){ alert('Digite o Mês ') 
      }else{ 

      normal = 2
      document.getElementById("gyu00").style.display = 'none';
      document.getElementById("geral").style.display = 'none';
      document.getElementById("tatu").innerHTML = ''

      
     // Terra
      if(dia >= 20 && mes == 4 && dia <= 30 || dia <= 20 && mes == 5) { /*Touro*/   ElementoTerra = (ElementoTerra + 5)
         normal = 5
         ElementoAgua = 0
         ElementoAr = 0
         ElementoFogo = 0

         document.getElementById("cada1").innerHTML = ''; // Ar
         document.getElementById("cada3").innerHTML = ''; // Agua
         document.getElementById("cada4").innerHTML = ''; // fogo

         document.getElementById("signercor1").style.color = 'rgb(33, 80, 14)';
         document.getElementById("signercor2").style.color = 'white';
         document.getElementById("signer").style.color = 'rgb(33, 80, 14)';

         document.getElementById("signercor1").innerHTML = 'Touro';
         document.getElementById("signercor2").innerHTML = 'Touro';
         
         document.getElementById("signer").innerHTML = 'Touro';
         document.getElementById("cada1").innerHTML = textaumTerra1;

      }
      if(dia >= 22 && mes == 12 && dia <= 31 || dia <= 19 && mes == 1){ /*Capricornio*/  ElementoTerra = (ElementoTerra + 5)
         normal = 5
         ElementoAgua = 0
         ElementoAr = 0
         ElementoFogo = 0
         
         document.getElementById("cada1").innerHTML = ''; // Ar
         document.getElementById("cada3").innerHTML = ''; // Agua
         document.getElementById("cada4").innerHTML = ''; // fogo

         document.getElementById("signercor1").style.color = 'rgb(33, 80, 14)';
         document.getElementById("signercor2").style.color = 'white';
         document.getElementById("signer").style.color = 'rgb(33, 80, 14)';

         document.getElementById("signercor1").innerHTML = 'Capricornio';
         document.getElementById("signercor2").innerHTML = 'Capricornio';
         
         document.getElementById("signer").innerHTML = 'Capricornio';
         document.getElementById("cada1").innerHTML = textaumTerra2;

      }
      if(dia >= 23 && mes == 8 && dia <= 31 || dia <= 22 && mes == 9){ /*Virgem*/  ElementoTerra = (ElementoTerra + 5)
         normal = 5
         ElementoAgua = 0
         ElementoAr = 0
         ElementoFogo = 0


         document.getElementById("cada1").innerHTML = ''; // Ar
         document.getElementById("cada3").innerHTML = ''; // Agua
         document.getElementById("cada4").innerHTML = ''; // fogo



         document.getElementById("signercor1").style.color = 'rgb(33, 80, 14)';
         document.getElementById("signercor2").style.color = 'white';
         document.getElementById("signer").style.color = 'rgb(33, 80, 14)';

         document.getElementById("signercor1").innerHTML = 'Virgem';
         document.getElementById("signercor2").innerHTML = 'Virgem';
         
         document.getElementById("signer").innerHTML = 'Virgem';
         document.getElementById("cada1").innerHTML = textaumTerra3;

      } 

     // Ar
      if(dia >= 21 && mes == 5 && dia <= 31|| dia <= 20 && mes == 6){ /*Gemeos*/  ElementoAr = (ElementoAr + 5)
        normal = 5
       ElementoAgua = 0
       ElementoTerra = 0
       ElementoFogo = 0

         document.getElementById("cada1").innerHTML = ''; // Terra
         document.getElementById("cada4").innerHTML = ''; // fogo
         document.getElementById("cada3").innerHTML = ''; // Agua
 
         document.getElementById("signercor1").style.color = 'rgb(168, 200, 243)';
         document.getElementById("signercor2").style.color = 'white';
         document.getElementById("signer").style.color = 'rgb(168, 200, 243)';

         document.getElementById("signercor1").innerHTML = 'Áquario';
         document.getElementById("signercor2").innerHTML = 'Áquario';
         
         document.getElementById("signer").innerHTML = 'Áquario';
         document.getElementById("cada2").innerHTML = textaumAR1;

      }
      if(dia >= 20 && mes == 1 && dia <= 31|| dia <= 18 && mes == 2){ /*Aquario*/ ElementoAr = (ElementoAr + 5)
        normal = 5
       ElementoAgua = 0
       ElementoTerra = 0
       ElementoFogo = 0
     
         document.getElementById("cada1").innerHTML = ''; // Terra
         document.getElementById("cada4").innerHTML = ''; // fogo
         document.getElementById("cada3").innerHTML = ''; // Agua

         document.getElementById("signercor1").style.color = 'rgb(168, 200, 243)';
         document.getElementById("signercor2").style.color = 'white';
         document.getElementById("signer").style.color = 'rgb(168, 200, 243)';

         document.getElementById("signercor1").innerHTML = 'Gêmeos';
         document.getElementById("signercor2").innerHTML = 'Gêmeos';
         
         document.getElementById("signer").innerHTML = 'Gêmeos';
         document.getElementById("cada2").innerHTML = textaumAR2;
      }
      if(dia >= 23 && mes == 9 && dia <= 30 || dia <= 22 && mes == 10){ /*Libra*/ ElementoAr = (ElementoAr + 5)
        normal = 5
       ElementoAgua = 0
       ElementoTerra = 0
       ElementoFogo = 0

         document.getElementById("cada1").innerHTML = ''; // Terra
         document.getElementById("cada4").innerHTML = ''; // fogo
         document.getElementById("cada3").innerHTML = ''; // Agua

         document.getElementById("signercor1").style.color = 'rgb(168, 200, 243)';
         document.getElementById("signercor2").style.color = 'white';
         document.getElementById("signer").style.color = 'rgb(168, 200, 243)';

         document.getElementById("signercor1").innerHTML = 'Libra';
         document.getElementById("signercor2").innerHTML = 'Libra';
         
         document.getElementById("signer").innerHTML = 'Libra';
         document.getElementById("cada2").innerHTML = textaumAR3;
      }
          
     // Água 
     
      if(dia >= 19 && mes == 2 && dia <=29|| dia <= 20 && mes == 3){ /* Peixes*/  ElementoAgua = (ElementoAgua + 5)
        normal = 5
        ElementoTerra = 0
        ElementoAr = 0
        ElementoFogo = 0

         document.getElementById("cada1").innerHTML = ''; // Ar
         document.getElementById("cada2").innerHTML = ''; // Terra
         document.getElementById("cada4").innerHTML = ''; // fogo

         document.getElementById("signercor1").style.color = 'blue';
         document.getElementById("signercor2").style.color = 'white';
         document.getElementById("signer").style.color = 'blue';

         document.getElementById("signercor1").innerHTML = 'Peixes';
         document.getElementById("signercor2").innerHTML = 'Peixes';
         
         document.getElementById("signer").innerHTML = 'Peixes';
         document.getElementById("cada3").innerHTML = textaumAgua1;
      }
      if(dia >= 21 && mes == 6 &&  dia <= 30|| dia <= 22 && mes == 7){ /* Câncer*/  ElementoAgua = (ElementoAgua + 5)
        normal = 5
        ElementoTerra = 0
        ElementoAr = 0
        ElementoFogo = 0

         document.getElementById("cada1").innerHTML = ''; // Ar
         document.getElementById("cada2").innerHTML = ''; // Terra
         document.getElementById("cada4").innerHTML = ''; // fogo

         document.getElementById("signercor1").style.color = 'blue';
         document.getElementById("signercor2").style.color = 'white';
         document.getElementById("signer").style.color = 'blue';

         document.getElementById("signercor1").innerHTML = 'Câncer';
         document.getElementById("signercor2").innerHTML = 'Câncer';
         
         document.getElementById("signer").innerHTML = 'Câncer';
         document.getElementById("cada3").innerHTML = textaumAgua2;
      }    
      if(dia >= 23 && mes == 10 && dia <= 31|| dia <= 21 && mes == 11){ /* Escorpião*/  ElementoAgua = (ElementoAgua + 5)
        normal = 5
         ElementoTerra = 0
         ElementoAr = 0
         ElementoFogo = 0

         document.getElementById("cada1").innerHTML = ''; // Ar
         document.getElementById("cada2").innerHTML = ''; // Terra
         document.getElementById("cada4").innerHTML = ''; // fogo

         document.getElementById("signercor1").style.color = 'blue';
         document.getElementById("signercor2").style.color = 'white';
         document.getElementById("signer").style.color = 'blue';

         document.getElementById("signercor1").innerHTML = 'Escorpião';
         document.getElementById("signercor2").innerHTML = 'Escorpião';
         
         document.getElementById("signer").innerHTML = 'Escorpião';
         document.getElementById("cada3").innerHTML = textaumAgua3;
      }

     // Fogo
      if(dia >= 21 && mes == 3 && dia <= 31 || dia <= 19 && mes == 4){ /* Aries */  ElementoFogo = (ElementoFogo + 5) 
        normal = 5
        ElementoTerra = 0
        ElementoAr = 0
        ElementoAgua = 0

         document.getElementById("cada1").innerHTML = ''; // Ar
         document.getElementById("cada2").innerHTML = ''; // Terra
         document.getElementById("cada3").innerHTML = ''; // Agua


       
        document.getElementById("signercor1").style.color = 'red';
        document.getElementById("signercor2").style.color = 'white';
        document.getElementById("signer").style.color = 'red';

       document.getElementById("signercor1").innerHTML = 'Aries';
       document.getElementById("signercor2").innerHTML = 'Aries';
       document.getElementById("signer").innerHTML = 'Aries';
       document.getElementById("cada4").innerHTML = textaumFogo1;
      } 
      if(dia >= 23 && mes == 7 && dia <= 31 || dia <= 22 && mes == 8){ /* Leão */  ElementoFogo = (ElementoFogo + 5) 
        normal = 5
       ElementoTerra = 0
       ElementoAr = 0
       ElementoAgua = 0

         document.getElementById("cada1").innerHTML = ''; // Ar
         document.getElementById("cada2").innerHTML = ''; // Terra
         document.getElementById("cada3").innerHTML = ''; // Agua

         document.getElementById("signercor1").style.color = 'red';
        document.getElementById("signercor2").style.color = 'white';
        document.getElementById("signer").style.color = 'red';

         document.getElementById("signercor1").innerHTML = 'Leão';
       document.getElementById("signercor2").innerHTML = 'Leão';
       document.getElementById("signer").innerHTML = 'Leão';
       document.getElementById("cada4").innerHTML = textaumFogo2;
      }
      if(dia >= 22 && mes == 11 && dia <= 30 || dia <= 21 && mes == 12){ /* Sagitario */  ElementoFogo = (ElementoFogo + 5) 
        normal = 5
       ElementoTerra = 0
       ElementoAr = 0
       ElementoAgua = 0

       document.getElementById("cada1").innerHTML = ''; // Ar
       document.getElementById("cada2").innerHTML = ''; // Terra
       document.getElementById("cada3").innerHTML = ''; // Agua

       document.getElementById("signercor1").style.color = 'red';
       document.getElementById("signercor2").style.color = 'white';
       document.getElementById("signer").style.color = 'red';

       document.getElementById("signercor1").innerHTML = 'Sagitário';
       document.getElementById("signercor2").innerHTML = 'Sagitário';
       document.getElementById("signer").innerHTML = 'Sagitário';
       document.getElementById("cada4").innerHTML = textaumFogo3;
      }

      
      if(ElementoAr != 0 && normal == 5){ 
  
        document.getElementById("models").style.backgroundColor = "rgb(255, 255, 255)"// moldura
        document.getElementById("ar").style.display = 'inline' // Imagem superior
        document.getElementById("nome2").innerHTML = 'Ar'// Nome na imagem
        document.getElementById("ar1").innerHTML = arT // Conteúdo
        
        if(dia >= 20 && mes == 1 && dia <= 31|| dia <= 18 && mes == 2){ /* Aquario*/  
          
          document.getElementById("cap5").style.display = 'none';
          document.getElementById("cap9").style.display = 'none';

          document.getElementById("gyu5").style.display = 'none';
          document.getElementById("gyu9").style.display = 'none';

          document.getElementById("gyu1").style.display = 'inline';
          document.getElementById("cap1").style.display = 'inline';
          document.getElementById('DATADIA').innerHTML = 'De 20 de Janeiro<br>á 18 de Fevereiro';
        }
        if(dia >= 21 && mes == 5 && dia <= 31 || dia <= 21 && mes == 6){ /* Gêmeos*/  
          
          document.getElementById("cap1").style.display = 'none';
          document.getElementById("cap9").style.display = 'none';

          document.getElementById("gyu1").style.display = 'none';
          document.getElementById("gyu9").style.display = 'none';
       
          document.getElementById("gyu5").style.display = 'inline';
          document.getElementById("cap5").style.display = 'inline';
          document.getElementById('DATADIA').innerHTML = 'De 21 de Maio<br>á 21 de Junho';
        }
        if(dia >= 23 && mes == 9 && dia <= 30 || dia <= 22 && mes == 10){ /* Libra*/  
         
          document.getElementById("cap1").style.display = 'none';
          document.getElementById("cap5").style.display = 'none';

          document.getElementById("gyu1").style.display = 'none';
          document.getElementById("gyu5").style.display = 'none';
         
          document.getElementById("gyu9").style.display = 'inline';
          document.getElementById("cap9").style.display = 'inline';
          document.getElementById('DATADIA').innerHTML = 'De 23 de Setembro<br>á 22 de Outubro';
        }
        
      }else{
           
         document.getElementById("gyu1").style.display = 'none';
         document.getElementById("gyu5").style.display = 'none';
         document.getElementById("gyu9").style.display = 'none';

         document.getElementById("cap1").style.display = 'none';
         document.getElementById("cap5").style.display = 'none';
         document.getElementById("cap9").style.display = 'none'; 

          document.getElementById("nome2").innerHTML = ' ';
          document.getElementById("ar1").innerHTML = ' ';
          document.getElementById("ar").style.display = 'none';
          
          
          ElementoAr = 0
        }

        
      if(ElementoAgua != 0 && normal == 5){ 
  
        document.getElementById("models").style.backgroundColor = "Blue"// modura
        document.getElementById("agua").style.display = 'inline' // Imagem superior
        document.getElementById("nome1").innerHTML = 'Água'// Nome na imagem
        document.getElementById("agua1").innerHTML = aguaT // Conteúdo
        
        if(dia >= 18 && mes == 2 && dia <=29|| dia <= 19 && mes == 3){ /* Peixes*/  ElementoAgua = (ElementoAgua + 5)
  
          document.getElementById("cap6").style.display = 'none';
          document.getElementById("cap10").style.display = 'none';

          document.getElementById("gyu6").style.display = 'none';
          document.getElementById("gyu10").style.display = 'none';

          document.getElementById("gyu2").style.display = 'inline';
          document.getElementById("cap2").style.display = 'inline';
          dia == 29 ? document.getElementById('DATADIA').innerHTML = 'De 19 de Fevereiro<br>á 20 de Março<br>Dia 29, é Ano bissexto !' :
          document.getElementById('DATADIA').innerHTML = 'De 19 de Fevereiro<br>á 20 de Março';
        }
        if(dia >= 22 && mes == 6 && dia <= 30|| dia <= 22 && mes == 7){ /* Câncer*/  ElementoAgua = (ElementoAgua + 5)
           
          document.getElementById("cap2").style.display = 'none';
          document.getElementById("cap10").style.display = 'none';

          document.getElementById("gyu2").style.display = 'none';
          document.getElementById("gyu10").style.display = 'none';

          document.getElementById("gyu6").style.display = 'inline';
          document.getElementById("cap6").style.display = 'inline';
          document.getElementById('DATADIA').innerHTML = 'De 22 de Junho<br>á 22 de Julho';
        }
        if(dia >= 23 && mes == 10 && dia <= 31|| dia <= 21 && mes == 11){ /* Escorpião*/  ElementoAgua = (ElementoAgua + 5)
          
          document.getElementById("cap2").style.display = 'none';
          document.getElementById("cap6").style.display = 'none';
          
          document.getElementById("gyu2").style.display = 'none';
          document.getElementById("gyu6").style.display = 'none';

          document.getElementById("gyu10").style.display = 'inline';
          document.getElementById("cap10").style.display = 'inline';
          document.getElementById('DATADIA').innerHTML = 'De 23 de Outubro<br>á 21 de Novembro';
        }

      } else{
           document.getElementById("gyu2").style.display = 'none';
           document.getElementById("gyu6").style.display = 'none';
           document.getElementById("gyu10").style.display = 'none';

           document.getElementById("cap2").style.display = 'none';
           document.getElementById("cap6").style.display = 'none';
           document.getElementById("cap10").style.display = 'none';

           document.getElementById("agua").style.display = 'none';
           document.getElementById("nome1").innerHTML = ' ';
           document.getElementById("agua1").innerHTML = ' ';
           
           ElementoAgua = 0
        }
    

      if(ElementoFogo != 0 && normal == 5){ 
         
        document.getElementById("models").style.backgroundColor = "red"// modura  
        document.getElementById("fogo").style.display = 'inline' // Imagem superior
        document.getElementById("nome3").innerHTML = 'Fogo'// Nome na imagem
        document.getElementById("fogo1").innerHTML = fogoT // Conteúdo

        if(dia >= 21 && mes == 3 && dia <= 31 || dia <= 19 && mes == 4){ /* Aries*/  
          
          document.getElementById("cap7").style.display = 'none';
          document.getElementById("cap11").style.display = 'none';

          document.getElementById("gyu7").style.display = 'none';
          document.getElementById("gyu11").style.display = 'none';

          document.getElementById("gyu3").style.display = 'inline';
          document.getElementById("cap3").style.display = 'inline';
          document.getElementById('DATADIA').innerHTML = 'De 21 de Março<br>á 19 de Abril';
        }
        if(dia >= 23 && mes == 7 && dia <= 31 || dia <= 22 && mes == 8){ /* Leão*/  

          document.getElementById("cap3").style.display = 'none';
          document.getElementById("cap11").style.display = 'none';

          document.getElementById("gyu3").style.display = 'none';
          document.getElementById("gyu11").style.display = 'none';
           
          document.getElementById("gyu7").style.display = 'inline';
          document.getElementById("cap7").style.display = 'inline';
          document.getElementById('DATADIA').innerHTML = 'De 23 de Julho<br>á 22 de Agosto';
        }
        if(dia >= 22 && mes == 11 && dia <= 30 || dia <= 21 && mes == 12){ /* Sagitario*/  
           
          document.getElementById("cap3").style.display = 'none';
          document.getElementById("cap7").style.display = 'none';

          document.getElementById("gyu3").style.display = 'none';
          document.getElementById("gyu7").style.display = 'none';
       
          document.getElementById("gyu11").style.display = 'inline';
          document.getElementById("cap11").style.display = 'inline';
          document.getElementById('DATADIA').innerHTML = 'De 22 de Novembro<br>á 21 de Dezembro';
        }
          
      }else{
         
         document.getElementById("gyu3").style.display = 'none';
         document.getElementById("gyu7").style.display = 'none';
         document.getElementById("gyu11").style.display = 'none';

         document.getElementById("cap3").style.display = 'none';
         document.getElementById("cap7").style.display = 'none';
         document.getElementById("cap11").style.display = 'none';

         document.getElementById("fogo").style.display = 'none'; 
         document.getElementById("nome3").innerHTML = ' ';
         document.getElementById("fogo1").innerHTML = ' '; 
         
         
         ElementoFogo = 0
        }


      if(ElementoTerra != 0 && normal == 5){ 
  
        document.getElementById("models").style.backgroundColor = "rgb(102, 93, 14)"
        document.getElementById("terra").style.display = 'inline'
        document.getElementById("nome4").innerHTML = 'Terra'
        document.getElementById("terra1").innerHTML = terraT

        if(dia >= 22 && mes == 12 && dia <= 31 || dia <= 19 && mes == 1) /* Capricornio*/{ 
                 
          document.getElementById("gyu4").style.display = 'none';
          document.getElementById("gyu8").style.display = 'none';
          
          document.getElementById("cap4").style.display = 'none';
          document.getElementById("cap8").style.display = 'none';

          document.getElementById("gyu12").style.display = 'inline';
          document.getElementById("cap12").style.display = 'inline';
          document.getElementById('DATADIA').innerHTML = 'De 22 de Dezembro<br>á 19 de Janeiro';

        }
        if(dia >= 20 && mes == 4 && dia <= 30 || dia <= 20 && mes == 5) /* Touro*/{ 
          
          document.getElementById("gyu8").style.display = 'none';
          document.getElementById("gyu12").style.display = 'none';
          
          document.getElementById("cap8").style.display = 'none';
          document.getElementById("cap12").style.display = 'none';

          document.getElementById("gyu4").style.display = 'inline';
          document.getElementById("cap4").style.display = 'inline';
          document.getElementById('DATADIA').innerHTML = 'De 20 de Abril<br>á 20 de Maio';
        }
        if(dia >= 23 && mes == 8 && dia <= 31 || dia <= 22 && mes == 9) /* Virgem*/{  

          document.getElementById("gyu4").style.display = 'none';
          document.getElementById("gyu12").style.display = 'none';
          
          document.getElementById("cap4").style.display = 'none';
          document.getElementById("cap12").style.display = 'none';


          document.getElementById("gyu8").style.display = 'inline';
          document.getElementById("cap8").style.display = 'inline';
          document.getElementById('DATADIA').innerHTML = 'De 23 de Agosto<br>á 22 de Setembro';
        }
         
      }else{
         
         document.getElementById("gyu4").style.display = 'none';
         document.getElementById("gyu8").style.display = 'none';
         document.getElementById("gyu12").style.display = 'none';

         document.getElementById("cap4").style.display = 'none';
         document.getElementById("cap8").style.display = 'none';
         document.getElementById("cap12").style.display = 'none';
         

         document.getElementById("terra").style.display = 'none';
         document.getElementById("nome4").innerHTML = ' ';
         document.getElementById("terra1").innerHTML = ' ';
         
         
         ElementoTerra = 0
        }
    

      if(normal == 2){  // Erros
        
        document.getElementById("signercor1").innerHTML = 'Data inválida';
        document.getElementById("signercor2").innerHTML = 'Data inválida';
        document.getElementById("signer").innerHTML = 'Data inválida';
        
        document.getElementById("Ecap0").style.display = 'inline'
        document.getElementById("ega").style.display = 'inline'
        document.getElementById("gyu0").style.display = 'inline'

        document.getElementById("nome0").innerHTML = 'Erro de<br>Elemento'
        

        document.getElementById("models").style.backgroundColor = "#dfeefa"// moldura 
        document.getElementById("vazio").innerHTML = 'Houve um erro de digitação';
        document.getElementById("DATADIA").innerHTML ='Digite a data<br>Novamente'
      
      }
      else 
      if(normal != 2){ 
        
        document.getElementById("Ecap0").style.display = 'none'
        document.getElementById("ega").style.display = 'none'
        document.getElementById("gyu0").style.display = 'none'

        document.getElementById("nome0").innerHTML = ' '
        document.getElementById("vazio").innerHTML = ' '
        
      }
     
      normal = 2
       
      }
      }

    }

