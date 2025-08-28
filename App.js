import {  ScrollView, SafeAreaView, View, Text, Button, StyleSheet } from "react-native";


export default function App() {
  return (
    <SafeAreaView style={estilos.areaSegura}>
      <View style={estilos.tela}>
        <View style={estilos.conteudo}>
          <View style={[estilos.cabecalho, { flexDirection: "row", alignItems: "center" }]}>
             
              <Text style={estilos.titulo}>React Native </Text>
              <Text style={estilos.subtitulo}>Avaliação dia 27/08</Text>
            </View>
          </View> 
               <View style={estilos.cartao}>
                <Text style={estilos.tituloCartao}>Batatas são macias.</Text>
              </View>
              
              <Button title="ENVIAR" color="#320ae4ff" onPress={() => {}} />
          </View>
           
          </SafeAreaView>

  );
}

const estilos = StyleSheet.create({
  areaSegura: { 
    flex: 1, 
    backgroundColor: "#fff" 
  },
  tela: { 
    flex: 1, 
    backgroundColor: "#fff" 
  },
  conteudo: { 
    padding: 16 
  },
  cabecalho: { 
    marginBottom: 250
  },
  
  titulo: { 
    fontSize: 20, 
    fontWeight: "700" 
  },
  subtitulo: { 
    color: "#475569" 
  },
  
    cartao: {
    width: "50%",
    backgroundColor: "#f1f5f9",
    borderRadius: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: "#cbd5e1",
    marginBottom: 350,
    marginHorizontal: 100,
  
  },
 
});