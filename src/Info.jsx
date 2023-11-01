import React, { useEffect, useState } from 'react';

function Info({ ip, country, timezone, org }) {
    return (
        <div>
            <div id="info-container">
                <div className="data-area">
                    <div className="data-title">
                        IP ADDRESS
                    </div>
                    <div className="data-value">
                        {ip}
                    </div>
                </div>
                <div className="data-area">
                    <div className="data-title">
                        LOCATION
                    </div>
                    <div className="data-value">
                        {country}
                    </div>
                </div>
                <div className="data-area">
                    <div className="data-title">
                        TIMEZONE
                    </div>
                    <div className="data-value">
                        {timezone}
                    </div>
                </div>
                <div className="data-area">
                    <div className="data-title">
                        ISP
                    </div>
                    <div className="data-value">
                        {org}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info