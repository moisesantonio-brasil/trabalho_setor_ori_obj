let user_propriety = document.querySelector(".user-propriety")
let button = document.querySelectorAll("button")
let base_of_user = document.querySelector(".base-of-user")
let input = document.querySelectorAll("input")
let aleatorio = document.querySelectorAll(".al")
let section = document.querySelectorAll("section")
let pontuação_mostrada = document.querySelectorAll(".pontos")
let iniciar = document.querySelector(".iniciar")
let posiçao_na_tela = document.querySelectorAll(".posiçao")
let img = document.querySelectorAll("img")
let body = document.querySelector("body")
let tarefa_1 = document.querySelector(".tarefa-1")
let tarefa_2 = document.querySelector(".tarefa-2")
let tarefa_3 = document.querySelector(".tarefa-3")
let tarefa_4 = document.querySelector(".tarefa-4")
let tarefa_h1 = document.querySelectorAll(".tarefa-h1")
let tarefa_p = document.querySelectorAll(".tarefa-p")
let produto = document.querySelectorAll(".produto")
let caixa1 = document.querySelectorAll(".caixa1")
let caixa2 = document.querySelectorAll(".caixa2")
let caixa3 = document.querySelectorAll(".caixa3")
let caixa4 = document.querySelector(".caixa4")
let caixa5 = document.querySelector(".caixa5")
let caixa6 = document.querySelector(".caixa6")
let caixa7 = document.querySelector(".caixa7")
let caixa8 = document.querySelector(".caixa8")
let caixa9 = document.querySelector(".caixa9")
let frases = document.querySelectorAll(".frases")
let fnc = document.querySelectorAll(".fnc")
let final = document.querySelector(".final")

let btn_prosseguir = document.querySelectorAll(".btn-prosseguir")
let base_empresa = document.querySelector(".base-empresa")
let proxima_base = document.querySelector(".proximo-base")
let proximo = document.querySelector(".proximo")

let pontuaçao_chefe = 100;
let pontuaçao_seo = 85;
let pontuaçao_gerente = 68;
let pontuaçao_recepçao = 55;
let pontuaçao_funcionario = 20;
let pontuaçao_substituto = 4

let posiçao_chefe = ''
let posiçao_seo = ''
let posiçao_gerente = ''
let posiçao_recepçao = ''
let posiçao_funcionario = ''
let posiçao_substituto = ''

let dados_chefe = ''
let dados_seo = ''
let dados_gerente =''
let dados_recepçao = ''
let dados_funcionario = ''
let dados_substituto = ''

let nomes_masculinos = [
    "David","Thales","Breno","Dyogo"
]
let nomes_femininos = [
    "Anna","Vanessa","Bruna","Raquel","Sofia"
]
let posiçao_disponivel = [
"Chefe","Seo","Gerente","Recepção",
"Funcionário"
]


let substituto = "Substituto(a)"

let imagens_masculinas = [
"./pessoas/pessoa01.png","./pessoas/pessoa02.png",
"./pessoas/pessoa03.png","./pessoas/pessoa04.png",
"./pessoas/pessoa05.png"
]
let imagens_femininas = [
    "./pessoas/pessoa06.png","./pessoas/pessoa07.png",
    "./pessoas/pessoa08.png","./pessoas/pessoa09.png",
    "./pessoas/pessoa10.png"
    ]


//
let armario_tarefas = [
    "Primeira Tarefa","aperte nos produtos e depois aperte na sua categoria:",
    "Segunda Tarefa","escolha o melhor banner para usar na empresa ,escolha apenas um:",
    "Terceira Tarefa","Corrija as frases apresentadas a baixo apertando nas opçoes corretas:",
    "Quarta Tarefa","demita os funcionários que não deram rendimento:",
]



//
//criar funcionario
button[1].addEventListener("click",(a)=>{
    a.preventDefault();
    const name = input[0].value;

    if(name == ""){
        window.alert("adicione um nome")
    }else{
        nomes_masculinos.splice(3,0,name)
        console.log(nomes_masculinos)
        button[0].setAttribute("name","ativada")
        button[1].setAttribute("name","desativada")
    }

})




