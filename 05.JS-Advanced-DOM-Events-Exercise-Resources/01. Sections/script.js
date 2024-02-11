function create(words) {
   for(let word of words){
      let divEl = document.createElement('div');
      document.getElementById("content").appendChild(divEl);
      let paragraph = document.createElement('p');
      divEl.appendChild(paragraph);
      paragraph.textContent=word;
      paragraph.style.display = "none";
      divEl.addEventListener("click", clickEl)
   }

   function clickEl(event){
      const target = event.currentTarget.children[0];
      target.style.display = "block";
   }
}