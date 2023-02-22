import * as React from "react";
import { Link, Redirect, useNavigate, useLocation } from "react-router-dom";

import "../App.css";
import group171 from "./assets/group171.svg";
import icon2 from "./assets/icon2.svg";
import icon from "./assets/icon.svg";
import divider from "./assets/divider.svg";
import icon3 from "./assets/icon3.svg";
import illustrations from "./assets/illustrations.svg";
import group17 from "./assets/group17.svg";
import arrowUp from "./assets/arrowUp.svg";
import iconArrowDown from "./assets/iconArrowDown.svg";
import illustration from "./assets/illustration.svg";
import socials from "./assets/socials.svg";
import group96 from "./assets/group96.svg";
import maskGroup from "./assets/maskGroup.svg";
import bitcoin from "./assets/bitcoin.svg";
import arrowRight from "./assets/arrowRight.svg";
import group97 from "./assets/group97.svg";
import rectangle75 from "./assets/rectangle75.svg";
import bankumnwwtusc from "./assets/bankumnwwtusc.svg";
import icon1 from "./assets/icon1.svg";
import hmcodxliigxpb from "./assets/hmcodxliigxpb.svg";
import logoEthereum from "./assets/logoEthereum.svg";
import pqdkyzzznjnmk from "./assets/pqdkyzzznjnmk.svg";
import logo from "./assets/logo.svg";
import visa from "./assets/visa.svg";
import xeoqnjjtowrim from "./assets/xeoqnjjtowrim.svg";
import group111 from "./assets/group111.svg";
import logolite from "./assets/logolite.svg";
import wumhwlyymifjo from "./assets/wumhwlyymifjo.svg";
import icon4 from "./assets/icon4.svg";
import fatupxjfrzstt from "./assets/fatupxjfrzstt.svg";
import mastercard from "./assets/mastercard.svg";
import lgsbdbpmvgywp from "./assets/lgsbdbpmvgywp.svg";
import icon5 from "./assets/icon5.svg";
import defdccfrqlyna from "./assets/defdccfrqlyna.svg";
import Button from "react-bootstrap/Button";

