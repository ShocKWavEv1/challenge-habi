import { Button } from "../../components/Button/Button"
import { Heading } from "../../components/Heading/Heading"
import bg from "../../assets/house.jpg"
import { useNavigate } from "react-router-dom";

const Landing = () => {
    const navigate = useNavigate();
    return(
        <div style={{ width: "100%", height: "100vh", position: "relative", zIndex: 0, backgroundColor: "black", backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundPosition: "center", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }} >
            <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", flexDirection: "column", position: "absolute", zIndex: 1, backgroundColor: "rgba(21,26,48, .7)" }} >
                <Heading variant="H5BOLD" color="white" >
                    Compramos tu depa o casa
                </Heading>
                <div style={{ marginTop: "20px" }} >
                    <Button onClick={() => {navigate("/datos"); localStorage.setItem("currentIdx", "/datos")}} variant="inverted" >
                        Solicita una oferta
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Landing