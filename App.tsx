import { BackendService } from "@genezio-sdk/spinner";
import { useState } from "react";
import {
    Button,
    Keyboard,
    KeyboardAvoidingView,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import { SvgUri } from "react-native-svg";

export default function App() {
    const [name, setName] = useState("");
    const [response, setResponse] = useState("");

    return (
        <Pressable onPress={Keyboard.dismiss} accessible={false} style={{ height: "100%" }}>
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.container}>
                    <View style={{ aspectRatio: 3 }}>
                        <SvgUri uri="https://raw.githubusercontent.com/Genez-io/graphics/main/svg/Logo_Genezio_Black.svg" />
                    </View>
                    <TextInput
                        onChangeText={setName}
                        style={styles.input}
                        placeholder="Enter your name"
                        placeholderTextColor={"#000"}
                    ></TextInput>
                    <Button
                        onPress={async () => {
                            setResponse(await BackendService.hello(name));
                        }}
                        title="Say Hello"
                    />
                    <View>
                        <Text style={styles.text}>{response}</Text>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        padding: 30,
    },
    input: {
        height: 40,
        marginVertical: 20,
        marginHorizontal: 40,
        borderWidth: 1,
        padding: 10,
    },
    text: {
        fontSize: 20,
        textAlign: "center",
    },
});
