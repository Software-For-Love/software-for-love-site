import React from "react";
import _ from "lodash";

import { Link, withPrefix, classNames } from "../utils";
import Action from "./Action";

export default class Header extends React.Component {
    render() {
        return (
            <header className="site-header">
                <div className="container container--lg">
                    <nav className="navbar" aria-label="Main Navigation">
                        <Link className="sr-only" to="#content">
                            Skip to main content
                        </Link>
                        <div className="navbar__logo">
                            <Link to={withPrefix("/")}>
                                <svg
                                    id="svg"
                                    version="1.1"
                                    width="45"
                                    height="40"
                                    viewBox="0, 0, 500,460"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g
                                        id="svgg"
                                        transform="matrix(1.44776, 0, 0, 1.362965, -21.38666, -29.941322)"
                                    >
                                        <path d="M147.890 24.629 C 140.737 25.774,134.418 31.861,132.468 39.485 C 128.634 54.475,143.623 67.334,158.522 61.836 L 161.265 60.824 162.704 62.430 C 166.483 66.650,166.402 65.991,166.309 91.651 L 166.239 111.193 147.890 111.193 L 129.541 111.193 129.541 102.369 L 129.541 93.545 130.419 92.736 C 130.902 92.291,132.046 91.306,132.963 90.547 C 140.543 84.268,135.657 71.468,125.680 71.468 C 115.115 71.468,110.487 84.830,118.848 91.193 C 121.872 93.494,121.864 93.459,121.750 102.742 L 121.651 110.824 104.587 110.916 C 81.747 111.041,81.949 111.126,76.517 99.042 C 75.393 96.541,74.318 94.216,74.128 93.875 C 73.855 93.386,74.085 93.016,75.224 92.114 C 80.581 87.872,83.192 78.715,80.998 71.866 C 75.208 53.784,50.412 53.483,43.975 71.417 C 39.557 83.726,50.343 97.878,63.289 96.758 C 66.639 96.469,67.523 96.997,68.784 100.041 C 75.031 115.117,79.232 118.165,93.758 118.165 C 97.435 118.165,101.458 118.271,102.698 118.401 L 104.954 118.637 104.954 126.291 L 104.954 133.945 93.394 133.945 L 81.835 133.945 81.835 141.651 L 81.835 149.358 65.480 149.358 C 47.161 149.358,48.229 149.523,46.585 146.439 C 38.773 131.783,16.328 138.573,18.386 154.969 C 20.277 170.027,39.617 173.234,46.744 159.671 C 48.596 156.146,47.537 156.330,65.895 156.330 L 81.835 156.330 81.835 170.459 L 81.835 184.587 74.404 184.586 C 66.018 184.584,65.462 184.438,63.833 181.801 C 57.979 172.331,42.631 177.721,43.779 188.844 C 44.888 199.584,57.712 202.524,64.220 193.529 C 65.287 192.056,66.082 191.927,74.104 191.927 L 81.835 191.927 81.835 199.633 L 81.835 207.339 93.394 207.339 L 104.954 207.339 104.954 214.808 L 104.954 222.276 92.417 222.474 C 77.869 222.704,78.296 222.778,76.864 219.782 C 70.219 205.878,49.252 212.037,50.364 227.567 C 51.320 240.940,70.529 245.195,76.517 233.360 C 78.331 229.776,76.718 229.954,104.383 230.273 L 127.890 230.545 127.890 241.786 L 127.890 253.028 131.627 253.132 L 135.365 253.236 135.480 256.974 C 135.699 264.012,135.087 264.873,126.465 269.655 C 123.212 271.460,119.147 273.728,117.431 274.696 C 115.716 275.665,112.752 277.321,110.844 278.378 L 107.377 280.299 105.523 278.727 C 86.525 262.619,60.884 288.996,78.744 306.276 C 91.851 318.957,112.485 309.298,111.438 290.972 C 111.279 288.180,111.342 286.912,111.663 286.483 C 112.070 285.939,122.193 280.147,129.908 276.044 C 140.278 270.528,142.470 267.510,142.693 258.440 L 142.821 253.211 146.818 253.211 L 150.815 253.211 150.912 264.679 L 151.009 276.147 162.309 276.223 L 173.609 276.300 173.685 287.599 L 173.761 298.899 177.712 299.003 L 181.662 299.108 181.565 310.180 L 181.468 321.252 179.266 322.015 C 156.811 329.798,165.161 363.224,188.575 359.274 C 207.255 356.123,210.230 331.087,192.911 322.775 C 188.351 320.586,188.591 321.360,188.710 309.227 L 188.807 299.266 192.752 299.162 L 196.697 299.058 196.697 287.602 L 196.697 276.147 208.068 276.249 L 219.439 276.351 219.536 264.873 L 219.633 253.394 227.410 253.296 L 235.187 253.197 235.300 269.442 L 235.413 285.688 236.452 287.806 C 237.885 290.725,238.532 291.422,245.470 297.522 C 256.619 307.325,256.383 307.026,255.762 310.589 C 253.419 324.042,270.229 332.896,279.702 323.198 C 291.055 311.576,277.282 293.505,262.729 300.929 L 261.254 301.682 259.169 299.924 C 256.165 297.389,255.539 296.842,249.591 291.560 C 245.841 288.229,243.971 286.295,243.394 285.152 L 242.569 283.514 242.569 256.895 L 242.569 230.275 263.761 230.459 C 289.634 230.683,285.799 229.451,292.803 239.790 C 296.997 245.982,296.992 245.964,295.203 248.105 C 282.739 263.023,300.449 285.148,318.386 277.067 C 339.643 267.491,328.030 234.678,305.610 240.969 C 302.699 241.786,302.704 241.789,298.184 235.046 C 290.420 223.463,289.033 222.774,273.486 222.760 L 265.321 222.752 265.321 215.100 L 265.321 207.447 285.780 207.180 C 309.307 206.873,307.690 206.703,310.062 209.722 C 315.670 216.858,325.264 215.681,329.115 207.383 C 334.703 195.343,315.442 186.239,309.407 198.068 C 308.394 200.055,308.721 200.000,297.952 200.000 L 288.440 200.000 288.440 179.817 L 288.440 159.633 306.759 159.633 C 327.698 159.633,325.912 159.395,327.333 162.372 C 333.222 174.711,351.403 171.516,353.775 157.725 C 356.401 142.454,334.090 135.597,327.315 149.592 C 325.841 152.637,327.775 152.388,305.963 152.336 L 288.440 152.294 288.440 143.119 L 288.440 133.945 276.881 133.945 L 265.321 133.945 265.321 129.908 L 265.321 125.872 271.835 125.859 C 288.422 125.826,289.574 125.502,307.254 115.894 L 311.939 113.348 313.851 115.021 C 332.856 131.646,358.387 105.176,340.550 87.339 C 327.739 74.528,306.556 84.983,308.049 103.382 C 308.350 107.100,308.558 106.855,302.018 110.517 C 288.393 118.147,285.080 119.047,272.294 118.591 L 265.505 118.349 265.400 114.771 L 265.295 111.193 255.583 111.193 L 245.872 111.193 245.807 105.046 C 245.689 93.743,245.846 93.443,254.312 88.736 C 255.220 88.232,258.480 86.390,261.557 84.643 C 268.109 80.924,267.104 81.168,269.318 82.759 C 280.730 90.957,296.168 80.722,292.713 67.248 C 288.390 50.386,263.958 53.097,263.647 70.474 C 263.558 75.423,264.032 74.888,255.373 79.817 C 238.701 89.306,238.687 89.325,238.279 103.394 L 238.053 111.193 226.550 111.193 L 215.046 111.193 215.046 89.742 C 215.046 66.144,214.947 67.136,217.456 65.549 C 224.444 61.128,223.615 49.894,216.058 46.588 C 206.532 42.420,196.905 51.933,201.220 61.249 C 201.948 62.820,202.412 63.332,205.872 66.381 L 207.523 67.837 207.623 89.515 L 207.723 111.193 202.210 111.193 L 196.697 111.193 196.697 122.569 L 196.697 133.945 185.138 133.945 L 173.578 133.945 173.578 100.811 C 173.578 61.865,173.695 62.918,168.830 58.182 C 166.967 56.369,166.969 55.973,168.871 51.292 C 174.814 36.673,163.384 22.149,147.890 24.629 M156.233 35.478 C 162.528 38.466,162.573 49.009,156.304 52.215 C 148.276 56.320,139.998 50.064,142.018 41.417 C 143.414 35.443,150.191 32.611,156.233 35.478 M213.764 53.670 C 214.913 54.659,215.321 56.964,214.591 58.349 C 213.010 61.347,207.706 60.057,207.706 56.674 C 207.706 53.285,211.265 51.521,213.764 53.670 M281.008 64.418 C 283.959 65.651,285.289 67.950,285.068 71.434 C 284.561 79.387,273.204 80.029,271.577 72.196 C 270.451 66.772,275.895 62.281,281.008 64.418 M65.530 68.430 C 71.934 70.341,74.275 78.469,69.895 83.586 C 63.955 90.526,53.009 86.402,53.071 77.248 C 53.116 70.699,59.052 66.497,65.530 68.430 M128.838 79.297 C 130.967 81.425,130.923 84.066,128.729 85.938 C 124.055 89.928,118.053 83.913,122.141 79.334 C 124.099 77.142,126.669 77.127,128.838 79.297 M330.517 91.672 C 341.384 96.099,337.784 111.676,326.111 110.739 C 315.776 109.910,314.166 95.078,324.037 91.642 C 326.199 90.889,328.623 90.900,330.517 91.672 M173.578 145.271 L 173.578 156.597 175.281 156.831 C 177.483 157.133,191.006 157.129,194.220 156.825 L 196.697 156.591 196.697 145.211 L 196.697 133.831 230.550 134.064 C 249.170 134.192,264.486 134.319,264.587 134.348 C 264.688 134.376,264.886 134.382,265.027 134.362 C 265.167 134.341,265.293 150.681,265.305 170.672 C 265.321 195.044,265.206 206.945,264.958 206.791 C 264.754 206.665,264.587 206.740,264.587 206.958 C 264.587 207.234,261.305 207.333,253.762 207.285 C 247.808 207.248,242.845 207.308,242.732 207.420 C 242.620 207.533,242.531 212.546,242.534 218.562 C 242.538 224.578,242.396 229.675,242.220 229.888 C 242.001 230.151,238.515 230.216,231.316 230.089 C 224.429 229.967,220.498 230.033,220.059 230.278 C 219.426 230.630,219.386 231.333,219.415 241.553 C 219.445 251.952,219.414 252.471,218.740 252.831 C 218.297 253.068,214.104 253.194,207.504 253.169 C 198.994 253.137,196.912 253.226,196.649 253.629 C 196.470 253.904,196.366 258.855,196.419 264.632 C 196.489 272.395,196.400 275.243,196.076 275.544 C 195.326 276.245,174.431 276.068,174.159 275.359 C 173.698 274.160,173.925 256.582,174.404 256.407 C 174.771 256.272,174.771 256.141,174.404 255.752 C 174.151 255.485,173.945 254.804,173.945 254.239 L 173.945 253.211 162.391 253.211 L 150.836 253.211 150.739 241.769 L 150.642 230.327 139.266 230.301 L 127.890 230.275 127.824 218.899 L 127.757 207.523 116.356 207.426 L 104.954 207.329 104.954 170.637 L 104.954 133.945 139.266 133.945 L 173.578 133.945 173.578 145.271 M37.298 147.368 C 42.789 151.468,40.066 160.000,33.267 160.000 C 26.426 160.000,23.747 150.859,29.541 147.292 C 31.454 146.114,35.674 146.156,37.298 147.368 M343.100 150.586 C 347.311 153.372,347.260 158.730,343.000 161.124 C 337.295 164.330,330.861 157.839,334.521 152.570 C 336.706 149.425,340.145 148.630,343.100 150.586 M56.215 182.726 C 60.894 184.604,61.068 190.804,56.488 192.451 C 53.898 193.382,51.728 192.625,50.282 190.286 C 47.892 186.419,52.089 181.071,56.215 182.726 M321.208 200.373 C 323.425 202.116,323.222 204.850,320.752 206.513 C 319.163 207.583,317.657 207.358,316.239 205.839 C 313.257 202.648,317.779 197.675,321.208 200.373 M241.260 218.349 C 241.260 223.294,241.312 225.317,241.375 222.844 C 241.439 220.372,241.439 216.326,241.375 213.853 C 241.312 211.381,241.260 213.404,241.260 218.349 M67.731 221.096 C 71.370 223.228,71.681 227.824,68.395 230.894 C 64.323 234.698,58.349 231.757,58.349 225.950 C 58.349 221.172,63.400 218.558,67.731 221.096 M315.046 250.681 C 322.518 254.193,321.723 266.100,313.837 268.787 C 311.718 269.509,308.389 269.518,307.022 268.805 C 306.444 268.504,305.812 268.257,305.617 268.257 C 303.676 268.257,300.915 263.137,300.925 259.556 C 300.947 251.990,308.171 247.449,315.046 250.681 M94.917 283.448 C 100.483 284.929,103.339 290.370,101.599 296.175 C 99.577 302.925,89.245 304.595,84.633 298.918 C 78.703 291.619,85.756 281.009,94.917 283.448 M272.110 307.494 C 275.197 308.942,276.405 311.262,275.851 314.678 C 275.157 318.953,269.492 321.085,265.968 318.397 C 260.017 313.858,265.381 304.337,272.110 307.494 M188.398 331.093 C 191.984 332.164,194.888 336.577,194.846 340.892 C 194.752 350.674,181.216 353.608,176.721 344.820 C 172.726 337.009,179.913 328.560,188.398 331.093 " />
                                        <path
                                            d="M149.814 34.550 C 144.509 35.170,141.116 39.642,141.768 45.153 C 143.044 55.921,158.567 56.474,160.799 45.831 C 162.240 38.961,157.114 33.698,149.814 34.550 M124.624 77.871 C 120.220 78.812,119.427 84.838,123.456 86.750 C 125.432 87.688,128.807 86.992,128.807 85.646 C 128.807 85.367,129.006 85.179,129.248 85.229 C 129.491 85.280,129.873 84.775,130.099 84.108 C 131.266 80.655,128.159 77.116,124.624 77.871 M324.037 91.642 C 314.166 95.078,315.776 109.910,326.111 110.739 C 336.054 111.537,340.936 100.185,333.490 93.578 C 330.734 91.132,327.440 90.457,324.037 91.642 M128.245 134.404 C 128.150 134.656,128.032 145.018,127.981 157.431 L 127.890 180.000 116.422 180.097 L 104.954 180.194 104.959 192.941 C 104.962 199.952,105.063 206.057,105.184 206.509 L 105.404 207.329 116.581 207.426 L 127.757 207.523 127.824 218.899 L 127.890 230.275 139.266 230.301 L 150.642 230.327 150.739 241.769 L 150.836 253.211 162.391 253.211 L 173.945 253.211 173.945 254.239 C 173.945 254.804,174.151 255.485,174.404 255.752 C 174.771 256.141,174.771 256.272,174.404 256.407 C 173.925 256.582,173.698 274.160,174.159 275.359 C 174.431 276.068,195.326 276.245,196.076 275.544 C 196.400 275.243,196.489 272.395,196.419 264.632 C 196.366 258.855,196.470 253.904,196.649 253.629 C 196.912 253.226,198.994 253.137,207.504 253.169 C 214.104 253.194,218.297 253.068,218.740 252.831 C 219.414 252.471,219.445 251.952,219.415 241.553 C 219.386 231.333,219.426 230.630,220.059 230.278 C 220.498 230.033,224.429 229.967,231.316 230.089 C 238.515 230.216,242.001 230.151,242.220 229.888 C 242.396 229.675,242.538 224.578,242.534 218.562 C 242.531 212.546,242.620 207.533,242.732 207.420 C 242.845 207.308,247.808 207.248,253.762 207.285 C 261.305 207.333,264.587 207.234,264.587 206.958 C 264.587 206.740,264.754 206.665,264.958 206.791 C 265.206 206.945,265.321 195.044,265.305 170.672 C 265.293 150.681,265.167 134.341,265.027 134.362 C 264.886 134.382,264.688 134.376,264.587 134.348 C 264.486 134.319,249.170 134.192,230.550 134.064 L 196.697 133.831 196.697 145.211 L 196.697 156.591 194.220 156.825 C 191.006 157.129,177.483 157.133,175.281 156.831 L 173.578 156.597 173.578 145.271 L 173.578 133.945 150.998 133.945 C 133.270 133.945,128.380 134.044,128.245 134.404 M52.657 182.896 C 51.059 183.592,49.541 185.949,49.541 187.733 C 49.541 189.339,51.021 191.927,51.940 191.927 C 52.235 191.927,52.477 192.071,52.477 192.248 C 52.477 193.843,57.755 192.513,59.008 190.602 C 61.759 186.405,57.225 180.905,52.657 182.896 M241.375 222.844 C 241.312 225.317,241.260 223.294,241.260 218.349 C 241.260 213.404,241.312 211.381,241.375 213.853 C 241.439 216.326,241.439 220.372,241.375 222.844 M306.422 250.387 C 302.048 251.764,299.348 259.339,301.635 263.821 C 302.403 265.327,305.033 268.257,305.617 268.257 C 305.812 268.257,306.444 268.504,307.022 268.805 C 310.783 270.767,317.227 268.219,319.290 263.955 C 323.299 255.667,315.563 247.511,306.422 250.387 M89.311 283.610 C 81.073 286.457,80.012 297.427,87.599 301.303 C 90.256 302.661,95.321 302.617,97.475 301.217 C 107.189 294.906,100.205 279.845,89.311 283.610 M267.256 307.333 C 266.124 307.825,263.875 309.828,263.834 310.380 C 263.823 310.524,263.726 311.578,263.619 312.722 C 263.016 319.142,270.980 322.237,274.802 317.068 C 275.674 315.888,275.696 315.769,275.640 312.584 C 275.565 308.362,271.191 305.622,267.256 307.333 "
                                            stroke="none"
                                            fill="#C9D8DD"
                                            fill-rule="evenodd"
                                        />
                                    </g>
                                </svg>
                            </Link>
                        </div>
                        {_.get(
                            this.props,
                            "pageContext.site.siteMetadata.header.has_nav",
                            null
                        ) && (
                            <React.Fragment>
                                <button
                                    aria-label="Menu"
                                    className="btn btn--icon btn--clear navbar__menu-btn js-nav-toggle"
                                >
                                    <svg
                                        className="icon"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z" />
                                    </svg>
                                </button>
                                <div className="navbar__menu">
                                    <div className="navbar__scroller">
                                        <div className="navbar__inner">
                                            <button
                                                aria-label="Close"
                                                className="btn btn--icon btn--clear navbar__close-btn js-nav-toggle"
                                            >
                                                <svg
                                                    className="icon"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z" />
                                                </svg>
                                            </button>
                                            <ul className="navbar__list menu">
                                                {_.map(
                                                    _.get(
                                                        this.props,
                                                        "pageContext.site.siteMetadata.header.nav_links",
                                                        null
                                                    ),
                                                    (action, action_idx) => {
                                                        let pageUrl = _.trim(
                                                            _.get(
                                                                this.props,
                                                                "pageContext.url",
                                                                null
                                                            ),
                                                            "/"
                                                        );
                                                        let actionUrl = _.trim(
                                                            _.get(
                                                                action,
                                                                "url",
                                                                null
                                                            ),
                                                            "/"
                                                        );
                                                        return (
                                                            <li
                                                                key={action_idx}
                                                                className={classNames(
                                                                    "navbar__item",
                                                                    {
                                                                        "navbar__item--btn":
                                                                            _.get(
                                                                                action,
                                                                                "style",
                                                                                null
                                                                            ) !==
                                                                            "link",
                                                                        "is-active":
                                                                            pageUrl ===
                                                                            actionUrl,
                                                                    }
                                                                )}
                                                            >
                                                                <Action
                                                                    {...this
                                                                        .props}
                                                                    action={
                                                                        action
                                                                    }
                                                                />
                                                            </li>
                                                        );
                                                    }
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>
                        )}
                    </nav>
                </div>
            </header>
        );
    }
}
