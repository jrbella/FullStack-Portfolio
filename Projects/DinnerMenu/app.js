const menu = {
    _courses : {
      appetizers : [],
      mains : [],
      deserts : []
    },
  
    // getters and setters
    get appetizers() {
      return this.courses.appetizers
    },
    set appetizers(updateAppetizer){
      this.courses[appetizers] = updateAppetizer
    },
    get mains() {
      return this.courses[mains]
    },
    set mains(updateMains){
      this.courses[mains] = updateMains;
    },
    get deserts() {
      return this.courses[deserts]
    },
    set deserts(updateDeserts){
      this.courses[deserts] = updateDeserts
    },
    get courses(){
      return {
        appetizers : this._courses.appetizers,
        mains : this._courses.mains,
        deserts: this._courses.deserts
      }
    },
    addDishToCourse(courseName, dishName, dishPrice){
      this._courses[courseName].push({dishName, dishPrice})
    },
    getRandomDishFromCourse(courseName){
      const dishes = this._courses[courseName]
      const randomIndex = Math.floor(Math.random() * dishes.length)
      return dishes[randomIndex]
    },
    generateRandomMeal() {
      const appetizer = this.getRandomDishFromCourse('appetizers')
      const main = this.getRandomDishFromCourse('mains')
      const desert = this.getRandomDishFromCourse('deserts')
      const totalPrice = appetizer.price + main.price + desert.price
  
      return `Your meal is ${appetizer.name}, ${main.name}, ${desert.name}, The price is $${totalPrice}`
  
    }
  }
  
  menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
  
  console.log(menu.courses)
  
  // test block
  
  