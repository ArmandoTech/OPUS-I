
const presionSaturacion= () => {
    const T= document.getElementById('T').value
    const A= document.getElementById('A').value
    const B= document.getElementById('B').value
    const C= document.getElementById('C').value
    const presionSat= document.getElementById('presionSat')

    const Ps= Math.exp(A-B/(C+T))
    
    presionSat.innerText= "La presión de saturación es " + Ps
}

const tempMax= () => {
    const Ps= document.getElementById('Ps').value
    const A1= document.getElementById('A1').value
    const B1= document.getElementById('B1').value
    const C1= document.getElementById('C1').value
    const A2= document.getElementById('A2').value
    const B2= document.getElementById('B2').value
    const C2= document.getElementById('C2').value
    const tempMax= document.getElementById('tempMax')

    const T= B1/(A1-Math.log(Ps)) - C1
    if (0<= T <= 57 ) {
        tempMax.innerText= "La temperatura máxima es " + T
    } else {
        const tMax= B2/(A2-Math.log(Ps)) - C2
        tempMax.innerText= "La temperatura máxima es " + tMax
    }
}

const tPrima= () => {
    const tMax= document.getElementById('tMax')
    const P= document.getElementById('P')
    const Tf= Math.round(tMax) - 1
    const sigma= 1
    const T=0
    const salir= 0

}

