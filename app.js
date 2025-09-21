let url = "https://dog.ceo/api/breeds/image/random";

let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
    let link = await getDog();
    let img  = document.querySelector("#result");
    img.setAttribute("src", link);
});


async function getDog() {
    try {
        let res = await axios.get(url);
        return res.data.message;
    } catch (e) {
console.log("error", e);
        return "error";
}
}