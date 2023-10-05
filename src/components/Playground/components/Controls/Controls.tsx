import styles from "./Controls.module.css"
import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import PauseIcon from "@mui/icons-material/Pause"
import { Button } from "../../../UI"

export interface IControlsProps {
  isTimerActive: boolean
  setIsTimerActive: React.Dispatch<React.SetStateAction<boolean>>
}

const Controls: React.FC<IControlsProps> = (props) => {
  const { isTimerActive, setIsTimerActive } = props

  return (
    <div>
      <Button
        endIcon={<PlayArrowIcon />}
        className={styles.button}
        onClick={() => setIsTimerActive(true)}
        disabled={isTimerActive}
      >
        Play
      </Button>
      <Button
        endIcon={<PauseIcon />}
        className={styles.button}
        onClick={() => setIsTimerActive(false)}
        disabled={!isTimerActive}
      >
        Pause
      </Button>
    </div>
  )
}

export default Controls
