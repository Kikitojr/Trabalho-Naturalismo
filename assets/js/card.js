const card1 = document.getElementById("card");
let isImage1 = true;

card1.addEventListener("click", function() {
  const img = card1.querySelector("img");
  const cardContent = card1.querySelector(".card-content");

  if (isImage1) {
    img.src = "./assets/imgs/germinal-emili-zola.jpg"; // Segunda imagem
    cardContent.innerHTML = "<h2>Germinal</h2><p>Germinal, obra-prima de Émile Zola, mergulha nas vidas dos mineiros durante a Revolução Industrial na França. O livro revela as lutas, injustiças e a busca por dignidade em meio às condições brutais das minas. Uma narrativa poderosa sobre a resistência e a esperança no cenário implacável da época.</p>";
    card1.classList.remove("card-hover");
  } else {
    img.src = "./assets/imgs/emili-2.jpg"; // Primeira imagem
    cardContent.innerHTML = "<h2>Emilí Zola</h2>";
    card1.classList.add("card-hover");
  }

  isImage1 = !isImage1;
});

const card2 = document.getElementById("card2");
let isImage2 = true;

card2.addEventListener("click", function() {
  const img = card2.querySelector("img");
  const cardContent = card2.querySelector(".card-content");

  if (isImage2) {
    img.src = "./assets/imgs/cortiço-aluisio.jpg"; // Segunda imagem
    cardContent.innerHTML = "<h2>O Cortiço</h2><p>O Cortiço, de Aluísio Azevedo, adentra as habitações coletivas do Rio de Janeiro do século XIX, revelando desigualdades sociais e conflitos raciais. A obra expõe as complexas lutas por sobrevivência no cortiço, explorando o impacto do ambiente adverso na vida de seus habitantes e suas trajetórias moldadas pelas circunstâncias.</p>";
    card2.classList.remove("card-hover");
  } else {
    img.src = "./assets/imgs/Aluisio-Azevedo (2).jpg"; // Primeira imagem
    cardContent.innerHTML = "<h2>Aluisio Azevedo</h2>";
    card2.classList.add("card-hover");
  }

  isImage2 = !isImage2;
});

const card3 = document.getElementById("card3");
let isImage3 = true;

card3.addEventListener("click", function() {
  const img = card3.querySelector("img");
  const cardContent = card3.querySelector(".card-content");

  if (isImage3) {
    img.src = "./assets/imgs/obra-do-thomas.jpg"; // Segunda imagem
    cardContent.innerHTML = "<h2>Tess of the D'Urbervilles</h2><p>Tess of the D'Urbervilles,segue a vida de Tess, explorando sua jornada na sociedade vitoriana. A obra aborda sua luta contra um passado trágico, expectativas sociais e limitações de gênero. Uma narrativa que toca moralidade, destino e injustiça, pintando um retrato profundo das complexidades humanas e das forças que moldam sua trajetória.</p>";
    card3.classList.remove("card-hover");
  } else {
    img.src = "./assets/imgs/thomas-hardy.jpg"; // Primeira imagem
    cardContent.innerHTML = "<h2>Thomas Hardy</h2>";
    card3.classList.add("card-hover");
  }

  isImage3 = !isImage3;
});