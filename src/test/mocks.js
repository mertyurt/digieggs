import { CHARACTERS } from "../App";

export const mocks = [
  {
    request: {
      query: CHARACTERS,
      variables: { pageNum: 1, filter: "" },
    },
    result: {
      data: {
        characters: {
          results: [
            {
              id: "1",
              name: "Rick Sanchez",
              status: "Alive",
              image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
              location: {
                name: "Citadel of Ricks",
              },
            },
            {
              id: "2",
              name: "Morty Smith",
              status: "Alive",
              image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
              location: {
                name: "Citadel of Ricks",
              },
            },
            {
              id: "3",
              name: "Summer Smith",
              status: "Alive",
              image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
              location: {
                name: "Earth (Replacement Dimension)",
              },
            },
            {
              id: "4",
              name: "Beth Smith",
              status: "Alive",
              image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
              location: {
                name: "Earth (Replacement Dimension)",
              },
            },
            {
              id: "5",
              name: "Jerry Smith",
              status: "Alive",
              image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
              location: {
                name: "Earth (Replacement Dimension)",
              },
            },
            {
              id: "6",
              name: "Abadango Cluster Princess",
              status: "Alive",
              image: "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
              location: {
                name: "Abadango",
              },
            },
            {
              id: "7",
              name: "Abradolf Lincler",
              status: "unknown",
              image: "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
              location: {
                name: "Testicle Monster Dimension",
              },
            },
            {
              id: "8",
              name: "Adjudicator Rick",
              status: "Dead",
              image: "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
              location: {
                name: "Citadel of Ricks",
              },
            },
            {
              id: "9",
              name: "Agency Director",
              status: "Dead",
              image: "https://rickandmortyapi.com/api/character/avatar/9.jpeg",
              location: {
                name: "Earth (Replacement Dimension)",
              },
            },
            {
              id: "10",
              name: "Alan Rails",
              status: "Dead",
              image: "https://rickandmortyapi.com/api/character/avatar/10.jpeg",
              location: {
                name: "Worldender's lair",
              },
            },
            {
              id: "11",
              name: "Albert Einstein",
              status: "Dead",
              image: "https://rickandmortyapi.com/api/character/avatar/11.jpeg",
              location: {
                name: "Earth (Replacement Dimension)",
              },
            },
            {
              id: "12",
              name: "Alexander",
              status: "Dead",
              image: "https://rickandmortyapi.com/api/character/avatar/12.jpeg",
              location: {
                name: "Anatomy Park",
              },
            },
            {
              id: "13",
              name: "Alien Googah",
              status: "unknown",
              image: "https://rickandmortyapi.com/api/character/avatar/13.jpeg",
              location: {
                name: "Earth (Replacement Dimension)",
              },
            },
            {
              id: "14",
              name: "Alien Morty",
              status: "unknown",
              image: "https://rickandmortyapi.com/api/character/avatar/14.jpeg",
              location: {
                name: "Citadel of Ricks",
              },
            },
            {
              id: "15",
              name: "Alien Rick",
              status: "unknown",
              image: "https://rickandmortyapi.com/api/character/avatar/15.jpeg",
              location: {
                name: "Citadel of Ricks",
              },
            },
            {
              id: "16",
              name: "Amish Cyborg",
              status: "Dead",
              image: "https://rickandmortyapi.com/api/character/avatar/16.jpeg",
              location: {
                name: "Earth (Replacement Dimension)",
              },
            },
            {
              id: "17",
              name: "Annie",
              status: "Alive",
              image: "https://rickandmortyapi.com/api/character/avatar/17.jpeg",
              location: {
                name: "Anatomy Park",
              },
            },
            {
              id: "18",
              name: "Antenna Morty",
              status: "Alive",
              image: "https://rickandmortyapi.com/api/character/avatar/18.jpeg",
              location: {
                name: "Citadel of Ricks",
              },
            },
            {
              id: "19",
              name: "Antenna Rick",
              status: "unknown",
              image: "https://rickandmortyapi.com/api/character/avatar/19.jpeg",
              location: {
                name: "unknown",
              },
            },
            {
              id: "20",
              name: "Ants in my Eyes Johnson",
              status: "unknown",
              image: "https://rickandmortyapi.com/api/character/avatar/20.jpeg",
              location: {
                name: "Interdimensional Cable",
              },
            },
          ],
        },
      },
    },
  },
  /*{
    request: {
      query: GET_DOG,
      variables: { index: 8 },
    },
    error: new Error("Something went wrong"),
  },*/
];
