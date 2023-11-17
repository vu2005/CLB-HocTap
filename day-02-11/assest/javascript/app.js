// var products = {
//     phone: [
//         {
//             id:1,
//             name: 'iphone 9',
//             desc: "not available",
//             price: 1000,
//         },
//         {
//             id:2,
//             name: 'iphone 10',
//             desc: "not available",
//             price: 10000,
//         }
//     ]

    
// }
// console.log(products.phone[0].name);
// console.log(products.phone[1].price);
// let currentValue = 1;

// function startClock() {
//   if (currentValue <= 10) {
//     console.log(currentValue);
//     currentValue++;
//   } else {
//     clearInterval(clockInterval);
//   }
// }

// const clockInterval = setInterval(startClock, 1000); // Mỗi 1 giây (1000 ms) gọi hàm startClock

// Để dừng đồng hồ sau khi đạt giá trị 10 (hoặc bất kỳ điều kiện nào khác), bạn có thể sử dụng clearInterval:
// if (currentValue > 10) {
//   clearInterval(clockInterval);
// }

var phut = 10;
var giay = 3;

var dongho = setInterval(function () {
    var phut0ut = phut >= 10 ? phut : "0" + phut;
    var giay0ut = giay >= 10? giay : "0" + giay;
    console.log("thoi gian con lai" + phut0ut + " " + giay0ut);
    let sec = document.getElementById("sec");
    let min = document.getElementById("min");
    sec.innerHTML = phut0ut;
    min.innerHTML = giay0ut;

    giay--;
    if (giay == -1) {
        phut--;
        giay += 60;
    }
}, 1000);