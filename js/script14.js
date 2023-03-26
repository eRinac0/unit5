
function Calculate(n1,n2,n3)
{
    return (n1+n2+n3)/3;
}
function task() {
    let n1 = Number(document.getElementById("n1").value);
let n2 = Number(document.getElementById("n2").value);
let n3 = Number(document.getElementById("n3").value);
    document.getElementById("res").innerHTML = Calculate(n1,n2,n3);

}