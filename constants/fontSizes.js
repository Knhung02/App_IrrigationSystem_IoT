import { isIOS } from '../utilies/Device'
export default {
    h1: isIOS() ? 25 : 22,
    h2: isIOS() ? 23 : 20,
    h3: isIOS() ? 21 : 18,
    h4: isIOS() ? 19 : 16,
    h5: isIOS() ? 17 : 14,
    h6: isIOS() ? 15 : 12,
}
