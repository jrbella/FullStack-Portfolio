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
    addDishToCourse(courseName, name, price){
      this._courses[courseName].push({name, price})
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
  
      // log block
      console.log(appetizer)
      console.log(main)
      console.log(desert)
  
      return `Your meal is ${appetizer.name}, ${main.name}, ${desert.name}, The price is $${totalPrice}`
  
    }
  }
  
    
  // mocking test data
  // adding appetizers
  
  menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
  menu.addDishToCourse('appetizers', 'French Fries', 6.25);
  menu.addDishToCourse('appetizers', 'Chicken Soup', 7.25);
  
  
  // adding main courses
  
  menu.addDishToCourse('mains', 'Baked Salmon', 14.25);
  menu.addDishToCourse('mains', 'Grilled Chicken', 12.25);
  menu.addDishToCourse('mains', 'Club Sandwich', 11.25);
  
  // adding deserts
  
  menu.addDishToCourse('deserts', 'Fudge Brownie', 4.25);
  menu.addDishToCourse('deserts', 'Apple Pie', 3.25);
  menu.addDishToCourse('deserts', 'Ice Cream', 7.25);
  
  
  console.log(menu.courses)
  
  // test block
  let meal = menu.generateRandomMeal()
  console.log(meal)
  