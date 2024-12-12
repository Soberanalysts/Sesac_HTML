let selectedProduct = null;
let selectedPaymentMethod = null;
// const clientKey = process.env.TOSS_CLIENT_KEY;
const clientKey = "test_ck_pP2YxJ4K87EZeNNGGqk0VRGZwXLO";
const customerKey = generateRandomString();             // 랜덤 고객
const tossPayments = TossPayments(clientKey);           //토스 객체 초기화
const payment = tossPayments.payment( { customerKey }); //토스의 함수 호출

function selectProduct(event, name, price) {
    selectedProduct = {name, price};
    document.querySelectorAll(".product-button").forEach(button => {
        button.style.backgroundColor = "#ffffff";
    }); 
    event.target.style.backgroundColor = "rgb(229 239 255)";
}

function selectPaymentMethod(method) {
    if (selectedPaymentMethod) {
        document.getElementById(selectedPaymentMethod).style.backgroundColor = "#ffffff";
    }
    selectedPaymentMethod = method;
    document.getElementById(selectedPaymentMethod).style.backgroundColor = "rgb(229 239 255)";
}

async function requestPayment() {
    if (!selectedProduct) {
        alert('상품을 선택해주세요');
        return;
    }

    if (!selectedPaymentMethod) {
        alert('결제수단을 선택해주세요');
        return;
    }

    const { name, price } = selectedProduct;
    const orderId = generateRandomString(); // 주문 ID 생성

    try {
        await payment.requestPayment({
            method: selectedPaymentMethod,
            amount: { currency: "KRW", value: price },
            orderId: orderId,
            orderName: name,
            successUrl: `${window.location.origin}/success.html`,
            failUrl: `${window.location.origin}/fail.html`
        });
    
    } catch(error) {
        alert(`결제 요청중 오류가 발생했습니다. ${error.message}`);
    }
    
}

function generateRandomString() {
    return Math.random().toString(36).slice(2, 10);
}