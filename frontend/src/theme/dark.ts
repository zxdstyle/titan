import theme from 'antd/es/theme';
import { ThemeConfig } from 'antd/es/config-provider';

const { darkAlgorithm } = theme;
const dark: ThemeConfig = {
    algorithm: darkAlgorithm,
    token: {
        colorBgBase: '#2b2549',
        colorPrimary: '#5c27fe',
    },
    components: {},
};

export default dark;
