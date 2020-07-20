import React from 'react';
import { View, StyleSheet, SafeAreaView, Text, TouchableOpacity, Alert, Image } from 'react-native';
import { Button } from 'native-base';

var itemArr = new Array(9).fill("")
export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isCross : false,
      winMessage : ""
    }
  }

  boxItemClicked = itemPosition => {
    if (this.state.winMessage === "") {
     if(itemArr[itemPosition] === "") {
       itemArr[itemPosition] = this.state.isCross;
       this.setState({isCross : !itemArr[itemPosition]})
     }
     this.winGame();
    }
  }


  //Item Icon Choose - Good
  chooseItemIcon = itemPosition => {
    if (itemArr[itemPosition] !== "") {
       return itemArr[itemPosition] ? require("./src/images/cross.png") : require("./src/images/zero.png")
    }
    return "";
  }

  winGame = () => {
      if ((itemArr[0] !== "") && (itemArr[0] === itemArr[1]) && (itemArr[1] === itemArr[2])) {
          this.setState({winMessage : "Congratulation, " + (itemArr[0] ? "Cross" : "Zero").concat(' Wins 😂')})
      }
      else if ((itemArr[3] !== "") && (itemArr[3] === itemArr[4]) && (itemArr[4] === itemArr[5])) {
          this.setState({winMessage : "Congratulation, " + (itemArr[3] ? "Cross" : "Zero").concat(' Wins 😂')})
      }
      else if ((itemArr[6] !== "") && (itemArr[6] === itemArr[7]) && (itemArr[7] === itemArr[8])) {
          this.setState({winMessage : "Congratulation, " + (itemArr[6] ? "Cross" : "Zero").concat(' Wins 😂')})
      }
      else if ((itemArr[0] !== "") && (itemArr[0] === itemArr[3]) && (itemArr[3] === itemArr[6])) {
          this.setState({winMessage : "Congratulation, " + (itemArr[0] ? "Cross" : "Zero").concat(' Wins 😂')})
      }
      else if ((itemArr[1] !== "") && (itemArr[1] === itemArr[4]) && (itemArr[4] === itemArr[7])) {
          this.setState({winMessage : "Congratulation, " + (itemArr[1] ? "Cross" : "Zero").concat(' Wins 😂')})
      }
      else if ((itemArr[2] !== "") && (itemArr[2] === itemArr[5]) && (itemArr[5] === itemArr[8])) {
          this.setState({winMessage : "Congratulation, " + (itemArr[2] ? "Cross" : "Zero").concat(' Wins 😂')})
      }
      else if ((itemArr[0] !== "") && (itemArr[0] === itemArr[4]) && (itemArr[4] === itemArr[8])) {
          this.setState({winMessage : "Congratulation, " + (itemArr[0] ? "Cross" : "Zero").concat(' Wins 😂')})
      }
      else if ((itemArr[2] !== "") && (itemArr[2] === itemArr[4]) && (itemArr[4] === itemArr[6])) {
          this.setState({winMessage : "Congratulation, " + (itemArr[2] ? "Cross" : "Zero").concat(' Wins 😂')})
      }
  }

  resetGame = () => {
    itemArr = new Array(9).fill("");
    this.setState({winMessage : ""});
    this.setState({isCross : false});
    this.forceUpdate();
  }

  render() {
    return(
       <SafeAreaView style={styles.safeareacontainer}>
          <View style={styles.rootviewcontainer}>
            <Text style={styles.titletext}> Tic Tac Toe </Text>
            <View style={styles.gamebox}>
            <View style={styles.rowgame}>
                <View style={{flex:1, borderWidth: 2}}>
                  <TouchableOpacity style={styles.boxtouchable} onPress={() => this.boxItemClicked(0)}>
                    <Image style={styles.boximageicon} source={this.chooseItemIcon(0)}></Image>
                  </TouchableOpacity>
                </View>
                <View style={{flex:1, borderWidth: 2}}>
                  <TouchableOpacity style={styles.boxtouchable} onPress={() => this.boxItemClicked(1)}>
                    <Image style={styles.boximageicon} source={this.chooseItemIcon(1)}></Image>
                  </TouchableOpacity>
                </View>
                <View style={{flex:1, borderWidth: 2}}>
                  <TouchableOpacity style={styles.boxtouchable} onPress={() => this.boxItemClicked(2)}>
                    <Image style={styles.boximageicon} source={this.chooseItemIcon(2)}></Image>
                  </TouchableOpacity>
                </View>
            </View>
            <View style={styles.rowgame}>
                <View style={{flex:1, borderWidth: 2}}>
                  <TouchableOpacity style={styles.boxtouchable} onPress={() => this.boxItemClicked(3)}>
                    <Image style={styles.boximageicon} source={this.chooseItemIcon(3)}></Image>
                  </TouchableOpacity>
                </View>
                <View style={{flex:1, borderWidth: 2}}>
                  <TouchableOpacity style={styles.boxtouchable} onPress={() => this.boxItemClicked(4)}>
                    <Image style={styles.boximageicon} source={this.chooseItemIcon(4)}></Image>
                  </TouchableOpacity>
                </View>
                <View style={{flex:1, borderWidth: 2}}>
                  <TouchableOpacity style={styles.boxtouchable} onPress={() => this.boxItemClicked(5)}>
                    <Image style={styles.boximageicon} source={this.chooseItemIcon(5)}></Image>
                  </TouchableOpacity>
                </View>
            </View>
            <View style={styles.rowgame}>
                <View style={{flex:1, borderWidth: 2}}>
                  <TouchableOpacity style={styles.boxtouchable} onPress={() => this.boxItemClicked(6)}>
                    <Image style={styles.boximageicon} source={this.chooseItemIcon(6)}></Image>
                  </TouchableOpacity>
                </View>
                <View style={{flex:1, borderWidth: 2}}>
                  <TouchableOpacity style={styles.boxtouchable} onPress={() => this.boxItemClicked(7)}>
                    <Image style={styles.boximageicon} source={this.chooseItemIcon(7)}></Image>
                  </TouchableOpacity>
                </View>
                <View style={{flex:1, borderWidth: 2}}>
                  <TouchableOpacity style={styles.boxtouchable} onPress={() => this.boxItemClicked(8)}>
                    <Image style={styles.boximageicon} source={this.chooseItemIcon(8)}></Image>
                  </TouchableOpacity>
                </View>
            </View>
            </View>
            <Button style={styles.startgamebutton} disabled rounded>
              <TouchableOpacity onPress={() => this.resetGame()}>
                <Text style={styles.startgamebuttontext}> Reset Game </Text>
              </TouchableOpacity>
            </Button>
            <Text style={styles.winmessagetext}>{this.state.winMessage}</Text>
          </View>
       </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeareacontainer : {
    flex : 1,
    backgroundColor : "#A4B0BD",
    justifyContent : 'space-around',
    alignItems: 'stretch'
  },
  rootviewcontainer : {
  },
  titletext : {
    fontFamily : 'Ubuntu-Light',
    fontSize:45,
    textAlign : 'center'
  },
  startgamebutton : {
    marginLeft : 30,
    marginRight : 30,
    backgroundColor : '#47535E',
    alignItems : 'center',
    justifyContent : 'center',
  },
  startgamebuttontext : {
    fontSize : 20,
    fontFamily : 'Ubuntu-Bold',
  },
  gamebox : {
    margin : 40
  },
  rowgame : {
    flexDirection : 'row',
    height : 80
  },
  boxtouchable: {
    width : '100%',
    height : '100%',
    justifyContent : 'center',
    alignItems : 'center'
  },
  boximageicon: {
    width : 50,
    height : 50
  },
  winmessagetext: {
    margin: 30,
    fontSize : 18,
    fontFamily : 'Ubuntu-Medium',
    textAlign : 'center'
  }
});