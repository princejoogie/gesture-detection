import React from "react";
import { Container } from ".";

const Footer: React.FC = () => {
  return (
    <footer className="py-10 border-t border-gray-900">
      <Container>
        <div>
          <h4 className="font-semibold text-center">Taena mo sir luigi</h4>
        </div>

        <p className="text-sm text-center text-gray-400">
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
