const formatMoney = (price) => {
    // Ép kiểu chuỗi số về dạng số
    const numberPrice = Number(price);
  
    // Kiểm tra xem giá trị có phải là một số hợp lệ hay không
    if (isNaN(numberPrice)) {
      return "Giá trị không hợp lệ";
    }
  
    // Định dạng số tiền theo định dạng của Việt Nam đồng
    return numberPrice.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  };

export default formatMoney