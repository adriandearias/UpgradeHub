const myMain$$ = document.querySelector("main");

const getCharacters = () => {
    
  const charac = {
    data: [
      {
        amiiboSeries: "Super Smash Bros.",
        character: "Mario",
        gameSeries: "Super Mario",
        head: "00000000",
        image:
          "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00000002.png",
        name: "Mario",
        release: {
          au: "2014-11-29",
          eu: "2014-11-28",
          jp: "2014-12-06",
          na: "2014-11-21",
        },
        tail: "00000002",
        type: "Figure",
      },
      {
        amiiboSeries: "Super Mario Bros.",
        character: "Mario",
        gameSeries: "Super Mario",
        head: "00000000",
        image:
          "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00340102.png",
        name: "Mario",
        release: {
          au: "2015-03-21",
          eu: "2015-03-20",
          jp: "2015-03-12",
          na: "2015-03-20",
        },
        tail: "00340102",
        type: "Figure",
      },
      {
        amiiboSeries: "Super Mario Bros.",
        character: "Mario",
        gameSeries: "Super Mario",
        head: "00000000",
        image:
          "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-003c0102.png",
        name: "Mario - Gold Edition",
        release: {
          au: "2015-06-25",
          eu: null,
          jp: "2015-12-17",
          na: "2015-03-20",
        },
        tail: "003c0102",
        type: "Figure",
      },
      {
        amiiboSeries: "Super Mario Bros.",
        character: "Mario",
        gameSeries: "Super Mario",
        head: "00000000",
        image:
          "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-003d0102.png",
        name: "Mario - Silver Edition",
        release: {
          au: "2015-05-30",
          eu: null,
          jp: null,
          na: "2015-05-29",
        },
        tail: "003d0102",
        type: "Figure",
      },
      {
        amiiboSeries: "8-bit Mario",
        character: "Mario",
        gameSeries: "Super Mario",
        head: "00000000",
        image:
          "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-02380602.png",
        name: "8-Bit Mario Classic Color",
        release: {
          au: "2015-09-12",
          eu: "2015-11-09",
          jp: "2015-09-10",
          na: "2015-09-11",
        },
        tail: "02380602",
        type: "Figure",
      },
      {
        amiiboSeries: "8-bit Mario",
        character: "Mario",
        gameSeries: "Super Mario",
        head: "00000000",
        image:
          "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-02390602.png",
        name: "8-Bit Mario Modern Color",
        release: {
          au: "2015-10-24",
          eu: "2015-10-23",
          jp: "2015-09-10",
          na: "2015-09-11",
        },
        tail: "02390602",
        type: "Figure",
      },
      {
        amiiboSeries: "Super Mario Bros.",
        character: "Mario",
        gameSeries: "Super Mario",
        head: "00000000",
        image:
          "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-03710102.png",
        name: "Mario - Wedding",
        release: {
          au: "2017-10-27",
          eu: "2017-10-27",
          jp: "2017-10-27",
          na: "2017-10-27",
        },
        tail: "03710102",
        type: "Figure",
      },
      {
        amiiboSeries: "Super Nintendo World",
        character: "Mario",
        gameSeries: "Super Mario",
        head: "00000003",
        image:
          "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000003-039bff02.png",
        name: "Mario - Power Up Band",
        release: {
          au: null,
          eu: null,
          jp: "2021-02-04",
          na: null,
        },
        tail: "039bff02",
        type: "Band",
      },
      {
        amiiboSeries: "Super Smash Bros.",
        character: "Mario",
        gameSeries: "Super Mario",
        head: "00000100",
        image:
          "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000100-00190002.png",
        name: "Dr. Mario",
        release: {
          au: "2015-07-23",
          eu: "2015-07-17",
          jp: "2015-07-17",
          na: "2015-09-11",
        },
        tail: "00190002",
        type: "Figure",
      },
      {
        amiiboSeries: "Super Mario Bros.",
        character: "Mario",
        gameSeries: "Super Mario",
        head: "00000300",
        image:
          "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000300-03a60102.png",
        name: "Mario - Cat",
        release: {
          au: "2021-02-12",
          eu: "2021-02-12",
          jp: "2021-02-12",
          na: "2021-02-12",
        },
        tail: "03a60102",
        type: "Figure",
      },
      {
        amiiboSeries: "Super Smash Bros.",
        character: "Luigi",
        gameSeries: "Super Mario",
        head: "00010000",
        image:
          "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00010000-000c0002.png",
        name: "Luigi",
        release: {
          au: "2014-12-12",
          eu: "2014-12-19",
          jp: "2014-12-06",
          na: "2014-12-14",
        },
        tail: "000c0002",
        type: "Figure",
      },
      {
        amiiboSeries: "Super Mario Bros.",
        character: "Luigi",
        gameSeries: "Super Mario",
        head: "00010000",
        image:
          "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00010000-00350102.png",
        name: "Luigi",
        release: {
          au: "2015-03-21",
          eu: "2015-03-20",
          jp: "2015-03-12",
          na: "2015-03-20",
        },
        tail: "00350102",
        type: "Figure",
      },
      {
        amiiboSeries: "Super Nintendo World",
        character: "Luigi",
        gameSeries: "Super Mario",
        head: "00010003",
        image:
          "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00010003-039cff02.png",
        name: "Luigi - Power Up Band",
        release: {
          au: null,
          eu: null,
          jp: "2021-02-04",
          na: null,
        },
        tail: "039cff02",
        type: "Band",
      },
      {
        amiiboSeries: "Super Smash Bros.",
        character: "Peach",
        gameSeries: "Super Mario",
        head: "00020000",
        image:
          "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00020000-00010002.png",
        name: "Peach",
        release: {
          au: "2014-11-29",
          eu: "2014-11-28",
          jp: "2014-12-06",
          na: "2014-11-21",
        },
        tail: "00010002",
        type: "Figure",
      },
      {
        amiiboSeries: "Super Mario Bros.",
        character: "Peach",
        gameSeries: "Super Mario",
        head: "00020000",
        image:
          "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00020000-00360102.png",
        name: "Peach",
        release: {
          au: "2015-03-21",
          eu: "2015-03-20",
          jp: "2015-03-12",
          na: "2015-03-20",
        },
        tail: "00360102",
        type: "Figure",
      },
      {
        amiiboSeries: "Super Mario Bros.",
        character: "Peach",
        gameSeries: "Super Mario",
        head: "00020000",
        image:
          "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00020000-03720102.png",
        name: "Peach - Wedding",
        release: {
          au: "2017-10-27",
          eu: "2017-10-27",
          jp: "2017-10-27",
          na: "2017-10-27",
        },
        tail: "03720102",
        type: "Figure",
      },
    ],
  };
  return charac.data;
};

