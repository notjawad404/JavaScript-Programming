const wishList = [
    "Tesla Model 3",
    "MacBook Pro 16",
    "iPhone 12 Pro Max",
    "AirPods Pro",
    "Apple Watch Series 6",
    "iPad Pro 12.9",
]

const wishListElement = document.getElementById("wishlist")

for (let i = 0; i < wishList.length; i++) {
    const wish = wishList[i]

    const wishElement = document.createElement("li")
    wishElement.textContent = wish

    wishListElement.appendChild(wishElement)
}