//INICIAR
button[0].addEventListener("click",()=>{
    base_empresa.setAttribute("name","ativada")

    button[0].remove()
//PRIMEIRA FASE
posiçao_chefe = nomes_masculinos[0]
posiçao_seo = nomes_femininos[0]
posiçao_gerente = nomes_masculinos[1]
posiçao_recepçao = nomes_masculinos[2]
posiçao_funcionario = nomes_masculinos[3]
posiçao_substituto = substituto

img[0].setAttribute("src",imagens_masculinas[0]) 
img[1].setAttribute("src",imagens_femininas[0]) 
img[2].setAttribute("src",imagens_masculinas[1]) 
img[3].setAttribute("src",imagens_masculinas[2]) 
img[4].setAttribute("src",imagens_masculinas[3]) 

dados_chefe = posiçao_chefe+" | "+posiçao_disponivel[0]
dados_seo = posiçao_seo+" | "+posiçao_disponivel[1]
dados_gerente = posiçao_gerente+" | "+posiçao_disponivel[2]
dados_recepçao = posiçao_recepçao+" | "+posiçao_disponivel[3]
dados_funcionario = posiçao_funcionario+" | "+posiçao_disponivel[4]
dados_substituto = posiçao_substituto

/*CHEFE*/posiçao_na_tela[0].textContent = dados_chefe
/*SEO*/posiçao_na_tela[1].textContent = dados_seo
/*GERENTE*/posiçao_na_tela[2].textContent = dados_gerente
/*RECEPÇAO*/posiçao_na_tela[3].textContent = dados_recepçao
/*FUNCIONARIO*/posiçao_na_tela[4].textContent = dados_funcionario
/*SUBSTITUTO*/posiçao_na_tela[5].textContent = dados_substituto

pontuação_mostrada[0].textContent = "Pontos: "+pontuaçao_chefe
pontuação_mostrada[1].textContent = "Pontos: "+pontuaçao_seo
pontuação_mostrada[2].textContent = "Pontos: "+pontuaçao_gerente
pontuação_mostrada[3].textContent = "Pontos: "+pontuaçao_recepçao
pontuação_mostrada[4].textContent = "Pontos: "+pontuaçao_funcionario
pontuação_mostrada[5].textContent = "Pontos: "+pontuaçao_substituto

setTimeout(()=>{
tarefa_1.setAttribute("name","ativada")

tarefa_h1[0].textContent = armario_tarefas[0]
tarefa_p[0].textContent = armario_tarefas[1]
caixa1[0].textContent = "MATERIAL"
caixa2[0].textContent = "LIMPEZA"
caixa3[0].textContent = "COMIDA"
},1000)

})

let condiçao_produto = ""
let verificado = 0

produto[0].addEventListener("click",()=>{
condiçao_produto = "produto1"
verificado += 1
trocadecor()
})
produto[1].addEventListener("click",()=>{
    condiçao_produto = "produto2"
    verificado += 1
    trocadecor()
    })
    produto[2].addEventListener("click",()=>{
        condiçao_produto = "produto3"
        verificado += 1
        trocadecor()
        })

        function trocadecor(){
        switch(condiçao_produto){
            case "produto1":
                produto[0].setAttribute("class","produto-apertado")
                produto[1].setAttribute("class","produto")
                produto[2].setAttribute("class","produto")
                break;
            case "produto2":
                produto[1].setAttribute("class","produto-apertado")
                produto[0].setAttribute("class","produto")
                produto[2].setAttribute("class","produto")
                break;
            case "produto3":
                produto[2].setAttribute("class","produto-apertado")
                produto[1].setAttribute("class","produto")
                produto[0].setAttribute("class","produto")
                break;
                default:
        }       
        }

       caixa1[0].addEventListener("click",()=>{
        if(condiçao_produto == "produto1"){
            caixa1[0].setAttribute("class","caixa-acessada")
            
            setTimeout(()=>{
                caixa1[0].removeEventListener("click",caixa1[0],false)
                produto[0].remove()
            },500)
        }else{
            caixa1[0].setAttribute("class","caixa-errada")
            setTimeout(()=>{
                caixa1[0].removeEventListener("click",caixa1[0],false)
                produto[0].remove()
            },500)
        }
       })
       caixa2[0].addEventListener("click",()=>{
        if(condiçao_produto == "produto2"){
            caixa2[0].setAttribute("class","caixa-acessada")
            
            setTimeout(()=>{
                caixa2[0].removeEventListener("click",caixa2[0],false)
                produto[1].remove()
            },500)
           
        }else{
            caixa2[0].setAttribute("class","caixa-errada")
            setTimeout(()=>{
                caixa2[0].removeEventListener("click",caixa1[0],false)
                produto[1].remove()
            },500)
        }
       })
       caixa3[0].addEventListener("click",()=>{
        if(condiçao_produto == "produto3"){
            caixa3[0].setAttribute("class","caixa-acessada")
            
            setTimeout(()=>{
                caixa3[0].removeEventListener("click",caixa3[0],false)
                produto[2].remove()
            },500)
           
        }else{
            caixa3[0].setAttribute("class","caixa-errada")
            setTimeout(()=>{
                caixa3[0].removeEventListener("click",caixa3[0],false)
                produto[2].remove()
            },500)
        }
       })

       btn_prosseguir[0].addEventListener("click",()=>{
    tarefa_1.remove()
    somaglobal()
    proxima_base.removeAttribute("name")
    proxima_base.setAttribute("name","ativada")
       })

