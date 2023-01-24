import { Text } from "../../components/Text/Text"

const EmptyState = ({ color }) => {
    return(
        <div style={{ width: "100%", marginTop: "10px", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }} >
            <Text variant="XSMEDIUM" color={color ? color : "white"} >
                Llena el formulario para ver tu progreso
            </Text>
        </div>
    )
}

export default EmptyState