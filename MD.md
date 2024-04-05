# HTML 

*Hypertext*

*Markup*
- Tag
- Atributos
*Language*


              <div class="input-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg"
                width="16px" height="16px" viewBox="0 0 1280.000000 1280.000000" fill=" none">
                  <g  transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                  fill="#9FF9CC">
                  <path d="M6145 12794 c-216 -13 -391 -28 -530 -45 -995 -122 -1927 -467 -2760
                  -1022 -907 -604 -1648 -1433 -2146 -2402 -395 -769 -615 -1549 -690 -2450 -17
                  -193 -17 -757 0 -950 75 -901 295 -1681 690 -2450 610 -1187 1579 -2156 2766
                  -2766 769 -395 1549 -615 2450 -690 193 -17 757 -17 950 0 901 75 1681 295
                  2450 690 1187 610 2156 1579 2766 2766 395 769 615 1549 690 2450 17 193 17
                  757 0 950 -75 901 -295 1681 -690 2450 -610 1187 -1579 2156 -2766 2766 -753
                  387 -1531 610 -2390 684 -164 15 -666 27 -790 19z m739 -779 c1310 -112 2519
                  -671 3464 -1599 980 -963 1561 -2210 1673 -3591 15 -193 15 -657 0 -850 -110
                  -1350 -664 -2567 -1605 -3523 -965 -981 -2206 -1559 -3591 -1673 -193 -16
                  -657 -16 -850 0 -1386 114 -2628 692 -3591 1672 -943 961 -1493 2167 -1605
                  3524 -16 193 -16 657 0 850 115 1388 693 2628 1672 3591 878 862 1988 1408
                  3189 1568 416 55 832 66 1244 31z"/>
                  <path d="M5060 10738 c-54 -15 -679 -379 -716 -417 -83 -84 -102 -207 -50
                  -309 54 -105 1149 -1998 1175 -2032 58 -73 186 -116 276 -91 46 12 662 365
                  715 409 68 57 105 179 81 267 -6 22 -274 497 -596 1055 -474 822 -594 1023
                  -631 1057 -68 64 -164 87 -254 61z"/>
                  <path d="M3942 9867 c-214 -130 -321 -208 -435 -317 -334 -319 -423 -636 -366
                  -1295 82 -942 549 -2201 1249 -3365 657 -1092 1446 -1996 2175 -2492 375 -255
                  608 -343 910 -343 202 0 370 40 606 145 110 50 365 185 374 199 3 6 -1137
                  1992 -1198 2088 -6 10 -17 8 -47 -7 -69 -35 -183 -69 -272 -80 -327 -40 -714
                  148 -1073 522 -444 462 -796 1143 -905 1753 -81 448 -20 809 175 1038 33 39
                  144 132 166 139 8 3 -217 401 -590 1049 -332 574 -606 1047 -610 1051 -4 5
                  -75 -34 -159 -85z"/>
                  <path d="M8220 5330 c-55 -7 -46 -3 -413 -214 -164 -94 -314 -186 -333 -204
                  -72 -69 -102 -185 -72 -273 17 -50 1155 -2026 1197 -2078 71 -90 212 -117 326
                  -62 86 41 614 347 655 380 56 45 90 120 90 202 0 37 -5 81 -12 96 -34 80
                  -1175 2043 -1206 2075 -61 64 -141 91 -232 78z"/>
                  </g>
                </svg>
                <input 
                type="text" 
                placeholder="telefone" 
                name="telefone" 
                required
                >
              </div>

# CSS
```
/* Cascading StyleSheet*/
/* declaração*/
body {
  background-color: #ffebcd;
  color: aqua;
}

```
# JavaScript
```js
// variaveis
const mensagem = "Opa e ai"
// tipos de função
    //number
    //string `crase posso fazer queba de linha`
// função
alert(mensagem)


// Objeto Javascript
const participante = {
    nome: "Nicolas Prado",
    email: "nicolas@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: new Date(2024, 2, 25, 22, 00)
}

// array
let participantes = [
    {
        nome: "Nicolas Prado",
        email: "nicolas@gmail.com",
        dataInscricao: new Date(2024, 2, 22, 19, 20),
        dataCheckIn: new Date(2024, 2, 25, 22, 00)
    },
]

let output= ""
    // estrutura de repetição
    for(let participante of participantes) {
        //faça alguma coisa aqui 
        // enquanto tiver coisas na lista
        output = output + criarNovoParticipante(participante)
    }

    // usando a ` eu posso usar a troca de informação ${}
             <small>
            ${participante.telefone}
            </small>


```