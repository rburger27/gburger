function run() {
    function Generations(HairColor,EyeColor,Vertical){
        this.HairColor = HairColor;
        this.EyeColor = EyeColor;
        this.Vertical = Vertical;
    }
    let granparents = new Generations('Brown','Blue',24);
    let parents = new Generations('Black','Green',20);
    let children = new Generations('Blonde','Brown',22);

    function inherertTraits() {
        console.log('Grandpa can jump ' + granparents.Vertical + " inches!");
        console.log('Dad can jump ' + parents.Vertical + " inches!" );
        console.log('I can jump ' + children.Vertical + " inches!" );
    }
    inherertTraits();
}
