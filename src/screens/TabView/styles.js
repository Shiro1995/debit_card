import { StyleSheet } from "react-native";

import { colors, fonts } from "../../common/theme";

const styles = StyleSheet.create({
    titleSelectedTab: {
        fontFamily: fonts.avenirNextDemiBold,
        fontWeight: '700',
        color: colors.greenAccent,
        marginTop: 5,
    },
    titleTab: {
        fontFamily: fonts.avenirNextDemiBold,
        marginTop: 5,
    }
});

export default styles;
