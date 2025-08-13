"use client";
import TekprofLayout from "@/layout/TekprofLayout";
import PixelwaysInlineAd from "@/components/PixelwaysInlineAd";
import Link from "next/link";
import { useEffect, useState } from "react";

const HostingPage = () => {
    const [countdown, setCountdown] = useState(10);
    const [isRedirecting, setIsRedirecting] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    setIsRedirecting(true);
                    setTimeout(() => {
                        window.location.href = "https://pixelways.duoservers.com/";
                    }, 1000);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleImmediateRedirect = () => {
        setIsRedirecting(true);
        setTimeout(() => {
            window.location.href = "https://pixelways.duoservers.com/";
        }, 500);
    };

    return (
        <TekprofLayout bodyClass="hosting-redirect">
            {/* Hero Section with Redirect Info */}
            <section className="hosting-redirect-area py-130 rpy-100 bgc-blue rel z-1">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10">
                            <div
                                className="hosting-redirect-content text-center text-white"
                                data-aos="fade-up"
                                data-aos-duration={1500}
                                data-aos-offset={50}
                            >
                                {/* Logo Animation */}
                                <div className="logo-container mb-40">
                                    <img
                                        src="/logo.png"
                                        alt="Pixelways Solutions"
                                        className={`hosting-logo ${isRedirecting ? 'pulse-animation' : 'bounce-animation'}`}
                                        width="120"
                                        height="120"
                                    />
                                </div>

                                {/* Main Heading */}
                                <h1 className="mb-25">
                                    Welcome to <span className="color-primary">Pixelways Host</span>
                                </h1>
                                
                                <div className="subtitle-container mb-40">
                                    <span className="subtitle-one">
                                        <i className="fas fa-server" /> Professional Web Hosting Solutions
                                    </span>
                                </div>

                                {/* Redirect Information */}
                                <div className="redirect-info-box">
                                    <div className="icon-container mb-20">
                                        <i className="fas fa-external-link-alt redirect-icon"></i>
                                    </div>
                                    
                                    <h3 className="mb-20">Redirecting to Our Hosting Portal</h3>
                                    <p className="mb-30">
                                        We're taking you to our dedicated hosting platform where you can access 
                                        premium web hosting services, manage your domains, and explore our hosting packages.
                                    </p>

                                    {/* Countdown Timer */}
                                    {!isRedirecting ? (
                                        <div className="countdown-container mb-30">
                                            <div className="countdown-circle">
                                                <span className="countdown-number">{countdown}</span>
                                            </div>
                                            <p className="countdown-text">
                                                Redirecting in <strong>{countdown}</strong> seconds...
                                            </p>
                                        </div>
                                    ) : (
                                        <div className="redirecting-animation mb-30">
                                            <div className="spinner"></div>
                                            <p className="redirecting-text">Redirecting now...</p>
                                        </div>
                                    )}

                                    {/* Action Buttons */}
                                    <div className="redirect-buttons">
                                        <button
                                            onClick={handleImmediateRedirect}
                                            className="theme-btn color-white hover-secondary mr-15"
                                            disabled={isRedirecting}
                                        >
                                            <span>Go Now</span>
                                            <i className="fas fa-arrow-right ml-10"></i>
                                        </button>
                                        <Link
                                            href="/"
                                            className="theme-btn btn-outline-white"
                                        >
                                            <span>Back to Home</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Background Animation Elements */}
                <div className="bg-animation">
                    <div className="floating-shape shape-1"></div>
                    <div className="floating-shape shape-2"></div>
                    <div className="floating-shape shape-3"></div>
                </div>
            </section>

            {/* Features Section */}
            <section className="hosting-features-area py-80 rpy-60">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-10">
                            <div
                                className="section-title text-center mb-50"
                                data-aos="fade-up"
                                data-aos-duration={1500}
                                data-aos-offset={50}
                            >
                                <h3>What You'll Find on Our Hosting Portal</h3>
                                <p>Discover powerful hosting solutions designed for your success</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div
                            className="col-lg-4 col-md-6"
                            data-aos="fade-up"
                            data-aos-delay={100}
                            data-aos-duration={1500}
                            data-aos-offset={50}
                        >
                            <div className="feature-item text-center">
                                <div className="icon">
                                    <i className="flaticon-cloud" />
                                </div>
                                <h5>Cloud Hosting</h5>
                                <p>Scalable cloud infrastructure with 99.9% uptime guarantee</p>
                            </div>
                        </div>
                        
                        <div
                            className="col-lg-4 col-md-6"
                            data-aos="fade-up"
                            data-aos-delay={200}
                            data-aos-duration={1500}
                            data-aos-offset={50}
                        >
                            <div className="feature-item text-center">
                                <div className="icon">
                                    <i className="flaticon-network-security" />
                                </div>
                                <h5>SSL Certificates</h5>
                                <p>Free SSL certificates and advanced security features</p>
                            </div>
                        </div>
                        
                        <div
                            className="col-lg-4 col-md-6"
                            data-aos="fade-up"
                            data-aos-delay={300}
                            data-aos-duration={1500}
                            data-aos-offset={50}
                        >
                            <div className="feature-item text-center">
                                <div className="icon">
                                    <i className="flaticon-technical-support-2" />
                                </div>
                                <h5>24/7 Support</h5>
                                <p>Round-the-clock technical support from hosting experts</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hosting Related Inline Ads */}
            <section className="py-80 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <PixelwaysInlineAd 
                                category="hosting" 
                                priority="high" 
                                style="card"
                            />
                        </div>
                        <div className="col-lg-6">
                            <PixelwaysInlineAd 
                                category="hosting" 
                                priority="medium" 
                                style="card"
                            />
                        </div>
                    </div>
                    <div className="row mt-40">
                        <div className="col-12">
                            <PixelwaysInlineAd 
                                category="development" 
                                priority="medium" 
                                style="banner"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Custom Styles */}
            <style jsx>{`
                .hosting-logo {
                    transition: all 0.3s ease;
                    filter: drop-shadow(0 0 20px rgba(252, 85, 70, 0.3));
                }

                .bounce-animation {
                    animation: bounce 2s infinite;
                }

                .pulse-animation {
                    animation: pulse 1s infinite;
                }

                @keyframes bounce {
                    0%, 20%, 50%, 80%, 100% {
                        transform: translateY(0);
                    }
                    40% {
                        transform: translateY(-20px);
                    }
                    60% {
                        transform: translateY(-10px);
                    }
                }

                @keyframes pulse {
                    0% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(1.1);
                    }
                    100% {
                        transform: scale(1);
                    }
                }

                .redirect-info-box {
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                    border-radius: 20px;
                    padding: 40px;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }

                .redirect-icon {
                    font-size: 48px;
                    color: #FC5546;
                    animation: float 3s ease-in-out infinite;
                }

                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }

                .countdown-circle {
                    width: 80px;
                    height: 80px;
                    border: 4px solid #FC5546;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 20px;
                    animation: countdown-pulse 1s infinite;
                }

                .countdown-number {
                    font-size: 28px;
                    font-weight: bold;
                    color: #FC5546;
                }

                @keyframes countdown-pulse {
                    0% {
                        box-shadow: 0 0 0 0 rgba(252, 85, 70, 0.7);
                    }
                    70% {
                        box-shadow: 0 0 0 20px rgba(252, 85, 70, 0);
                    }
                    100% {
                        box-shadow: 0 0 0 0 rgba(252, 85, 70, 0);
                    }
                }

                .spinner {
                    width: 40px;
                    height: 40px;
                    border: 4px solid rgba(255, 255, 255, 0.3);
                    border-left: 4px solid #FC5546;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                    margin: 0 auto 15px;
                }

                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }

                .bg-animation {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    z-index: -1;
                }

                .floating-shape {
                    position: absolute;
                    background: rgba(252, 85, 70, 0.1);
                    border-radius: 50%;
                    animation: float-around 20s infinite linear;
                }

                .shape-1 {
                    width: 100px;
                    height: 100px;
                    top: 20%;
                    left: 10%;
                    animation-delay: 0s;
                }

                .shape-2 {
                    width: 60px;
                    height: 60px;
                    top: 60%;
                    right: 15%;
                    animation-delay: -7s;
                }

                .shape-3 {
                    width: 80px;
                    height: 80px;
                    bottom: 20%;
                    left: 20%;
                    animation-delay: -14s;
                }

                @keyframes float-around {
                    0% {
                        transform: translateY(0px) rotate(0deg);
                        opacity: 0.7;
                    }
                    50% {
                        transform: translateY(-20px) rotate(180deg);
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(0px) rotate(360deg);
                        opacity: 0.7;
                    }
                }

                .feature-item {
                    padding: 30px 20px;
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 15px;
                    margin-bottom: 30px;
                    transition: all 0.3s ease;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }

                .feature-item:hover {
                    transform: translateY(-5px);
                    background: rgba(255, 255, 255, 0.1);
                }

                .feature-item .icon {
                    font-size: 48px;
                    color: #FC5546;
                    margin-bottom: 20px;
                }

                .redirect-buttons {
                    display: flex;
                    gap: 15px;
                    justify-content: center;
                    flex-wrap: wrap;
                }

                .btn-outline-white {
                    background: transparent;
                    border: 2px solid rgba(255, 255, 255, 0.3);
                    color: white;
                }

                .btn-outline-white:hover {
                    background: rgba(255, 255, 255, 0.1);
                    border-color: rgba(255, 255, 255, 0.5);
                }

                @media (max-width: 768px) {
                    .redirect-info-box {
                        padding: 30px 20px;
                    }
                    
                    .redirect-buttons {
                        flex-direction: column;
                        align-items: center;
                    }
                    
                    .redirect-buttons .theme-btn {
                        width: 100%;
                        max-width: 250px;
                        margin: 5px 0;
                    }
                }
            `}</style>
        </TekprofLayout>
    );
};

export default HostingPage;
