import React from 'react'

export default function ClickBtn(props) {
    return (
        <>
            <button className="button d-block mx-auto my-4" >
                <svg
                    className="svg-icon"
                    fill="none"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g
                        clipRule="evenodd"
                        fillRule="evenodd"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeWidth="2"
                    >
                        <path d="m4 9c0-1.10457.89543-2 2-2h2l.44721-.89443c.33879-.67757 1.03131-1.10557 1.78889-1.10557h3.5278c.7576 0 1.4501.428 1.7889 1.10557l.4472.89443h2c1.1046 0 2 .89543 2 2v8c0 1.1046-.8954 2-2 2h-12c-1.10457 0-2-.8954-2-2z" />
                        <path d="m15 13c0 1.6569-1.3431 3-3 3s-3-1.3431-3-3 1.3431-3 3-3 3 1.3431 3 3z" />
                    </g>
                </svg>
                <span className="lable" >
                    Take a Photo
                </span>
            </button>
        </>
    )
}