proximo.addEventListener("click",()=>{
    tarefa_2.removeAttribute("name")
    tarefa_2.setAttribute("name","ativada")

    tarefa_h1[1].textContent = armario_tarefas[2]
    tarefa_p[1].textContent = armario_tarefas[3]

    caixa1[1].setAttribute("name","banner1")
    caixa2[1].setAttribute("name","banner2")
    caixa3[1].setAttribute("name","banner3")

})


caixa1[1].addEventListener("click",()=>{
    
    setTimeout(()=>{
 verificado = 0
    verificado = 3
    tarefa_2.remove()
    caixa2[1].remove()
    caixa3[1].remove()
    },500)

caixa1[1].setAttribute("name","troca1")
caixa2[1].setAttribute("name","troca2")
caixa3[1].setAttribute("name","troca3")
somaglobal()
troca_de_cargo1()
correçao()
})
caixa2[1].addEventListener("click",()=>{

    setTimeout(()=>{
        verificado = 0
        verificado = 1
        tarefa_2.remove()
           caixa1[1].remove()
           caixa3[1].remove()
           },500)

    caixa1[1].setAttribute("name","troca1")
    caixa2[1].setAttribute("name","troca2")
    caixa3[1].setAttribute("name","troca3")
    somaglobal()
    })
    caixa3[1].addEventListener("click",()=>{

        setTimeout(()=>{
            verificado = 0
            verificado = 1
            tarefa_2.remove()
               caixa1[1].remove()
               caixa2[1].remove()
               },500)

        caixa1[1].setAttribute("name","troca1")
        caixa2[1].setAttribute("name","troca2")
        caixa3[1].setAttribute("name","troca3")
        somaglobal()
        })


function correçao(){
  proximo.remove()
    setTimeout(()=>{
        tarefa_3.removeAttribute("name")
        tarefa_3.setAttribute("name","ativada")
        tarefa_h1[2].textContent = armario_tarefas[4]
        tarefa_p[2].textContent = armario_tarefas[5]
        frases[0].style = "display:flex"
        caixa4.setAttribute("name","ativada")
        caixa5.setAttribute("name","ativada")
    
    },2000)
}

caixa4.addEventListener("click",()=>{
    verificado = 0
    verificado += 1
    caixa4.style = "background-color:lime"
    caixa5.remove()

    setTimeout(()=>{
frases[0].style = "text-align:center;color:lime;display:flex"
frases[0].textContent =" A empresa necessita de desempenho"
    },400)
    
        caixa6.setAttribute("name","ativada")
        caixa7.setAttribute("name","ativada")
        frases[1].style = "display:flex"
})

caixa5.addEventListener("click",()=>{
    verificado = 0
    caixa5.style = "background-color:red"
    caixa4.remove()

    setTimeout(()=>{
frases[0].style = "text-align:center;color:red;display:flex;text-decoration: line-through;"
    },400)
    
        caixa6.setAttribute("name","ativada")
        caixa7.setAttribute("name","ativada")
        frases[1].style = "display:flex"
})

caixa6.addEventListener("click",()=>{
    verificado = 0
    caixa6.style = "background-color:red"
    caixa7.remove()

    setTimeout(()=>{
frases[1].style = "text-align:center;color:red;display:flex;text-decoration: line-through;"
    },400)

        caixa9.setAttribute("name","ativada")
        caixa8.setAttribute("name","ativada")
        frases[2].style = "display:flex"
})

