"use client";

import React, { useState, useMemo } from "react";

import { Calculator, DollarSign, Clock, Zap } from "lucide-react";

export const ROICalculator = () => {
    const [teamSize, setTeamSize] = useState(5);
    const [hourlyRate, setHourlyRate] = useState(50);
    const [manualHours, setManualHours] = useState(10);

    const results = useMemo(() => {
        const weeklyHoursSaved = manualHours * teamSize * 0.7;
        const annualHoursSaved = weeklyHoursSaved * 52;
        const annualSavings = annualHoursSaved * hourlyRate;
        const efficiencyBoost = (weeklyHoursSaved / (teamSize * 40)) * 100;

        return {
            annualSavings: Math.round(annualSavings),
            hoursSaved: Math.round(annualHoursSaved),
            efficiencyBoost: Math.round(efficiencyBoost),
        };
    }, [teamSize, hourlyRate, manualHours]);

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0,
        }).format(value);
    };

    return (
        <section id="roi-calculator" className="py-24 bg-t-background px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-t-accent font-semibold tracking-wider uppercase text-sm mb-4">ROI Calculator</h2>
                    <p className="text-3xl md:text-5xl font-bold text-t-text-primary tracking-tight">
                        See Your Potential Savings
                    </p>
                    <p className="mt-4 text-t-text-muted max-w-2xl mx-auto">
                        Estimate how much time and money your team can save by automating repetitive workflows with custom AI solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Inputs */}
                    <div className="lg:col-span-5 space-y-8 bg-t-secondary p-8 rounded-[32px] border border-card-border shadow-sm">
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="text-t-text-primary font-medium">Team Size</label>
                                <span className="text-t-accent font-bold">{teamSize} Employees</span>
                            </div>
                            <input
                                type="range"
                                min="1"
                                max="50"
                                value={teamSize}
                                onChange={(e) => setTeamSize(parseInt(e.target.value))}
                                className="w-full h-2 bg-card-border rounded-lg appearance-none cursor-pointer accent-t-accent"
                            />
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="text-t-text-primary font-medium">Avg. Hourly Rate ($)</label>
                                <span className="text-t-accent font-bold">${hourlyRate}/hr</span>
                            </div>
                            <input
                                type="range"
                                min="20"
                                max="200"
                                step="5"
                                value={hourlyRate}
                                onChange={(e) => setHourlyRate(parseInt(e.target.value))}
                                className="w-full h-2 bg-card-border rounded-lg appearance-none cursor-pointer accent-t-accent"
                            />
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="text-t-text-primary font-medium">Manual Hours / Week (per person)</label>
                                <span className="text-t-accent font-bold">{manualHours} hrs</span>
                            </div>
                            <input
                                type="range"
                                min="2"
                                max="30"
                                value={manualHours}
                                onChange={(e) => setManualHours(parseInt(e.target.value))}
                                className="w-full h-2 bg-card-border rounded-lg appearance-none cursor-pointer accent-t-accent"
                            />
                        </div>
                    </div>

                    {/* Results */}
                    <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="md:col-span-2 bg-gradient-to-br from-t-accent to-t-accent/90 rounded-[32px] p-8 text-white relative overflow-hidden group shadow-2xl">
                            <div className="relative z-10">
                                <p className="text-white/90 font-bold uppercase tracking-widest text-sm mb-2">Estimated Annual Savings</p>
                                <h3 className="text-5xl md:text-7xl font-bold mb-4 text-white">{formatCurrency(results.annualSavings)}</h3>
                                <div className="flex items-center gap-2 text-white/80">
                                    <Calculator className="w-5 h-5" />
                                    <span>Based on 70% automation efficiency</span>
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform">
                                <DollarSign size={160} />
                            </div>
                        </div>

                        <div className="bg-t-secondary/50 rounded-[32px] p-8 border border-card-border">
                            <div className="p-3 bg-t-accent/10 rounded-2xl text-t-accent w-fit mb-4">
                                <Clock className="w-6 h-6" />
                            </div>
                            <p className="text-t-text-muted text-sm font-bold uppercase tracking-widest mb-1">Hours Reclaimed</p>
                            <h4 className="text-3xl font-bold text-t-text-primary">{results.hoursSaved.toLocaleString()} hrs / yr</h4>
                        </div>

                        <div className="bg-t-secondary/50 rounded-[32px] p-8 border border-card-border">
                            <div className="p-3 bg-t-accent/10 rounded-2xl text-t-accent w-fit mb-4">
                                <Zap className="w-6 h-6" />
                            </div>
                            <p className="text-t-text-muted text-sm font-bold uppercase tracking-widest mb-1">Efficiency Boost</p>
                            <h4 className="text-3xl font-bold text-t-text-primary">+{results.efficiencyBoost}% overall</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
