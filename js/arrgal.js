let path = './img/'; // pathen er kun / da billederne ligger i samme mappe som html og js filerne
let imgArr = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg']; //her er der et array med navnene på billederne
function Swap(obj, id) { 
    let i = obj.selectedIndex;
    document.getElementById(id).src = path + imgArr[i-1];

}