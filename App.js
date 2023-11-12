import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native'
import React, {useState} from 'react'

import Task from './components/Task'
import styles from './App.components.styles'
import Form from './components/Form'

export default function App() {
    const [taskList, setTaskList] = useState([])
    const handleAddTask = (task) => {
        setTaskList([...taskList, task])
    }

    const handleDeleteTask = (index) => {
        Alert.alert(
            'Notification',
            'Do you want to delete?',
            [
                {
                    text: 'OK', onPress: () => {
                        let taskListTmp = [...taskList]
                        taskListTmp.splice(index, 1)
                        setTaskList(taskListTmp)
                    }
                },
                {
                    text: 'Cancel',
                    onPress: () => {},
                },
            ]
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Text style={styles.header}>Todo List</Text>
                <ScrollView>
                    {
                        taskList.map((item, index) => {
                            return <Task 
                                    key={index} 
                                    title={item} 
                                    number={index+1} 
                                    onDeleteTask={() => handleDeleteTask(index)}
                                />
                        })                        
                    }
                    <Task />
                </ScrollView>
            </View>
            <Form onAddTask={handleAddTask}/>
        </View>
    )
}