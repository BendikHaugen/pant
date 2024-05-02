import { AuthUser } from "@aws-amplify/auth";
import { useAuthenticator } from "@aws-amplify/ui-react-native";
import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

interface AuthContext {
  user: AuthUser | null;
  signOut: () => void;
}

const userSelector = (context: AuthContext) => [context.user];

const SignOutButton = () => {
  const { user, signOut } = useAuthenticator(userSelector);
  return (
    <Pressable onPress={signOut} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>
        Hello, {user.username}! Click here to sign out!
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#5cbcbc",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 3, // for Android shadow
  },
  buttonText: {
    color: "#FF7F50",
    fontWeight: "bold",
  },
});
