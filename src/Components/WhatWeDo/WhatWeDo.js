
import React, { useContext } from "react";

import { AuthContext } from "../../Context/AuthContext";

function Index () {
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <section>
            <div className="container">
                <div className="row">
                    <p>What we do</p>
                </div>
            </div>
        </section>
    )
}

export default Index;