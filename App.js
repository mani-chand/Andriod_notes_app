import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, Text, TextInput, View } from "react-native";
import React from "react";
export default function App() {
  const [text, onChangeText] = React.useState("");
  const [notes, setNotes] = React.useState([]);
  const handleAdd = () => {
    setNotes([...notes, text]);
    onChangeText("");
  };
  const handleRemove = (text) => {
    setNotes(notes.filter((note) => note !== text));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notes</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Button
        onPress={handleAdd}
        title="add"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <View style={styles.container}>
        {notes.map((note, index) => (
          <>
            <Text style={styles.item} key={index}>{note}</Text>
            <Button
              title="remove"
              key = {note}
              onPress={() => {
                handleRemove(note);
              }}
            >
              Remove
            </Button>
          </>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 36,
  },
  input: {
    height: 40,
    marginTop: 20,
    width: "100%",
    borderWidth: 1,
  },
  header: {
    fontSize: 30,
    color: "black",
  },
  item:{
    fontSize: 50,
    color: "black",
    textAlign:"left",
    paddingLeft: 5,
    flexWrap: 'wrap',
    flexDirection:'row',
  },
  remove:{
    height:1,
    width:50,
  }
});
