"use client";

import clsx from "clsx";
import { Bell, Menu, Search, User, X } from "lucide-react";
import { useEffect, useState } from "react";

interface HeaderProps {
    showClock?: boolean;
    showNav?: boolean;
}

export default function Header({ showClock = false, showNav = false }: HeaderProps) {
    const [now, setNow] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (!showClock) return;
        const updateTime = () => {
            const time = new Date().toLocaleTimeString("pt-BR", {
                hour: "2-digit",
                minute: "2-digit",
            });
            setNow(time);
        };
        updateTime();
        const interval = setInterval(updateTime, 60000);
        return () => clearInterval(interval);
    }, [showClock]);

    return (
        <header className="w-full text-white relative z-50">
            <div className="flex justify-between items-center py-6 max-w-[1920px] mx-auto px-6 sm:px-10 md:px-[64px]">

                <span className="text-[28px] sm:text-[32px] md:text-[40px] font-normal leading-none bg-gradient-to-r from-[#FFA634] to-[#FF267A] bg-clip-text text-transparent font-sans">
                    Kenai
                </span>


                {showClock && (
                    <span className="hidden md:block text-[24px] sm:text-[30px] md:text-[36px] font-light">
                        {now}
                    </span>
                )}


                {showNav && (
                    <nav className="hidden lg:flex gap-[64px] items-center text-sm">
                        <Search className="w-6 h-6 cursor-pointer" aria-label="Buscar" />
                        <a href="#" className="font-semibold text-[24px] hover:underline">Início</a>
                        <a href="#" className="font-semibold text-[24px] hover:underline">Minha lista</a>
                        <Bell className="w-6 h-6 cursor-pointer" aria-label="Notificações" />
                        <User className="w-6 h-6 cursor-pointer" aria-label="Perfil" />
                    </nav>
                )}


                {showNav && (
                    <button
                        className="block lg:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Abrir menu"
                    >
                        {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                    </button>
                )}
            </div>

            <div
                className={clsx(
                    "fixed inset-0 bg-black/90 backdrop-blur-md transition-transform duration-300 lg:hidden z-40",
                    isMenuOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <div className="flex justify-between items-center px-6 pt-6 mb-12">
                    <span className="text-[28px] font-bold bg-gradient-to-r from-[#FFA634] to-[#FF267A] bg-clip-text text-transparent">Kenai</span>
                    <button onClick={() => setIsMenuOpen(false)} aria-label="Fechar menu">
                        <X className="w-8 h-8" />
                    </button>
                </div>

                <nav className="flex flex-col gap-8 px-6 text-white text-[24px] font-semibold items-center text-center">
                    <a href="#">Início</a>
                    <a href="#">Minha lista</a>

                    <div className="flex gap-6 pt-4">
                        <Search className="w-8 h-8" />
                        <Bell className="w-8 h-8" />
                        <User className="w-8 h-8" />
                    </div>
                </nav>

            </div>

        </header>
    );
}
