import React from "react";
import { View, Text, Pressable, StatusBar } from "react-native";
import { connect } from "react-redux";
import styles from "./Stylesheet";

const increment = () => ({ type: "INCREMENT" });
const decrement = () => ({ type: "DECREMENT" });

const Counter = ({ count, increment, decrement }) => {
  return (
    <View style={styles.view}>
      <StatusBar />
      <View style={styles.incre}>
        <Text style={styles.text}>Increment & Decrement using</Text>
        <Text style={styles.redux}>REDUX</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.count}>{count > 0 ? count : "0"}</Text>
        <View
          style={{
            flexDirection: "row",
            width: "80%",
            justifyContent: "space-between",
            marginTop: "10%",
            marginLeft: count <= 0 ? "54%" : "30%",
          }}
        >
          {count > 0 && (
            <Pressable style={styles.decrement} onPress={decrement}>
              <Text style={styles.sub}>-</Text>
            </Pressable>
          )}
          <Pressable style={styles.increment} onPress={increment}>
            <Text style={styles.add}>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const properties = (state) => ({
  count: state.count,
});

const Despatch = {
  increment,
  decrement,
};

export default connect(properties, Despatch)(Counter);
