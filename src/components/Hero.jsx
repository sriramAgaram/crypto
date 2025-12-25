import React from 'react';

const Hero = ({ data, dashboardData, badge }) => {
    if (!data || !dashboardData) return null;

    return (
        <header className="hero">
            <div className="hero-content">
                <span className="badge">{badge}</span>
                <h1 className="hero-title">
                    <span className="hero-title-prefix">{data.title_prefix}</span> <br />
                    <span className="highlight">{data.title_highlight}</span>
                </h1>
                <p className="hero-desc">{data.description}</p>

                <div className="input-group">
                    <div style={{ padding: '0 0.5rem', display: 'flex', alignItems: 'center', color: '#64748b' }}>
                        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <input type="email" placeholder={data.input_placeholder} />
                    <button className="btn-primary">{data.button_text}</button>
                </div>
                <div className="spam-note">
                    <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-2h2v2h-2zm0-10v6h2V7h-2z" /></svg>
                    <span>{data.spam_note}</span>
                </div>
            </div>

            <div className="hero-visual">
                <div className="card-visual">
                    <div className="float-card float-profit">
                        <span>{dashboardData.profit_label}</span>
                        <span style={{ color: '#4ade80', fontWeight: 700 }}>{dashboardData.profit}</span>
                    </div>

                    <div style={{ height: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                        {/* Outer Glow */}
                        <div style={{ width: '220px', height: '220px', background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)', borderRadius: '50%', position: 'absolute', filter: 'blur(40px)' }}></div>

                        {/* Cute Robot with Scan Effect */}
                        <svg width="280" height="320" viewBox="0 0 240 280" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ zIndex: 10, filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.3))' }}>
                            <defs>
                                {/* Plastic Body Gradient */}
                                <linearGradient id="bodyGradient" x1="120" y1="0" x2="120" y2="280" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor="#f8fafc" />
                                    <stop offset="100%" stopColor="#cbd5e1" />
                                </linearGradient>

                                {/* Screen Gradient */}
                                <linearGradient id="screenGradient" x1="120" y1="50" x2="120" y2="150" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor="#0f172a" />
                                    <stop offset="100%" stopColor="#1e293b" />
                                </linearGradient>

                                {/* Eye Glow */}
                                <filter id="cuteEyeGlow">
                                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                                    <feMerge>
                                        <feMergeNode in="coloredBlur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            </defs>

                            <g transform="translate(0, 10)">
                                {/* --- ROBOT BODY PARTS --- */}

                                {/* Shadow */}
                                <ellipse cx="120" cy="260" rx="60" ry="10" fill="#000" opacity="0.2" filter="url(#cuteEyeGlow)" />

                                {/* Arms (Behind) */}
                                <path d="M50 160 Q 30 180 40 220" stroke="url(#bodyGradient)" strokeWidth="25" strokeLinecap="round" />
                                <path d="M190 160 Q 210 180 200 220" stroke="url(#bodyGradient)" strokeWidth="25" strokeLinecap="round" />

                                {/* Torso */}
                                <path d="M70 160 C 70 140, 170 140, 170 160 C 170 200, 160 220, 120 240 C 80 220, 70 200, 70 160 Z" fill="url(#bodyGradient)" />
                                <path d="M75 180 Q 120 190 165 180" stroke="#94a3b8" strokeWidth="1" opacity="0.5" fill="none" />

                                {/* Head - Main Shape */}
                                <rect x="50" y="40" width="140" height="100" rx="40" fill="url(#bodyGradient)" />

                                {/* Face Screen */}
                                <rect x="65" y="55" width="110" height="70" rx="20" fill="url(#screenGradient)" stroke="#334155" strokeWidth="2" />

                                {/* Ears */}
                                <path d="M45 70 L 50 70 L 50 110 L 45 110 C 35 110, 35 70, 45 70 Z" fill="url(#bodyGradient)" />
                                <path d="M195 70 L 190 70 L 190 110 L 195 110 C 205 110, 205 70, 195 70 Z" fill="url(#bodyGradient)" />

                                {/* Antenna / Top Detail */}
                                <path d="M100 40 L 105 30 L 135 30 L 140 40" fill="url(#bodyGradient)" />

                                {/* Eyes - Cute Curves */}
                                <path d="M85 85 Q 95 75 105 85" stroke="#38bdf8" strokeWidth="6" strokeLinecap="round" filter="url(#cuteEyeGlow)" />
                                <path d="M135 85 Q 145 75 155 85" stroke="#38bdf8" strokeWidth="6" strokeLinecap="round" filter="url(#cuteEyeGlow)" />

                                {/* Mouth - Small Smile */}
                                <path d="M115 105 Q 120 110 125 105" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" opacity="0.8" />


                                {/* --- SCANNING EFFECT (The "older design" requested) --- */}

                                {/* Wireframe Grid Overlay (Faint) */}
                                <path d="M120 40 V 140" stroke="#3b82f6" strokeWidth="0.5" opacity="0.2" />
                                <path d="M50 90 H 190" stroke="#3b82f6" strokeWidth="0.5" opacity="0.2" />
                                <path d="M85 55 V 125" stroke="#3b82f6" strokeWidth="0.5" opacity="0.1" />
                                <path d="M155 55 V 125" stroke="#3b82f6" strokeWidth="0.5" opacity="0.1" />

                                {/* Scanning Laser Beam */}
                                <rect x="30" y="20" width="180" height="2" fill="#3b82f6" opacity="0.8" filter="url(#cuteEyeGlow)">
                                    <animate attributeName="y" values="20; 260; 20" dur="3s" repeatCount="indefinite" />
                                    <animate attributeName="opacity" values="0; 1; 0" dur="3s" repeatCount="indefinite" />
                                </rect>

                                {/* Digital Particles following the scan */}
                                <circle cx="0" cy="0" r="2" fill="#60a5fa" opacity="0">
                                    <animate attributeName="cy" values="20; 260; 20" dur="3s" repeatCount="indefinite" />
                                    <animate attributeName="cx" values="40; 40; 40" dur="3s" repeatCount="indefinite" />
                                    <animate attributeName="opacity" values="0; 1; 0" dur="3s" repeatCount="indefinite" />
                                </circle>
                                <circle cx="0" cy="0" r="2" fill="#60a5fa" opacity="0">
                                    <animate attributeName="cy" values="20; 260; 20" dur="3s" repeatCount="indefinite" />
                                    <animate attributeName="cx" values="200; 200; 200" dur="3s" repeatCount="indefinite" />
                                    <animate attributeName="opacity" values="0; 1; 0" dur="3s" repeatCount="indefinite" />
                                </circle>
                            </g>
                        </svg>
                    </div>
                    <div className="float-card float-active">
                        <div className="status-dot"></div>
                        <div>
                            <div style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase' }}>{dashboardData.status_label}</div>
                            <span style={{ fontWeight: 700 }}>{dashboardData.status}</span>
                        </div>
                    </div>

                    <div style={{ marginTop: '1rem' }}>
                        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', color: '#4ade80', fontSize: '0.8rem', marginBottom: '0.5rem' }}>
                            <div style={{ width: '6px', height: '6px', background: '#4ade80', borderRadius: '50%' }}></div>
                            <span className="status-text">{dashboardData.system_status}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', fontFamily: 'monospace', color: '#94a3b8', marginBottom: '0.2rem' }}>
                            <span>{dashboardData.progress_label}</span>
                            <span>{dashboardData.progress_value}</span>
                        </div>
                        <div className="progress-bar">
                            <div className="progress-fill"></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Hero;
