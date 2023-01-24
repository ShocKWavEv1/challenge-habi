import { useContext } from "react"
import { Divider } from "../../components/Divider/Divider"
import { Modal, ModalBody, ModalClose, ModalContainer, ModalHeader } from "../../components/Modal/Modal"
import { Text } from "../../components/Text/Text"
import MainContext from "../../context/context"
import EmptyState from "../EmptyState/EmptyState"

const ModalPreview = ({ isModal, handleModal }) => {
    const contextService = useContext(MainContext);

    return(
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
                                <ModalClose onClick={() => handleModal()}>
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
                            contextService.payload?.fullName === null || contextService.payload?.fullName === undefined || contextService.payload?.fullName === "" ? <EmptyState color="black.500" /> :
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
    )
}

export default ModalPreview