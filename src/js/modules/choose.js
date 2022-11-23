
function choose(selBtns,
                selImgs,
                selBtnActiv,
                selImgActiv,
                )
{
    //opher gaz
    const btns = document.querySelectorAll(selBtns),
        imgs = document.querySelectorAll(selImgs),
        btnActiv = selBtnActiv,
        imgActiv = selImgActiv;


    let num = 0;
    function showButton(activ, arr, activClass) {
        arr.forEach((item) => {
            item.classList.remove(activClass);
            activ.classList.add(activClass);
        });
        arr.forEach((item, i) => {
            if (item.classList.contains(activClass)) {
                num = i;
            }
        });
    }

    function showImg(arr, activClass) {
        arr.forEach((item, i) => {
            item.classList.add(activClass);
            if (i == num) {
                item.classList.remove(activClass);
            }
        });
    }

    btns.forEach((item) => {
        item.addEventListener('click', (event) => {
            let activ = event.target;
            showButton(activ, btns, btnActiv);
            showImg(imgs, imgActiv);
        });
    });
}

export default choose;