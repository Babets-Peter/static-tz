import React, { memo, useState, useEffect } from 'react';
import Calculator from '../static/index';

const CalculatingView = (props) => {
	const { calculateData } = props;
	const [average, setAverage] = useState();
	const [deviation, setDeviation] = useState();
	const [modal, setModal] = useState();
	const [median, setMedian] = useState();
	const [timeAverage, setTimeAverage]=useState();
	const [timeDeviation, setTimeDeviation]=useState();
	const [timeModal, setTimeModal]=useState();
	const [timeMedian, setTimeMedian]=useState();

	useEffect(() => {
		if(!calculateData) return;

		const startAverage = new Date().getTime();
		setAverage(Calculator.averageHandler(calculateData));
		const endAverage = new Date().getTime();
		setTimeAverage(`${endAverage - startAverage}ms`);

		const startDeviation = new Date().getTime();
		setDeviation(Calculator.deviationHandler(calculateData));
		const endDeviation = new Date().getTime();
		setTimeDeviation(`${endDeviation - startDeviation}ms`);

		const startModal = new Date().getTime();
		setModal(Calculator.modalHandler(calculateData));
		const endModal = new Date().getTime();
		setTimeModal(`${endModal - startModal}ms`);

		const startMedian = new Date().getTime();
		setMedian(Calculator.medianHandler(calculateData));
		const endMedian = new Date().getTime();
		setTimeMedian(`${endMedian - startMedian}ms`);
		
	},[calculateData])
	
  return (
    <div className={`home-page__view-block`}>
    	<span className={`home-page__view-block--title`}>
    		<strong>Calculating result :</strong>
    	</span>
    	<div>
	    	<span>Среднее:</span>
	    	&nbsp;
	    	<p>{average}</p>
	    	<p>Время: {timeAverage}</p>
    	</div>
    	<div>
    		<span>Стандартное отклонение:</span>
    		&nbsp;
    		<p>{deviation}</p>
    		<p>Время: {timeDeviation}</p>
    		</div>
    	<div>
    	<span>Мода:</span>
    	&nbsp;
    	{modal && modal.map((modEl,indEl) => <p key={indEl+1}>{modEl}</p>)}
    	<p>Время: {timeModal}</p>
    	</div>
    	<div>
    		<span>Медиана:</span>
    		&nbsp;
    		<p>{median}</p>
    		<p>Время: {timeMedian}</p>
    	</div>
    </div>
  )
}

export default memo(CalculatingView);