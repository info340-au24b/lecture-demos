import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

export function CreateOrEditGame(props) {

    const { addNewGameCallback } = props;
    console.log("addNewGameCallback: ", addNewGameCallback)


    const [gameNameTextValue, setGameNameText] = useState("");
    const [manufacturerNameTextValue, setManufacturerNameTextValue] = useState("");
    const [imgPathTextValue, setImgPathTextValue] = useState("");
    const [manufacturerURLTextValue, setManufacturerURLTextValue] = useState("");
    

    const handleGameNameTextChange = (event) => {
        const inputtedGameNameValue = event.target.value;
        setGameNameText(inputtedGameNameValue); 
        console.log("gameNameTextValue :" , gameNameTextValue)
    }

    const handleManufacturerNameTextChange = (event) => {
        const inputtedManufacturerNameValue = event.target.value;
        setManufacturerNameTextValue(inputtedManufacturerNameValue); 
        console.log("manufacturerNameTextValue :" , manufacturerNameTextValue)
    }

    const handleimgPathTextChange = (event) => {
        const inputtedImgPathValue = event.target.value;
        setImgPathTextValue(setImgPathTextValue); 
        console.log("inputtedImgPathValue :" , inputtedImgPathValue)
    }

    const handleManufacturerURLTextChange = (event) => {
        const inputtedManufacturerURLValue = event.target.value;
        setManufacturerURLTextValue(inputtedManufacturerURLValue); 
        console.log("inputtedManufacturerURLValue :" , inputtedManufacturerURLValue)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("submitting");
    
        addNewGameCallback({})
        // setTypedValue(""); //empty the input!
      }
    

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formGameName">
                <Form.Label>Game Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Game Name"
                    value={gameNameTextValue} 
                    onChange={handleGameNameTextChange} 
                />
                <Form.Text className="text-muted" >
                    Examples: "Twister", "Typhoon", "Space Invaders"
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formManufacturerName">
                <Form.Label>Manufacturer Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Manufacturer Name"
                    value={manufacturerNameTextValue} 
                    onChange={handleManufacturerNameTextChange} 
                />
                <Form.Text className="text-muted">
                    Examples: "Adrenaline Arcade", "Raw Thrills", "Bay Tek"
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formImagePath">
                <Form.Label>Image Path</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter img Path"
                    value={imgPathTextValue} 
                    onChange={handleimgPathTextChange} 
                />
                <Form.Text className="text-muted">
                    Examples: "img/Nerf.jpg", "img/PiratesHook.jpg", "img/RedeemMachine.jpg"
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGameDescription">
                <Form.Label>Game Description</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formManufacturerURL">
                <Form.Label>Manufacturer Web Site</Form.Label>
                {/* <Form.Control type="url" placeholder="Enter URL to the Manufacturer site" /> */}
                <Form.Control
                    type="text"
                    placeholder="URL to Manufacturer site"
                    value={manufacturerURLTextValue} 
                    onChange={handleManufacturerURLTextChange} 
                />

                <Form.Text className="text-muted">
                    Examples: "https://www.icegame.com/games/whack-n-win/", "https://rawthrills.com/nerf-arcade/"
                </Form.Text>
            </Form.Group>


            <Form.Check // prettier-ignore
                type="switch"
                id="millcreek-switch"
                label="Mill Creek"
            />

            <Form.Check // prettier-ignore
                type="switch"
                id="issaquah-switch"
                label="Issaquah"
            />

            <Button variant="primary" type="submit">
                Submit
            </Button>




        </Form>
    );
}
