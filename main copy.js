let currentImgIndex = 0;

for (i = 0; i < 3; i++) {
    let img = document.createElement('img')
    img.src = './src/' + i + '.jpg'
    img.className = 'img'
    slider.appendChild(img)
}
let imgs = document.querySelectorAll('.img')
imgs.forEach(img => img.className = 'hiddenRight')
imgs[0].className = 'current'

function move(firstImg, from, secondImg, to){
    firstImg.style.transition = '0s'
    firstImg .className = from
    setTimeout(() => {
        firstImg.style.transition = '0.5s'
        firstImg.className = 'current'
        secondImg.className = to
    }, 10);
}

nextBtn.onclick = () => {
    currentImgIndex++

    if (currentImgIndex == imgs.length) {
        currentImgIndex = 0
        imgs[0].style.transition = '0s'
        imgs[0].className = 'hiddenRight'

        setTimeout(() => {
            imgs[0].style.transition = '0.5s'
            imgs[0].className = 'current'
            imgs[imgs.length - 1].className = 'hiddenLeft'
        }, 10);

    } else {
        imgs[currentImgIndex].style.transition = '0s'
        imgs[currentImgIndex].className = 'hiddenRight'

        setTimeout(() => {
            imgs[currentImgIndex].style.transition = '0.5s'
            imgs[currentImgIndex].className = 'current'
        }, 10);

        imgs[currentImgIndex - 1].className = 'hiddenLeft'
    }
}

prevBtn.onclick = () => {
    currentImgIndex--

    if (currentImgIndex >= 0) {
        imgs[currentImgIndex].style.transition = '0s'
        imgs[currentImgIndex].className = 'hiddenLeft'

        setTimeout(() => {
            imgs[currentImgIndex].style.transition = '0.5s'
            imgs[currentImgIndex].className = 'current'
            imgs[currentImgIndex + 1].className = 'hiddenRight'

        }, 10);
    }

    else {
        console.log('xx')
        imgs[imgs.length - 1].style.transition = '0s'
        imgs[imgs.length - 1].className = 'hiddenLeft'
        setTimeout(() => {
            imgs[imgs.length - 1].style.transition = '0.5s'
            imgs[imgs.length - 1].className = 'current'
            imgs[0].className = 'hiddenRight'
        }, 10);
        currentImgIndex = [imgs.length - 1]
    }
}