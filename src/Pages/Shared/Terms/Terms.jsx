import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h3>Terms and conditions</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis doloremque impedit quis quidem vel iste quia dolore temporibus illo! Non, error, earum in necessitatibus fuga modi voluptas similique quisquam voluptates illo qui quos animi ducimus quae commodi nemo, voluptatibus nihil. Enim voluptate eum earum voluptatibus soluta consequuntur exercitationem dolorem. Magni.</p>
            <p>Go back to <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;