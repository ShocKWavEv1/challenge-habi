import { useState } from "react";
import { Container, FormPanel, ResultsPanel, ResultsPreview } from "../../components/Grid/Grid";
import { Text } from "../../components/Text/Text";
import FormBody from "../../utils/Form/FormBody/FormBody";
import FormHeader from "../../utils/Form/FormHeader/FormHeader";
import ModalPreview from "../../utils/ModalPreview/ModalPreview";
import Resumen from "../../utils/Resumen/Resumen";

const FormPage = ({ pageData, totalSteps }) => {
    const [isModal, setModal] = useState(false);

    return(
        <Container>
            <FormPanel>
                <div className="base-padding" >
                    <FormHeader pageData={pageData} totalSteps={totalSteps} />
                    <FormBody pageData={pageData} totalSteps={totalSteps} />
                </div>
            </FormPanel>
            <ResultsPanel>
                <div className="base-padding" >
                    <Resumen />
                </div>
            </ResultsPanel>
            <ResultsPreview onClick={() => setModal(true)}>
                <Text variant="XSBOLD" color="white" >
                    Ver resúmen
                </Text>
            </ResultsPreview>
            <ModalPreview isModal={isModal} handleModal={() => setModal(false)} />
        </Container>
    )
}

export default FormPage