const mapCharacters = (characters) => {
  return characters.map((character) => ({
    name: character.name,
    img: character.image,
    series: character.amiiboSeries,
    gameSerie: character.gameSeries,
  }));
};

const drawCharacters = (characters) => {
  myMain$$.innerHTML = "";
  for (const character of characters) {
    let characterDiv$$ = document.createElement("div");
    characterDiv$$.className = "main__div";

    let characterName$$ = document.createElement("h2");
    characterName$$.textContent = character.name;

    let characterImage$$ = document.createElement("img");
    characterImage$$.setAttribute("src", character.img);
    characterImage$$.setAttribute("alt", character.name);

    let characterSerie$$ = document.createElement("p");
    characterSerie$$.textContent = character.series;

    let characterGames$$ = document.createElement("p");
    characterGames$$.textContent = character.gameSerie;

    characterDiv$$.appendChild(characterName$$);
    characterDiv$$.appendChild(characterImage$$);
    characterDiv$$.appendChild(characterSerie$$);
    characterDiv$$.appendChild(characterGames$$);

    myMain$$.appendChild(characterDiv$$);
  }

  //   const divCarta$$ = document.createElement("div");
  //   divCarta$$.className = "main__div";
  //   divCarta$$.innerHTML = `
  //    <figure class="figure">
  //           <h2>${character.name}</h2>
  //           <img src="${character.img}" alt="${character.name}">
  //           <p>${character.series}</p>
  //           <p>${character.Gameserie}</p>
  //       </figure>
  //       `;
  //   myMain$$.appendChild(divCarta$$);
};
//   characters.forEach((character) => {
//     let characterDiv$$ = document.createElement("div");
//     characterDiv$$.className = "main__div";

//     let characterName$$ = document.createElement("h2");
//     characterName$$.textContent = character.name;

//     let characterImage$$ = document.createElement("img");
//     characterImage$$.setAttribute("src", character.img);
//     characterImage$$.setAttribute("alt", character.name);

//     let characterSerie$$ = document.createElement("p");
//     characterSerie$$.textContent = character.series;

//     let characterGames$$ = document.createElement("p");
//     characterGames$$.textContent = character.gameSerie;

//     characterDiv$$.appendChild(characterName$$);
//     characterDiv$$.appendChild(characterImage$$);
//     characterDiv$$.appendChild(characterSerie$$);
//     characterDiv$$.appendChild(characterGames$$);

//     myMain$$.appendChild(characterDiv$$);
//   });
// };
const drawSearch = (characters) => {
  const input$$ = document.querySelector("input");
  input$$.addEventListener("input", () => {
    searchCharacter(input$$.value, characters);
  });
};
const searchCharacter = (filtro, characters) => {
  let filteredCharacters = characters.filter(
    (character) =>
      character.name.toLowerCase().includes(filtro.toLowerCase()) ||
      character.series.toLowerCase().includes(filtro.toLowerCase())
  );
  drawCharacters(filteredCharacters);
};
const init = () => {
  const characters = getCharacters();
  const mappedCharacters = mapCharacters(characters);
  drawCharacters(mappedCharacters);
  drawSearch(mappedCharacters);
};

init();

