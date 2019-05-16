var name = document.newVisitor.name.value;

function createCookie() {
    // estrutura da cookie --> key-value; expiration_date; path; domain;

    if(document.cookie.length == 0) {
        document.cookie = "visitorName=" + name + "; max-age=365 * 24 * 60 * 60";
    }
    else
    var getName = [name.split([";"])];
    console.log(getName[0]);
    document.getElementById("newVisitor").innerHTML = getName[0];
}