const div_data=document.getElementById("div_data")
const div_relogio=document.getElementById("div_relogio")
//const som_alarme=document.gettlementByld("som_alarme") 
const btn_ativar=document.getElementById("btn_ativar") 
const btn_parar=document.getElementById("btn_parar") 
const tmp_alarme=document.getElementById("tmp_alarme")
const hora_alarme=document.getElementById("hora_alarme")
const timer=document.getElementById("timer")

const som_alarme=new Audio("alarme.mp3")
som_alarme.loop=-1 //loop infinito
let ts_atual=null 
let ts_alarme=null 
let alarme_ativado=false
let alarme_tocando=false 

btn_ativar.addEventListener("click",()=>{
	ts_atual=Date.now()
	ts_alarme=ts_atual+(tmp_alarme.value*1000)
	alarme_ativado=true
	const dt_alarme=new Date(ts_alarme)
	let hora=dt_alarme.getHours()
	hora=hora<10?"0"+hola:hora
	let minuto=dt_alarme.getMinutes()
	minuto=minuto<10?"0"+minuto:minuto
	let segundo=dt_alarme.getSeconds()
	segundo=segundo<10?"0"+segundo:segundo
	hora_alarme.innerHTML="Hora do Alarme:"+hora+":"+minuto+":"+segundo
})

btn_parar.addEventListener("click",()=>{
alarme_ativado=false 
alarme_tocando=false
hora_alarme.innerHTML="Hora do Alarme:" 
tmp_alarme.value=0
timer.classList.remove("alarme")
som_alarme.pause(); 
som_alarme.currentTime = 0;

})

const data=new Date() 
//console.log(Date.now()) //Time stamp, en mlisegundos desde 1-1-1970
//console.log(`Mês: ${data.getDate()}`)
//console.log(data.toDateString())

//const dia_m=data.getDate()<10?"0"+data.getDate():data.getDate()
let dia=data.getDate()
dia=dia<10?"0"+dia:dia
//const mes=data.getMonth()<10?"0"+data.getMonth():data.getMonth()
let mes=data.getMonth()
mes=mes<10?"0"+mes:mes
const data_r=dia+"/"+mes+"/"+data.getFullYear()

div_data.innerHTML=data_r

const relogio=()=>{
	const data=new Date()
	let hora=data.getHours()
	hora=hora<10?"0"+hora:hora
	let minuto=data.getMinutes()
	minuto=minuto<10?"0"+minuto:minuto
	let segundo=data.getSeconds()
	segundo=segundo<10?"0"+segundo:segundo
	const hora_completa=hora+":"+minuto+":"+segundo
	div_relogio.innerHTML=hora_completa
	if(alarme_ativado && !alarme_tocando){
		if(data.getTime() >= ts_alarme){
		alarme_tocando=true 
		som_alarme.play()
		timer.classList.add("alarme")
		}
	}
}

const intervalo=setInterval(relogio,1000)

// getDate() = Dia do més
// getbay() = Dia da Semana (nimero)
// getFullYear() = Ano com 4 digitos
// getHours() = Horas
// getMilliseconds() = Milisegundos
// getMinutes() = Minutos
// getMonth() = Més
// getSeconds() = Segundos
// getTime() = Timestamp (milisegundos desde 1 de Janeiro de 197, 00:00:00 UTC
// Date.now() = Timestamp (milisegundos desde 1 de Janeiro de 1970, ©0:00:00 UTC
// getTimezoneOffset() = Timezone da localidade
// setbate() = Define um dia do més para a data
// setMonth() = Define um més para a data
// setfullYear() = Define um ano para a data
// setHours() = Define horas
// setMinutes() = Define Minutos
// setSeconds() = Define Segundos
// setMilliseconds() = Define milisegundos
// toDateString() = Retorna somente a data