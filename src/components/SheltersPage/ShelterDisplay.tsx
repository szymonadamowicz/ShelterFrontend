import { Box } from "@mui/material"
import { DisplayProp } from "../types"



const ShelterDisplay:React.FC<DisplayProp> = ({children}) => {
    return(
        <Box width={"100%"} height={"auto"} minHeight={130} bgcolor={"green"}>
            {children}
        </Box>
    )
}

export default ShelterDisplay