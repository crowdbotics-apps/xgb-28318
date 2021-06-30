import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@modules"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aca5/563e/6465098061801a08679cf9207f1ebc48"
        }}
        style={styles.ImageBackground_1_164}
      />
      <View style={styles.View_1_165} />
      <View style={styles.View_1_166}>
        <Text style={styles.Text_1_166}>PROFILE</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/504f/b1fe/3f2ab367f6229db75a8198bf6b2b298a"
        }}
        style={styles.ImageBackground_1_167}
      />
      <View style={styles.View_1_168} />
      <View style={styles.View_1_169} />
      <View style={styles.View_1_170} />
      <View style={styles.View_1_171}>
        <Text style={styles.Text_1_171}>Edit Profile</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/966d/30b7/a55e24c5d9b7006a7beceedd22fb79a2"
        }}
        style={styles.ImageBackground_1_238}
      />
      <View style={styles.View_1_173}>
        <Text style={styles.Text_1_173}>Chaudhary01</Text>
      </View>
      <View style={styles.View_1_174}>
        <Text style={styles.Text_1_174}>@ UserName</Text>
      </View>
      <View style={styles.View_1_175}>
        <Text style={styles.Text_1_175}>12.k</Text>
      </View>
      <View style={styles.View_1_176}>
        <Text style={styles.Text_1_176}>234</Text>
      </View>
      <View style={styles.View_1_177}>
        <Text style={styles.Text_1_177}>Followers</Text>
      </View>
      <View style={styles.View_1_178}>
        <Text style={styles.Text_1_178}>Following</Text>
      </View>
      <View style={styles.View_1_179}>
        <Text style={styles.Text_1_179}>
          The Biotechnology Innovation Organization (BIO) is the world’s largest
          advocacy association representing member companies, state
          biotechnology groups, academic.
        </Text>
      </View>
      <View style={styles.View_1_180}>
        <Text style={styles.Text_1_180}>Business Name</Text>
      </View>
      <View style={styles.View_1_181}>
        <Text style={styles.Text_1_181}>summary</Text>
      </View>
      <View style={styles.View_1_182}>
        <Text style={styles.Text_1_182}>Verifed</Text>
      </View>
      <View style={styles.View_1_183}>
        <Text style={styles.Text_1_183}>Pixto digital Technologies</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5fd/422e/29b4d6fff1200d830940a88fc3d4bad7"
        }}
        style={styles.ImageBackground_1_184}
      />
      <View style={styles.View_1_186}>
        <Text style={styles.Text_1_186}>Orillis Designs</Text>
      </View>
      <View style={styles.View_1_187}>
        <Text style={styles.Text_1_187}>pixto.in</Text>
      </View>
      <View style={styles.View_1_188}>
        <Text style={styles.Text_1_188}>937476 37784</Text>
      </View>
      <View style={styles.View_1_189}>
        <Text style={styles.Text_1_189}>Admin@pixto.in</Text>
      </View>
      <View style={styles.View_1_190}>
        <Text style={styles.Text_1_190}>Industry/ Sector *</Text>
      </View>
      <View style={styles.View_1_191}>
        <Text style={styles.Text_1_191}>website</Text>
      </View>
      <View style={styles.View_1_192}>
        <Text style={styles.Text_1_192}>Mobile number</Text>
      </View>
      <View style={styles.View_1_193}>
        <Text style={styles.Text_1_193}>Email Id</Text>
      </View>
      <View style={styles.View_1_194} />
      <View style={styles.View_1_195}>
        <Text style={styles.Text_1_195}>About</Text>
      </View>
      <View style={styles.View_1_196}>
        <Text style={styles.Text_1_196}>Feed</Text>
      </View>
      <View style={styles.View_1_197}>
        <Text style={styles.Text_1_197}>Groups</Text>
      </View>
      <View style={styles.View_1_198}>
        <Text style={styles.Text_1_198}>Advisor/Experts</Text>
      </View>
      <View style={styles.View_1_199}>
        <Text style={styles.Text_1_199}>Product Designer</Text>
      </View>
      <View style={styles.View_1_200}>
        <Text style={styles.Text_1_200}>Domain Function *</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f20e/a88c/1bd6bd76959a199503cd1669187a560d"
        }}
        style={styles.ImageBackground_1_201}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc73/0d9e/0a3b763078a0be3b0e15cf44bfde747c"
        }}
        style={styles.ImageBackground_1_203}
      />
      <View style={styles.View_1_205}>
        <Text style={styles.Text_1_205}>2012</Text>
      </View>
      <View style={styles.View_1_206}>
        <Text style={styles.Text_1_206}>Years of Establishment *</Text>
      </View>
      <View style={styles.View_1_207}>
        <Text style={styles.Text_1_207}>Profile Type</Text>
      </View>
      <View style={styles.View_1_208}>
        <Text style={styles.Text_1_208}>Businesses/ Promoters</Text>
      </View>
      <View style={styles.View_1_209}>
        <View style={styles.View_1_210}>
          <Text style={styles.Text_1_210}>Add</Text>
        </View>
        <View style={styles.View_1_211}>
          <View style={styles.View_1_212}>
            <Text style={styles.Text_1_212}>Interests</Text>
          </View>
          <View style={styles.View_1_213}>
            <View style={styles.View_1_214} />
            <View style={styles.View_1_215}>
              <Text style={styles.Text_1_215}>Businesses</Text>
            </View>
            <View style={styles.View_1_216}>
              <Text style={styles.Text_1_216}>💼</Text>
            </View>
          </View>
          <View style={styles.View_1_217}>
            <View style={styles.View_1_218} />
            <View style={styles.View_1_219}>
              <Text style={styles.Text_1_219}>Businesses</Text>
            </View>
            <View style={styles.View_1_220}>
              <Text style={styles.Text_1_220}>💼</Text>
            </View>
          </View>
          <View style={styles.View_1_221}>
            <View style={styles.View_1_222} />
            <View style={styles.View_1_223}>
              <Text style={styles.Text_1_223}>Sales</Text>
            </View>
            <View style={styles.View_1_224}>
              <Text style={styles.Text_1_224}>💸</Text>
            </View>
          </View>
          <View style={styles.View_1_225}>
            <View style={styles.View_1_226} />
            <View style={styles.View_1_227}>
              <Text style={styles.Text_1_227}>Entrepreneurs</Text>
            </View>
            <View style={styles.View_1_228}>
              <Text style={styles.Text_1_228}>💪</Text>
            </View>
          </View>
          <View style={styles.View_1_229}>
            <View style={styles.View_1_230} />
            <View style={styles.View_1_231}>
              <Text style={styles.Text_1_231}>Entrepreneurs</Text>
            </View>
            <View style={styles.View_1_232}>
              <Text style={styles.Text_1_232}>💪</Text>
            </View>
          </View>
          <View style={styles.View_1_233}>
            <View style={styles.View_1_234} />
            <View style={styles.View_1_235}>
              <Text style={styles.Text_1_235}>Entrepreneurs</Text>
            </View>
            <View style={styles.View_1_236}>
              <Text style={styles.Text_1_236}>💪</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(247, 250, 255, 1)" },
  View_2: { height: hp("156.28415300546447%") },
  ImageBackground_1_164: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("21.44808743169399%"),
    minHeight: hp("21.44808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.6885245901639343%"),
    resizeMode: "cover"
  },
  View_1_165: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(35, 19, 13, 1)"
  },
  View_1_166: {
    width: wp("14.009661835748794%"),
    minWidth: wp("14.009661835748794%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("8.879781420765028%"),
    justifyContent: "flex-start"
  },
  Text_1_166: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  ImageBackground_1_167: {
    width: wp("23.91304347826087%"),
    minWidth: wp("23.91304347826087%"),
    height: hp("13.524590163934427%"),
    minHeight: hp("13.524590163934427%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("17.89617486338798%")
  },
  View_1_168: {
    width: wp("94.44444444444444%"),
    minWidth: wp("94.44444444444444%"),
    height: hp("71.72131147540983%"),
    minHeight: hp("71.72131147540983%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4154589371980677%"),
    top: hp("52.322404371584696%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_1_169: {
    width: wp("22.463768115942027%"),
    minWidth: wp("22.463768115942027%"),
    height: hp("5.05464480874317%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.28019323671497%"),
    top: hp("33.60655737704918%"),
    backgroundColor: "rgba(81, 32, 174, 1)"
  },
  View_1_170: {
    width: wp("8.695652173913043%"),
    minWidth: wp("8.695652173913043%"),
    height: hp("5.05464480874317%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.71014492753623%"),
    top: hp("33.60655737704918%"),
    backgroundColor: "rgba(81, 32, 174, 1)"
  },
  View_1_171: {
    width: wp("16.425120772946862%"),
    minWidth: wp("16.425120772946862%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.38647342995169%"),
    top: hp("34.69945355191257%"),
    justifyContent: "flex-start"
  },
  Text_1_171: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_238: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("34.42622950819672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.15942028985508%")
  },
  View_1_173: {
    width: wp("28.659094474165915%"),
    minWidth: wp("28.659094474165915%"),
    minHeight: hp("3.079678061229935%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.642512077294686%"),
    top: hp("22.540983606557376%"),
    justifyContent: "flex-start"
  },
  Text_1_173: {
    color: "rgba(27, 29, 40, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_174: {
    width: wp("28.659094474165915%"),
    minWidth: wp("28.659094474165915%"),
    minHeight: hp("3.079678061229935%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.642512077294686%"),
    top: hp("25.683060109289617%"),
    justifyContent: "flex-start"
  },
  Text_1_174: {
    color: "rgba(27, 29, 40, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_175: {
    width: wp("7.729468599033816%"),
    minWidth: wp("7.729468599033816%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.869565217391305%"),
    top: hp("34.01639344262295%"),
    justifyContent: "flex-start"
  },
  Text_1_175: {
    color: "rgba(62, 63, 64, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_176: {
    width: wp("6.763285024154589%"),
    minWidth: wp("6.763285024154589%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.81642512077295%"),
    top: hp("33.7431693989071%"),
    justifyContent: "flex-start"
  },
  Text_1_176: {
    color: "rgba(62, 63, 64, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_177: {
    width: wp("12.560386473429952%"),
    minWidth: wp("12.560386473429952%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.454106280193237%"),
    top: hp("36.20218579234973%"),
    justifyContent: "flex-start"
  },
  Text_1_177: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_178: {
    width: wp("12.560386473429952%"),
    minWidth: wp("12.560386473429952%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.917874396135264%"),
    top: hp("36.20218579234973%"),
    justifyContent: "flex-start"
  },
  Text_1_178: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_179: {
    width: wp("89.61352657004831%"),
    minWidth: wp("89.61352657004831%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.797101449275362%"),
    top: hp("76.775956284153%"),
    justifyContent: "flex-start"
  },
  Text_1_179: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_180: {
    width: wp("20.28985507246377%"),
    minWidth: wp("20.28985507246377%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.797101449275362%"),
    top: hp("55.60109289617486%"),
    justifyContent: "flex-start"
  },
  Text_1_180: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_181: {
    width: wp("12.318840579710146%"),
    minWidth: wp("12.318840579710146%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("73.49726775956285%"),
    justifyContent: "flex-start"
  },
  Text_1_181: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_182: {
    width: wp("9.66183574879227%"),
    minWidth: wp("9.66183574879227%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.33333333333334%"),
    top: hp("58.879781420765035%"),
    justifyContent: "flex-start"
  },
  Text_1_182: {
    color: "rgba(0, 214, 175, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_183: {
    width: wp("39.130434782608695%"),
    minWidth: wp("39.130434782608695%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.521739130434782%"),
    top: hp("58.333333333333336%"),
    justifyContent: "flex-start"
  },
  Text_1_183: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_184: {
    width: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    top: hp("58.7431693989071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.50241545893721%")
  },
  View_1_186: {
    width: wp("21.980676328502415%"),
    minWidth: wp("21.980676328502415%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.797101449275362%"),
    top: hp("100.40983606557377%"),
    justifyContent: "flex-start"
  },
  Text_1_186: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_187: {
    width: wp("21.980676328502415%"),
    minWidth: wp("21.980676328502415%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.038647342995169%"),
    top: hp("109.8360655737705%"),
    justifyContent: "flex-start"
  },
  Text_1_187: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_188: {
    width: wp("31.642512077294686%"),
    minWidth: wp("31.642512077294686%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.038647342995169%"),
    top: hp("118.71584699453553%"),
    justifyContent: "flex-start"
  },
  Text_1_188: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_189: {
    width: wp("31.642512077294686%"),
    minWidth: wp("31.642512077294686%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.96618357487923%"),
    top: hp("118.71584699453553%"),
    justifyContent: "flex-start"
  },
  Text_1_189: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_190: {
    width: wp("22.705314009661837%"),
    minWidth: wp("22.705314009661837%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.797101449275362%"),
    top: hp("97.26775956284153%"),
    justifyContent: "flex-start"
  },
  Text_1_190: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_191: {
    width: wp("22.705314009661837%"),
    minWidth: wp("22.705314009661837%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.797101449275362%"),
    top: hp("108.06010928961749%"),
    justifyContent: "flex-start"
  },
  Text_1_191: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_192: {
    width: wp("22.705314009661837%"),
    minWidth: wp("22.705314009661837%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.797101449275362%"),
    top: hp("116.93989071038251%"),
    justifyContent: "flex-start"
  },
  Text_1_192: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_193: {
    width: wp("22.705314009661837%"),
    minWidth: wp("22.705314009661837%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.72463768115942%"),
    top: hp("116.93989071038251%"),
    justifyContent: "flex-start"
  },
  Text_1_193: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_194: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("43.169398907103826%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1_195: {
    width: wp("9.178743961352657%"),
    minWidth: wp("9.178743961352657%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.212560386473431%"),
    top: hp("45.49180327868852%"),
    justifyContent: "flex-start"
  },
  Text_1_195: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_196: {
    width: wp("7.487922705314009%"),
    minWidth: wp("7.487922705314009%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.294685990338163%"),
    top: hp("45.49180327868852%"),
    justifyContent: "flex-start"
  },
  Text_1_196: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_197: {
    width: wp("10.869565217391305%"),
    minWidth: wp("10.869565217391305%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.893719806763286%"),
    top: hp("45.49180327868852%"),
    justifyContent: "flex-start"
  },
  Text_1_197: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_198: {
    width: wp("24.396135265700483%"),
    minWidth: wp("24.396135265700483%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.6328502415459%"),
    top: hp("45.49180327868852%"),
    justifyContent: "flex-start"
  },
  Text_1_198: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_199: {
    width: wp("26.32850241545894%"),
    minWidth: wp("26.32850241545894%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.85990338164252%"),
    top: hp("101.22950819672131%"),
    justifyContent: "flex-start"
  },
  Text_1_199: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_200: {
    width: wp("23.91304347826087%"),
    minWidth: wp("23.91304347826087%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.85990338164252%"),
    top: hp("97.81420765027322%"),
    justifyContent: "flex-start"
  },
  Text_1_200: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_201: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("7.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.78260869565217%")
  },
  ImageBackground_1_203: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("7.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.30434782608695%")
  },
  View_1_205: {
    width: wp("7.729468599033816%"),
    minWidth: wp("7.729468599033816%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.797101449275362%"),
    top: hp("91.53005464480874%"),
    justifyContent: "flex-start"
  },
  Text_1_205: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_206: {
    width: wp("31.88405797101449%"),
    minWidth: wp("31.88405797101449%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.797101449275362%"),
    top: hp("88.11475409836066%"),
    justifyContent: "flex-start"
  },
  Text_1_206: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_207: {
    width: wp("15.217391304347828%"),
    minWidth: wp("15.217391304347828%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.521739130434782%"),
    top: hp("64.20765027322405%"),
    justifyContent: "flex-start"
  },
  Text_1_207: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_208: {
    width: wp("35.748792270531396%"),
    minWidth: wp("35.748792270531396%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.521739130434782%"),
    top: hp("66.12021857923497%"),
    justifyContent: "flex-start"
  },
  Text_1_208: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_209: {
    width: wp("102.65700483091787%"),
    minWidth: wp("102.65700483091787%"),
    height: hp("14.754098360655737%"),
    minHeight: hp("14.754098360655737%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("128.82513661202185%")
  },
  View_1_210: {
    width: wp("5.314009661835748%"),
    minWidth: wp("5.314009661835748%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.09661835748793%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "flex-start"
  },
  Text_1_210: {
    color: "rgba(81, 32, 174, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_211: {
    width: wp("102.65700483091787%"),
    minWidth: wp("102.65700483091787%"),
    height: hp("14.754098360655737%"),
    minHeight: hp("14.754098360655737%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_212: {
    width: wp("11.352657004830919%"),
    minWidth: wp("11.352657004830919%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.140096618357488%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_212: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_213: {
    width: wp("27.053140096618357%"),
    minWidth: wp("27.053140096618357%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.487922705314009%"),
    top: hp("4.508196721311464%")
  },
  View_1_214: {
    width: wp("27.053140096618357%"),
    minWidth: wp("27.053140096618357%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70
  },
  View_1_215: {
    width: wp("15.458937198067632%"),
    minWidth: wp("15.458937198067632%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.937198067632853%"),
    top: hp("1.2295081967213264%"),
    justifyContent: "flex-start"
  },
  Text_1_215: {
    color: "rgba(50, 50, 50, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_216: {
    width: wp("3.864734299516908%"),
    minWidth: wp("3.864734299516908%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1400966183574877%"),
    top: hp("0.6830601092896416%"),
    justifyContent: "flex-start"
  },
  Text_1_216: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_1_217: {
    width: wp("27.053140096618357%"),
    minWidth: wp("27.053140096618357%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.54106280193236%"),
    top: hp("10.382513661202182%")
  },
  View_1_218: {
    width: wp("27.053140096618357%"),
    minWidth: wp("27.053140096618357%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70
  },
  View_1_219: {
    width: wp("15.458937198067632%"),
    minWidth: wp("15.458937198067632%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.937198067632856%"),
    top: hp("1.2295081967213264%"),
    justifyContent: "flex-start"
  },
  Text_1_219: {
    color: "rgba(50, 50, 50, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_220: {
    width: wp("3.864734299516908%"),
    minWidth: wp("3.864734299516908%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1400966183574965%"),
    top: hp("0.6830601092896416%"),
    justifyContent: "flex-start"
  },
  Text_1_220: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_1_221: {
    width: wp("19.806763285024154%"),
    minWidth: wp("19.806763285024154%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.473429951690825%"),
    top: hp("4.508196721311464%")
  },
  View_1_222: {
    width: wp("19.806763285024154%"),
    minWidth: wp("19.806763285024154%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70
  },
  View_1_223: {
    width: wp("7.487922705314009%"),
    minWidth: wp("7.487922705314009%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.937198067632849%"),
    top: hp("1.2295081967213264%"),
    justifyContent: "flex-start"
  },
  Text_1_223: {
    color: "rgba(50, 50, 50, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_224: {
    width: wp("3.864734299516908%"),
    minWidth: wp("3.864734299516908%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1400966183574823%"),
    top: hp("0.6830601092896416%"),
    justifyContent: "flex-start"
  },
  Text_1_224: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_1_225: {
    width: wp("32.608695652173914%"),
    minWidth: wp("32.608695652173914%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.212560386473434%"),
    top: hp("4.508196721311464%")
  },
  View_1_226: {
    width: wp("32.608695652173914%"),
    minWidth: wp("32.608695652173914%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70
  },
  View_1_227: {
    width: wp("19.565217391304348%"),
    minWidth: wp("19.565217391304348%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.937198067632842%"),
    top: hp("1.2295081967213264%"),
    justifyContent: "flex-start"
  },
  Text_1_227: {
    color: "rgba(50, 50, 50, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_228: {
    width: wp("3.864734299516908%"),
    minWidth: wp("3.864734299516908%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1400966183574752%"),
    top: hp("0.6830601092896416%"),
    justifyContent: "flex-start"
  },
  Text_1_228: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_1_229: {
    width: wp("32.608695652173914%"),
    minWidth: wp("32.608695652173914%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.04830917874396%"),
    top: hp("10.245901639344282%")
  },
  View_1_230: {
    width: wp("32.608695652173914%"),
    minWidth: wp("32.608695652173914%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70
  },
  View_1_231: {
    width: wp("19.565217391304348%"),
    minWidth: wp("19.565217391304348%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.937198067632849%"),
    top: hp("1.229508196721298%"),
    justifyContent: "flex-start"
  },
  Text_1_231: {
    color: "rgba(50, 50, 50, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_232: {
    width: wp("3.864734299516908%"),
    minWidth: wp("3.864734299516908%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1400966183574894%"),
    top: hp("0.6830601092896131%"),
    justifyContent: "flex-start"
  },
  Text_1_232: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_1_233: {
    width: wp("32.608695652173914%"),
    minWidth: wp("32.608695652173914%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.699453551912598%")
  },
  View_1_234: {
    width: wp("32.608695652173914%"),
    minWidth: wp("32.608695652173914%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70
  },
  View_1_235: {
    width: wp("19.565217391304348%"),
    minWidth: wp("19.565217391304348%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.937198067632849%"),
    top: hp("1.229508196721298%"),
    justifyContent: "flex-start"
  },
  Text_1_235: {
    color: "rgba(50, 50, 50, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_236: {
    width: wp("3.864734299516908%"),
    minWidth: wp("3.864734299516908%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.140096618357488%"),
    top: hp("0.6830601092895847%"),
    justifyContent: "flex-start"
  },
  Text_1_236: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
