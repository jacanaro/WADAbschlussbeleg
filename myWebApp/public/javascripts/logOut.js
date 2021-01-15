function handleLogout () {
    user_name="";
    password="";
    window.localStorage.clear();
    window.location.reload(true);
    window.location.replace('/adviz');
};
