let tourist = prompt("Qual seu nome turista?")
let city = prompt("Você visitou alguma cidade? (s/n)")
let citylist = []
let numbercity = 0

while(city == 's') {
  citylist[numbercity] = prompt("Qual cidade voce visitou?")
  numbercity += 1

  city = prompt("Você visitou alguma outra cidade? (s/n)")

}
alert(`Turista: ${tourist}
Quantidade de cidades visitadas: ${numbercity}
Cidades visitadas: ${citylist}`)