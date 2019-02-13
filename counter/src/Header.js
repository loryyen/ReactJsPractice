import React, { Component } from 'react';

import { Consumer } from './context/OrderContext';

const Header = ({ orders = [] }) => (
    <div>
        <span>
            <Consumer>
                {
                    value => (
                        `shpping cart (${value.orders.length})`
                    )
                }
            </Consumer>
        </span>
        <hr />
    </div>
)

export default Header;