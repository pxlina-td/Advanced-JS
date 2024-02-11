function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const searchInput = document.getElementById("searchField");
   const tableRows = Array.from(document.querySelectorAll("tbody tr"));
   function onClick() {
      let searchText = searchInput.value;
      for (let tRow of tableRows){
         let tableData = Array.from(tRow.querySelectorAll("td"));
         for(let data of tableData){
            if(data.textContent.includes(searchText)){
               tRow.classList.add("select");
               break;
            } else { tRow.classList.remove("select");}
         }
      }
      searchInput.value= "";
   }
}