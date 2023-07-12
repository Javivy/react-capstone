/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './Details.scss';
import { motion } from 'framer-motion';
import ApexCharts from 'apexcharts';
import NavbarDetails from '../Navbar/NavbarDetails';
import { fetchChart } from '../../redux/Coincap';

const Details = () => {
  const chartData = useSelector((store) => store.currencies.chart_data);
  console.log(chartData);
  const location = useLocation();
  const dispatch = useDispatch();
  const { state } = location;

  useEffect(() => {
    dispatch(fetchChart(state.state.id));

    const options = {
      chart: {
        type: 'area',
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 1500,
          animatedGradually: {
            enabled: true,
          },
          dynamicAnimation: {
            enabled: true,
            speed: 1400,
          },
        },
        height: '100%',
        zoom: {
          enabled: false,
        },
      },
      stroke: {
        curve: 'smooth',
      },
      series: [
        {
          name: 'Price',
          data: chartData,
        },
      ],
      xaxis: {
        type: 'datetime',
      },
      yaxis: {
        opposite: true,
      },
      theme: {
        palette: 'palette4',
      },
      dataLabels: {
        enabled: false,
      },
    };

    const chart = new ApexCharts(
      document.querySelector('#chart'),
      options,
    );
    chart.render();
  }, []);

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
            <select name="vs_currency">
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
              <option value="jpy">JPY</option>
            </select>
            <label htmlFor="vs_currency">
              Select temporality:
            </label>
            <select name="days">
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
