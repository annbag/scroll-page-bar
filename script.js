//właściwości ktorych bedziemy potzrebować:
//window.scrollY - właściwość o którą (o ile) skrolowaliśmy naszą stronę, 
//nie przesuwamy strony jeśli ma 100vh, od wartości o którą ptrzsuwamy odejmowane jest okno przeglądarki
//document.documentElement.offsetHeight - wysokość naszej całej strony
//window.innerHeight - wysokość okna przeglądarki

//pobranie diva z klasą status, teraz możemy na nim pracować
const bar = document.querySelector('.status')
const statusBar = () => {
	currentScroll = Math.round(window.scrollY / (document.documentElement.offsetHeight - window.innerHeight) * 100);
	bar.style.width = currentScroll + '%'; // nadpisuje wartość z css
	//console.log(currentScroll);
}

window.addEventListener('scroll', statusBar)

//Math.round -->metoda, zaokrąglenie 