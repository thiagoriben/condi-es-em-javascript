function calcular(){
    
var txtv = window.document.querySelector('input#txtvel')
var vel = Number(txtv.value)
var res = window.document.querySelector('div#res')

res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}Km/h</strong>.</p>`
    if (vel > 60){
        res.innerHTML += 'você foi MULTADO!' //esse += eu usei pra juntar os 2 res.innerHTML, pq se eu n usasse, so ia sair o if.

    }


}