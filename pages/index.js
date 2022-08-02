import { Container, Text, Card, Button } from "@nextui-org/react";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const RandExp = require("randexp");

const Home = ({}) => {

    const notify = () => toast("Copied to clipboard");

    const [match, setMatch] = useState("");

    const makeNewMatch = () => {
        setMatch(new RandExp(/mRNA-chip_[A-Z]{2}\d{4}-\d{5}MSFT_5G-v[1-9]/).gen())
    }

    return (
    <Container>

        <Text h2>Generated string</Text>      
        <Button onPress={makeNewMatch}>Generate new</Button>
        <Card>
        <Card.Body>
            <CopyToClipboard onCopy={notify} text={match}>
                <Text >{match}</Text>
            </CopyToClipboard>

        </Card.Body>

        </Card>

    <ToastContainer />
    </Container>
    )
}

export default Home;