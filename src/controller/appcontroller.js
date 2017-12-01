export function loadContent(contentArray) {
  contentArray.map(
    (item) =>{
      loadTemplate(item);
    }
  );
}

function loadTemplate(item){
  if ('content' in document.createElement('template')) {
    
        var tile = document.querySelector('#pinContentTile');
        var image = tile.content.querySelectorAll("img");
        image[0].src = item.imageURL;
        var imageCaption = tile.content.querySelector("figcaption");
        imageCaption.textContent = item.imageTitle;
    
        var tb = document.querySelector("#columns");
        var clone = document.importNode(tile.content, true);
        tb.appendChild(clone);
      }
}
  
