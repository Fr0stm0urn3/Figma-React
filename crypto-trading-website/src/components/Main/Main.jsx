import styles from "./Main.module.css"
import { FaAngleDown, FaCheckCircle } from "react-icons/fa"
import logo from "../../assets/images/LOGO (10).png"
import lineChart from "../../assets/images/Line 3.png"

const Main = () => {
  return (
    <main className={styles.container}>
      <div className={styles.gridContainer}>
        <div className={styles.header}>
          <h2>Maximize your trading success</h2>
          <div className={styles.subTitle}>
            <div>
              <FaCheckCircle /> No hidden fees
            </div>
            <div>
              <FaCheckCircle /> 100% Safe
            </div>
          </div>
        </div>
        <div className={styles.overview}>
          <h4>Overview</h4>
          <div className={styles.overviewContent}>
            <div className={styles.withIcon}>
              USDT payments
              <FaAngleDown className={styles.angleDown} />
            </div>
            <span className={styles.middleLine} />
            <div>24 H</div>
            <div>7 D</div>
            <div className={styles.whiteDiv}>30D</div>
            <div>1 Y</div>
          </div>
          <div className={styles.rates}>
            <div className={styles.leftRates}>
              <div>ROI (%)</div>
              <div className={styles.green}>+5,123,48950%</div>
              <div>Win Rate</div>
              <div className={styles.white}>60%</div>
            </div>
            <div className={styles.rightRates}>
              <div>Total PNL(USD)</div>
              <div className={styles.green}>+7123,489,5089%</div>
              <div>Trades</div>
              <div className={styles.white}>235</div>
            </div>
          </div>
          <button className={styles.copyButton}>CopyTrade</button>
        </div>
        <div className={styles.traded}>
          <h4>Traded Pairs</h4>
          <button className={styles.withIcon}>
            Last 30 days <FaAngleDown className={styles.iconDown} />
          </button>
          <div className={styles.circleChart}>
            <div className={styles.innerCircleChart}>
              <div>30% USDT</div>
              <div>EtmilUsdt</div>
              <div>Proposal</div>
            </div>
          </div>
          <ul>
            <li>
              <div className={styles.circle} /> ETMILUSDT Proposal
            </li>
            <li>
              <div className={styles.circle} /> ETMILUSDT Proposal
            </li>
            <li>
              <div className={styles.circle} /> ETMILUSDT Proposal
            </li>
            <li>
              <div className={styles.circle} /> ETMILUSDT Proposal
            </li>
            <li>
              <div className={styles.circle} /> Others
            </li>
          </ul>
        </div>
        <div className={styles.john}>
          <div className={styles.johnHeader}>
            <img src={logo} alt="" />
            <div>
              <h5>john ceina</h5>
              <div className={styles.password}>John**@****</div>
            </div>
          </div>
          <div className={styles.followerCount}>
            <div>4 following</div>
            <div>500 followers</div>
          </div>
          <div className={styles.buttons}>
            <button className={styles.followBtn}>Follow</button>
            <button className={styles.shareBtn}>Share</button>
          </div>
        </div>
        <div className={styles.performance}>
          <h4>Performance</h4>
          <div className={styles.performanceContent}>
            <div className={styles.withIcon}>
              Total PNL <FaAngleDown className={styles.angleDown} />
            </div>
            <span className={styles.middleLine} />
            <div>24 H</div>
            <div>7 D</div>
            <div className={styles.whiteDiv}>30D</div>
            <div>1 Y</div>
          </div>
          <div className={styles.subtitle}>
            <div>Total PNL(USD) </div>
            <div className={styles.green}>+7123,489,5089%</div>
          </div>
          <div className={styles.performanceChart}>
            <div className={styles.performanceLeftChart}>
              <div className={styles.stats}>
                <div>1500</div>
                <div>1000</div>
                <div>500</div>
              </div>
              <img src={lineChart} alt="" />
            </div>
            <div className={styles.performanceBottomChart}>
              <div>02/06</div>
              <div>02/08</div>
              <div>02/10</div>
              <div>02/12</div>
              <div>02/14</div>
            </div>
          </div>
        </div>
        <div className={styles.position}>
          <h4>Current Positions</h4>
          <div className={styles.content}>
            <div className={styles.leftContent}>
              <div>Symbol</div>
              <div>Leverage | Direction</div>
              <div>Size</div>
              <div>Entry Price</div>
              <div>Mark Price</div>
              <div>Margin</div>
              <div>PNL (ROE %)</div>
            </div>
            <div className={styles.rightContent}>
              <div>GALAUSDT</div>
              <div>
                20X | <span className={styles.green}>Long</span>
              </div>
              <div>9780.234 USDT</div>
              <div>485.00</div>
              <div>585.00</div>
              <div>9780.234</div>
              <div className={styles.red}>-73.7 USDT (-2315)</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main
