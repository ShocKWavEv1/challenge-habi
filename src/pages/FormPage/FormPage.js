import { useContext, useState } from "react";
import { Divider } from "../../components/Divider/Divider";
import { Container, FormPanel, ResultsPanel, ResultsPreview } from "../../components/Grid/Grid";
import { Modal, ModalBody, ModalClose, ModalContainer, ModalHeader } from "../../components/Modal/Modal";
import { Text } from "../../components/Text/Text";
import MainContext from "../../context/context";
import EmptyState from "../../utils/EmptyState/EmptyState";
import FormBody from "../../utils/Form/FormBody/FormBody";
import FormHeader from "../../utils/Form/FormHeader/FormHeader";
import Resumen from "../../utils/Resumen/Resumen";

const FormPage = ({ pageData, totalSteps }) => {
    const contextService = useContext(MainContext);

    const [isModal, setModal] = useState(false)
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
            {
                isModal &&
                <Modal>
                    <ModalContainer>
                        <ModalHeader>
                            <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row" }} >
                                <div style={{ width: "80%", display: "flex", alignItems: "center", justifyContent: "flex-start", flexDirection: "row" }} >
                                    <Text variant="MDBOLD" color="black.500" >
                                        Tu Resumen
                                    </Text>
                                </div>
                                <div style={{ width: "20%", display: "flex", alignItems: "center", justifyContent: "flex-end", flexDirection: "row" }} >
                                    <ModalClose onClick={() => setModal(false)}>
                                        <Text variant="LGBOLD" >
                                            &#x2715;
                                        </Text>
                                    </ModalClose>
                                </div>
                            </div>
                        </ModalHeader>
                        <Divider />
                        <ModalBody>
                            {
                                contextService.payload?.fullName === null || contextService.payload?.fullName === undefined ? <EmptyState color="black.500" /> :
                                // eslint-disable-next-line array-callback-return
                                Object.keys(contextService.payload).map((key, idx) => {
                                    if(contextService.payload[key]) {
                                        return(
                                            <div key={idx} style={{ width: "100%", margin: "10px 0px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }} >
                                                <Text variant="XSMEDIUM" color="black.500" >
                                                    {key} : {contextService.payload[key]}
                                                </Text>
                                            </div>
                                        )
                                    }
                                })
                            }
                        </ModalBody>
                    </ModalContainer>
                </Modal>
            }
        </Container>
    )
}

export default FormPage