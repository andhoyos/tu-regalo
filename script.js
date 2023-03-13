const jsConfetti = new JSConfetti()

const date = new Date();
const start = new Date(2023, 2, 14, 0, 0, 0)
const end = new Date(2023, 2, 14, 23, 59, 0 )
const subMensaje = document.getElementById("subMensaje");

console.log(date)
console.log(start)
console.log(end)

function downloadBtn() {
    const download = document.getElementById("download");    
    btnRegalo.textContent = 'Mi trabajo aquí esta hecho'
    subMensaje.textContent = 'Que tengas un lindo día y espero que disfrutes tu regalo. '
    download.click();
    
  }

function diasHasta(){ 
var mseg_dia=1000*60*60*24;
var dias ;
if (date.getMonth()==start.getMonth() && date.getDate()>start.getDate()) 
    start.setFullYear(start.getFullYear()+1) ;
dias = Math.ceil((start.getTime()-date.getTime())/(mseg_dia));
res = dias
} 

let res = ''
const btnRegalo = document.getElementById('btn-regalo')
const mensaje = document.getElementById('mensaje')
const run = () => {
    diasHasta()

    if (res<=1){
        res='mañana'
    }else{
        res='en '+ res+' días'
    }

    if(date <= start){
        btnRegalo.textContent = `Tú regalo estará disponible ${res}`
        mensaje.textContent = `Preciosa está cerca tu cumpleaños!`
    }else if (date > start && date < end){ 
    btnRegalo.textContent = `Aquí está tu regalo`
    mensaje.textContent = `Felíz cumpleaños!!!!!!`
    btnRegalo.addEventListener("click",downloadBtn, false )
    setInterval(() => {
        jsConfetti.addConfetti({
           emojis: ['🦄','🌈', '⚡️', '💥', '✨', '💫', '🌸'],
           emojiSize: 50,
           confettiNumber: 30,
        })
    }, 3000);       
    
    setInterval(() => {
        jsConfetti.addConfetti()
    }, 2500);
}else{
    btnRegalo.textContent = `Mi trabajo aquí esta hecho`
    mensaje.textContent = `Felíz cumpleaños!!!!!!`
    subMensaje.textContent = 'Que tengas un lindo día y espero que disfrutes tu regalo. '
}
}

run();


