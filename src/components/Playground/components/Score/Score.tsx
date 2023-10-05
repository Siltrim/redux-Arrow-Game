import styles from "./Score.module.css"

import { useAppSelector } from "../../../../app/hooks"
import { TypographyHeader, TypographyText } from "../../../UI"
import { Chip, Stack } from "@mui/material"

const Score: React.FC = () => {
  const state = useAppSelector((state) => state.playground)

  return (
    <>
      <TypographyHeader>Score</TypographyHeader>

      <TypographyText>
        On error, the "Consecutive successful hits" value is reset to zero
      </TypographyText>

      <Stack direction="row" spacing={1}>
        <Chip
          className={styles.chipSuccessful}
          label={
            <>
              Errors:{" "}
              <span className={styles.counter}>{state.totalUnsuccessful}</span>
            </>
          }
          variant="outlined"
        />
        <Chip
          className={styles.chipUnsuccess}
          label={
            <>
              Successful:{" "}
              <span className={styles.counter}>{state.totalSuccessful}</span>
            </>
          }
          variant="outlined"
        />
      </Stack>
    </>
  )
}

export default Score
