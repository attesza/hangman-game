export default function authHeader() {
    const userStr = localStorage.getItem("userToken");
    let user = null;
    if (userStr)
        user = userStr;
    if (user) {
        return {Authorization: 'Bearer ' + user};
    } else {
        return {Authorization: ''};
    }
}
