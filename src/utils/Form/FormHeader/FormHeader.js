import { Divider } from "../../../components/Divider/Divider"
import { Heading } from "../../../components/Heading/Heading"
import { Text } from "../../../components/Text/Text"

const FormHeader = ({ pageData, totalSteps }) => {
    return(
       <div>
            <Heading variant={["H6BOLD", "H6BOLD", "H5BOLD", "H5BOLD"]} color="black.500">
                Paso {pageData.component.index} de {totalSteps}: {pageData.component.title}
            </Heading>
            <div style={{ paddingTop: "10px" }} >
                <Text variant={["XSMEDIUM", "XSMEDIUM", "SMMEDIUM", "SMMEDIUM"]} color="black.500" >
                    {pageData.component.description}
                </Text>
            </div>
            <Divider />
       </div> 
    )
}

export default FormHeader