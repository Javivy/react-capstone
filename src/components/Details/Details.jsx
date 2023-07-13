/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './Details.scss';
import { motion } from 'framer-motion';
import * as echarts from 'echarts';
import NavbarDetails from '../Navbar/NavbarDetails';
import { fetchChart, changeVsCurrency } from '../../redux/Coincap';

const Details = () => {
  const chartData = useSelector((store) => store.currencies.chart_data);
  const location = useLocation();
  const dispatch = useDispatch();
  const { state } = location;

  useEffect(() => {
    dispatch(fetchChart(state.state.id));
  }, []);

  useEffect(() => {
    const chart = document.getElementById('chart');
    const myChart = echarts.init(chart);
    const options = {
      xAxis: {
        type: 'time',
      },
      yAxis: {
        type: 'value',
      },
      series: {
        data: chartData,
        type: 'line',
        smooth: true,
        animationDuration: 100,
      },
      tooltip: {
        trigger: 'axis'
      },
      title: {
        text: `${state.state.name} (${state.state.symbol.toUpperCase()}) Chart`
      }
    };

    myChart.setOption(options);
  }, [chartData])

  const handleChangeCurrency = (currency) => {
    dispatch(changeVsCurrency(state.state.id, currency));
    console.log(chartData, state.state.id, currency);
  }

  const handleChangeTemporality = (time) => {
    console.log(time);
  }

  return (
    <>
      <NavbarDetails />
      <div className="details">
        <div className="img-container">
          <motion.img
            className="details-img-icon"
            alt="coin-icon"
            src={state.state.image}
            layoutId={state.state.name}
          />
          <p className="name">{state.state.name}</p>
        </div>
        <div className="details-container">
          <div className="options">
            <label htmlFor="vs_currency">
              Select Currency:
            </label>
            <select name="vs_currency" onChange={(e) => {handleChangeCurrency(e.target.value)}}>
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
              <option value="jpy">JPY</option>
            </select>
            <label htmlFor="vs_currency">
              Select temporality:
            </label>
            <select name="days" onChange={(e) => {handleChangeTemporality(e.target.value)}}>
              <option value="14">7D</option>
              <option value="30">1M</option>
              <option value="360">1Y</option>
            </select>
          </div>
          <div id="chart" />
        </div>
      </div>
    </>
  );
};

export default Details;