const Landing = () => {
  const navigate = useNavigate();
  const propsData = {
    button: {
      variant: "outline-danger",
      disabled: false,
      children: "Register",
    },
    button1: {
      size: "lg",
      disabled: false,
      variant: "outline-success",
      children: "Try for FREE",
    },
    button2: {
      variant: "primary",
      size: "lg",
      active: true,
      children: "Learn More",
    },
    button3: {
      variant: "outline-info",
      active: true,
      children: "Calculate",
    },
    button4: {
      size: "lg",
      variant: "outline-danger",
      disabled: false,
      active: true,
      children: "Start mining",
    },
    button5: {
      variant: "outline-danger",
      size: "lg",
      disabled: false,
      active: true,
      children: "Learn More",
    },
    button6: {
      variant: "outline-danger",
      active: true,
      disabled: false,
      size: "lg",
      children: "Learn More",
    },
    button7: {
      size: "lg",
      disabled: false,
      active: true,
      variant: "outline-danger",
      children: "Learn More",
    },
    button8: {
      disabled: false,
      variant: "outline-success",
      size: "lg",
      children: "Subscribe",
    },
  };
  return (
    <div className="design">
      <div className="header">
        <div className="flex-container">
          {/* <img className="logo-1" src={logo} /> */}
          <span className="RASHEL AGENCIES">RASHEL AGENCIES</span>
          <span className="products">Products</span>
          <span>Features</span>
          <span>About</span>
          <span>Contact</span>
          <a className="login" href="/login">
            {/* <span className="login">Login</span> */}
            login
          </a>
          {/* nagiagate("/login") */}

          <img className="divider" src={divider} />
          <Button className="button-instance" {...propsData.button} />
        </div>
        <div className="flex-container-1">
          <div className="base">
            {/* <div className="save">
              <span className="num-75-save">75% SAVE</span>
            </div> */}
            {/* <span className="for-the-black-friday">
              For the Black Friday weekend
            </span> */}
          </div>
          <Button className="button-instance-1" {...propsData.button1} />
          {/* <span className="buy-and-sell-cryptoc">
            Buy and sell cryptocurrencies, trusted by 10M wallets with over $30
            billion in transactions.
          </span> */}
          <span className="fastest-secure-plat">
            Fastest &amp; secure platform to invest in crypto
          </span>
          <img className="dscthmnxrdant" src={bankumnwwtusc} />
          <img className="illustration" src={illustration} />
        </div>
      </div>
      <div className="why-crappo">
        <div className="flex-container-2">
          <div className="flex-container-3">
            <img className="icon-5" src={icon5} />
            <div className="flex-container-4">
              <span className="num-30-b">$30B</span>
              <span className="digital-currency-exc">
                Digital Currency Exchanged
              </span>
            </div>
            <img className="icon-4" src={icon4} />
            <div className="flex-container-5">
              <span className="num-10-m">10M+</span>
              <span className="trusted-wallets-inve">
                Trusted Wallets Investor
              </span>
            </div>
          </div>
          <div className="flex-container-6">
            <img className="yeetbkuzjtkfk" src={xeoqnjjtowrim} />
            <img className="illustrations" src={illustrations} />
          </div>
        </div>
        <div className="flex-container-7">
          <div className="flex-container-8">
            <img className="icon-3" src={icon3} />
            <div className="flex-container-9">
              <span className="num-195">195</span>
              <span className="countries-supported">Countries Supported</span>
            </div>
            <img className="fatupxjfrzstt" src={fatupxjfrzstt} />
          </div>
          <span className="why-you-should-choos">
            Why you should choose RASHEL AGENCIES
          </span>
          <span className="experience-the-next">
            Experience the next generation cryptocurrency platform. No financial
            borders, extra fees, and fake reviews.
          </span>
          <div className="flex-container-10">
            <Button className="button-instance-2" {...propsData.button2} />
            <img className="lgsbdbpmvgywp" src={lgsbdbpmvgywp} />
          </div>
        </div>
      </div>
      <div className="trade-securely">
        <div className="bg">
          <span className="check-how-much-you-c">
            Check how much you can earn
          </span>
          <span className="lets-check-your-hash">
            Let's check your hash rate to see how much you will earn today,
            Exercitation veniam consequat sunt nostrud amet.
          </span>
          <div className="base-1">
            <div className="flex-container-11">
              <span className="enter-your-hash-rate">Enter your hash rate</span>
              <hr className="form-1" />
            </div>
            <div className="flex-container-12">
              <div className="flex-container-13">
                <span className="t-hs">TH&#x2F;s</span>
                <img className="icon-arrow-down" src={iconArrowDown} />
              </div>
              <hr className="form-2" />
            </div>
            <Button className="button-instance-3" {...propsData.button3} />
          </div>
        </div>
        <div className="base-2">
          <span className="estimated-24-hour-re">
            ESTIMATED 24 HOUR REVENUE:
          </span>
          <span className="num-0055-130-59-eth-1">
            0.055 130 59 ETH ($1275)
          </span>
          <span className="revenue-will-change">
            Revenue will change based on mining difficulty and Ethereum price.
          </span>
        </div>
        <span className="trade-securely-and-m">
          Trade securely and market the high growth cryptocurrencies.
        </span>
        <div className="flex-container-14">
          <div className="base-3">
            <img className="icon" src={icon} />
            <div className="flex-container-15">
              <span className="bitcoin">Bitcoin</span>
              <span className="btc">BTC</span>
            </div>
            <span className="digital-currency-in">
              Digital currency in which a record of transactions is maintained.
            </span>
            <Button className="button-instance-4" {...propsData.button4} />
          </div>
          <div className="base-4">
            <img className="icon-2" src={icon2} />
            <div className="flex-container-16">
              <span className="ethereum">Ethereum</span>
              <span className="eth">ETH</span>
            </div>
            <span className="blockchain-technolog">
              Blockchain technology to create and run decentralized digital
              applications.
            </span>
            <img className="arrow-right-1" src={arrowRight} />
          </div>
          <div className="base-5">
            <img className="icon-1" src={icon1} />
            <div className="flex-container-17">
              <span className="litecoin">Litecoin</span>
              <span className="ltc">LTC</span>
            </div>
            <span className="cryptocurrency-that">
              Cryptocurrency that enables instant payments to anyone in the
              world.
            </span>
            <img className="arrow-right" src={arrowRight} />
          </div>
        </div>
      </div>
      <div className="features">
        <div className="flex-container-18">
          <img className="hmcodxliigxpb" src={hmcodxliigxpb} />
          <span className="market-sentiments-po">
            Market sentiments, portfolio, and run the infrastructure of your
            choice
          </span>
        </div>
        <div className="flex-container-19">
          <div className="flex-container-20">
            <span className="invest-smart">Invest Smart</span>
            <span className="get-full-statistic-i">
              Get full statistic information about the behaviour of buyers and
              sellers will help you to make the decision.{" "}
            </span>
            <Button className="button-instance-5" {...propsData.button5} />
          </div>
          <div className="flex-container-21">
            <div className="rectangle-74">
              <div className="flex-container-22">
                <img className="group-171" src={group171} />
                <div className="flex-container-23">
                  <span className="bitcoin-1">Bitcoin</span>
                  <span className="num-000080-btc">0.00080 BTC</span>
                </div>
                <span className="btc-1">BTC</span>
                <span className="num-125">+125%</span>
              </div>
              <img className="group-111" src={group111} />
            </div>
            <div className="rectangle-37">
              <span className="increase-in-trade">Increase in Trade</span>
              <div className="flex-container-24">
                <span className="num-75">+75%</span>
                <img className="arrow-up" src={arrowUp} />
              </div>
              <span className="sell-option">Sell option</span>
            </div>
            <div className="rectangle-32">
              <span className="num-1532">$15.32</span>
              <span className="price-in-dollar">Price in dollar</span>
            </div>
          </div>
        </div>
        <div className="flex-container-25">
          <img className="rectangle-75" src={rectangle75} />
          <div className="flex-container-26">
            <span className="detailed-statistics">Detailed Statistics</span>
            <span className="view-all-mining-rela">
              View all mining related information in realtime, at any point at
              any location and decide which polls you want to mine in.
            </span>
            <Button className="button-instance-6" {...propsData.button6} />
          </div>
        </div>
        <div className="flex-container-27">
          <div className="flex-container-28">
            <span className="grow-your-profit-and">
              Grow your profit and track your investments
            </span>
            <span className="use-advanced-analyti">
              Use advanced analytical tools. Clear TradingView charts let you
              track current and historical profit investments.
            </span>
            <Button className="button-instance-7" {...propsData.button7} />
          </div>
          <div className="flex-container-29">
            <div className="rectangle-76">
              <img className="logo-ethereum" src={logoEthereum} />
              <div className="flex-container-30">
                <span className="eth-1">ETH</span>
                <span className="ethereum-1">Ethereum</span>
              </div>
              <span className="num-15683">$156.83</span>
              <img className="group-97" src={group97} />
              <span className="num-09">-0.9%</span>
              <span className="num-1812350">$1812350</span>
            </div>
            <div className="base-6">
              <div className="flex-container-31">
                <img className="group-17" src={group17} />
                <img className="logolite" src={logolite} />
              </div>
              <div className="flex-container-32">
                <span className="btc-2">BTC</span>
                <span className="bitcoin-2">Bitcoin</span>
                <span className="ltc-1">LTC</span>
                <span className="litecoin-1">Litecoin</span>
              </div>
              <div className="flex-container-33">
                <span className="price">Price</span>
                <span className="num-6750">$6750</span>
                <span className="num-8535">$8535</span>
              </div>
              <div className="flex-container-34">
                <span className="change">Change</span>
                <div className="flex-container-35">
                  <img className="group-96" src={group96} />
                  <span className="num-73">+7.3%</span>
                </div>
                <div className="flex-container-36">
                  <img className="group-98" src={group96} />
                  <span>+8.2%</span>
                </div>
              </div>
              <div className="flex-container-37">
                <span className="volume-24-h">Volume (24h)</span>
                <span className="num-3420214">$3420214</span>
                <span className="num-5820399">$5820399</span>
              </div>
            </div>
            <img className="pqdkyzzznjnmk" src={pqdkyzzznjnmk} />
          </div>
        </div>
      </div>
      <div className="start-mining">
        <img className="tilmnnpjdvkrm" src={wumhwlyymifjo} />
        <div className="base-7">
          <div className="cat-absolute-container">
            <div className="flex-container-38">
              <span className="start-mining-now">Start mining now</span>
              <span className="join-now-with-crappo">
                Join now with RASHEL AGENCIES to get the latest news and start
                mining now
              </span>
            </div>
            <div className="flex-container-39">
              <span className="enter-your-email">Enter your email</span>
              <hr className="form" />
            </div>
            <Button className="button-instance-8" {...propsData.button8} />
          </div>
          <img className="mask-group" src={maskGroup} />
        </div>
        <img className="jyqpjjspmzqzo" src={defdccfrqlyna} />
      </div>
      <div className="footer">
        <div className="flex-container-40">
          <div className="flex-container-41">
            <span className="RASHEL AGENCIES-1">RASHEL AGENCIES</span>
          </div>
          <span className="num-2021-crappo-all-r">
            ©2021 RASHEL AGENCIES. All rights reserved
          </span>
        </div>
        <div className="flex-container-42">
          <span className="quick-link">Quick Link</span>
          <span className="home-products-about">
            Home Products About Features Contact
          </span>
        </div>
        <div className="flex-container-43">
          <span className="resources">Resources</span>
          <span className="download-whitepapper">
            Download Whitepapper Smart Token Blockchain Explorer Crypto API
            Interest
          </span>
        </div>
        <div className="flex-container-44">
          <span className="we-accept-following">
            We accept following payment systems
          </span>
          <div className="flex-container-45">
            <img className="visa" src={visa} />
            <img className="mastercard" src={mastercard} />
            <img className="bitcoin-3" src={bitcoin} />
          </div>
          <img className="socials" src={socials} />
        </div>
      </div>
    </div>
  );
};
export default Landing;
