import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard } from 'react-native'
import React, { useState } from 'react'

import styles from './styles'

export default function Form(props) {
    const [task, setTask] = useState('')
    const handleAddTask = () => {
        if (task.trim().length == 0) {
            alert('Please! Enter task.')
        } else {
            props.onAddTask(task)
            setTask('')
            Keyboard.dismiss()
        }
    }
    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding': 'height'}
            keyboardVerticalOffset={10}
            style={styles.addTask}
        >
            <TextInput 
                value={task}
                placeholder='Your task' 
                style={styles.input} 
                onChangeText={text => setTask(text)}
            />
            <TouchableOpacity 
                onPress={handleAddTask}
            >
                <View style={styles.iconWrapper}>
                    <Text style={styles.icon}>+</Text>
                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}