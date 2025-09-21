import React from 'react';

const Footer = () => {
  const footerStyles = {
    container: {
      backgroundColor: '#f7f7f7',
      padding: '40px 0',
      color: '#666',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      fontSize: '14px',
    },
    mainRow: {
      borderTop: '1px solid #e0e0e0',
      paddingTop: '40px',
      marginBottom: '40px',
    },
    logo: {
      width: '50%',
      maxWidth: '150px',
      marginBottom: '10px',
    },
    copyright: {
      fontSize: '12px',
      color: '#999',
    },
    socialIcons: {
      display: 'flex',
      gap: '15px',
    },
    socialLink: {
      color: '#666',
      transition: 'color 0.2s ease-in-out',
      fontSize: '1.2rem',
    },
    heading: {
      fontWeight: '500',
      fontSize: '16px',
      color: '#333',
      marginBottom: '15px',
    },
    linkList: {
      listStyleType: 'none',
      padding: '0',
      margin: '0',
    },
    linkItem: {
      marginBottom: '8px',
    },
    link: {
      textDecoration: 'none',
      color: '#666',
      fontSize: '14px',
      transition: 'color 0.2s ease-in-out',
    },
    disclaimer: {
      fontSize: '12px',
      color: '#888',
    },
    disclaimerParagraph: {
      lineHeight: '1.5',
      marginBottom: '15px',
    },
    disclaimerStrong: {
      color: '#555',
      fontWeight: '600',
    },
    bottomLinks: {
      marginTop: '20px',
    },
    bottomLink: {
      color: '#666',
      textDecoration: 'none',
      marginRight: '20px',
      fontSize: '12px',
    },
  };

  return (
    <footer style={footerStyles.container}>
      <div className="container">
        <div className="row" style={footerStyles.mainRow}>
          <div className="col-12 col-md-4" style={{ display: 'flex', flexDirection: 'column' }}>
            <img src="https://zerodha.com/static/images/logo.svg" alt="Zerodha logo" style={footerStyles.logo} />
            <p style={footerStyles.copyright}>
              © 2010 - 2025, Zerodha Broking Ltd. All rights reserved.
            </p>
            <div style={footerStyles.socialIcons}>
              <a href="https://github.com/Omkarsawant38" target="_blank" rel="noopener noreferrer" style={footerStyles.socialLink}><i className="fa-brands fa-github"></i></a>
              <a href="https://facebook.com/zerodha.online" target="_blank" rel="noopener noreferrer" style={footerStyles.socialLink}><i className="fab fa-facebook-f"></i></a>
              <a href="https://www.instagram.com/mountaineer_omkar/" target="_blank" rel="noopener noreferrer" style={footerStyles.socialLink}><i className="fab fa-instagram"></i></a>
              <a href="https://www.linkedin.com/in/omkar-sawant-5287b3269/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" style={footerStyles.socialLink}><i className="fab fa-linkedin"></i></a>
              <a href="https://www.youtube.com/@Omkarsawant38" target="_blank" rel="noopener noreferrer" style={footerStyles.socialLink}><i className="fab fa-youtube"></i></a>
              <a href="https://api.whatsapp.com/send?phone=917349479344" target="_blank" rel="noopener noreferrer" style={footerStyles.socialLink}><i className="fab fa-whatsapp"></i></a>
              <a href="https://t.me/yourtelegramchannel" target="_blank" rel="noopener noreferrer" style={footerStyles.socialLink}><i className="fab fa-telegram"></i></a>
            </div>
          </div>

          <div className="col-12 col-md-2">
            <h5 style={footerStyles.heading}>Account</h5>
            <ul style={footerStyles.linkList}>
              <li style={footerStyles.linkItem}><a href="" style={footerStyles.link}>Open demat account</a></li>
              <li style={footerStyles.linkItem}><a href="" style={footerStyles.link}>Minor demat account</a></li>
              <li style={footerStyles.linkItem}><a href="" style={footerStyles.link}>NRI demat account</a></li>
              <li style={footerStyles.linkItem}><a href="" style={footerStyles.link}>Commodity</a></li>
              <li style={footerStyles.linkItem}><a href="" style={footerStyles.link}>Dematerialisation</a></li>
              <li style={footerStyles.linkItem}><a href="" style={footerStyles.link}>Fund transfer</a></li>
              <li style={footerStyles.linkItem}><a href="" style={footerStyles.link}>MTF</a></li>
              <li style={footerStyles.linkItem}><a href="" style={footerStyles.link}>Referral program</a></li>
            </ul>
          </div>

          <div className="col-12 col-md-2">
            <h5 style={footerStyles.heading}>Support</h5>
            <ul style={footerStyles.linkList}>
              <li style={footerStyles.linkItem}><a href="" style={footerStyles.link}>Contact us</a></li>
              <li style={footerStyles.linkItem}><a href="" style={footerStyles.link}>Support portal</a></li>
              <li style={footerStyles.linkItem}><a href="" style={footerStyles.link}>How to file a complaint?</a></li>
              <li style={footerStyles.linkItem}><a href="" style={footerStyles.link}>Status of your complaints</a></li>
              <li style={footerStyles.linkItem}><a href="" style={footerStyles.link}>Bulletin</a></li>
              <li style={footerStyles.linkItem}><a href="" style={footerStyles.link}>Circular</a></li>
              <li style={footerStyles.linkItem}><a href="" style={footerStyles.link}>Z-Connect blog</a></li>
              <li style={footerStyles.linkItem}><a href="" style={footerStyles.link}>Downloads</a></li>
            </ul>
          </div>

          <div className="col-12 col-md-2">
            <h5 style={footerStyles.heading}>Company</h5>
            <ul style={footerStyles.linkList}>
              <li style={footerStyles.linkItem}><a href="" style={footerStyles.link}>About</a></li>
              <li style={footerStyles.linkItem}><a href="" style={footerStyles.link}>Philosophy</a></li>
              <li style={footerStyles.linkItem}><a href="" style={footerStyles.link}>Press & media</a></li>
              <li style={footerStyles.linkItem}><a href="" style={footerStyles.link}>Careers</a></li>
              <li style={footerStyles.linkItem}><a href="" style={footerStyles.link}>Zerodha Cares (CSR)</a></li>
              <li style={footerStyles.linkItem}><a href="" style={footerStyles.link}>Zerodha.tech</a></li>
              <li style={footerStyles.linkItem}><a href="" style={footerStyles.link}>Open source</a></li>
            </ul>
          </div>

          <div className="col-12 col-md-2">
            <h5 style={footerStyles.heading}>Quick links</h5>
            <ul style={footerStyles.linkList}>
              <li style={footerStyles.linkItem}><a href="" style={footerStyles.link}>Upcoming IPOs</a></li>
              <li style={footerStyles.linkItem}><a href="" style={footerStyles.link}>Brokerage charges</a></li>
              <li style={footerStyles.linkItem}><a href="" style={footerStyles.link}>Market holidays</a></li>
              <li style={footerStyles.linkItem}><a href="" style={footerStyles.link}>Economic calendar</a></li>
              <li style={footerStyles.linkItem}><a href="" style={footerStyles.link}>Calculators</a></li>
              <li style={footerStyles.linkItem}><a href="" style={footerStyles.link}>Markets</a></li>
              <li style={footerStyles.linkItem}><a href="" style={footerStyles.link}>Sectors</a></li>
            </ul>
          </div>
        </div>

        <div style={footerStyles.disclaimer}>
          <p style={footerStyles.disclaimerParagraph}>
            Zerodha Broking Ltd.: Member of NSE & BSE – SEBI Registration no.: INZ000031633 CDSL: Depository services through Zerodha Securities Pvt. Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <strong style={footerStyles.disclaimerStrong}>complaints@zerodha.com</strong>, for DP related to <strong style={footerStyles.disclaimerStrong}>dp@zerodha.com</strong>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
          </p>
          <p style={footerStyles.disclaimerParagraph}>
            Procedure to file a complaint on SEBI SCORES: Register on <strong style={footerStyles.disclaimerStrong}>SEBI SCORES</strong> portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
          </p>
          <p style={footerStyles.disclaimerParagraph}>
            <a href="" style={footerStyles.link}>Smart Online Dispute Resolution</a> | <a href="" style={footerStyles.link}>Grievances Redressal Mechanism</a>
          </p>
          <p style={footerStyles.disclaimerParagraph}>
            Investments in securities market are subject to market risks; read all the related documents carefully before investing.
          </p>
          <p style={footerStyles.disclaimerParagraph}>
            Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020; 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge; 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p style={footerStyles.disclaimerParagraph}>
            India's largest broker based on networth as per <strong style={footerStyles.disclaimerStrong}>NSE, BSE broker factheet</strong>
          </p>
          <p style={footerStyles.disclaimerParagraph}>
            "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <a href="" style={footerStyles.link}>create a ticket here</a>.
          </p>
          <div style={{...footerStyles.bottomLinks, display: 'flex', justifyContent: 'center'}}>
            <a href="" style={footerStyles.bottomLink}>NSE</a>
            <a href="" style={footerStyles.bottomLink}>BSE</a>
            <a href="" style={footerStyles.bottomLink}>MCX</a>
            <a href="" style={footerStyles.bottomLink}>Terms & conditions</a>
            <a href="" style={footerStyles.bottomLink}>Policies & procedures</a>
            <a href="" style={footerStyles.bottomLink}>Privacy policy</a>
            <a href="" style={footerStyles.bottomLink}>Disclosure</a>
            <a href="" style={footerStyles.bottomLink}>For investor's attention</a>
            <a href="" style={footerStyles.bottomLink}>Investor charter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;