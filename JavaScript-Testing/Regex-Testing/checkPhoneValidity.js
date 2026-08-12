const validPhone = (phone) => {
  const isphone = /^(\+?)([0-9]{2})?([0-9]{10})$/;
  const result =  isphone.test(phone);
  console.log(phone +" = "+result)
};

validPhone("+929876543210");
validPhone("29876543210"); 
validPhone("987654321");