caixa7.addEventListener("click",()=>{
      verificado += 1
    caixa7.style = "background-color:lime"
    caixa6.remove()

    setTimeout(()=>{
frases[1].style = "text-align:center;color:lime;display:flex;"
    },400)

        caixa8.setAttribute("name","ativada")
        caixa9.setAttribute("name","ativada")
        frases[2].style = "display:flex"
})
caixa8.addEventListener("click",()=>{
    verificado += 1
    caixa8.style = "background-color:lime"
    caixa9.remove()

    setTimeout(()=>{
frases[2].style = "text-align:center;color:lime;display:flex;"
troca_de_cargo2() 
remoçao_de_funcionario()
tarefa_3.remove()
    },400)   
})
caixa9.addEventListener("click",()=>{
    verificado = 0
    caixa9.style = "background-color:red"
    caixa8.remove()

    setTimeout(()=>{
frases[2].style = "text-align:center;color:red;display:flex;text-decoration: line-through;"
troca_de_cargo2()
remoçao_de_funcionario()
tarefa_3.remove()
},400)

})
function remoçao_de_funcionario(){
tarefa_4.removeAttribute("name")
tarefa_4.setAttribute("name","ativada")
tarefa_h1[3].textContent = armario_tarefas[6]
tarefa_p[3].textContent = armario_tarefas[7]
fnc[0].style = "background-image: url(./pessoas/funcionario02.jpg);"
fnc[1].style = "background-image: url(./pessoas/funcionario03.jpg);"
fnc[2].style = "background-image: url(./pessoas/funcionario04.jpg);"
fnc[3].style = "background-image: url(./pessoas/funcionario05.jpg);"
fnc[0].setAttribute("name","ativada")
fnc[1].setAttribute("name","ativada")
fnc[2].setAttribute("name","ativada")
fnc[3].setAttribute("name","ativada")
}

fnc[0].addEventListener("click",()=>{
    fnc[0].remove()
    verificado = 0
    verificado +=1.5
})
fnc[1].addEventListener("click",()=>{
    fnc[1].remove()
    verificado = 0
})

fnc[2].addEventListener("click",()=>{
    fnc[2].remove()
    verificado = 0
})
fnc[3].addEventListener("click",()=>{
    fnc[3].remove()
    verificado = 0
    verificado +=1.5
})
fnc[4].addEventListener("click",()=>{
    tarefa_4.remove()
    console.log(pontuaçao_gerente)
    console.log(pontuaçao_seo)
troca_de_cargo3()
})



function troca_de_cargo1(){
    if(pontuaçao_funcionario > pontuaçao_recepçao){
        posiçao_recepçao = nomes_masculinos[3]
        posiçao_funcionario = nomes_femininos[1]
        pontuaçao_recepçao = pontuaçao_funcionario
        pontuaçao_funcionario = 20
        dados_recepçao = posiçao_recepçao
        dados_funcionario = posiçao_funcionario
        nomes_masculinos.splice(2,1)
        console.log(nomes_masculinos)
        console.log(posiçao_recepçao)
    
        /*CHEFE*/posiçao_na_tela[0].textContent = dados_chefe
/*SEO*/posiçao_na_tela[1].textContent = dados_seo
/*GERENTE*/posiçao_na_tela[2].textContent = dados_gerente
/*RECEPÇAO*/posiçao_na_tela[3].textContent = dados_recepçao + "| Recepção"
/*FUNCIONARIO*/posiçao_na_tela[4].textContent = dados_funcionario+"| Funcionário"
/*SUBSTITUTO*/posiçao_na_tela[5].textContent = dados_substituto

pontuação_mostrada[0].textContent = "Pontos: "+pontuaçao_chefe
pontuação_mostrada[1].textContent = "Pontos: "+pontuaçao_seo
pontuação_mostrada[2].textContent = "Pontos: "+pontuaçao_gerente
pontuação_mostrada[3].textContent = "Pontos: "+pontuaçao_recepçao
pontuação_mostrada[4].textContent = "Pontos: "+pontuaçao_funcionario
pontuação_mostrada[5].textContent = "Pontos: "+pontuaçao_substituto

img[0].setAttribute("src",imagens_masculinas[0]) 
img[1].setAttribute("src",imagens_femininas[0]) 
img[2].setAttribute("src",imagens_masculinas[1]) 
img[3].setAttribute("src",imagens_masculinas[3]) 
img[4].setAttribute("src",imagens_femininas[1]) 
    }
}

