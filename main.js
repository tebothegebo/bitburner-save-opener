let SaveFile;
function decrypt() {
    SaveFile = document.getElementById("save").value;
    document.write(atob(SaveFile));
}
function encrypt() {
    SaveFile = document.getElementById("save").value;
    document.write(btoa(SaveFile));
}