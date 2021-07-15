let sout;
sout = "<table border ='4' width = '400' cellspacing='3' cellpadding ='3'>";
for (let i=1; i<10; i++){
    sout = sout + "<tr>";
    for (let j=2; j<10; j++){
        sout = sout+ "<td>" + j + "x" + i + "=" + i*j + "</td>";
    }
    sout = sout + "</tr>";
}
sout = sout+"</table>";
document.write(sout);