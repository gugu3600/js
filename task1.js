const a = "\n";
let store = 0;
function star1(count) {

    for (let i = 0; i <= count; i++) {
        let space = "";
        for (let j = 0; j < i; j++) {
            space += "🧱"
        }

        console.log(space);
        
    }
}

star1(5);
console.log(a)

function star2(len){

    for(let i = 0; i < len ; i++){

        let space = '';
        for(let j = len-i ; j > 0 ; j-- ){

            space += " "
        }

        for(let k = 0 ; k <= i ; k++){

            space+= "*";
        }

        console.log(space);
        
    }
}

star2(5);
console.log(a)


function star3(len){

    for(let i = len ; i > 0; i--){
        let space = "";

        for(let j = i ; j > 0 ; j-- ){

            space += "*";
        }

        console.log(space);
        
    }
}

star3(5);
console.log(a);



function start4(len){

    for(let i = 0; i < len ; i++){

        let space = '';
        for(let j = len-i ; j > 0 ; j-- ){

            space += "  "
        }

        for(let k = 0 ; k <= i+i ; k++){

            space+= "*" + " ";
        }

        console.log(space);
        
    }
}

start4(5);
console.log(a);


function start5(len){

     for(let i = 0; i < len ; i++){

        let space = '';
        for(let j = len-i ; j > 0 ; j-- ){

            space += "  "
        }

        for(let k = 0 ; k <= i+i ; k++){

            space+= "*" + " ";
            store = k;
        }

        console.log(space);
        
    }
    for(let x = len-1 ; x > 0 ; x--){

        let space = '';

        for(let y = x ; y < len+1 ; y++ ){

            space+= "  ";
        }

        for(let z = store-2 ; z >= 0 ;z--){

            space+= "*" + " ";
        }
            store-=2

        console.log(space);

    }

}

start5(5)