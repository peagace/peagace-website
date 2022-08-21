import React from 'react';

const FooterTwo = () => {
    return (
        <div className="active-dark">
        <div className="footer-style-2 ptb--20 bg_color--3" data-black-overlay="6">
            <div className="wrapper plr--50 plr_sm--20">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="logo text-center text-sm-left mb_sm--20">
                            <p><a href="mailto:pedro@peagace.com" style={{ color: 'black', fontWeight: '500' }}>pedro@peagace.com</a></p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="inner text-center">
                            <p style={{ color: 'black', fontWeight: '400' }}>© {(new Date().getFullYear())} PEAGACE. All Rights Reserved.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                        <div className="inner text-lg-right text-center mt_md--20 mt_sm--20">
                            <a href="/">
                                <img src="/assets/images/logo/logo-black.svg" style={{ width: '40px' }} alt="PEAGACE" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
export default FooterTwo;