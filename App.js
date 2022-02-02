import AppLoading from 'expo-app-loading';
import { SafeAreaView, StyleSheet, Text, View, StatusBar, Image, Platform, TouchableNativeFeedbackBase } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';
import { requireNativeViewManager } from 'expo-modules-core';


export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    'Sydney-Bold': require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  /* insert your code here */

  return (
    <>
    <SafeAreaView style={styles.overallContainer}>

    <View style={styles.topContainer}>
      <View>
        <Image source={require("./assets/Icons/menu_light.png")} style={styles.topNavIcons}/>
      </View>
      <View>
        <Text style={styles.topWord}>
          ensom
        </Text>
      </View>
      <View>
        <Image source={require("./assets/Icons/sun.png")} style={styles.topNavIcons}/>
      </View>
    </View>

    <View style={styles.profile}>
      <View>
        <Image style={[styles.pic, Themes.light.shadows]} source={require("./assets/Profiles/mtl.jpg")}/> 
          <View>
            <Text style={styles.profName}>
              MTL
            </Text>
            <Text style={styles.distance}>
              2 miles away
            </Text>
          </View>
      </View>

      <View style={styles.audioBar}>
        <Text style={styles.label}>
          My hottest take
        </Text>
        <View style={styles.audioIcons}>
          <Image style={styles.play} source={require("./assets/Icons/player_light.png")}/>
          <Image style={styles.audioWave} source={require("./assets/Icons/audio_waveform_light.png")}/>
        </View>
      </View>
    </View>

    <View style={styles.bottomBar}>
      <View>
        <Image style={styles.bottomIcons} source={require("./assets/Icons/discover_light.png")}/>
        <Text style={styles.bottomWords}> Discover </Text>
      </View>
      <View>
        <Image style={styles.bottomIcons} source={require("./assets/Icons/heart_light.png")}/>
        <Text style={styles.bottomWords}> Matches </Text>
      </View>
      <View>
        <Image style={styles.bottomIcons} source={require("./assets/Icons/messages_light.png")}/>
        <Text style={styles.bottomWords}> DMs </Text>
      </View>

    </View>


    </SafeAreaView>
   </>
  );
}

const styles = StyleSheet.create({

  overallContainer: {
    flex: 1,
    backgroundColor: Themes.light.bg,
  },

  topContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Themes.light.bg,
  },

  topWord: {
    fontFamily: 'Sydney-Bold', 
    fontSize: 36,
    color: Themes.light.text,
    height: 40,
    margin: 30,
    display: 'flex',
  },

  topNavIcons: {
    height: 45,
    width: 45,
    justifyContent: 'flex-end',
  },

  profile: {
    backgroundColor: Themes.light.bg,
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '80%',
  },

  pic: {
    height: 365,
    width: 350,
    position: 'relative',
    borderRadius: 15,
    
  },

  profName: {
    fontFamily: 'Sydney',
    color: Themes.light.textSecondary,
    fontSize: 30,
    position: 'absolute',
    bottom: 325,
    left: 10,
  },

  distance: {
    fontFamily: 'Sydney',
    color: Themes.light.textSecondary,
    fontSize: 15,
    position: 'absolute',
    bottom: 10,
    left: 10,
  },

  audioBar: {
    backgroundColor: Themes.light.bgSecondary,
    borderRadius: 15,
    marginTop: 20,
    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowRadius: 5,
    shadowOffset: { width: -1, height: 5 },
    
  },

  label: {
    fontFamily: 'Sydney',
    fontSize: 25,
    color: Themes.light.text,
    position: 'absolute',
    top: 10,
    left: 10,
  },

  audioIcons: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  play: {
   resizeMode: 'contain',
   width: '14%',
   marginRight: 10,
   height: 50,
  },

  audioWave: {
    width: '71%',
    resizeMode: 'contain',
    height: 110,
    
  },

  bottomBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: Themes.light.navigation,
    width: '100%',
    height: '15%',
  },

  bottomIcons: {
    height: 30,
    width: 30,
    bottom: 23,
    left: 2,
    //justifyContent: 'center',
    //resizeMode: 'contain',
  },

  bottomWords: {
    fontFamily: 'Sydney',
    fontSize: 17,
    bottom: 17,
    right: 5,
    color: Themes.light.textSecondary
  }

});

