var endDate = new Date();
var cookie = document.cookie.value;

endDate = new Date(endDate.getTime() + (365 * 24 * 60 * 60 * 1000));

if (document.cookie.length == 0) {
    document.cookie = "name=1stVisit; expires=" + endDate.toUTCString();
    document.getElementById("greet").innerHTML = "Hi and welcome to our website!";
} else {
    if (cookie != 0) {
        document.cookie = "name=Not1stVisit; expires=" + endDate.toUTCString();
        document.getElementById("greet").innerHTML = "Hello again! How's it going?";
    }
}
