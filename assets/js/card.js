const card = document.getElementById("card");
  let isImage1 = true;

  card.addEventListener("click", function() {
    if (isImage1) {
      const img = card.querySelector("img");
      img.src = "./assets/imgs/germinal-emili-zola.jpg"; // Segunda imagem
      card.querySelector("h2").innerText = "Germinal";
      card.querySelector(".card-content").innerHTML = "<h2>Germinal</h2><p>Germinal, obra-prima de Émile Zola, mergulha nas vidas dos mineiros durante a Revolução Industrial na França. O livro revela as lutas, injustiças e a busca por dignidade em meio às condições brutais das minas. Uma narrativa poderosa sobre a resistência e a esperança no cenário implacável da época.</p>";
      card.classList.remove("card-hover"); // Remover efeito de hover
    } else {
      const img = card.querySelector("img");
      img.src = "./assets/imgs/emile-zola.jpg"; // Primeira imagem
      card.querySelector("h2").innerText = "Emilí Zola";
      card.querySelector(".card-content").innerHTML = "<h2>Emilí Zola</h2>";
      card.classList.add("card-hover"); // Restaurar efeito de hover
    }

    isImage1 = !isImage1;
  });