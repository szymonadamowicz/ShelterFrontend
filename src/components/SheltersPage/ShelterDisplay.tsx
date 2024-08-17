import { Box } from "@mui/material"
import { ReactNode } from "react"

interface ShelterDisplayProps {
    children: ReactNode
}

const ShelterDisplay:React.FC<ShelterDisplayProps> = ({children}) => {
    return(
        <Box width={"95%"} height={100} bgcolor={"red"}>
            {children}
        </Box>
    )
}

export default ShelterDisplay