const WS_HOST = 'test-24mex.happylucky.online:9001'
const API_HOST = 'https://test-24mex.happylucky.online/api' // 'vostok-techno.by/proxy.php?_u=https://test-24mex.happylucky.online:9001',
const DEFAULT_CURRENCY = 'BTCUSDT'
const CURRENCIES = [
  'BTC/USDT',
  'ETH/USDT'
]

const endpoint = {
  LOGIN_URL: API_HOST + '/get_token',
  SIGN_UP_URL: API_HOST + '/auth',
  GET_OPTIONS_LIST_URL: API_HOST + '/list_options',
  GET_ACTIVE_OPTIONS_LIST_URL: API_HOST + '/list_active_options',
  ADD_OPTION_URL: API_HOST + '/create_option',
  CLOSE_OPTION_URL: API_HOST + '/close_option',
  GET_USER_INFO_URL: API_HOST + '/user_info',
  ADD_CREDIT_URL: API_HOST + '/add_credit',
  WITHDRAW_CREDIT_URL: API_HOST + '/withdraw_credit',
  RECEIVE_VERIFICATION_CODE: API_HOST + '/recieve_verification_code',
  SEND_VERIFICATION_CODE: API_HOST + '/send_verification_code'
}

export {
  WS_HOST,
  API_HOST,
  DEFAULT_CURRENCY,
  CURRENCIES,
  endpoint
}
