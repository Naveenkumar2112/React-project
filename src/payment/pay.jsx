import './pay.css';
import images1 from './image desert.jpg';
// import Logo from './ttt.jpg'

export default function Pay() {
  return(
  <div id="tot">
      <img id="bg" src={`${images1}`} alt="bg" />
        <h2 id="pi">Payment Information</h2>
        <div id="lang">
        <label id="ar">Choose Language:&ensp;</label>
        <select id="ar">
        <option value="English">English</option>
        <option value="Tamil">Tamil</option>
        <option value="Malayalam">Malayalam</option>
        <option value="Hindi">Hindi</option>
        <option value="German">German</option>
        <option value="Thai">Thai</option>
        </select>
        </div>
        <div id="pt">
        <span id="bt1">&#62;</span>
        <span id="bt2">&#62;</span>
        <span id="bt3">&#62;</span>
        <span id="bt4">&#62;</span>
        <h2 id = "types">Credit Card</h2><br/><br/>
        <h2 id = "types">Debit Card</h2><br/><br/>
        <h2 id = "types">Net Banking</h2><br/><br/>
        <h2 id = "types">UPI</h2>
        <img id="img1" src="https://img.freepik.com/premium-vector/cartoon-money-payment-mobile-bank-electronic-transaction-transfer-money-via-online-mobile-app-vector-illustration-people-send-receive-money-online-hand-holding-smartphone-with-flowing-banknote_229548-2459.jpg?w=2000"/>
        <img id="img2" src="https://now.symassets.com/content/dam/norton/global/images/non-product/logos/norton_logo.png"/>
        <img id="img3" src="https://w7.pngwing.com/pngs/823/352/png-transparent-payment-card-industry-data-security-standard-payment-card-industry-security-standards-council-regulatory-compliance-others-text-logo-payment-thumbnail.png"/>
        <img id="img4" src="https://w7.pngwing.com/pngs/586/11/png-transparent-by-verified-visa-credit-cards-pos-icon.png"/>
        </div>
    {/* <img src={Logo} alt="" id='logo' /> */}

  </div>
  )
}
    