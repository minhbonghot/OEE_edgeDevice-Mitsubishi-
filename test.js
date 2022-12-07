if (values.productOk == false) {
    confirmSignal = true;
  }
  if (values.productOk && confirmSignal) {
    prodTemp++;
    confirmSignal = false;
  }
 
  
  function count( { productOk, confirmSignal, prodTemp}) {
    if (productOk == false) {
        confirmSignal = true;
      }
      if (productOk && confirmSignal) {
        prodTemp++;
        confirmSignal = false;
      }
  }

  count({ productOk: values.productOk, confirmSignal, prodTemp})