//teclas de numeros
const btnOne = document.getElementById('one');
const btnTwo = document.getElementById('two');
const btnThere = document.getElementById('there');
const btnFour = document.getElementById('four');
const btnFive = document.getElementById('five');
const btnSix = document.getElementById('six');
const btnSeven = document.getElementById('seven');
const btnEight = document.getElementById('eight');
const btnNine = document.getElementById('nine');
const btnCero = document.getElementById('cero');

//tecla para operaciones
const sum = document.getElementById('sum');
const rest = document.getElementById('rest');
const multipli = document.getElementById('multipli');
const dividir = document.getElementById('division');
const result = document.getElementById('result');
const limpiar = document.getElementById('clear')


const showOperacion = document.getElementById('showOperacion');
const showResult = document.getElementById('showResultado');

const btnsNumbers = [ btnOne, btnTwo , btnThere, 
                btnFour , btnFive , btnSix , 
                btnSeven , btnEight , btnNine, 
                btnCero]


let numbers = btnsNumbers.forEach(btn => {
        btn.addEventListener('click', () => {
            let numEntero = parseInt(btn.value)
            const valorbtn = numEntero;
            showOperacion.value += valorbtn

        })
    })

let sumOperation = sum.addEventListener('click', () =>{
    if(showOperacion.value !== ''){
      showOperacion.value +=  sum.value
    }
}) 


 let restOperation = rest.addEventListener('click', () =>{
    if(showOperacion.value !== ''){
      showOperacion.value +=  rest.value
    }
})

let multipOperation = multipli.addEventListener('click', () =>{
    if(showOperacion.value !== ''){
        showOperacion.value +=  multipli.value
    }
})


let divisionOperation = dividir.addEventListener('click', () =>{
    if(showOperacion.value !== ''){
      showOperacion.value +=  dividir.value
    }
})



result.addEventListener('click', () => {
    const operacion = showOperacion.value;
    const resultado = eval(operacion); 
    showResult.textContent = resultado; 
});


limpiar.addEventListener('click' , () => {
    if(showOperacion.value !== ""){
        showOperacion.value = "";
        showResult.textContent = "";
    }
})






