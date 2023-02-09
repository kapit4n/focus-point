import styles from '../../styles/word.module.css'
import classNames from 'classnames';
import { useState, useEffect } from 'react';

export default function Index({ word, size }) {

  const [leftPosition, setLeftPosition] = useState(0)
  const [topPosition, setTopPosition] = useState(0)

  useEffect(() => {
    const interval = setInterval(function () {
      setLeftPosition(leftPosition + 100)
      setTopPosition(topPosition + 100)
    }, 1000)

    return () => {
      console.log('cler interal')
      clearInterval(interval)
    }
  }, [])
  
  return (
    <div style={{ left: leftPosition, top: topPosition, backgroundColor: 'transparent' }}>
      <span className={classNames(styles.word, styles[size])}>
        {word}
      </span>
    </div>
  )
}

Index.defaultProps = {
  word: 'this is the test',
  size: 'small'
}