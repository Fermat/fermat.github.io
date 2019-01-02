// What's happening is that appendChild
// removes the node from the document before appending it. 
function reverse(its){
    var ns = document.getElementById(its);
    var i = ns.childNodes.length;
    while (i--)
        ns.appendChild(ns.childNodes[i]);
}
