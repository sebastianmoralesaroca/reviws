const imgRev = document.getElementById ("imgRev");
const titleRev = document.getElementById ("titleRev");
const spanRev = document.getElementById ("spanRev");
const textRev = document.getElementById ("textRev");
const btnRev = document.getElementById ("btnRev");


class person {
    constructor (name, profetion, text) {
        this.name = name;
        this.profetion = profetion;
        this.text = text;
    }
}

let anna = new person ("Anna Johnson", "Web Developer", "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.");
let Peter = new person ("Peter Joner", "Web Designer", "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry.");
let susan = new person ("Susan Smith", "Community Manager", "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry.");
let bill = new person ("Bill Anderson", "Enginner Software", "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.");
let valentina = new person ("Valentina Cuevas", "Influencer", "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry.");


function a () {
    console.log(2);
};

function b () {
    console.log(3);
};

function c () {
    console.log(5);
};

function z () {
    console.log(a(), b(), c())
};

console.log(z());