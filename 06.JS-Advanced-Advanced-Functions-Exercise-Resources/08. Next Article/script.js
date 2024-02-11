function getArticleGenerator(articles) {
    let data = articles;
    let i=0;
    return function show(){
        if(i<data.length){
            let el = document.createElement('article');
            let divRef= document.getElementById('content');
            el.textContent= data[i];
            divRef.appendChild(el);
            i++;
        }
    }
}
