for (i = 0; i < 10; i++) {
    let elem = document.createElement('span')
    elem.innerHTML = i
    elem.className = 'elem'
    slider.appendChild(elem)
}

let currentImgIndex = 0;
let imgs = document.querySelectorAll('.elem')
imgs.forEach(img => img.className = 'hiddenRight')
imgs[0].className = 'current'

function move(firstImg, from, secondImg, to, newCurrentImgIndex) {
    if (newCurrentImgIndex != undefined) {
        currentImgIndex = newCurrentImgIndex
    }
    firstImg.style.transition = '0s'
    firstImg.className = from
    setTimeout(() => {
        firstImg.style.transition = '0.5s'
        firstImg.className = 'current'
        secondImg.className = to
    }, 10);
}

function moveForward() {
    currentImgIndex++
    currentImgIndex == imgs.length ? move(imgs[0], 'hiddenRight', imgs[imgs.length - 1], 'hiddenLeft', 0) : move(imgs[currentImgIndex], 'hiddenRight', imgs[currentImgIndex - 1], 'hiddenLeft')
}

function moveBack() {
    currentImgIndex--
    currentImgIndex >= 0 ? move(imgs[currentImgIndex], 'hiddenLeft', imgs[currentImgIndex + 1], 'hiddenRight') : move(imgs[imgs.length - 1], 'hiddenLeft', imgs[0], 'hiddenRight', [imgs.length - 1])
}

nextBtn.onclick = () => { moveForward() }
prevBtn.onclick = () => { moveBack() }

// scrolling 
slider.addEventListener('wheel', scrollSlider);

function scrollSlider(event) {
    if (event.wheelDelta) {
        slider = event.wheelDelta;
    } else {
        slider = -1 * event.deltaY;
    }
    if (slider < 0) {
        moveBack()
    } else if (slider > 0) {
        moveForward()
    }
}