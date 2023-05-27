const allOrder = [
    {
        productName: 'Tea pot',
        isDigital: false,
        isCancelled: false,
        isOpen: false
    },
    {
      productName: 'Blue Gilden Mens Hoodie',
        isDigital: false,
        isCnacelled: true,
        isOpen: false
    },
    {
      productName: 'Code Complete Kindle Book',
        isDigital: true,
        isCancelled: true,
        isOpen: false
    },
    {
      productName: 'Atomic Habits Kindle Book',
        isDigital: true,
        isCancelled: false,
        isOpen: false
    }
    ];
    
    const digitalOrders = allOrder.filter(arrItem => {
        return arrItem.isDigital;
    })
    const diitalCancelledOrder = allOrder.filter((orderItem) => {
        return orderItem.isDigital && orderItem.isCancelled;
      })
      
    
