import { StyleSheet } from "react-native";
import colors from "../../../../theme/colors";
import { hScaleRatio, width, wScale } from "../../../../utils/scailing";
import fonts from "../../../../theme/fonts";
import dimensions from "../../../../theme/dimensions";

const styles = StyleSheet.create({
  description: {
    marginHorizontal: dimensions.paddingHSecondary,
    marginTop: hScaleRatio(20),
    color: colors.white,
    fontSize: 14
  }
});

export default styles;
