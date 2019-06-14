import React, { Component } from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { Container, Background } from "./styles";
export default class App extends Component {
  state = {
    consumo: 0,
    agua: 0,
    status: "Ruim",
    cor: "#f00",
    meta: "2000"
  }

  handleClick = () => {
    let stt;
    let cr;
    let mta = this.state.meta;
    if (this.state.agua > 50 && this.state.agua <= 80) {
      stt = "+ ou -";
      cr = "#ff0";
    } else if(this.state.agua > 81) {
      stt = "Òtimo";
      cr = "#0f0";
    }else if(this.state.agua >= 100){
      mta = "ATINGIDA";
    }else{
      stt = "Ruim";
      cr = "#f00";
    }

    
    this.setState({ consumo: this.state.consumo + 200, agua: this.state.agua + 10, status: stt, cor: cr, meta: mta });
    
  }


  
  
  render() {
    
    return (
      <Container>
        <Background source={require("./src/img/bg.png")}>
          <View style={styles.box}>
          <View>
            <Text style={{color:"#1E90FF", fontSize:23, marginLeft:18, fontWeight:"bold" }}>Meta </Text>
            <Text style={{color:"#708090", fontSize:23, marginLeft:7, color:"#1C1C1C", fontWeight:"bold"}}>{this.state.meta}ml </Text>
            </View>
            <View>
            <Text style={{color:"#1E90FF", fontSize:23, marginLeft:18, fontWeight:"bold"}}>Consumo </Text>
            <Text style={{color:"#708090", fontSize:23, marginLeft: 35, color:"#1C1C1C", fontWeight:"bold"}}>{this.state.consumo}ml </Text>
            </View>
            <View>         
            <Text style={{color:"#1E90FF", fontSize:23, marginLeft:18, fontWeight:"bold"}}>Status </Text>       
            <Text style={{color:"#708090", fontSize:23, marginLeft:24, color:`${this.state.cor}`, fontWeight:"bold"}}>{this.state.status} </Text>
            </View>
            </View>
          <View style={{marginLeft: 100, marginTop: 110}}>
            <Text style={styles.perc}>{this.state.agua}%</Text>
          </View>
          <View style={{marginLeft: 65, borderRadius: 50, marginTop:40 }}>

          <TouchableOpacity style={styles.btn} onPress={this.handleClick}>        
            <Text style={{color:"#fff", fontWeight:"bold", fontSize:23}}>Beber 200ml</Text>          
          </TouchableOpacity>
          </View>
        </Background>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 55,
    textAlign: "center",
    margin: 10
  },
  box: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ADD8E6",
    width: 330,
    height: 115,
    marginLeft: 12,
    borderRadius:10,
    marginTop:40
  },
  info: {
    fontSize: 22,
    flex: 1,
    textAlign: "center",
    paddingTop: 10,
    borderRadius: 10,
    backgroundColor: "#ADD8E6",
    height: 50,
    margin: 10
  },
  perc: {
    fontSize: 90,
    color: "#fff",
    fontWeight: "bold"
  },
  btn: {
    flexDirection: "row",
    width: 230,
    height: 60,
    alignItems: "center", justifyContent: "center",
    borderWidth: 6,
    borderColor: "#fff",
    borderRadius: 50
  }
});
