import { Box } from "@mui/material"
import { ReactNode } from "react"

interface ShelterDisplayProps {
    children: ReactNode
}

const ShelterDisplay:React.FC<ShelterDisplayProps> = ({children}) => {
    return(
        <Box width={"100%"} height={"auto"} minHeight={130} bgcolor={"green"}>
            {children}
        </Box>
    )
}

export default ShelterDisplay