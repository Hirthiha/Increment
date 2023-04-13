import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
  },

  incre: {
    height: "8%",
    width: "100%",
    backgroundColor: "violet",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  text: {
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
  },

  redux: {
    fontSize: 30,
    fontWeight: "600",
    marginLeft: "2%",
    color: "red",
    shadowColor: "black",
  },

  container: {
    alignItems: "center",
    justifyContent: "center",
    height: "80%",
  },

  count: {
    fontSize: 100,
    fontWeight: "600",
  },

  button: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
    marginTop: "10%",
  },

  decrement: {
    backgroundColor: "gray",
    width: "30%",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
  },

  sub: {
    fontSize: 50,
    marginTop: -10,
  },

  increment: {
    backgroundColor: "gray",
    width: "30%",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
  },

  add: { fontSize: 40, marginTop: -3 },
});

export default styles;