function troca_de_cargo2(){
    pontuaçao_recepçao +=4
    if(pontuaçao_recepçao > pontuaçao_gerente){
        posiçao_gerente = nomes_masculinos[2]
        posiçao_recepçao = nomes_femininos[1]
        posiçao_funcionario = nomes_femininos[3]
        pontuaçao_funcionario = pontuaçao_substituto
        pontuaçao_substituto = 20
        dados_gerente = posiçao_gerente
        dados_recepçao = posiçao_recepçao
        dados_funcionario = posiçao_funcionario

        console.log(nomes_masculinos)
        console.log(posiçao_recepçao)
    
        /*CHEFE*/posiçao_na_tela[0].textContent = dados_chefe
/*SEO*/posiçao_na_tela[1].textContent = dados_seo
/*GERENTE*/posiçao_na_tela[2].textContent = dados_gerente+"|Gerente"
/*RECEPÇAO*/posiçao_na_tela[3].textContent = dados_recepçao + "| Recepção"
/*FUNCIONARIO*/posiçao_na_tela[4].textContent = dados_funcionario+"| Funcionário"
/*SUBSTITUTO*/posiçao_na_tela[5].textContent = dados_substituto

pontuação_mostrada[0].textContent = "Pontos: "+pontuaçao_chefe
pontuação_mostrada[1].textContent = "Pontos: "+pontuaçao_seo
pontuação_mostrada[2].textContent = "Pontos: "+pontuaçao_gerente
pontuação_mostrada[3].textContent = "Pontos: "+pontuaçao_recepçao
pontuação_mostrada[4].textContent = "Pontos: "+pontuaçao_funcionario
pontuação_mostrada[5].textContent = "Pontos: "+pontuaçao_substituto

img[0].setAttribute("src",imagens_masculinas[0]) 
img[1].setAttribute("src",imagens_femininas[0]) 
img[2].setAttribute("src",imagens_masculinas[3]) 
img[3].setAttribute("src",imagens_femininas[1]) 
img[4].setAttribute("src",imagens_femininas[3]) 
    }else{
        window.alert("VOCÊ NÃO FEZ PONTOS O SUFICIENTE PORTANTO ESTÁ DEMITIDO")
        window.location.reload(true);
    }
}

function troca_de_cargo3(){
    pontuaçao_gerente +=22
    if(pontuaçao_gerente > pontuaçao_seo){
        posiçao_seo = nomes_masculinos[2]
        posiçao_gerente = nomes_femininos[1]
        posiçao_recepçao = nomes_femininos[3]
        posiçao_funcionario = nomes_femininos[4]
        pontuaçao_funcionario = pontuaçao_substituto
        pontuaçao_substituto = 33
        pontuaçao_gerente = 67
        dados_seo = posiçao_seo
        dados_gerente = posiçao_gerente
        dados_recepçao = posiçao_recepçao
        dados_funcionario = posiçao_funcionario

        console.log(nomes_masculinos)
        console.log(posiçao_recepçao)
    
        /*CHEFE*/posiçao_na_tela[0].textContent = dados_chefe
/*SEO*/posiçao_na_tela[1].textContent = dados_seo+"|Seo"
/*GERENTE*/posiçao_na_tela[2].textContent = dados_gerente+"|Gerente"
/*RECEPÇAO*/posiçao_na_tela[3].textContent = dados_recepçao + "| Recepção"
/*FUNCIONARIO*/posiçao_na_tela[4].textContent = dados_funcionario+"| Funcionário"
/*SUBSTITUTO*/posiçao_na_tela[5].textContent = dados_substituto

pontuação_mostrada[0].textContent = "Pontos: "+pontuaçao_chefe
pontuação_mostrada[1].textContent = "Pontos: "+pontuaçao_seo
pontuação_mostrada[2].textContent = "Pontos: "+pontuaçao_gerente
pontuação_mostrada[3].textContent = "Pontos: "+pontuaçao_recepçao
pontuação_mostrada[4].textContent = "Pontos: "+pontuaçao_funcionario
pontuação_mostrada[5].textContent = "Pontos: "+pontuaçao_substituto

img[0].setAttribute("src",imagens_masculinas[0]) 
img[1].setAttribute("src",imagens_masculinas[3]) 
img[2].setAttribute("src",imagens_femininas[1]) 
img[3].setAttribute("src",imagens_femininas[3]) 
img[4].setAttribute("src",imagens_femininas[4]) 

setTimeout(()=>{
window.prompt("gostou do app")
window.alert("até a próxima")

troca_de_cargo4()
},2300)
    }else{
        window.alert("VOCÊ NÃO FEZ PONTOS O SUFICIENTE PORTANTO ESTÁ DEMITIDO")
        window.location.reload(true);
    }
}

