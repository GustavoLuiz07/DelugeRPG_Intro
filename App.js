import React from 'react';
import {KeyboardAvoidingView, View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default function PokemonDelugeRpg () {
  return (
    <KeyboardAvoidingView>
      <View style={styles.topcontainer}>

        <Image 
          style={styles.logo}
          source={{ uri: "https://i.dstatic.com/images/logos/main.png" }}
        />

        <TouchableOpacity style={styles.conta}>
          <Text style={styles.contatxt}>Gusta007</Text>
        </TouchableOpacity>

        <Image 
        style={styles.imagemconta}
        source={{ uri: "https://pm1.narvii.com/6233/df6f87d8ca0da39cab802ee6f3e02170abc3a186_hq.jpg" }}
        />

        <TouchableOpacity style={styles.maps}>
          <Text style={styles.mapstext}>Maps</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.profile}>
          <Text style={styles.profiletext}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.pokemon}>
          <Text style={styles.pokemontext}>Pokémon</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.battle}>
          <Text style={styles.battletext}>Battle</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.trade}>
          <Text style={styles.tradetext}>Trade</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.misc}>
         <Text style={styles.misctext}>Misc</Text>
        </TouchableOpacity>
      </View>

        <View style={styles.professorarea}>

          <Image
          style={styles.professoroak}
          source={{ uri: "https://www.kindpng.com/picc/m/151-1510958_professor-oak-png-profesor-oak-pokemon-lets-go.png" }}
          />
        </View>

          <View style={styles.hellothere}>
            
            <Text style={styles.hellotheretxt}>Hey there! I'm the Pokemon Professor. Welcome to Deluge RPG! {`
            
Pokemon are living creatures that inhabit our pokemon world, living alongside, and usually helping, us humans.`}</Text>

            <TouchableOpacity style={styles.botaoskip}>
              <Text style={styles.botaoskiptxt}>Skip intro and choose starter</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaocatch}>
              <Text style={styles.botaocatchtxt}>Next - catching pokemon</Text>
            </TouchableOpacity>

          </View>
  </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  topcontainer: {
    width: 328,
    height: 127,
    borderRadius: 1,
    elevation: 3,
    backgroundColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.9,
    shadowRadius: 10,
    marginHorizontal: 4,
    marginVertical: 6,
    marginLeft: 2,
    marginTop: 2
  },
  logo: {
    width: 150,
    height: 40,
    marginTop: 2,
    marginLeft: 3
  },
  conta: {
    width: 102,
    height: 40,
    backgroundColor: "#363636",
    borderRadius: 1,
    marginLeft: 210,
    marginTop: -40
  },
  contatxt: {
    fontSize: 14,
    marginLeft: 36,
    marginTop: 10,
    color: "white",
    fontWeight: "bold"
  },
  imagemconta: {
    width: 30,
    height: 30,
    borderRadius: 170,
    marginLeft: 213,
    marginTop: -35
  },
  maps: {
    width: 50,
    height: 30,
    backgroundColor: "#D3D3D3",
    borderRadius: 3,
    marginLeft: 5,
    marginTop: 35
  },
  mapstext: {
    fontSize: 12,
    marginLeft: 10,
    marginTop: 5
  },
  profile: {
    width: 50,
    height: 30,
    backgroundColor: "#D3D3D3",
    borderRadius: 3,
    marginLeft: 60,
    marginTop: -30
  },
  profiletext: {
    fontSize: 12,
    marginLeft: 8,
    marginTop: 5
  },
  pokemon: {
    width: 51,
    height: 30,
    backgroundColor: "#D3D3D3",
    borderRadius: 3,
    marginLeft: 115,
    marginTop: -30
  },
  pokemontext: {
    fontSize: 12,
    marginLeft: 1,
    marginTop: 5
  },
  battle: {
    width: 50,
    height: 30,
    backgroundColor: "#D3D3D3",
    borderRadius: 3,
    marginLeft: 171,
    marginTop: -30
  },
  battletext: {
    fontSize: 12,
    marginLeft: 10,
    marginTop: 5
  },
  trade: {
    width: 50,
    height: 30,
    backgroundColor: "#D3D3D3",
    borderRadius: 3,
    marginLeft: 226,
    marginTop: -30
  },
  tradetext: {
    fontSize: 12,
    marginLeft: 10,
    marginTop: 5
  },
  misc: {
    width: 43,
    height: 30,
    backgroundColor: "#D3D3D3",
    borderRadius: 3,
    marginLeft: 280,
    marginTop: -30
  },
  misctext: {
    fontSize: 12,
    marginLeft: 8,
    marginTop: 5
  },
  professorarea: {
    width: 328,
    height: 422,
    backgroundColor: "#87CEEB",
    marginTop: -6,
    marginLeft: 2
  },
  professoroak: {
    width: 150,
    height: 140,
    borderRadius: 170,
    marginLeft: 76,
    marginTop: 5
  },
  hellothere: {
    width: 310,
    height: 116,
    borderRadius: 7,
    elevation: 3,
    backgroundColor: "white",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    marginHorizontal: 4,
    marginVertical: 6,
    marginLeft: 4,
    marginTop: -270
  },
  hellotheretxt: {
    fontSize: 14,
    fontWeight: "normal",
    marginLeft: 5
  },
  botaoskip: {
    width: 190,
    height: 35,
    backgroundColor: "white",
    borderRadius: 125,
    marginLeft: 55,
    marginTop: 20
  },
  botaoskiptxt: {
    fontSize: 14,
    fontWeight: "normal",
    color: "black",
    marginLeft: 7,
    marginTop: 7
  },
  botaocatch: {
    width: 190,
    height: 35,
    backgroundColor: "#4169E1",
    borderRadius: 125,
    marginLeft: 55,
    marginTop: 12
  },
  botaocatchtxt: {
    fontSize: 14,
    fontWeight: "normal",
    color: "white",
    marginLeft: 16,
    marginTop: 7
  }
})
