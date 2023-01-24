import { useContext } from "react"
import { Divider } from "../../components/Divider/Divider"
import { Text } from "../../components/Text/Text"
import MainContext from "../../context/context"

const Resumen = () => {
    const contextService = useContext(MainContext);

    return(
        <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "flex-start", justifyContent: "flex-start", flexDirection: "column" }} >
            <Text variant="MDBOLD" color="white" >
                Tu progreso
            </Text>
            <Divider />
            {
                // eslint-disable-next-line array-callback-return
                Object.keys(contextService.payload).map((key, idx) => {
                    if(contextService.payload[key]) {
                        return(
                            <div key={idx} style={{ width: "100%", marginTop: "10px", display: "flex", alignItems: "flex-start", justifyContent: "flex-start", flexDirection: "column" }} >
                                <Text variant="XSMEDIUM" color="white" >
                                    {key} : {contextService.payload[key]}
                                </Text>
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}

export default Resumen