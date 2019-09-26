class Calculator {

	static  averageHandler = data => {
  	const averageResult = (data.reduce((acc, item) => acc + item, 0) / data.length).toFixed(2);
  	return averageResult;
	};

	static deviationHandler = data => {
	  const quantityElem = data.length;
	  const averageResult = data.reduce((acc, item) => acc + item, 0)  / quantityElem ;
	  const deviationRes = data.map(el => Math.pow((el - averageResult), 2))
	                           .reduce((acc, item) => acc + +item, 0);
	  const deviatoonResult = Math.sqrt(deviationRes/(quantityElem-1)).toFixed(2);
	  return deviatoonResult;
	};

	static modalHandler = data => {
	  const repeatObj = data.reduce((newObj, currEl) => {
	        newObj[currEl] = (newObj[currEl] || 0) + 1;
	        return newObj;
	  }, {});
	  const findMax = Math.max(...Object.values(repeatObj));
	  const modalResult = Object.keys(repeatObj).filter(key => repeatObj[key] === findMax);
	  return modalResult;
	};

	static medianHandler = data => {
	  const lengthData = Math.floor(data.length / 2);
	  const sortedData = data.sort((a,b) => b - a);
	  const evenData = sortedData[lengthData -1];
	  const medianResForEven = (evenData + sortedData[lengthData]) / 2;
      return data.length % 2 === 0 ? medianResForEven : sortedData[lengthData]
	};

}

export default Calculator;
