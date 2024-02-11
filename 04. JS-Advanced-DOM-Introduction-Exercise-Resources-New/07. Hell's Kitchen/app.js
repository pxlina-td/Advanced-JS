function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   const inputRef = document.querySelector("textarea");
   function onClick () {
      let data = JSON.parse(inputRef.value);
      let result = {};

      for(let line of data){
         let [name, workers] = line.split(" - ");
         

         if(!result.hasOwnProperty(name)){
            result[name]={
               avgSal:0,
               bestSal:0,
               workers:[]
            }
         }
      }
   }
}