function Login()    {
    id_name = document.getElementById("id_name").value;
    localStorage.setItem("id_name", id_name);
    window.Location="social.html";
}