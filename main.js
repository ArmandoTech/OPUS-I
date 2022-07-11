//Variables primeros 2 algoritmos
const A1= 23.7093
const B1= 4111
const C1= 237.7    
const A2= 23.1863
const B2= 3809.4
const C2= 226.7

const presionSaturacion= (event) => {
    const T= Number(document.getElementById('T').value)
    const presionSat= document.getElementById('presionSat')

    if (T >= 57) {
        const Ps= Math.exp(A2-B2/(C2+T))
        presionSat.textContent= `La presión de saturación es ${Ps}`

    } else {
        const Ps= Math.exp(A1-B1/(C1+T))
        presionSat.textContent= `La presión de saturación es ${Ps}`

    }
    event.preventDefault()
}

const tempMax= (event) => {
    const Ps= Number(document.getElementById('Ps').value)
    const tempMax= document.getElementById('tempMax')

    const T= B1/(A1-Math.log(Ps)) - C1
    if (0<= T <= 57 ) {
        tempMax.textContent= `La temperatura máxima es ${T}`
    } else {
        const tMax= B2/(A2-Math.log(Ps)) - C2
        tempMax.textContent= `La temperatura máxima es ${tMax}`
    }
    event.preventDefault()
}

const yPrima= () => {
    const tMax= Number(document.getElementById('tMax'))
    const P= Number(document.getElementById('P'))
    const mA=Number(document.getElementById('mA').value)
    const mB=Number(document.getElementById('mB').value)
    const Tf= Math.round(tMax) - 1
    const sigma= 1
    const T=0
    const salir= 0

}

const procesoCompleto= () => {
    const t= document.getElementById('T').value
    const T= Number(t)

    let Ps=0
    if (T >= 57) {
        const Ps= Math.exp(A2-B2/(C2+T))
    } else {
        const Ps= Math.exp(A1-B1/(C1+T))
    }
    
    const T2= B1/(A1-Math.log(Ps)) - C1
    if (0<= T2 <= 57 ) {
        tMax= T2
    } else {
        const tMax= B2/(A2-Math.log(Ps)) - C2
    }
}
