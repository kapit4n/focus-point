import { useState } from 'react'
import styles from '../../styles/State.module.css'

const tasksMotivation = {
  'code': "Helps on the experience",
  'write': 'Move write help on velocity',
  'repeat': 'Help a lot on perfection'
}

export default function () {
  const [mainTask, setMainTask] = useState("Start Focus State");
  const [subTasks, setSubtasks] = useState(['Help on focus', 'Productivity', 'More Source code'])

  const onUpdateTask = (e) => {
    if (! e.target.value) {
      return
    }
    const task = e.target.value
    setMainTask(task)

    if (!tasksMotivation[task]) {
      tasksMotivation[task] = ""
    }

    const words = task.split(' ');
    const newSubTasks = []
    words.forEach(w => {
      if (tasksMotivation[w]) {
        newSubTasks.push(tasksMotivation[w])
      }
    });
    setSubtasks(newSubTasks)
  }

  const handleMotivation = (e) => {
    if ( e.target && e.target.value) {
      setSubtasks([...subTasks, " " + e.target.value])
    }
  }

  return (
    <div>
      <div style={{ width: '300px', height: '100px' }}>
        State
        <input onBlur={(e) => setMainTask(e.target.value)} onKeyDown={e => e.key === 'Enter' && onUpdateTask(e)} />
      </div>
      <div style={{ width: '300px', height: '100px' }}>
        Motivation
        <input onBlur={(e) => handleMotivation(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleMotivation(e)} />
      </div>

      <div style={{ color: 'green', fontSize: '100px' }}>
        {mainTask}
      </div>

      <div style={{ color: 'blue', fontSize: '20px', display: 'flex', flexDirection: 'column' }} className={styles.animate}>
        {subTasks.map(st => <span style={{ padding: '0 1rem' }}>{st}</span>)}
      </div>
    </div>
  )
}