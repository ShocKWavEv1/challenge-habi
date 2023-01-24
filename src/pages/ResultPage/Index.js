import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "../../components/Button/Button"
import { ContainerResult } from "../../components/Grid/Grid"
import { Heading } from "../../components/Heading/Heading"
import { Text } from "../../components/Text/Text"
import MainContext from "../../context/context"

const ResultPage = () => {
    const navigate = useNavigate()

    const contextService = useContext(MainContext);

    const handleReset = () => {
        localStorage.setItem("currentIdx", ""); 
        // eslint-disable-next-line array-callback-return
        Object.keys(contextService.payload).map((key, idx) => {
            localStorage.setItem([key], "");
        })
        contextService.resetPayload();
        navigate("/");
    }

    return(
        <ContainerResult>
            <Heading variant="H6BOLD" color="black.500">
                Resultados
            </Heading>
            <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }} >
                {
                    // eslint-disable-next-line array-callback-return
                    Object.keys(contextService.payload).map((key, idx) => {
                        if(contextService.payload[key]) {
                            return(
                                <div key={idx} style={{ width: "100%", marginTop: "10px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }} >
                                    <Text variant="XSMEDIUM" color="black.500" >
                                        {key} : {contextService.payload[key]}
                                    </Text>
                                </div>
                            )
                        }
                    })
                }
            </div>
            <div style={{ marginTop: 20 }} >
                <Button onClick={() => handleReset()}  variant="solid" >
                    Nueva cotización
                </Button>
            </div>
        </ContainerResult>
    )
}

export default ResultPage