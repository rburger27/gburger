/*
function run() {
  function Generations(HairColor, EyeColor, Vertical) {
    this.HairColor = HairColor;
    this.EyeColor = EyeColor;
    this.Vertical = Vertical;
  }
  let granparents = new Generations('Brown', 'Blue', 24);
  let parents = new Generations('Black', 'Green', 20);
  let children = new Generations('Blonde', 'Brown', 22);

  function inherertTraits() {
    console.log('Grandpa can jump ' + granparents.Vertical + " inches!");
    console.log('Dad can jump ' + parents.Vertical + " inches!");
    console.log('I can jump ' + children.Vertical + " inches!");
  }
  inherertTraits();
}
*/
function run() {
  class Generations {
    set hairColor(hair) {
      this._hairColor = hair;
    }
    get hairColor() {
      return this._hairColor;
    }
    set eyeColor(eye) {
      this._eyeColor = hair;
    }
    get eyeColor() {
      return this._eyeColor;
    }
    set vertical(jump) {
      this._vertical = jump;
    }
    get vertical() {
      return this._vertical;
    }
  }

  var grandparents = new Generations();
  grandparents.hair = 'Brown';
  grandparents.eye = 'Blue';
  grandparents.jump = 25;

  var parents = new Generations();
  parents.hair = 'Black';
  parents.eye = 'Blue';
  parents.jump = 20;

  var children = new Generations();
  children.hair = 'Black';
  children.eye = 'Blue';
  children.jump = 21;

  console.log('Grandpa can jump ' + grandparents.jump + ' inches!');
  console.log('Dad can jump ' + parents.jump + ' inches!');
  console.log('I can jump ' + children.jump + ' inches!');
}
/*
function run() {
  class Generations{
    constructor(hairColor, eyeColor, vertical){
      this.hairColor = HairColor;
      this.eyeColor = EyeColor;
      this.vertical = Vertical;
    }
  }
  let grandparents = Generations('Brown', 'Blue', 24);
  console.log(grandparents);
}
*/
