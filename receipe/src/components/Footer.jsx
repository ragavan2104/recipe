import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8 mt-auto">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center">
                    <p className="text-sm mb-2">
                        &copy; {new Date().getFullYear()} Recipe App. All rights reserved.
                    </p>
                    <p className="text-xs text-gray-400">
                        Made with ❤️ by Ragavan
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;