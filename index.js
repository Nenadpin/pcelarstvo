const carusel = document.getElementById('slider');
const menu1 = document.getElementById('1')
const p1 = document.getElementById('p1')
const menu2 = document.getElementById('2')
const p2 = document.getElementById('p2')
const menu3 = document.getElementById('3')
const p3 = document.getElementById('p3')
let temp_link = document.createElement("a");
temp_link.href = "http://pcelinjak.netlify.app";
temp_link.target = '_blank';
temp_link.innerHTML = "pcelinjak";


let details1 = true
let details2 = true
let details3 = true
let i = 1
const data = ["med. Prvo i osnovno. sakupljamo bagremov, livadski i sumski med. bagredmov med se sakuplja od pocetka maja do polovine maja. zatim dozreva do pocetka juna kada se i vrca. prve ture su spremne za isporuku krajem juna.",
    "livadski med se sakuplja tokom celog leta. manje ga je i staramo se da je cist i bez ostataka (ne vrcaju se ramovi u kojima je bilo leglo.", "Sumski med se javlja svake 3 ili 4 godine. jakog je ukusa i mirisa i brzo kristalise ali je izuzetno zdrav.", "takodje sakupljamo polen i vosak iz kosnica."]
const data2 = ["matice se proizvode nikot aparatom.", "proizvodnja matica je po metodi michael palmera upotrebom pomocnih nukleusa za leglo. nukleusi zimuju i provode citavu godinu kao nukleusi. ne postaju proizvodne kosnice vec samo sluze za proizvodnju legla za starter kosnice.", "matice se odgajaju u posebnim oplodnjacima i nako 28 dana su spremne za prodaju", "rojevi mogu da se dobiju u svim formatima (db, LR i farar) sa odgovarajucom kolicinom ramova"]
const data3 = ["novoformirani pcelinjak i poljoprivredno gazdinstvo", "nalazimo se u zaplanjskoj dolini ispod suve planine", "raspolazemo sa 50-tak drustava i jos toliko nukleusa", "jedan interesantan program za evidenciju pregleda kosnica mozete naci na adresi:  "]

setInterval(() => {
    carusel.style.backgroundImage = `url("img${i}.jpg")`
    i++
    if (i === 6) i = 1
}, 2000)

const selectBee = () => {
    if (details1) {
        menu1.style.height = '480px'
        if (screen.width < 800) {
            p1.style.fontSize = '12px'
        } else p1.style.fontSize = '18px'
        p1.innerText = data[0] + "\n" + data[1] + "\n" + data[2] + "\n" + data[3]
        p1.style.textShadow = '0px 0px'

    } else {
        menu1.style.height = '15vh'
        p1.innerText = 'pcelinji proizvodi'
        p1.style.textShadow = '2px 2px dimgray';
        if (screen.width < 800) {
            p1.style.fontSize = '24px';
        } else p1.style.fontSize = '36px';

    }

    details1 = !details1
}
const selectQueen = () => {
    if (details2) {
        menu2.style.height = '480px'
        if (screen.width < 800) {
            p2.style.fontSize = '12px'
        } else p2.style.fontSize = '18px'

        p2.innerText = data2[0] + "\n" + data2[1] + "\n" + data2[2] + "\n" + "\n" + data2[3]
        p2.style.textShadow = '0px 0px'

    } else {
        menu2.style.height = '15vh'
        p2.innerText = 'rojevi i matice'
        p2.style.textShadow = '2px 2px dimgray';
        if (screen.width < 800) {
            p2.style.fontSize = '24px';
        } else p2.style.fontSize = '36px';
    }

    details2 = !details2
}
const selectDrone = () => {
    if (details3) {
        menu3.style.height = '480px'
        if (screen.width < 800) {
            p3.style.fontSize = '12px'
        } else p3.style.fontSize = '18px'
        p3.innerText = data3[0] + "\n" + data3[1] + "\n" + data3[2] + "\n" + "\n" + data3[3]
        p3.style.textShadow = '0px 0px'
        p3.appendChild(temp_link)

    } else {
        menu3.style.height = '15vh'
        p3.innerText = 'informacije o nama'
        p3.style.textShadow = '2px 2px dimgray';
        if (screen.width < 800) {
            p3.style.fontSize = '24px';
        } else p3.style.fontSize = '36px';
    }

    details3 = !details3
}
