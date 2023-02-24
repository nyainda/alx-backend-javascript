const calculateNumber = (type, a, b) => {
  const num1 = Math.round(a);
  const num2 = Math.round(b);

  switch (type) {
    case 'SUM':
      return num1 + num2
    case 'SUBTRACT':
      return num1 - num2
    case 'DIVIDE':
      return num2 === 0 ? 'Error': num1 / num2;
  }
}

module.exports = calculateNumber;
