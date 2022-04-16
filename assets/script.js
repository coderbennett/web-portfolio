var themeBtn = $('#themeBtn');
var themeBtnImg = $('#themeBtnImg');
var htmlEl = $('#htmlTag');

themeBtn.on("click", changeTheme);

function changeTheme() {
    if (htmlEl.attr('data-theme') === "forest") {
        htmlEl.attr('data-theme', "garden");
        themeBtnImg.attr('src', "./assets/forestMode.png");
        console.log('button pressed, changed to garden theme')
    } else {
        htmlEl.attr('data-theme', "forest");
        themeBtnImg.attr('src', "./assets/gardenMode.png");
        console.log('button pressed, changed to forest theme')
    }
}