<template>
    <div class="overview">
      <div class="overview-top">
        <div class="overview-top__user flex items-center">
          <div class="user-img">
            <img src="img/user.png" alt="">
          </div>
          <div class="user-info">
            <div class="mb-1.5 md:flex block items-end">
              <div class="name">huanghe123</div>
              <div class="md:ml-3">UserID : 2531305</div>
            </div>
            <div class="user-login">
              Last Login : 2022-04-12 14:05:49
            </div>
          </div>
          <div class="user-ip ml-8">
            <div class="verified">
              <i class="icon-plus-btn"></i>
              Not Verified
            </div>
            <div>IP 151.115.42.1</div>
          </div>
        </div>
      </div>
      <div class="overview-header">
        <div class="overview-header__bg">
          <img src="img/overview_bg.png" alt="">
          <img class="mobile" src="img/overview_mob_bg.png" alt="">
        </div>
        <div class="overview-header__content">
          <h3>Welcome! Dear Bitopers</h3>
          <p>Just a few more steps to start your journey</p>
          <div class="steps">
            <div class="steps-items">
              <div class="item">
                <i class="icon-chek mb-1.5"></i>
                <p>Register</p>
              </div>
              <div class="item">
                <div class="circle">2</div>
                <p>Verfication</p>
              </div>
              <div class="item">
                <div class="circle circle-2">3</div>
                <p>Buy</p>
              </div>
            </div>
            <div class="steps-btn">
              <button class="btn btn-yellow">Go to Connect</button>
            </div>
          </div>
        </div>
        <div class="overview-header__img">
          <img src="img/overview.png" alt="">
        </div>
      </div>
      <div class="overview-body mt-6">
        <div class="row flex">
          <div class="overview-details">
            <div class="overview-details__top">
              <div class="header">
                <h3>Funding Details</h3>
                <div class="top_btn">
                  <button class="btn btn-yellow">Buy</button>
                  <button class="btn">Deposit</button>
                  <button class="btn">Withdrawl</button>
                  <button class="btn">Convert</button>
                  <i class="icon-arrow rotate-180"></i>
                </div>
              </div>
              <div class="details__tabs">
                <div class="tab active">Acutal Account</div>
                <div class="tab">Demo Account</div>
              </div>
            </div>
            <div class="overview-details__body">
              <div class="balance md:block flex md:items-start items-end">
                <div>
                  <h3>Available Balances</h3>
                  <div class="balance-count mt-4">7.32 <span>≈ ¥ 46.5552</span></div>
                </div>
                <div class="md:flex block mt-4 md:ml-0 ml-auto">
                  <div class="balance-count__item md:block flex">
                    <h4>Occupied</h4>
                    <span>0</span>
                  </div>
                  <div class="balance-count__item md:block flex">
                    <h4>Red Envelopes</h4>
                    <span>6.29</span>
                  </div>
                </div>
              </div>
              <div class="balance-chart flex items-center">
                 <div class="balance-chart__circle"></div>
                <div class="balance-chart__text">
                  <h4>USDT</h4>
                  <p>Please go to the Funding Wallet to view details</p>
                </div>
              </div>
            </div>
          </div>
          <div class="overview-news bg-base">
            <div class="overview-news__title flex items-center">
              <h3>News & Announcements</h3>
              <i class="icon-arrow rotate-180 ml-auto"></i>
            </div>
            <div class="overview-news__item">
              <h4>New CFDs coming soon</h4>
              <p>2022-04-10 19:00:00</p>
            </div>
            <div class="overview-news__item">
              <h4>Decimal places adjustment of Some Spot trading commodities</h4>
              <p>2022-04-10 19:00:00</p>
            </div>
            <div class="overview-news__item">
              <h4>Withdrawal Blockchain Upgrade And Maintenance</h4>
              <p>2022-04-10 19:00:00</p>
            </div>
            <div class="overview-news__item">
              <h4>Notice of Holiday Closure in Derivatives for Good Friday and Easter</h4>
              <p>2022-04-10 19:00:00</p>
            </div>
          </div>
        </div>
        <div class="row flex justify-between mt-6">
          <div class="overview-block">
            <div class="overview-block__header b-bootom">
              <div class="tab active">Activity</div>
              <div class="tab">Devices</div>
              <i class="icon-arrow rotate-180 ml-auto"></i>
            </div>
            <div class="overview-block__body">
              <div class="flex">
                <div class="ps">
                  <h4>pc</h4>
                  <p>Ukraine</p>
                </div>
                <div class="pc-data ml-auto text-right">
                  <p>151.115.42.1</p>
                  <p>2022-04-12 14:01:00</p>
                </div>
              </div>
              <div class="flex mt-6">
                 <div class="ps">
                    <h4>pc</h4>
                    <p>Ukraine</p>
                  </div>
                  <div class="pc-data ml-auto text-right">
                    <p>151.115.42.1</p>
                    <p>2022-04-12 14:01:00</p>
                  </div>
              </div>
            </div>
          </div>
          <div class="overview-block">
            <div class="overview-block__header ">
              <h4>Security Settings</h4>
              <i class="icon-arrow rotate-180 ml-auto"></i>
            </div>
            <div class="overview-block__body flex flex-wrap justify-between">
              <div class="settings-item mb-6">
                <i class="icon-password"></i>
                <div class="settings-item__text">
                  <h4>Password</h4>
                  <a href="#">Change</a>
                </div>
              </div>
              <div class="settings-item mb-6">
                <i class="icon-email"></i>
                <div class="settings-item__text">
                  <h4>Mobile Verify</h4>
                  <a href="#">Change</a>
                </div>
              </div>
              <div class="settings-item">
                <i class="icon-verify"></i>
                <div class="settings-item__text">
                  <h4>Email Verify</h4>
                  <a href="#">Go to connect</a>
                </div>
              </div>
              <div class="settings-item">
                <i class="icon-news"></i>
                <div class="settings-item__text">
                  <h4>KYC Authentication</h4>
                  <a href="#">Go to verify</a>
                </div>
              </div>
            </div>
          </div>
          <div class="overview-block">
            <div class="overview-block__header ">
              <h4>Current Level</h4>
              <i class="icon-arrow rotate-180 ml-auto"></i>
            </div>
            <div class="overview-block__body">
              <div class="flex mb-5">
                <div>
                  <p class="text-xs">Accumulated Commission</p>
                  <div><span class="text-white mr-1.5 text-lg">0</span> USDT</div>
                </div>
                <div class="ml-7">
                  <p class="text-xs">Commission ratio</p>
                  <div><span class="text-white mr-1.5 text-lg">5</span> %</div>
                </div>
              </div>
              <div class="flex mb-2 text-white">
                <h5>Total Referees</h5>
                <span class="ml-auto">0</span>
              </div>
              <div class="flex mb-2 text-white">
                <h5>Active Traders</h5>
                <span class="ml-auto">0</span>
              </div>
              <div class="flex text-white">
                <h5>Newly Referred</h5>
                <span class="ml-auto">0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
