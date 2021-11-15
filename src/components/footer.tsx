import React from "react";
import { Container } from ".";

const Footer: React.FC = () => {
  return (
    <footer className="py-10 border-t border-gray-900">
      <Container>
        <div>
          <h4 className="block mb-2 font-semibold text-center">
            VAR (Video Annotations and Gesture Recognition) Gesture Recognition
          </h4>
          <h4 className="block text-center">CPECGM | CPE-181</h4>
        </div>

        <p className="mt-4 text-xs text-center text-gray-400">
          Made with 💖 and ☕ by{" "}
          <a
            href="https://princecaarlo.tech/"
            className="text-blue-500"
            target="_blank"
          >
            Prince Carlo Juguilon{" "}
          </a>
          | &copy; 2021
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
