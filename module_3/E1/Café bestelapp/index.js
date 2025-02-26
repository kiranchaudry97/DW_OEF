const maakBestelling = (drank = "cola", snack = "chips") => ({ 
    drank,
     snack, 
     timestamp: Date.now() }); // date 

console.log(maakBestelling());      // de bestelling        
console.log(maakBestelling("fanta"));  // bestelling fanta       
console.log(maakBestelling("sprite", "nootjes")); // bestelling sprite en nootjes
