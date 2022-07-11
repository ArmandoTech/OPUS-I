
const presionSaturacion= () => {
    const t= document.getElementById('T').value
    const T= Number(t)
    const presionSat= document.getElementById('presionSat')
    const A1= 23.7093
    const B1= 4111
    const C1= 237.7    
    const A2= 23.1863
    const B2= 3809.4
    const C2= 226.7

    console.log(t)
    console.log(T)
    if (T >= 57) {
        const Ps= Math.exp(A2-B2/(C2+T))
        presionSat.innerText= "La presión de saturación es: "+Ps

    } else {
        const Ps= Math.exp(A1-B1/(C1+T))
        presionSat.innerText= "La presión de saturación es: "+Ps

    }
}

const tempMax= () => {
    const ps= document.getElementById('Ps').value
    const Ps= Number(ps)
    const tempMax= document.getElementById('tempMax')
    const A1= 23.7093
    const B1= 4111
    const C1= 237.7
    const A2= 23.1863
    const B2= 3809.4    
    const C2= 226.7

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

