const fullName = document.querySelector('.aov4n071 .lzcic4wl')
const listName = [
    '=))))',
    'Developer',
    'Duong Thai Tan',
    'Coder',
    '1=1 =???',
    'I love youuuu x3000',
]
const objects = []
const listColors = ['#2199dc', '#225ee3', '#22e3d4', '#aa22e3']
var index = 0

class Infor {
    constructor() {
        this.text = listName[Math.floor(Math.random()* listName.length)]
        this.color = listColors[Math.floor(Math.random()* listColors.length)]
    }
    create() {
        fullName.innerHTML = `<span style ='color:${this.color}'> ${this.text} </span>`
    }
  }
  
  function addName() {
    for (let i = 0; i < 20; i++) {
      objects.push(new Infor())
    }
  }
  
  addName()
  
  setInterval(() => {
    objects[index].create()
    index++
    if (index == objects.length) {
      index = 0
    }
  }, 200)
