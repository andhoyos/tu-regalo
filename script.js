const jsConfetti = new JSConfetti()

const date = new Date();
const end = new Date(2023, 2, 14 )

console.log(date)
console.log(end)

function downloadBtn() {
    const download = document.getElementById("download");
    const subMensaje = document.getElementById("subMensaje");
    btnRegalo.textContent = 'Mi trabajo aqui esta hecho'
    subMensaje.textContent = 'Que tengas un lindo día y espero que disfrutes tu regalo. '
    // download.click();
    
  }

function diasHasta(){ 
var mseg_dia=1000*60*60*24;
var dias ;
if (date.getMonth()==end.getMonth() && date.getDate()>end.getDate()) 
    end.setFullYear(end.getFullYear()+1) ;
dias = Math.ceil((end.getTime()-date.getTime())/(mseg_dia));
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
    btnRegalo.textContent = `Podrás encontrar tu regalo ${res}`
    mensaje.textContent = `Preciosa está cerca tu cumpleaños!`
jsConfetti.addConfetti({
    emojis: ['🦄','🌈', '⚡️', '💥', '✨', '💫', '🌸'],
    emojiSize: 50,
    confettiNumber: 30,
 })
 
jsConfetti.addConfetti()
   if (date >= end){ 

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
}
}

run();


