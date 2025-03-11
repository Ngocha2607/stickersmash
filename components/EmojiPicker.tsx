import { MaterialIcons } from "@expo/vector-icons";
import React, { PropsWithChildren } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
type Props = PropsWithChildren<{
  isVisible: boolean;
  onClose: () => void;
}>;
const EmojiPicker = ({ isVisible, onClose, children }: Props) => {
  return (
    <View>
      <Modal visible={isVisible} animationType="slide" transparent>
        <View style={styles.modalContent}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Choose a ticker</Text>
            <Pressable onPress={onClose}>
              <MaterialIcons name="close" size={24} color={"#fff"} />
            </Pressable>
          </View>
          {children}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    height: "25%",
    width: "100%",
    backgroundColor: "#25292e",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    position: "absolute",
    bottom: 0,
  },
  titleContainer: {
    height: "15%",
    backgroundColor: "#464C55",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "#fff",
    fontSize: 16,
  },
});
export default EmojiPicker;
