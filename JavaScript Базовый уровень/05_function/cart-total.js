 function calculate(n,m,e = null) {
    let sum = n;


    if(e === "ДАРИМ300") {
        sum = sum - 300
        if (sum < 300) {
            sum = 0;
            
        }
    }

    if( m >= 10) {
        let skidka = (sum * 5) / 100
        sum = sum - skidka
    }

    if(sum >= 50000) {
        let skidka = (sum * 20) / 100
        sum = sum - skidka
        
    }

    if( e === "СКИДКА15" && sum >= 20000) {
        let skidka = (sum * 15) / 100
        sum = sum - skidka
    }

    return sum
}


