import React, { memo, useState, useEffect } from 'react';
import CalculatingView from "./calculating-view";

import './style.scss';

const HomePage = (props) => {

const [editData, setEditData] = useState({minValue: '', maxValue: '', quantityValue: ''});
const [generateData, setGenData] = useState(null);
const [generateTime, setTimeGenerate] = useState();

const changeHandler = evt => {
	let fieldName = evt.target.name;
	let editValue = evt.target.value;
	setEditData(prevState => ({ ...prevState, [fieldName]: +editValue }))
};


useEffect(() => {
	const dataReady = Object.values(editData).every(el => !isNaN(el) && el > 0);
	if (!dataReady ) return setGenData(null);

	
		genMockData(editData);

},[editData])


const genMockData = (props) => {
	const { minValue, maxValue, quantityValue } = props;
    let count = 0;
    let randomData = [];
      const genRandNumbers = (min, max) => {

         let randomNumbers = Math.floor(Math.random() * (max - min + 1)) + min;
	          min = Math.ceil(min);
	          max = Math.floor(min);

	          const startMockData = new Date().getTime();

	          randomData.push(randomNumbers);
	          randomData.length === quantityValue ? setGenData(randomData) : setGenData(null);

			  const endMockData = new Date().getTime();
			  setTimeGenerate(`${endMockData - startMockData}ms`);
      }
        let timerId = setInterval(_ => {
          count++;
          count === quantityValue + 1 ? clearInterval(timerId) : genRandNumbers(minValue, maxValue);
        });
}
	const fieldItem = Object.keys(editData);

  return (
    <div className={`home-page`}>
    	{fieldItem.map((currField, fieldInd) => (
    	<div className={`home-page__field`} key={fieldInd+1}>
    		<p>Edit&nbsp;:&nbsp;<strong>{currField}</strong></p>
			<input 
				type={`text`}
				name={currField}
				onChange={changeHandler}
				/>
    	</div>))}
    	<ul className={`home-page__generate`}> 
    		<strong>Generate numbers: 
    			{generateData && <span>Время:&nbsp;{generateTime}</span>}
    		</strong>
    		
    		{generateData && 
    			generateData.map((generateItem, itemInd) => 
    			(<li key={itemInd + 1}>{generateItem}</li>))}
    	</ul>
    	{generateData && <CalculatingView calculateData={generateData}/>}
    </div>
  )
}

export default memo(HomePage);

