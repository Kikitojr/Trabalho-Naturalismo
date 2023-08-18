const autores = [
  {
    "nome": "Emilí Zola",
    "card": $("#card-emili"),
    "foto": "./assets/imgs/autores/emili.jpg",
    "foto_obra": "./assets/imgs/obras/emili.jpg",
    "obra_exibida": false,
    "descricao": `
      "Germinal": Importante no naturalismo europeu, retrata a vida penosa dos mineiros de
      carvão no século XIX na França, explorando suas condições precárias e miséria.
    `,
  },
  {
    "nome": "Aluisio Azevedo",
    "card": $("#card-aluisio"),
    "foto": "./assets/imgs/autores/aluisio.jpg",
    "foto_obra": "./assets/imgs/obras/aluisio.jpg",
    "obra_exibida": false,
    "descricao": `
      "O Cortiço": Obra principal do autor, lançada em 1890, retrata
      vida nos cortiços de forma realista e influências sociais,
      biológicas e psicológicas nos personagens.
    `,
  },
  {
    "nome": "Thomas Hardy",
    "card": $("#card-thomas"),
    "foto": "./assets/imgs/autores/thomas.jpg",
    "foto_obra": "./assets/imgs/obras/thomas.jpg",
    "obra_exibida": false,
    "descricao": `
      "Tess of the d'Urbervilles": A vida de Tess, camponesa descendente de
      nobres arruinados, aborda classe social, sexualidade e desafios na sociedade.
    `,
  }
];

$(".card-body").hide();

$(".card").click(function () {

  const id = $(this).attr("id");
  const autor = autores.find(autor => autor.card.attr("id") === id);

  autor.card.find(".click-me").hide();

  if (!autor.obra_exibida) {
    autor.card.find(".card-img-top").attr("src", autor["foto_obra"]);
    autor.card.find(".card-title").text('');
    autor.card.find(".card-shadow").hide();
    autor.card.find(".card-body").text(autor["descricao"]);
    autor.card.find(".card-body").show();
    autor.obra_exibida = true;
  }else {
    autor.card.find(".card-img-top").attr("src", autor["foto"]);
    autor.card.find(".card-title").text(autor["nome"]);
    autor.card.find(".card-shadow").show();
    autor.card.find(".card-body").text('');
    autor.card.find(".card-body").hide();
    autor.obra_exibida = false;
  }
    
});