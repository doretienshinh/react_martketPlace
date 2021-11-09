import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <nav className="header">
                <p>NFT Marketplace</p>
                <div>
                    <Link to="/">
                        <span className="mr-4 text-blue-500">
                            Home
                        </span>
                    </Link>
                    <Link to="/products">
                        <span className="mr-4 text-blue-500">
                            Create NFT
                        </span>
                    </Link>
                    <Link to="/about">
                        <span className="mr-4 text-blue-500">
                            My NFTSs
                        </span>
                    </Link>
                    <Link to="/littecanvas">
                        <span className="mr-4 text-blue-500">
                            Littecanvas
                        </span>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Navigation;