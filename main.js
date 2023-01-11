const board=document.getElementById("board")
let tileArr=[]
for(let i=0;i<1600;i++){
    let tile=document.createElement("div")
    board.appendChild(tile)
    tile.setAttribute("class", "tile")
    tile.setAttribute("onclick", "startDrawing(event)")
    tileArr.push(tile)
}
function startDrawing(){
tileArr.forEach(element=>{
    element.setAttribute("onmouseover", "colorTile(event)")
})
}
function colorTile(event){
    event.currentTarget.style.backgroundColor=document.getElementById("selected-color").value
    tileArr.forEach(element=>{
        element.setAttribute("onclick", "stopColoring(event)")
    })
}
function stopColoring(){
    tileArr.forEach(element=>{
        element.removeAttribute("onmouseover", "colorTile(event)");
        element.setAttribute("onclick", "startDrawing()")
    })
}
function clearBoard(){
    tileArr.forEach(element=>{
        element.style.backgroundColor="#FFFFFF";
        element.removeAttribute("onmouseover", "colorTile(event)");
        element.setAttribute("onclick", "startDrawing()")
    })
}