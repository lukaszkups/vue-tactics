const state = {
  mechList: [
    {
      id: 1,
      name: 'Tokio A',
      speed: 8,
      attack: 2,
      weight: 35,
      range: 5,
      hp: 750,
      gear: [1, 1],
      maxGearWeight: 2,
      maxWeight: 37
    },
    {
      id: 2,
      name: 'Berlin Mark II',
      speed: 2,
      attack: 8,
      weight: 50,
      range: 8,
      hp: 1200,
      gear: [4, 4, 5],
      maxGearWeight: 4,
      maxWeight: 60
    },
    {
      id: 3,
      name: 'Warsaw 1989',
      speed: 1,
      attack: 10,
      weight: 100,
      range: 9,
      hp: 2500,
      gear: [5, 5, 7, 7],
      maxGearWeight: 5,
      maxWeight: 118
    },
    {
      id: 4,
      name: 'Helsinki AF',
      speed: 5,
      attack: 8,
      weight: 45,
      range: 10,
      hp: 1000,
      gear: [1, 2, 8],
      maxGearWeight: 5,
      maxWeight: 53
    }
  ]
}

export default {
  namespaced: true,
  state
}
