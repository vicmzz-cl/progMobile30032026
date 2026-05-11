import { Input } from "@/componentes/input";
import { Image, StyleSheet, Text, View } from "react-native";
export default function Index(){
    return(
    <ScrollView>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
          <Image
            source={require("/home/escola/TrabalhoFlavia/src/app/assets/castaldi.jpg")}
            style={styles.illustration}
          />
          <Text style={styles.title}>Programação Mobile.</Text>
          <Text style={styles.subtitle}>Acesse sua conta.</Text>
          <View style={styles.form}>
            <Input placeholder="E-mail" keyboardType="email-address" />
            <Input placeholder="Senha" secureTextEntry />
          </View>
        </View>
     </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fdfdfd",
    padding: 32,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
  },
  form: {
    marginTop: 30,
    gap: 24,
},
  illustration: {
    width: "25%",
    height: 300,
  },
});