function troca_de_cargo4(){
    pontuaçao_gerente +=22
    if(pontuaçao_gerente > pontuaçao_seo){
        posiçao_chefe = nomes_masculinos[2]
        posiçao_seo = nomes_femininos[1]
        posiçao_gerente = nomes_femininos[3]
        posiçao_recepçao = nomes_femininos[4]
        posiçao_funcionario = nomes_femininos[2]
        pontuaçao_funcionario = pontuaçao_substituto
        pontuaçao_seo = 80
        pontuaçao_gerente = 70
        pontuaçao_substituto = 33
        pontuaçao_gerente = 67
        dados_chefe = posiçao_chefe
        dados_seo = posiçao_seo
        dados_gerente = posiçao_gerente
        dados_recepçao = posiçao_recepçao
        dados_funcionario = posiçao_funcionario

        console.log(nomes_masculinos)
        console.log(posiçao_recepçao)
    
        /*CHEFE*/posiçao_na_tela[0].textContent = dados_chefe+"|Chefe"
/*SEO*/posiçao_na_tela[1].textContent = dados_seo+"|Seo"
/*GERENTE*/posiçao_na_tela[2].textContent = dados_gerente+"|Gerente"
/*RECEPÇAO*/posiçao_na_tela[3].textContent = dados_recepçao + "| Recepção"
/*FUNCIONARIO*/posiçao_na_tela[4].textContent = dados_funcionario+"| Funcionário"
/*SUBSTITUTO*/posiçao_na_tela[5].textContent = dados_substituto

pontuação_mostrada[0].textContent = "Pontos: "+pontuaçao_chefe
pontuação_mostrada[1].textContent = "Pontos: "+pontuaçao_seo
pontuação_mostrada[2].textContent = "Pontos: "+pontuaçao_gerente
pontuação_mostrada[3].textContent = "Pontos: "+pontuaçao_recepçao
pontuação_mostrada[4].textContent = "Pontos: "+pontuaçao_funcionario
pontuação_mostrada[5].textContent = "Pontos: "+pontuaçao_substituto

img[0].setAttribute("src",imagens_masculinas[3]) 
img[1].setAttribute("src",imagens_masculinas[1]) 
img[2].setAttribute("src",imagens_femininas[3]) 
img[3].setAttribute("src",imagens_femininas[4]) 
img[4].setAttribute("src",imagens_femininas[2]) 


setTimeout(()=>{
final.style= "display:flex"
base_empresa.remove()
user_propriety.remove()
},3000)
    }
}


       function somaglobal(){
        switch(verificado){
            case 1:
                pontuaçao_chefe -= 8
                pontuaçao_seo -= 7
                pontuaçao_gerente -= 6
                pontuaçao_recepçao -=4
                pontuaçao_funcionario += 5
                pontuaçao_substituto += 1
              msotrarvalores()
                break;
                case 2:
                    pontuaçao_chefe -= 11
                    pontuaçao_seo -= 8
                    pontuaçao_gerente -= 7
                    pontuaçao_recepçao -=6
                    pontuaçao_funcionario += 9
                    pontuaçao_substituto += 2
                    msotrarvalores()
                    break;
                    case 3:
                        pontuaçao_chefe -= 15
                        pontuaçao_seo -= 10
                        pontuaçao_gerente -= 6
                        pontuaçao_recepçao -=9
                        pontuaçao_funcionario += 17
                        pontuaçao_substituto += 4
                        msotrarvalores()
                    break;
                    default:
        }
       }
       function msotrarvalores(){
pontuação_mostrada[0].textContent ="Pontos:"+ Math.trunc(pontuaçao_chefe)
pontuação_mostrada[1].textContent ="Pontos:"+ Math.trunc(pontuaçao_seo)
pontuação_mostrada[2].textContent ="Pontos:"+ Math.trunc(pontuaçao_gerente)
pontuação_mostrada[3].textContent ="Pontos:"+ Math.trunc(pontuaçao_recepçao)
pontuação_mostrada[4].textContent ="Pontos:"+ Math.trunc(pontuaçao_funcionario)
pontuação_mostrada[5].textContent ="Pontos:"+ Math.trunc(pontuaçao_substituto)
       }