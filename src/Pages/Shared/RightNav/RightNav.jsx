import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h3>Login With</h3>
            <Button className="mb-3" variant="outline-primary"> <FaGoogle />  Login With Google</Button>
            <Button variant="outline-secondary"> <FaGithub />  Login With Github</Button>
            <div>
                <h4>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item disabled> <FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item> <FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;