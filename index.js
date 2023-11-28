// ID and Class
const imgRev = document.getElementById ("imgRev");
const titleRev = document.getElementById ("titleRev");
const spanRev = document.getElementById ("spanRev");
const textRev = document.getElementById ("textRev");
const btnRev = document.getElementById ("btnRev");
// IMG
const annaImg = src = "./christina-wocintechchat-com-0Zx1bDv5BNY-unsplash.jpg";
const peterImg = src = "./ian-dooley-d1UPkiFd04A-unsplash.jpg";
const edwardImg = src = "./elizeu-dias-2EGNqazbAMk-unsplash.jpg";
const billImg = src = "./ayo-ogunseinde-sibVwORYqs0-unsplash.jpg";
const valentinaImg = src = "./michael-dam-mEZ3PoFGs_k-unsplash.jpg";

class person {
    constructor (name, profetion, text) {
        this.name = name;
        this.profetion = profetion;
        this.text = text;
    }
}

let anna = new person ("Anna Johnson", "Web Developer", "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.");
let peter = new person ("Peter Joner", "Web Designer", "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry.");
let edward = new person ("Edward Smith", "Community Manager", "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry.");
let bill = new person ("Bill Anderson", "Enginner Software", "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.");
let valentina = new person ("Valentina Cuevas", "Influencer", "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry.");


function annaJ () {
    imgRev.src = annaImg;
    titleRev.innerHTML = anna.name ;
    spanRev.innerHTML = anna.profetion ;
    textRev.innerHTML = anna.text ;
};

function peterJ () {
    imgRev.src = peterImg;
    titleRev.innerHTML = peter.name ;
    spanRev.innerHTML = peter.profetion ;
    textRev.innerHTML = peter.text ;
};

function edwardS () {
    imgRev.src = edwardImg;
    titleRev.innerHTML = edward.name ;
    spanRev.innerHTML = edward.profetion ;
    textRev.innerHTML = edward.text;
};

function billA () {
    imgRev.src = billImg;
    titleRev.innerHTML = bill.name ;
    spanRev.innerHTML = bill.profetion;
    textRev.innerHTML = bill.text ;
};

function valentinaC () {
    imgRev.src = valentinaImg;
    titleRev.innerHTML = valentina.name;
    spanRev.innerHTML = valentina.profetion;
    textRev.innerHTML = valentina.text ;
};

function x () {
         btnRev.addEventListener ( 'click', () => {
        let number = [1, 2, 3, 4, 5] ;
        const random = Math.floor(Math.random() * number.length) ;
        let h = (number[random]) ;
        console.log (h);
        if (h == 1) {
            annaJ();
        } else if (h == 2) {
            peterJ();
        } else if (h == 3) {
            edwardS();
        } else if (h == 4) {
            billA();
        } else {
            valentinaC();
        }
    });
};

x();